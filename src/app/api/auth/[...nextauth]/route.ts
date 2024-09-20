import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  ICredentials,
  IAuthorize,
  AuthenticatedUser,
  IToken,
} from "@/interfaces/next-auth.d";

//TODO => Solucionar este quilombo en typescript y cambiar los any a los correctos
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "prueba@todosgamers.com",
        },
        password: { label: "Password:", type: "password" },
      },
      async authorize(
        credentials: ICredentials | undefined
      ): Promise<IAuthorize | null> {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const response = await res.json();

        if (res.status !== 201 && res.status !== 200) throw response;

        return {
          user: {
            id: response.user.id,
            email: response.user.email,
          },
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          expiresIn: Date.now() + (response.expiresIn || 0) * 1000,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: IToken; user: IAuthorize }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.expiresIn = user.expiresIn;
        token.user = user.user;
      }

      if (Date.now() < (token.expiresIn || 0)) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }: { session: IToken; token: IToken }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.expiresIn = token.expiresIn;
      session.refreshToken = token.refreshToken;
      session.error = token.error;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

async function refreshAccessToken(token: IToken) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          refreshToken: token.refreshToken,
        }),
      }
    );
    const refreshedTokens = await response.json();
    if (!response.ok) {
      throw refreshedTokens;
    }
    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      expiresIn: refreshedTokens.expiresIn,
      //? debería de enviar un refresh, solo en el login
      refreshToken: refreshedTokens.refreshToken || token.refreshToken,
    };
  } catch (error) {
    console.log("Error refreshing access token", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export { handler as GET, handler as POST };

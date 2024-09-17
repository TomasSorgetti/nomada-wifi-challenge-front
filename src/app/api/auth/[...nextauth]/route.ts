import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
      async authorize(credentials) {
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

        if (res.status !== 200) throw response;

        return {
          user: response.user,
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          accessTokenExpires: Date.now() + response.accessTokenExpires,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        console.log("NEXT API JWT", account);
        console.log("NEXT API JWT", user);
        return { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };

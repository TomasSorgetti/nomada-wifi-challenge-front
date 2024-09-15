import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";
import localFont from "next/font/local";

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "400 600 700",
});
export const metadata: Metadata = {
  title: "Nómada Wifi - TG",
  description: "NextJs Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.variable}`}>
        <AppRouterCacheProvider>
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

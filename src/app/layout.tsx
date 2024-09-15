import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";

// Roboto no acepta el weight 600 desde next/font/google

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
      <body>
        <AppRouterCacheProvider>
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

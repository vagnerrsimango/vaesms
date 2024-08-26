import type { Metadata } from "next";

import "./globals.css";
import { Outfit, Nunito_Sans } from "next/font/google";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VAESMS",
  description: "Sistema de envio de mensagens pertencente à VAE-IO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={nunito.className}>
      <header>
        <Navbar />
      </header>
      {children}
    </body>
  </html>
  
  );
}

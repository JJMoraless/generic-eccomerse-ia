import type { Metadata } from "next";
import { inter } from "@/config/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tienda generica... La mejor tienda generica",
  description: "Una tienda virtual de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}

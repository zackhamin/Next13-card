"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CardContextProvider } from "@/context/cardContext";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CardContextProvider>
        <body className={inter.className}>{children}</body>
      </CardContextProvider>
    </html>
  );
}

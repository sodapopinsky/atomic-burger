import type { Metadata } from "next";

import { Jost } from 'next/font/google'
import "./globals.css";


const jost = Jost({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Atomic Burger",
  description: "Atomic Burger is a fast casual restaurant chain that specializes in gourmet burgers, milkshakes, and fries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}

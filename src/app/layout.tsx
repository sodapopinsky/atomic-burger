// app/layout.tsx
import type { Metadata } from "next";
import { Jost } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"
const jost = Jost({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Atomic Burger",
  description: "Atomic Burger is a fast casual restaurant chain that specializes in gourmet burgers, milkshakes, and fries.",
  icons: {
    icon: [
      { url: '/favicons/icon.png', type: 'image/png' },
      { url: '/favicons/favicon.ico' }
    ],
    apple: [
      { url: '/favicons/apple-icon.png' }
    ]
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} relative`}>
        <div className="overflow-x-hidden">
          <main className="min-h-screen relative w-full">
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
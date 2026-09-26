// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sourav Ram Mani | Software Engineer",
  description: "Portfolio of Sourav Ram Mani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add suppressHydrationWarning right here */}
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
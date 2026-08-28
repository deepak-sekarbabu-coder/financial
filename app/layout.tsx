import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Financial Advisory | Plan Today, Prosper Tomorrow",
  description:
    "Comprehensive financial planning and advisory services. Goal-based planning, wealth growth, protection, and trust-driven guidance for you and your family.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}

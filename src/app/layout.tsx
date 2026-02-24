import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PABO | Birthday Experience 2026",
  description: "A premium cinematic tribute page for a legend. Happy Birthday Pabo!",
  keywords: ["birthday", "pabo", "celebration", "tribute"],
  authors: [{ name: "Friends of Pabo" }],
  openGraph: {
    title: "PABO | Birthday Experience 2026",
    description: "A premium cinematic tribute page for a legend.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

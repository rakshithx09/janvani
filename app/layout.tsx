import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "janvani",
  description: "an issue reporting website made by team 410 Gone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-[80%] h-[3rem] mt-[3rem] mx-auto border-black border-2"></nav>
        <nav className="h-[60%] w-[3rem]   border-black border-2 fixed left-[4rem] top-1/2 transform -translate-y-1/2 "></nav>
        {children}</body>
    </html>
  );
}

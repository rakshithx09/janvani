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
            <body
                className={inter.className}
                style={{
                    background:
                        "linear-gradient(to right, rgba(74, 179, 247, 0.3), rgba(130, 204, 255, 0.3), rgba(184, 195, 201, 0.3))",
                    paddingBottom: "3rem",
                }}
            >
                    {children}
            </body>
        </html>
    );
}

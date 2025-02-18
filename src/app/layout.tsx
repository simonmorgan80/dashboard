import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/app/ui/header';
import StatusBar from "./ui/status-bar";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dashboard",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} antialiased overflow-y-scroll`}
            >
                <Header />
                <StatusBar />
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import StatusBar from "@/app/ui/status-bar";
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
            <body className={`${inter.variable} antialiased overflow-y-scroll`} >
                <div className="grid min-h-full grid-rows-[auto_1fr_auto] grid-cols-1">
                    <div className="xl:sticky xl:top-0 xl:left-0 xl:w-full">
                        <Header />
                        <StatusBar />
                    </div>
                    <div>
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

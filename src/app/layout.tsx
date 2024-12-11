import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Paggo Case",
    description: "Projeto de resolução para paggo case",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className="antialiased">{children}</body>
        </html>
    );
}

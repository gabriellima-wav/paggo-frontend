"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
    return (
        <div className="min-h-screen bg-blue-950 text-white flex flex-col">
            {/* Usando o Header */}
            <Header />

            {/* Conteúdo Principal */}
            <main className="flex-1 flex items-center justify-center">
                <h2 className="text-3xl font-semibold">
                    Bem-vindo ao Dashboard
                </h2>
            </main>

            <Footer />
        </div>
    );
}

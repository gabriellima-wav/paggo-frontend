"use client"; // Diretiva para usar o React Client

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        // Redireciona para a página de login
        router.push("/login");
    }, [router]);

    return null; // A página inicial não precisa renderizar nada
}

"use client"; // Diretiva para usar o React Client

import { useState } from "react";
import { useRouter } from "next/navigation";
import TestConnection from "@/components/TestConnection";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        // Simulando a verificação de login (substitua com sua lógica real)
        if (email && password) {
            console.log("Email:", email);
            console.log("Password:", password);
            router.push("/home");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-950">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-semibold mb-6 text-center text-blue-950">
                    Login
                </h1>
                {/* Adicione o componente de teste de conexão */}
                <TestConnection />
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-4"
                >
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950"
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleLogin}
                            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Não tem conta?{" "}
                        <button
                            onClick={() => router.push("/register")}
                            className="text-blue-500 hover:underline"
                        >
                            Clique aqui para criar
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

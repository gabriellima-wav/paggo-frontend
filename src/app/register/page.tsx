"use client"; // Diretiva para usar o React Client

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleRegister = () => {
        // Verifica se as senhas coincidem
        if (password !== confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        // Lógica de registro (simulada)
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        // Redireciona para a tela de login após o registro
        router.push("/home");
    };

    const handleGoToLogin = () => {
        router.push("/login"); // Redireciona para a tela de login
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-950">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-semibold mb-6 text-center text-blue-950">
                    Criar Conta
                </h1>

                <hr className="my-5 border-gray-300" />

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-4"
                >
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950"
                        />
                    </div>
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
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirmar Senha"
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-950"
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm mt-2">{error}</div>
                    )}
                    <div>
                        <button
                            onClick={handleRegister}
                            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Registrar
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Tem uma conta?{" "}
                        <button
                            onClick={handleGoToLogin}
                            className="text-blue-500 hover:text-blue-700"
                        >
                            Conecte-se
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

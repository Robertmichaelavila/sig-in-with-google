"use client"

import { useRouter } from "next/navigation"

export default function HomePage() {
    const router = useRouter()

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Meu Site</h1>
            <p className="text-lg mb-6 max-w-lg text-center">
                Esta é a página inicial de exemplo. Aqui você pode apresentar uma breve descrição
                sobre o seu projeto, produto ou serviço.
            </p>
            <button
                onClick={() => router.push("/auth/signin")}
                className="px-6 py-2 rounded-2xl bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
            >
                Saiba Mais
            </button>
        </main>
    )
}

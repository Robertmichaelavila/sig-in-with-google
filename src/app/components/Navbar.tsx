"use client";

import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-xl font-bold">Meu App</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {session ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">
                                    Olá, {session.user?.name}
                                </span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={session.user?.image || ""}
                                    alt="User profile"
                                />
                                <button
                                    onClick={() => signOut()}
                                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-gray-800"
                                >
                                    Sair
                                </button>
                            </div>
                        ) : (
                            <a
                                href="/auth/signin"
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
                            >
                                Entrar
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
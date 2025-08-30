import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth"; // Corrigida a importação

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Welcome, {session.user?.name}!
                        </h1>
                        <p className="text-gray-600">
                            You are authenticated with: {session.user?.email}
                        </p>
                        <pre className="mt-4 p-4 bg-gray-200 rounded overflow-auto">
                            {JSON.stringify(session, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
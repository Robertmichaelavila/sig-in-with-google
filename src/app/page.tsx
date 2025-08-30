"use client"

import { useRouter } from "next/navigation"
import InfoCard from "./components/Cards"

export default function HomePage() {
    const router = useRouter()

    return (
        <div className="grid grid-cols-6 grid-rows-6 gap-5">
            <div className="flex col-span-6 row-span-1 items-center justify-center">
                <h1 className="text-3xl font-bold pt-8">Application login with google</h1>
            </div>
            <div className="flex col-span-3 row-span-4 items-center justify-end col-start-1 row-start-2 px-3">
                <InfoCard 
                    buttonLabel="Saiba mais" 
                    text="Advanced protection against unauthorized access.Use your Google account to access the system quickly and securely!" 
                    icon="/icons8-cadeado-100.png"
                />
            </div>
            <div className="flex col-span-3 row-span-4 items-center justify-start col-start-4 row-start-2 px-3">
                <InfoCard
                    buttonLabel="Saiba mais"
                    text="When you authenticate with Google, extra layers of verification that you're already familiar with are automatically activated."
                    icon="/icons8-verificar-100.png"
                />
            </div>
            <div className="col-span-6 col-start-1 row-start-6">
                <p className="text-xl text-center py-8">
                    Simple project that implements an authenticated login with the Google API
                </p>
            </div>
        </div>
    )
}

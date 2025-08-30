import React from "react";
import Image from "next/image";

type Props = {
    icon: string;         
    text: string;                    // texto curto do card
    buttonLabel: string;             // rótulo do botão
    onClick?: () => void;            // ação do botão
};

export default function InfoCard({ icon, text, buttonLabel, onClick }: Props) {
    return (
        <div
            className="
        w-full max-w-lg
        rounded-2xl border border-gray-200
        bg-white shadow-lg
        p-4 sm:p-6
        flex flex-col items-center gap-10
      "
        >
            <div
                className="flex items-center justify-center"
                aria-hidden
            >
                
                <Image alt="Ícone" src={icon} width={70} height={70}/>
            </div>

            <p className="text-lg text-gray-600 text-center">{text}</p>

            <button
                type="button"
                onClick={onClick}
                className="
          mt-2 inline-flex items-center justify-center
          rounded-xl px-4 py-2
          text-lg font-medium
          bg-[#009DBB] text-white
          hover:bg-gray-800 active:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-gray-300
          transition
        "
            >
                {buttonLabel}
            </button>
        </div>
    );
}

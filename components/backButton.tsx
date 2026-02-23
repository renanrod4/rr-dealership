"use client"
import { useRouter } from 'next/navigation'
import { FaChevronLeft } from "react-icons/fa6"

export default function BackButton() {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.back()}
            className="back-button"
        >
            <FaChevronLeft size={14} />
            <span>VOLTAR</span>
        </button>
    )
}

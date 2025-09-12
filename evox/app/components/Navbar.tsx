"use client";

import Image from "next/image";
import Link from "next/link";
import { whatsapp } from "../utils/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar(){
    // MENU
    const [isOpen, setIsOpen] = useState(false)

    // IDENTIFICAR A HOME
    const pathname = usePathname();
    const isHome = pathname === "/";

    // SE O USUÁRIO SCROLLAR
    const [isScroll, setIsScroll] = useState(false);
    const handleScroll = () => {
        const scrolled = window.scrollY;
        setIsScroll(scrolled > 200);
    }

    useEffect(() =>{
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className={`text-white z-10 w-full transition-400 ease-in-out duration-400 top-0
            ${ isHome ? isScroll ? 'bg-neutral-950/80 fixed' : 'bg-transparent fixed border-b-1 border-gray-100' : 'sticky bg-black' }`}
        >
            <div className="w_content">
                <div className="wrapper flex justify-between items-center w-full h-20">
                    <div className="logo">
                        <Link href="/">
                            <Image src="/assets/images/logo_evox.webp" width={120} height={27} alt="Logo evox"/>
                        </Link>
                    </div>
                    <ul className={`hidden items-center gap-10 text-sm md:flex md:w-auto ${isOpen ? "bg-red-500 fixed top-0 left-0 items-center justify-center flex-col w-[90%]! h-[100dvh] flex!" : ""}`} id="navbar-default">
                        <li className="group relative">
                            <Link className="relative pb-8" href="/empresa">Empresa
                            <span className="line w-0 left-1/2 -translate-x-1/2 h-1 bg-(--color_secondary) block absolute bottom-0 transition-all duration-300 pointer-events-none ease-in-out group-hover:w-20"></span>
                            
                            </Link>
                        </li>
                        <li>
                            <div className="group relative flex items-center gap-1 py-6 transition-all">
                                <p className="flex items-center gap-2">
                                    <span>Serviços</span>
                                    <svg 
                                        className="transition-all duration-200 rotate-0 group-hover:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </p>

                                {/* DROPDOWN */}
                                <div className={`${isOpen ? "relative top-inherit right-inherit" : "absolute top-16 left-0"} text-black  hidden w-auto flex-col gap-1 bg-white rounded-sm py-3 px-3 shadow-md group-hover:flex`}>
                                    <Link 
                                        className="flex items-center gap-2 cursor-pointer py-1 px-1 text-neutral-600 hover:text-black transition-all duration-200 ease-in-out" 
                                        href="/servicos/iluminacao-inteligente"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                        </svg>
                                        <span className="whitespace-nowrap">
                                            Iluminação inteligente
                                        </span>
                                    </Link>
                                    <Link 
                                        className="flex items-center gap-2 cursor-pointer py-1 px-1 text-neutral-600 hover:text-black transition-all duration-200 ease-in-out" 
                                        href="/servicos/seguranca-e-monitoranto"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                        <span className="whitespace-nowrap">
                                            Segurança e monitoramento
                                        </span>
                                    </Link>
                                    <Link 
                                        className="flex items-center gap-2 cursor-pointer py-1 px-1 text-neutral-600 hover:text-black transition-all duration-200 ease-in-out" 
                                        href="/servicos/energia-sustentavel"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                        </svg>
                                        <span className="whitespace-nowrap">
                                            Energia sustentável
                                        </span>
                                    </Link>
                                </div>

                            </div>

                        </li>
                        <li>
                            <Link href="/contato">Contato</Link>
                        </li>
                    </ul>
                    <Link 
                        href={whatsapp}
                        target="_blank" 
                        className="rounded-sm items-center gap-1 text-sm inline-flex font-semibold bg-white text-black pl-5 pr-5 pt-3 pb-3"
                    >
                        <span>Realizar orçamento</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>

                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>  
    )
}
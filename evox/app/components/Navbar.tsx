"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, whatsapp } from "../utils/constants";
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

    // PARA FECHAR O MENU APÓS A TROCA DE ROTA
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);


    useEffect(() =>{
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className={`text-white z-10 w-full transition-400 ease-in-out duration-400 top-0 border-b-1 border-stone-100/20
            ${ isHome ? isScroll ? 'bg-neutral-950/90 fixed md:bg-neutral-950/80' : 'bg-neutral-950/90 fixed md:bg-transparent' : 'sticky bg-neutral-950/100' }`}
        >
            <div className="w_content">
                <div className="wrapper flex justify-between items-center w-full h-20">
                    <div className="logo">
                        <Link href="/" aria-label="Ir para a página inicial">
                            <Image src="/assets/images/logo_evox.webp" width={120} height={27} alt={`Logo - ${SITE_NAME}`}/>
                        </Link>
                    </div>
                    <ul 
                        className={`
                            ${isOpen ? 'flex slide-down' : 'hidden'} 
                            flex-col w-full absolute top-20 left-0 bg-neutral-950/90 px-6 py-10 gap-5 space-y-4 md:flex md:flex-row md:w-auto md:bg-transparent md:space-y-0 md:static md:items-center text-sm md:gap-10
                        `}
                    >
                        <li className="group relative">
                            <Link 
                                className="relative pb-3 md:pb-8" 
                                href="/empresa"
                                aria-label="Empresa"
                            >
                                Empresa
                                <span 
                                    className={`line left-1/2 -translate-x-1/2 h-1 bg-(--color_secondary) block absolute bottom-0 transition-all duration-300 pointer-events-none ease-in-out ${pathname == '/empresa' ? 'w-full' : 'w-0'} group-hover:w-20`}
                                ></span>
                            </Link>
                        </li>
                        <li>
                            <div className="group relative flex flex-col gap-1 py-0 transition-all md:flex-row md:items-center md:py-8">
                                <p className="relative group flex items-center gap-2">
                                    <span>Serviços</span>
                                    <svg 
                                        className="transition-all duration-200 rotate-0 group-hover:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </p>
                                <span 
                                    className={`line left-1/2 -translate-x-1/2 h-1 bg-(--color_secondary) hidden absolute bottom-0 transition-all duration-300   pointer-events-none ease-in-out ${pathname.includes("servicos") ? 'w-20' : 'w-0'} group-hover:w-20 md:block`}
                                ></span>

                                {/* DROPDOWN */}
                                <div className={`relative top-0 left-0 z-1 flex w-auto flex-col gap-1 bg-transparent rounded-none py-3 px-0 shadow-md group-hover:flex md:top-16 md:absolute md:hidden md:bg-white md:rounded-sm md:px-3 md:py-3 `}>
                                    <Link 
                                        className={`flex items-center gap-2 cursor-pointer py-1 px-1 ${
                                            pathname.includes("iluminacao-inteligente") 
                                            ? 'text-(--color_secondary) font-semibold md:text-(--color_primary)' 
                                            : 'text-white md:text-neutral-600'
                                        } hover:text-(--color_primary) transition-all duration-200 ease-in-out`}
                                        href="/servicos/iluminacao-inteligente"
                                        aria-label="Iluminação inteligente"
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                        </svg>
                                        <span className='text-nowrap'>Iluminação inteligente</span>
                                    </Link>

                                    <Link 
                                        className={`flex items-center gap-2 cursor-pointer py-1 px-1 ${
                                            pathname.includes("seguranca-e-monitoramento") 
                                            ? 'text-(--color_secondary) font-semibold md:text-(--color_primary)' 
                                            : 'text-white md:text-neutral-600'
                                        } hover:text-(--color_primary) transition-all duration-200 ease-in-out`} 
                                        href="/servicos/seguranca-e-monitoramento"
                                        aria-label="Segurança e monitoramento"
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                        <span className="text-nowrap">Segurança e monitoramento</span>
                                    </Link>

                                    <Link 
                                        className={`flex items-center gap-2 cursor-pointer py-1 px-1 ${
                                            pathname.includes("energia-sustentavel") 
                                            ? 'text-(--color_secondary) font-semibold md:text-(--color_primary)' 
                                            : 'text-white md:text-neutral-600'
                                        } hover:text-(--color_primary) transition-all duration-200 ease-in-out`} 
                                        href="/servicos/energia-sustentavel"
                                        aria-label="Energia sustentável"
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                        </svg>
                                        <span className="text-nowrap">Energia sustentável</span>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="relative group">
                            <Link 
                                className="relative pb-3 md:pb-8" 
                                href="/contato"
                                aria-label="Contato"
                            >
                                Contato  
                                <span 
                                    className={`line left-1/2 -translate-x-1/2 h-1 bg-(--color_secondary) block absolute bottom-0 transition-all duration-300 pointer-events-none ease-in-out ${pathname == '/contato' ? 'w-full' : 'w-0'} group-hover:w-20`}
                                ></span>
                            </Link>
                        </li>
                    </ul>
                    
                    <Link 
                        href={whatsapp}
                        target="_blank" 
                        arial-label="Fale com especialista"
                        className="relative hidden md:inline-flex items-center gap-2 rounded-sm text-sm font-semibold bg-white text-black pl-5 pr-5 pt-3 pb-3 overflow-hidden group"
                    >
                        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Fale com especialista</span>
                        <svg className="z-10 relative size-4 transition-colors duration-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        <span
                            className="absolute left-0 top-0 h-full w-0 bg-green-500 transition-all duration-500 ease-out group-hover:w-full"
                        />
                    </Link>

                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        type="button" 
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>  
    )
}
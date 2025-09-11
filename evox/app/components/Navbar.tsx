import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="text-white z-10 fixed w-full bg-transparent border-b-1 border-gray-100 ">
            <div className="w_content">
                <div className="wrapper flex justify-between items-center w-full h-20">
                    <div className="logo">
                        <Link href="/">
                            <Image src="/assets/images/logo_evox.webp" width={120} height={27} alt="Logo evox"/>
                        </Link>
                    </div>
                    <ul className="flex items-center gap-10 text-sm">
                        <li>
                            <Link href="/empresa">Empresa</Link>
                        </li>
                        <li>
                            <Link href="/servicos">Serviços</Link>
                        </li>
                        <li>
                            <Link href="/contato">Contato</Link>
                        </li>
                    </ul>
                    <a href="" className="items-center gap-1 text-sm inline-flex font-semibold btn_quote bg-white text-black pl-5 pr-5 pt-3 pb-3">
                        <span>Realizar orçamento</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>  
    )
}
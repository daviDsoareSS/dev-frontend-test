"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

interface BreadcrumbProps {
    title_page: string
    banner?: string
}

export default function Breadcrumb ({ title_page, banner }:BreadcrumbProps){

    const pathname = usePathname();

    return(
        <div 
            className={`flex flex-col gap-4 w-full h-80 bg-cover bg-center`}
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="w_content flex h-full justify-center items-center">
                <div className="text-white text-center flex items-center flex-col gap-3">
                    <h1 className="text-4xl text-shadow-lg">{title_page}</h1>
                    <ul className="flex gap-1 text-sm text-shadow-lg">
                        <li className="font-medium">
                            <Link 
                                href={ pathname.includes('servicos/') ? '/servicos' : '/' }
                            >
                                { pathname.includes('servicos/') ? 'Serviços' : 'Home' }
                            </Link>
                        </li>
                        <span>/</span>
                        <li>
                            <p className="text-stone-300">
                                {title_page}
                            </p>
                        </li>  
                    </ul>
                </div>
            </div>
        </div>
    )
}
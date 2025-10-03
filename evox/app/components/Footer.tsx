"use client";

import Image from "next/image"
import Link from "next/link"
import { email, github, linkedin, phone, SITE_NAME } from "../utils/constants"
import { usePathname } from "next/navigation"

export default function Footer(){
    const pathname = usePathname();

    return (
        <footer className="bg-slate-800 py-10 md:py-5">
            <div className="w_content p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-start gap-20">
                <div className="mb-6 md:mb-0">
                    <div className="flex flex-col items-start">
                        <Link href="/" className="flex" aria-label="Ir para a página inicial">
                            <Image className="mb-5" src="/assets/images/logo_evox.webp" width={150} height={27} alt={`Logo - ${SITE_NAME}`}/>
                        </Link>
                        <p className="w-full md:w-100 text-gray-500 dark:text-gray-400 font-medium">
                            A Evox é especializada em automação residencial, transformando casas em lares inteligentes. Com tecnologia de ponta e soluções personalizadas, oferecemos controle de iluminação, climatização, segurança e entretenimento na palma da sua mão.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Links rápidos</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="/empresa" className={` ${pathname === '/empresa' ? 'underline' : ''} hover:underline`}>Empresa</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/servicos" className={` ${pathname.includes('servicos') ? 'underline' : ''} hover:underline`}>Serviços</Link>
                            </li>
                            <li>
                                <Link href="/contato" className={` ${pathname === '/contato' ? 'underline' : ''} hover:underline`}>Contato</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Serviços</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link 
                                    href="/servicos/iluminacao-inteligente" 
                                    className={` ${pathname.includes('iluminacao-inteligente') ? 'underline' : ''} hover:underline`}
                                >
                                    Iluminação inteligente
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link 
                                    href="/servicos/seguranca-e-monitoramento" 
                                    className={` ${pathname.includes('seguranca-e-monitoramento') ? 'underline' : ''} hover:underline`}
                                >
                                    Segurança e monitoramento
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link 
                                    href="/servicos/energia-sustentavel" 
                                    className={` ${pathname.includes('energia-sustentavel') ? 'underline' : ''} hover:underline`}
                                >
                                    Energia sustentável
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © Copyright 2025. Todos os direitos reservados para <Link className="font-bold text-white" href="/">{SITE_NAME}</Link>
                </span>
                <div className="flex items-center mt-4 gap-4 sm:justify-center sm:mt-0">
                    {/* TELEFONE */}
                    <Link 
                        href="tel:11949842322" 
                        target="_blank" 
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        aria-label={`Ligar para ${phone}`}
                    >
                         <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                        </svg>
                    </Link>
                    
                    {/* EMAIL */}
                    <Link 
                        href={`mailto:${email}`} 
                        target="_blank" 
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        aria-label={`Enviar e-mail para ${email}`}
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                        <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                        </svg>
                    </Link>

                    {/* LINKEDIN */}
                    <Link 
                        href={linkedin}
                        target="_blank" 
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        aria-label="Linkedin"
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                        </svg>
                    </Link>

                    {/* GITHUB */}
                    <Link 
                        href={github}
                        target="_blank" 
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        aria-label="Github"
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                        </svg>
                    </Link>
                </div>
            </div>
            </div>
        </footer>

    )
}
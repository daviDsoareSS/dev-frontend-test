"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServicesList() {
    const pathname = usePathname();

    const links_services = [
        { href: "/servicos/iluminacao-inteligente", label: "Iluminação inteligente" },
        { href: "/servicos/seguranca-e-monitoramento", label: "Segurança e monitoramento" },
        { href: "/servicos/energia-sustentavel", label: "Energia sustentável" },
    ];

    return (
        <div className="sticky top-40 h-full services_list basis-1/3">
            <h4 className="text-2xl font-semibold mb-4">Nossos serviços</h4>
            <ul className="flex flex-col gap-3">
                { links_services.map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={`text-sm border-(--color_secondary) p-4 block  transition-all ${
                                pathname === href
                                ? "border-l-5 bg-gray-100"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {label}
                        </Link>
                    </li>
                )) }
            </ul>
        </div>
    )
}
import { SITE_NAME } from "@/app/utils/constants"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata:Metadata = {
    title: 'Energia sustentável',
    description: 'A energia sustentável utiliza fontes renováveis, como solar e eólica, para gerar eletricidade de forma limpa, reduzindo impactos ambientais e promovendo um futuro mais equilibrado.',
    
    openGraph: {
        title: `Energia sustentável - ${SITE_NAME}`,
        description: 'A energia sustentável utiliza fontes renováveis, como solar e eólica, para gerar eletricidade de forma limpa, reduzindo impactos ambientais e promovendo um futuro mais equilibrado.',
        images: [
            {
              url: '/assets/images/servicos/energia-sustentavel/banner_energia-sustentavel.webp',
              width: 1920,
              height: 569,
              alt: `Energia sustentável - ${SITE_NAME}`,
            },
        ],
    },
    twitter: {
        images: [
            {
                url: '/assets/images/servicos/energia-sustentavel/banner_energia-sustentavel.webp',
                width: 1920,
                height: 569,
                alt: `Energia sustentável - ${SITE_NAME}`,
            },
        ],
    },

    alternates: {
        canonical: "/servicos/energia-sustentavel",
    },
}

export default function Page() {
    return (
        <>
            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 md:text-5xl ">
                    Energia Sustentável
                </h2>
                <div className="flex flex-col gap-5">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Invista em <span className="font-semibold text-(--color_primary)">Energia Sustentável</span> e reduza custos enquanto contribui para o meio ambiente.  
                        Sistemas de energia solar, painéis fotovoltaicos e soluções inteligentes permitem gerar eletricidade limpa e eficiente, 
                        garantindo economia e autonomia energética para sua residência ou empresa.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Com a energia sustentável, você acompanha o consumo em tempo real, otimiza recursos e promove um futuro mais consciente.  
                        Nossas soluções combinam tecnologia de ponta, eficiência e facilidade de manutenção, oferecendo energia renovável sem complicações.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {[
                    {
                        title: "Energia limpa e renovável",
                        desc: "Utilize fontes de energia renováveis que reduzem impactos ambientais e ajudam a preservar o planeta.",
                    },
                    {
                        title: "Economia na conta de luz",
                        desc: "Painéis solares e sistemas inteligentes permitem gerar sua própria energia e reduzir custos mensais.",
                    },
                    {
                        title: "Monitoramento e controle",
                        desc: "Acompanhe o desempenho do sistema e o consumo de energia em tempo real pelo seu celular ou computador.",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-lg border-1 border-gray-100 py-6 px-5 hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-base font-semibold text-gray-800 mb-3">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mb-20">
                <h3 className="text-xl font-semibold mb-8 border-l-5 border-(--color_secondary) pl-2">
                    Exemplos de ambientes com energia sustentável
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-auto gap-6">
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/energia-sustentavel/casa-sustentavel.webp"
                            alt="Casa sustentável"
                            className="h-auto max-w-full rounded-xl shadow-lg"
                            width={280} height={280}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/energia-sustentavel/casa-sustentavel2.webp"
                            alt="Casa sustentável 2"
                            className="h-auto max-w-full rounded-xl shadow-lg"
                            width={280} height={280}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/energia-sustentavel/paineis-solares-fotovoltaicos-mais-eficientes.webp"
                            alt="Painéis solares fotovoltaicos mais eficientes"
                            className="h-auto max-w-full rounded-xl shadow-lg"
                            width={280} height={280}
                        />
                    </div>
                </div>
            </div>
            
            <div className="">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Adote energia sustentável agora
                </h3>
                <p className="text-gray-600 mb-6">
                    Entre em contato e descubra como podemos instalar sistemas de energia sustentável 
                    que trazem economia, eficiência e respeito ao meio ambiente.
                </p>
                <Link 
                    href="/contato" 
                    aria-label="Solicitar orçamento"
                    className="bg-(--color_primary) cursor-pointer rounded-lg py-3 px-6 text-sm text-white md:px-8 md:py-3"
                >
                    Solicitar orçamento
                </Link>
            </div>
        </>

    )
}
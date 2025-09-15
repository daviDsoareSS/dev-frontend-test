import { SITE_NAME } from "@/app/utils/constants"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata:Metadata = {
    title: 'Segurança e monitoramento',
    description: 'A segurança e monitoramento inteligentes oferecem proteção em tempo real com câmeras, sensores e alarmes conectados.',
    
    openGraph: {
        title: `Segurança e monitoramento - ${SITE_NAME}`,
        description: 'A segurança e monitoramento inteligentes oferecem proteção em tempo real com câmeras, sensores e alarmes conectados.',
        images: [
            {
              url: '/assets/images/servicos/seguranca-e-monitoramento/banner_seguranca-e-monitoramento.webp',
              width: 1920,
              height: 569,
              alt: `Segurança e monitoramento - ${SITE_NAME}`,
            }, 
        ],
    },
    twitter: {
        images: [
            {
                url: '/assets/images/servicos/seguranca-e-monitoramento/banner_seguranca-e-monitoramento.webp',
                width: 1920,
                height: 569,
                alt: `Segurança e monitoramento - ${SITE_NAME}`,
            },
        ],
    },
    alternates: {
        canonical: "/servicos/seguranca-e-monitoramento",
    },
}

export default function Page() {
    return (
        <>
            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-normal text-gray-800 mb-6 md:text-5xl md:text-nowrap">
                    Segurança e monitoramento
                </h2>
                <div className="flex flex-col gap-5">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Mantenha sua casa ou empresa sempre protegida com nosso sistema de <span className="font-semibold text-(--color_primary)">Segurança e Monitoramento</span>.  
                        Câmeras inteligentes, sensores de movimento e alertas em tempo real garantem que você esteja sempre informado sobre qualquer atividade suspeita.  
                        A tecnologia avançada oferece tranquilidade, prevenindo incidentes e garantindo a proteção de pessoas e bens.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Com a segurança inteligente, você acompanha tudo pelo celular ou computador, de qualquer lugar.  
                        Receba notificações instantâneas, grave imagens em nuvem e personalize alertas conforme suas necessidades.  
                        Nosso sistema combina praticidade, eficiência e tecnologia de ponta para oferecer máxima proteção sem complicações.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {[
                    {
                        title: "Monitoramento 24/7",
                        desc: "Câmeras e sensores ativos todo o tempo, garantindo vigilância contínua e proteção para seu espaço.",
                    },
                    {
                        title: "Alertas instantâneos",
                        desc: "Receba notificações em tempo real em caso de movimentação suspeita ou tentativa de invasão.",
                    },
                    {
                        title: "Acesso remoto",
                        desc: "Visualize câmeras, controle alarmes e gerencie todo o sistema pelo seu celular ou computador.",
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
                    Exemplos de ambientes com segurança e monitoramento
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-auto gap-6">
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/seguranca-e-monitoramento/acompanhar-todo-movimento-pelo-celular.webp"
                            alt="Acompanhar todo o movimento pelo celular ou computador"
                            className="h-auto max-w-full rounded-xl shadow-lg"
                            width={280} height={280}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/seguranca-e-monitoramento/cameras-de-seguranca-em-sua-casa.webp"
                            alt="Câmeras de segurança em sua casa"
                            className="pbk h-auto max-w-full rounded-xl shadow-lg"
                            width={280} height={280}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/seguranca-e-monitoramento/gravando-assalto.webp"
                            alt="Gravando assalto"
                            className="h-auto max-w-full rounded-xl shadow-lg"
                            width={280} height={280}
                        />
                    </div>
                </div>
            </div>
            
            <div className="">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Proteja o que mais importa
                </h3>
                <p className="text-gray-600 mb-6">
                    Entre em contato e descubra como podemos instalar um sistema de segurança inteligente 
                    que garante tranquilidade e monitoramento contínuo para seu ambiente.
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
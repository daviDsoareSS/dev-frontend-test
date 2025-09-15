import { SITE_NAME } from "@/app/utils/constants"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata:Metadata = {
    title: 'Iluminação Inteligente',
    description: 'Muito além de acender e apagar luzes, essa tecnologia oferece praticidade, eficiência energética e ambientes personalizados para cada ocasião.',
    
    openGraph: {
        title: `Iluminação Inteligente - ${SITE_NAME}`,
        description: 'Muito além de acender e apagar luzes, essa tecnologia oferece praticidade, eficiência energética e ambientes personalizados para cada ocasião.',
        images: [
            {
              url: '/assets/images/servicos/iluminacao-inteligente/banner_iluminacao-inteligente.webp',
              width: 1920,
              height: 569,
              alt: `Iluminação Inteligente - ${SITE_NAME}`,
            },
        ],
    },
    twitter: {
        images: [
            {
                url: '/assets/images/servicos/iluminacao-inteligente/banner_iluminacao-inteligente.webp',
                width: 1920,
                height: 569,
                alt: `Iluminação Inteligente - ${SITE_NAME}`,
            },
        ],
    },
}

export default function Page() {
    return (
        <>
            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 md:text-5xl ">
                    Iluminação Inteligente
                </h2>
                <div className="flex flex-col gap-5">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Descubra como a <span className="font-semibold text-(--color_primary)">Iluminação Inteligente</span> pode revolucionar a sua rotina.  
                        Muito além de acender e apagar luzes, essa tecnologia oferece praticidade, 
                        eficiência energética e ambientes personalizados para cada ocasião.  
                        Seja para criar um clima aconchegante em casa, otimizar o foco no trabalho 
                        ou reduzir custos com energia, a iluminação inteligente é a solução perfeita 
                        para quem busca modernidade e bem-estar.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Com a iluminação inteligente, você tem liberdade para adaptar cada ambiente ao seu estilo de vida. 
                        Ajuste cores, intensidades e crie cenários automáticos que acompanham sua rotina, tornando 
                        cada espaço mais funcional, confortável e acolhedor. Além disso, a tecnologia contribui 
                        para a sustentabilidade, promovendo o uso consciente da energia sem abrir mão da praticidade.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {[
                    {
                    title: "Controle na palma da mão",
                    desc: "Gerencie a intensidade, cores e até cenários de iluminação pelo celular ou assistente de voz.",
                    },
                    {
                    title: "Eficiência energética",
                    desc: "Economize energia com lâmpadas inteligentes e programação automática de horários.",
                    },
                    {
                    title: "Ambientes personalizados",
                    desc: "Crie cenários ideais para relaxar, estudar, receber visitas ou trabalhar.",
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
                    Exemplos de ambientes com Iluminação Inteligente
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-auto gap-6">
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/iluminacao-inteligente/cozinha.webp"
                            alt="Cozinha com iluminação inteligente"
                            className="h-auto max-w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                            width={280} height={280}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/iluminacao-inteligente/dormitorio-quarto-hospedes.webp"
                            alt="Cozinha com iluminação inteligente"
                            className="h-auto max-w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                            width={280} height={280}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/iluminacao-inteligente/quarto-dormitorio-suite-casal.webp"
                            alt="Cozinha com iluminação inteligente"
                            className="h-auto max-w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                            width={280} height={280}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/iluminacao-inteligente/quarto-filhos.webp"
                            alt="Cozinha com iluminação inteligente"
                            className="h-auto max-w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                            width={280} height={280}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/iluminacao-inteligente/sala-estar-integrada-com-jantar.webp"
                            alt="Cozinha com iluminação inteligente"
                            className="h-auto max-w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                            width={280} height={280}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/images/servicos/iluminacao-inteligente/sala-estar-rack-estante-madeira-tapete-colorido.webp"
                            alt="Cozinha com iluminação inteligente"
                            className="h-auto max-w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                            width={280} height={280}
                        />
                    </div>
                </div>
            </div>
            
            <div className="">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Pronto para transformar sua iluminação?
                </h3>
                <p className="text-gray-600 mb-6">
                    Entre em contato e descubra como podemos instalar a iluminação inteligente 
                    ideal para o seu ambiente.
                </p>
                <Link 
                    href="/contato" 
                    className="bg-(--color_primary) cursor-pointer rounded-lg py-3 px-6 text-sm text-white md:px-8 md:py-3"
                >
                    Solicitar orçamento
                </Link>
            </div>
        </>
    )
}
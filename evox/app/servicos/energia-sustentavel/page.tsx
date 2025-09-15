import { SITE_NAME } from "@/app/utils/constants"
import { Metadata } from "next"

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
        <div className="text-sm">
            Energia sustentável
        </div>
    )
}
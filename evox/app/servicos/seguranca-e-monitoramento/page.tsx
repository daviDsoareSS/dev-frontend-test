import { SITE_NAME } from "@/app/utils/constants"
import { Metadata } from "next"

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
}

export default function Page() {
    return (
        <div className="text-sm">
            Segurança e monitoramento
        </div>
    )
}
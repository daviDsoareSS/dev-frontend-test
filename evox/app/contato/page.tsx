import { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';
import FormContact from "../components/FormContact";
import { SITE_NAME } from '../utils/constants';

export const metadata:Metadata = {
    title: 'Contato',
    description: 'Estamos aqui para ajudar! Se tiver qualquer dúvida sobre nossos serviços de automação residencial, soluções inteligentes ou instalação, entre em contato.',
    
    openGraph: {
        title: `Contato - ${SITE_NAME}`,
        description: 'Estamos aqui para ajudar! Se tiver qualquer dúvida sobre nossos serviços de automação residencial, soluções inteligentes ou instalação, entre em contato.',
        images: [
            {
              url: '/assets/images/contato/banner_contato.webp',
              width: 1920,
              height: 569,
              alt: `Contato - ${SITE_NAME}`,
            },
        ],
    },
    twitter: {
        images: [
            {
              url: '/assets/images/contato/banner_contato.webp',
              width: 1920,
              height: 569,
              alt: `Contato - ${SITE_NAME}`,
            },
        ],
    },
    alternates: {
        canonical: "/contato",
    },
}

export default function Contato() {
    return (
      <>
        <Breadcrumb 
          title_page="Contato"
          banner="/assets/images/contato/banner_contato.webp"
        />
        <FormContact />
      </>
    )
}
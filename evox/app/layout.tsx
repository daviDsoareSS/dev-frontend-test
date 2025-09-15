import "./globals.css";
import type { Metadata } from "next";
import { SITE_NAME } from "./utils/constants";
import Navbar from './components/Navbar';
import WhatsappFloat from './components/WhatsappFloat';
import Footer from './components/Footer';
import { poppins } from "./fonts";

export const metadata:Metadata = {
    metadataBase: new URL(`${process.env.PUBLIC_BASE_URL}`),
    title: {
        default: `${SITE_NAME}`,
        template: `%s - ${SITE_NAME}`,
    },
    description: 'Com tecnologia de ponta e soluções personalizadas, oferecemos controle de iluminação, climatização, segurança e entretenimento na palma da sua mão.',
    openGraph: {
        title: `${SITE_NAME}`,
        description: 'Com tecnologia de ponta e soluções personalizadas, oferecemos controle de iluminação, climatização, segurança e entretenimento na palma da sua mão.',
        images: [
            {
              url: '/evox_automacao_residencial.webp',
              width: 1200,
              height: 800,
              alt: `${SITE_NAME}`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@evox',
        creator: '@evox',
        images: [
            {
              url: '/evox_automacao_residencial.webp',
              width: 1200,
              height: 800,
              alt: `${SITE_NAME}`,
            },
        ],
    },
    other: {
        'apple-mobile-web-app-title': `${SITE_NAME}`,
        "author": `${SITE_NAME}`,
        "robots": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        "theme-color": "#000000",
        "application-name": `${SITE_NAME}`,
        "content-language": "pt-BR",
    },
    alternates: {
        canonical: "/",
    },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) 
{
  return (
    <html lang="pt-br" className={poppins.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}

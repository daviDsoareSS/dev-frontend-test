
import type { Metadata } from "next";

export const metadata:Metadata = {
  title: {
    default: `${SITE_NAME}`,
    template: `%s - ${SITE_NAME}`,
    absolute: "",
  },

  description: "Automatize sua casa com tecnologia inteligente. Conforto, segurança e praticidade ao alcance de um toque."
}

import "./globals.css";

import Navbar from './components/Navbar';
import WhatsappFloat from './components/WhatsappFloat';
import Footer from './components/Footer';
import localFont from 'next/font/local'
import { SITE_NAME } from "./utils/constants";

const poppins = localFont({
  src: [
    {
      path: '../public/assets/fonts/Poppins-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/Poppins-Black.woff2',
      weight: '800',
      style: 'normal',
    }
  ],
})

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

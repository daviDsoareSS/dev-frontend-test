'use client';

import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from './components/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  return (
    <div className='w-full h-full text-white'>
      <Swiper
        slidesPerView={1}
        className="w-full h-200"
      >
        <SwiperSlide className="relative">
          <div className="w_content">
            <div className="text absolute z-1 top-1/2 -translate-y-1/2">
              <h1 className='text-5xl font-bold mb-3'>Soluções de segurança <br/>exclusivas e confiáveis</h1>
              <p className='mb-5'>Transforme sua casa em um ambiente inteligente e conectado</p>
              <div className="text-sm buttons_cta flex gap-5">
                <Link 
                  href=""
                  className="rounded-sm flex items-center gap-1 pl-6 pr-6 pt-4 pb-4 bg-(--color_primary) text-white"
                >
                  <span>Quero proteger minha casa</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                <Link
                  href="" 
                  className="rounded-sm flex items-center gap-1 text-sm pl-6 pr-6 pt-4 pb-4 bg-white text-black"
                >
                  <span>Ver serviços</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <Image className='object-cover' src="/assets/images/hero1.webp" fill alt='Transforme sua casa em um ambiente inteligente e conectado'></Image>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="w_content">
            <div className="text absolute z-1 top-1/2 -translate-y-1/2">
              <h1 className='text-5xl font-bold mb-3'>Soluções de segurança <br/>exclusivas e confiáveis</h1>
              <p className='mb-5 text-sm'>Transforme sua casa em um ambiente inteligente e conectado</p>
              <div className="text-sm buttons_cta flex gap-5">
                <Link className="pl-6 pr-6 pt-4 pb-4 bg-black text-white" href="">Quero proteger minha casa</Link>
                <Link className="text-sm pl-6 pr-6 pt-4 pb-4 bg-white text-black" href="">Ver serviços</Link>
              </div>
            </div>
          </div>
          <Image className='object-cover' src="/assets/images/hero1.webp" fill alt='Transforme sua casa em um ambiente inteligente e conectado'/>
        </SwiperSlide>
      </Swiper>
      <section className="services text-black pt-20 pb-10">
        <div className="w_content">
          <div className="text_introduction mb-10 ml-auto mr-auto text-2xl text-center w-160">
            <p className="text-sm mb-3">Solicite seu serviço agora e transforme suas ideias em resultados!</p>
            <h2 className="font-bold">Serviços sob medida, com qualidade e dedicação para os melhores resultados.</h2>
          </div>
          <div className="flex justify-between flex-wrap w-full gap-x-10 gap-y-10 row-10 text-white mb-10">
            <ServiceCard
              href="/servicos/iluminacao-inteligente"
              title="Iluminação inteligente"
              description="Controle luzes por app ou voz, trazendo conforto e economia."
              image="/assets/images/home/iluminacao-inteligente.webp"
            />
            <ServiceCard
              href="/servicos/seguranca-e-monitoranto"
              title="Segurança e monitoramento"
              description="Acompanhe seu espaço por câmeras e sensores, garantindo proteção e tranquilidade."
              image="/assets/images/home/seguranca-e-monitoramento.webp"
            />
            <ServiceCard
              href="/servicos/energia-sustentavel"
              title="Energia sustentável"
              description="Utilize fontes limpas para economizar recursos e proteger o meio ambiente."
              image="/assets/images/home/energia-sustentavel.webp"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm w-230">
              Transforme seu ambiente com tecnologia, segurança e sustentabilidade! Entre em contato conosco e receba atendimento personalizado para encontrar as melhores soluções para sua casa ou empresa. Nossa equipe está pronta para ajudá-lo a criar um espaço mais moderno, eficiente e confortável.
            </p>
            <Link className="rounded-lg bg-(--color_primary) text-sm font-semibold text-white pl-5 pr-5 pt-4 pb-4 hover:brightness-120 transition-all duration-600 ease-out" href="/contato">Entre em contato</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

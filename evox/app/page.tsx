'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  return (
    <main className='w-full h-200 text-white'>
      <Swiper
        slidesPerView={1}
        className="w-full h-full"
      >
        <SwiperSlide className="relative">
          <div className="w_content">
            <div className="text absolute z-1 top-1/2 -translate-y-1/2">
              <h1 className='text-5xl font-bold mb-3'>Soluções de segurança <br/>exclusivas e confiáveis</h1>
              <p className='mb-5'>Transforme sua casa em um ambiente inteligente e conectado</p>
              <div className="text-sm buttons_cta flex gap-5">
                <Link className="flex items-center gap-1 pl-6 pr-6 pt-4 pb-4 bg-black text-white" href="">
                  Quero projeger minha casa
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                <Link className="flex items-center gap-1 text-sm pl-6 pr-6 pt-4 pb-4 bg-white text-black" href="/servicos">
                  Ver serviços
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
                <Link className="pl-6 pr-6 pt-4 pb-4 bg-black text-white" href="">Quero projeger minha casa</Link>
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
          <div className="flex justify-center flex-wrap w-full gap-x-10 gap-y-10 row-10">
              <Link href="" className="relative flex items-end basis-85 w-full h-110 bg-black overflow-hidden pl-5 pt-5 pb-5 pr-30">
                <Image className='absolute pointer-events-none z-1 inset-1 top-1/2 left-1/2 w-full h-full object-cover' src="/assets/images/hero3_mobile.webp" fill alt="teste"/>
                <div className="relative z-2">
                  <h3 className='text-1xl font-bold'>Lorem ipsum dolor gravida aoq</h3>
                  <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt molestias ratione nemo</p>
                </div>
              </Link>
              <div className="basis-85 w-full h-110 bg-red-100">
                {/* <Image src="/assets/images/hero1.webp" fill/> */}
              </div>
              <div className="basis-85 w-full h-110 bg-black">
                {/* <Image src="/assets/images/hero1.webp" fill/> */}
              </div>
          </div>
        </div>
      </section>
    
    </main>
  )
}

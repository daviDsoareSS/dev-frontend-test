'use client';

import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from './components/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

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
      <section className="services text-black py-20">
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
      <section className="bg-slate-800">
        <div className="w_content">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Depoimentos</h2>
                <p className="mb-4 font-light text-neutral-600 lg:mb-16 sm:text-xl">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
            </div> 
            <Swiper 
              spaceBetween={20}
              pagination={{
                dynamicBullets: true,
                clickable: true
              }}
              speed={1000}
              rewind={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]} 
              slidesPerView={2} 
              className="mySwiper py-100"
            >
              <SwiperSlide>
                <figure className="max-w-screen-md mx-auto px-10">
                  <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                  </svg> 
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <Image className="w-6 h-6 rounded-full" src="/assets/images/home/iluminacao-inteligente.webp" width={30} height={30} alt="profile picture"></Image>
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="max-w-screen-md mx-auto px-10">
                  <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                  </svg> 
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <Image className="w-6 h-6 rounded-full" src="/assets/images/home/iluminacao-inteligente.webp" width={30} height={30} alt="profile picture"></Image>
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="max-w-screen-md mx-auto px-10">
                  <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                  </svg> 
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <Image className="w-6 h-6 rounded-full" src="/assets/images/home/iluminacao-inteligente.webp" width={30} height={30} alt="profile picture"></Image>
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="about bg-neutral-200 text-black py-20">
        <div className="w_content">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div className="w-145">
              <div className="mb-6">
                <h4 className="mb-3 text-neutral-600">Nos conheça melhor</h4>
                <h2 className="text-4xl font-bold mb-4">Lorem ipsum dolor <br/>gravadsa</h2>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem quod adipisci molestias molestiae delectus illo vel nihil nesciunt. Tempora eveniet magnam, ducimus repellendus quod vel omnis reprehenderit sapiente nesciunt.
                </p>
              </div>
              <div className="flex flex-wrap justify-between gap-4">
                <div className='basis-65 border-t-3 border-(--color_secondary) pt-3 pb-4 pr-3'>
                  <h3 className='text-2xl font-semibold mb-2'>+ 50 anos</h3>
                  <p className='text-sm text-neutral-600'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='basis-65 border-t-3 border-(--color_secondary) pt-3 pb-4 pr-3'>
                  <h3 className='text-2xl font-semibold mb-2'>+ 50 anos</h3>
                  <p className='text-sm text-neutral-600'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='basis-65 border-t-3 border-(--color_secondary) pt-3 pb-4 pr-3'>
                  <h3 className='text-2xl font-semibold mb-2'>+ 50 anos</h3>
                  <p className='text-sm text-neutral-600'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='basis-65 border-t-3 border-(--color_secondary) pt-3 pb-4 pr-3'>
                  <h3 className='text-2xl font-semibold mb-2'>+ 50 anos</h3>
                  <p className='text-sm text-neutral-600'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
            <div className="w-120 h-140 rounded-lg overflow-hidden relative">
              <Image className='object-cover' src="/assets/images/home/conversando_com_cliente.webp" alt="Conversa com o cliente" fill/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

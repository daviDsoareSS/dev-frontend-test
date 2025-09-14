'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import ServiceCard from './components/ServiceCard';
import { testimonials } from './utils/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <div className='w-full h-full text-white'>
      {/* HERO */}
      <div className="relative hero w-full h-[100dvh] md:h-200 bg-cover bg-center" style={{ backgroundImage: `url(/assets/images/home/hero1.webp)` }}>
        <div className="w_content">
          <div className="text absolute z-1 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-0 md:left-[inherit] md:translate-x-0 md:-translate-y-1/2">
            <h1 className='text-2xl md:text-5xl font-bold mb-3 text-shadow-md'>
              Soluções inteligentes para <br/>todas as áreas da sua casa
            </h1>
            <p className='mb-5 w-full md:w-160 text-sm text-shadow-md'>
              Transforme sua residência em um ambiente conectado, seguro e eficiente, com tecnologia que facilita sua rotina e garante conforto em cada detalhe.
            </p>
            <div className="buttons_cta text-sm flex flex-col md:flex-row gap-5">
              <Link 
                href="/empresa"
                className="w-full justify-center rounded-sm flex items-center gap-1 pl-6 pr-6 pt-4 pb-4 bg-(--color_primary) text-white shadow-md md:w-fit"
              >
                <span>Conheça nossa história</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              <Link
                href="/servicos" 
                className="w-full justify-center rounded-sm flex items-center gap-1 text-sm pl-6 pr-6 pt-4 pb-4 bg-white text-black shadow-md md:w-fit"
              >
                <span>Ver serviços</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* SEÇÃO DE SERVIÇOS */}
      <section className="services text-black py-20">
        <div className="w_content">
          <div className="text_introduction mb-13 mx-auto text-center w-full md:w-190">
            <p className="text-sm text-neutral-600 mb-3">
              Solicite seu serviço agora e transforme suas ideias em resultados!
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 px-0 md:px-15 md:text-4xl">
              Serviços sob medida com qualidade e dedicação.
            </h2>
          </div>
          <div className="flex justify-between flex-wrap w-full gap-x-10 gap-y-10 row-10 text-white mb-10">
            <ServiceCard
              href="/servicos/iluminacao-inteligente"
              title="Iluminação inteligente"
              description="Controle luzes por app ou voz, trazendo conforto e economia."
              image="/assets/images/home/iluminacao-inteligente.webp"
            />
            <ServiceCard
              href="/servicos/seguranca-e-monitoramento"
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
          <div className="flex flex-col md:flex-row justify-between  md:items-center">
            <p className="text-sm text-gray-600 w-full mb-4 md:mb-0 md:w-230">
              Transforme seu ambiente com tecnologia, segurança e sustentabilidade! Entre em contato conosco e receba atendimento personalizado para encontrar as melhores soluções para sua casa ou empresa. Nossa equipe está pronta para ajudá-lo a criar um espaço mais moderno, eficiente e confortável.
            </p>
            <Link 
              className="rounded-lg bg-(--color_primary) text-sm font-semibold text-white pl-5 pr-5 pt-4 pb-4 hover:brightness-120 transition-all duration-600 ease-out text-center mb:text-left" 
              href="/contato">
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DEPOIMENTOS */}
      <section className="bg-slate-800">
        <div className="w_content">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm">
                <h2 className="mb-4 text-4xl font-semibold text-white">Depoimentos</h2>
                <p className="mb-4 font-light text-stone-300 lg:mb-16 sm:text-sm">
                  A melhor prova da qualidade do nosso trabalho está na voz de quem já confiou em nós. Veja o que nossos clientes têm a dizer.
                </p>
            </div> 
            <Swiper 
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
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination, Autoplay]} 
              className="mySwiper py-100"
            >
              {testimonials.map(({ name, city, image, text }, index) => (
                <SwiperSlide key={index}>
                  <figure className="max-w-screen-md mx-auto px-0 md:px-10">
                    <svg className="h-10 mx-auto mb-3 text-neutral-500" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote>
                      <p className="text-lg text-white">
                        "{text}"
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <Image 
                        className="w-6 h-6 rounded-full object-cover" 
                        src={image}
                        width={30} 
                        height={30} 
                        alt={name}>
                      </Image>
                      <div className="flex items-center divide-x-2 divide-gray-700">
                          <div className="pr-3 font-medium text-white">
                            {name}
                          </div>
                          <div className="pl-3 text-sm font-light text-neutral-300">
                            {city}
                          </div>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE A EMPRESA */}
      <section className="about bg-neutral-200 text-black py-20">
        <div className="w_content">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-145">
              <div className="mb-13">
                <h4 className="mb-4 text-neutral-600">
                  Nos conheça melhor
                </h4>
                <h2 className="text-3xl font-bold mb-4 md:text-4xl">
                  Transformando sua casa em um lar inteligente
                </h2>
                <p className="text-sm text-gray-600">
                  Somos especialistas em automação residencial, oferecendo soluções que combinam tecnologia, conforto e segurança. 
                  Desde iluminação inteligente até controle de climatização e segurança, nosso objetivo é tornar sua rotina mais prática e seus ambientes mais conectados.
                </p>
              </div>

              <div className="flex flex-wrap justify-between gap-4">
                <div className='basis-1/1  border-t-3 border-(--color_secondary) pt-3 pb-4 pr-3 md:basis-65'>
                  <h3 className='text-2xl font-semibold mb-2'>
                    +10 anos
                  </h3>
                  <p className='text-sm text-gray-600'>
                    de experiência em automação residencial, garantindo soluções confiáveis.
                  </p>
                </div>
                <div className='basis-1/1 border-t-3 border-(--color_secondary) pt-3 pb-4 pr-3 md:basis-65'>
                  <h3 className='text-2xl font-semibold mb-2'>
                    +500 projetos
                  </h3>
                  <p className='text-sm text-gray-600'>
                    implementados em residências e apartamentos inteligentes em todo o país.
                  </p>
                </div>
                <div className='basis-1/1 border-t-3 border-(--color_secondary) pt-3 pb-4 pr-3 md:basis-65'>
                  <h3 className='text-2xl font-semibold mb-2'>
                    100% personalizado
                  </h3>
                  <p className='text-sm text-gray-600'>
                    Cada projeto é adaptado às necessidades e estilo de vida dos nossos clientes.
                  </p>
                </div>
                <div className='basis-1/1 border-t-3 border-(--color_secondary) pt-3 pb-4 pr-3 md:basis-65'>
                  <h3 className='text-2xl font-semibold mb-2'>
                    Suporte contínuo
                  </h3>
                  <p className='text-sm text-gray-600'>
                    Atendimento especializado para manutenção e atualização dos sistemas de automação.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-120 h-140 rounded-lg overflow-hidden relative">
              <Image 
                className='object-cover' 
                src="/assets/images/home/conversando_com_cliente.webp" 
                alt="Conversa com o cliente" 
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

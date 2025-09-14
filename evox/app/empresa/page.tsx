import Breadcrumb from "../components/Breadcrumb"
import Image from "next/image"

export default function Empresa() {
    return (
        <>
            <Breadcrumb 
                title_page="Empresa"
                banner="/assets/images/empresa/banner_empresa.webp"
            />
            <div className="company py-10 md:py-20">
                <div className="w_content flex flex-col-reverse gap-10 md:flex-row">
                    <div className="relative basis-auto overflow-hidden w-full h-70 rounded-lg shadow-md md:h-auto md:basis-150">
                        <Image className="object-cover" src="/assets/images/empresa/evox_company.webp" fill alt="Empresa"/>
                    </div>
                    <div className="basis-1/1 md:basis-125">
                        <div className="flex items-center gap-5 text-sm text-(--color_primary) font-medium mb-3">
                            <h3>Nossa história</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold pr-0 mb-3 lg:pr-40">
                            Transformando casas em lares inteligentes
                        </h2>
                        <div className="flex flex-col gap-4 text-sm font-base text-neutral-600">
                            <p>
                                Fundada há mais de 10 anos, nossa empresa nasceu do sonho de unir tecnologia e conforto no dia a dia das pessoas. Desde o primeiro projeto, nos dedicamos a criar soluções de automação residencial que tornam a vida mais prática, segura e conectada.
                            </p>
                            <p>
                                Começamos com pequenas instalações de iluminação inteligente e rapidamente expandimos para sistemas completos de segurança, climatização e entretenimento. 
                                Cada projeto é personalizado, garantindo que cada lar seja único e que cada cliente tenha a melhor experiência possível.
                            </p>
                            <p>
                                Hoje, somos referência no mercado de automação residencial, atendendo centenas de clientes e transformando casas comuns em ambientes inteligentes e cheios de tecnologia, sempre com compromisso com qualidade, inovação e satisfação.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mission bg-(--color_primary) text-white py-10 md:py-20">
                <div className="w_content flex flex-col-reverse gap-10 md:flex-row-reverse">
                    <div className="relative basis-auto overflow-hidden w-full h-50 rounded-lg shadow-md md:h-auto md:basis-150">
                        <Image className="object-cover" src="/assets/images/empresa/missao.webp" fill alt="Empresa"/>
                    </div>
                    <div className="basis-1/1 md:basis-125">
                        <div className="flex items-center gap-5 text-sm text-stone-300 font-medium mb-3">
                            <h3>Nossa missão</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold pr-0 mb-3 lg:pr-40">
                            Tornar a tecnologia acessível e prática para todos os lares
                        </h2>
                        <div className="flex flex-col gap-4 text-sm font-light">
                            <p>
                                Nossa missão é simplificar a vida das pessoas por meio da automação residencial, oferecendo soluções inteligentes que unem conforto, segurança e eficiência energética. 
                                Queremos que cada cliente desfrute de um lar conectado, sem complicações.
                            </p>
                            <p>
                                Buscamos constantemente inovação e personalização em nossos projetos, garantindo que cada instalação seja adaptada às necessidades e estilo de vida de cada família, transformando casas comuns em ambientes verdadeiramente inteligentes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery bg-white py-10 md:py-20">
                <div className="w_content">
                    <div className="mx-auto text-center mb-10">
                        <h3 className="text-sm text-black w-fit mx-auto py-[1px] rounded-sm px-3 bg-(--color_secondary)">Galeria</h3>
                        <h3 className="text-2xl font-semibold">Conheça nossa estrutura</h3>
                    </div>
                    <div className="justify-center w-full mx-auto items-center grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/areas-de-trabalho-estilo-industrial1.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/areas-de-trabalho-estilo-industrial2.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/areas-de-trabalho-estilo-industrial3.webp" alt=""/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/areas-de-trabalho-estilo-industrial4.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/areas-de-trabalho-estilo-industrial5.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/areas-de-trabalho-estilo-industrial6.webp" alt=""/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/sala-industrial-laje-aparente-espaco-de-espera.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/arquibancada-espaco-colaborativo.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/sala-espera.webp" alt=""/>
                            </div>

                        </div>
                        <div className="grid gap-4">
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/mesa-reunioes-madeira-macica-espaco-colaborativo.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/divisorias-madeira-perfurada.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/empresa/estrutura/repcao-estilo-industrial.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
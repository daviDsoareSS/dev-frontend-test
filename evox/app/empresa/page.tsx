import Breadcrumb from "../components/Breadcrumb"
import Image from "next/image"

export default function Empresa() {
    return (
        <>
            <Breadcrumb 
                title_page="Empresa"
                banner="/assets/images/hero1.webp"
            />
            <div className="company py-20">
                <div className="w_content flex flex-wrap gap-10">
                    <div className="basis-150 overflow-hidden rounded-lg shadow-md">
                        <Image src="/assets/images/hero1.webp" width={700} height={300} alt="teste" />
                    </div>
                    <div className="basis-125">
                        <div className="flex items-center gap-5 text-sm text-(--color_primary) font-medium mb-3">
                            <h3>Sobre nós</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold pr-60 mb-3">Adsa dasiasdas oiasjdasosda ada</h2>
                        <div className="flex flex-col gap-4 text-sm font-base text-neutral-600">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni repellat iste obcaecati? Vitae aut in eos! Explicabo, facilis quam voluptatem optio, voluptates tenetur obcaecati quasi laborum nam, tempora possimus provident?
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni repellat iste obcaecati? Vitae aut in eos! Explicabo, facilis quam voluptatem optio, voluptates tenetur obcaecati quasi laborum nam, tempora possimus provident?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mission bg-(--color_primary) text-white py-20">
                <div className=" w_content flex flex-row-reverse flex-wrap gap-10">
                    <div className="basis-150 overflow-hidden rounded-lg shadow-md">
                        <Image src="/assets/images/hero1.webp" width={700} height={300} alt="teste" />
                    </div>
                    <div className="basis-125">
                        <div className="flex items-center gap-5 text-sm text-stone-300 font-medium mb-3">
                            <h3>Nossa missão</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold pr-60 mb-3">Adsa dasiasdas oiasjdasosda ada</h2>
                        <div className="flex flex-col gap-4 text-sm font-light">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni repellat iste obcaecati? Vitae aut in eos! Explicabo, facilis quam voluptatem optio, voluptates tenetur obcaecati quasi laborum nam, tempora possimus provident?
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni repellat iste obcaecati? Vitae aut in eos! Explicabo, facilis quam voluptatem optio, voluptates tenetur obcaecati quasi laborum nam, tempora possimus provident?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery bg-white py-20">
                <div className="w_content">
                    <div className="mx-auto text-center mb-10">
                        <h3 className="text-sm text-neutral-600">Galeria</h3>
                        <h3 className="text-2xl font-semibold">Conheça nossa estrutura</h3>
                    </div>
                    <div className="justify-center w-full mx-auto items-center grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/home/iluminacao-inteligente.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image width={280} height={280} className="h-auto max-w-full rounded-lg" src="/assets/images/hero1.webp" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
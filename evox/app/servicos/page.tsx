import Link from "next/link";

export default function Servicos(){
    return (
        <>
            <div className="max-w-screen-sm">
                <h2 className="mb-4 text-4xl font-semibold text-black">Serviços</h2>
                <p className="mb-4 font-light text-neutral-600 lg:mb-16 sm:text-sm">
                    Descubra nossos serviços de automação residencial, projetados para tornar sua casa mais conectada, confortável e segura. Cada solução é personalizada para atender às necessidades do seu lar e facilitar o seu dia a dia.
                </p>
            </div>
            <div className="flex flex-wrap justify-between">
                {/* ILUMINAÇÃO INTELIGENTE */}
                <div className="group relative p-6 flex flex-col gap-5 justify-center rounded-sm w-92 h-120 block bg-white shadow-md border-1 border-gray-200">
                    <div className="z-1 size-15 rounded-full flex items-center justify-center text-white bg-black">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </div>
                    <h3 className="z-1 text-2xl font-semibold">Iluminação inteligente</h3>
                    <p className="z-1 text-sm text-neutral-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima earum consequatur sapiente dolore atque esse dolorem illo, maxime maiores sint repellat animi eius voluptas cupiditate neque cumque possimus molestiae.
                    </p>
                    <Link 
                        className="z-1 flex items-center gap-3 transition-all ease-in-out duration-300 opacity-0 max-h-0 group-hover:max-h-30 group-hover:opacity-100 " 
                        href="/servicos/iluminacao-inteligente"
                    >
                        <p className="text-sm font-bold">Ver mais</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </div>

                {/* SEGURANÇA E MONITORAMENTO */}
                <div className="group relative p-6 flex flex-col gap-5 justify-center rounded-sm w-92 h-120 block bg-white shadow-md border-1 border-gray-200">
                    <div className="z-1 size-15 rounded-full flex items-center justify-center text-white bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                    <h3 className="z-1 text-2xl font-semibold">Segurança e monitoramento</h3>
                    <p className="z-1 text-sm text-neutral-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima earum consequatur sapiente dolore atque esse dolorem illo, maxime maiores sint repellat animi eius voluptas cupiditate neque cumque possimus molestiae.
                    </p>
                    <Link 
                        className="z-1 flex items-center gap-3 transition-all ease-in-out duration-300 opacity-0 max-h-0 group-hover:max-h-30 group-hover:opacity-100 " 
                        href="/servicos/seguranca-e-monitoramento"
                    >
                        <p className="text-sm font-bold">Ver mais</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </div>

                {/* ENERGIA SUSTENTÁVEL */}
                <div className="group relative p-6 flex flex-col gap-5 justify-center rounded-sm w-92 h-120 block bg-white shadow-md border-1 border-gray-200">
                    <div className="z-1 size-15 rounded-full flex items-center justify-center text-white bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                        </svg>
                    </div>
                    <h3 className="z-1 text-2xl font-semibold">Energia sustentável</h3>
                    <p className="z-1 text-sm text-neutral-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates minima earum consequatur sapiente dolore atque esse dolorem illo, maxime maiores sint repellat animi eius voluptas cupiditate neque cumque possimus molestiae.
                    </p>
                    <Link 
                        className="z-1 flex items-center gap-3 transition-all ease-in-out duration-300 opacity-0 max-h-0 group-hover:max-h-30 group-hover:opacity-100 " 
                        href="/servicos/energia-sustentavel"
                    >
                        <p className="text-sm font-bold">Ver mais</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </div>

            </div>
        </>
    )
}
import Link from "next/link"

interface BreadcrumbProps {
    title_page: string
    title_subpage?: string
    banner: string
}

export default function Breadcrumb ({title_page, title_subpage, banner}:BreadcrumbProps){
    return(
        <div 
            className={`flex flex-col gap-4 w-full h-60 bg-cover bg-center`}
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="w_content flex h-full justify-center items-center">
                <div className="text-white text-center flex items-center flex-col gap-3">
                    <h1 className="text-4xl">{title_page}</h1>
                    <ul className="flex gap-1 text-sm">
                        <li className="font-medium">
                            <Link href="/">Home</Link>
                        </li>
                        <span>/</span>
                        { title_subpage ? 
                            <>
                                <li>
                                    <Link href="/servicos">
                                        {title_page}
                                    </Link>
                                </li> 
                                <span>/</span>
                                <li>
                                    <p className="text-stone-300">
                                        {title_subpage}
                                    </p>
                                </li> 
                            </>
                            : 
                            <li>
                                <p className="text-stone-300">
                                    {title_page}
                                </p>
                            </li>  
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  image: string
}

export default function ServiceCard({ title, description, href, image }: ServiceCardProps) {
  return (
    <Link 
      href={href} 
      className="rounded-lg group relative flex items-end w-full h-120 bg-black overflow-hidden pl-5 pt-5 pb-5 pr-30 
      before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:z-[2] 
      before:inset-0 before:bg-gradient-to-t before:from-[#035f8a] before:to-[rgba(253,187,45,0)] sm:w-110 lg:w-full lg:h-130"
    >
      <Image
        className="absolute pointer-events-none z-[1] top-1/2 left-1/2 object-cover"
        src={image}
        fill
        alt={title}
      />
      <div className="relative z-[2]">
        <h3 className="text-xl min-h-7 font-bold transition-all duration-500 ease-in-out">
          {title}
        </h3>
        <p className="text-sm max-h-40 opacity-100 -translate-x-0 transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-x-0 lg:max-h-0 lg:opacity-0 lg:-translate-x-full">
          {description}
        </p>
      </div>
      <div className="absolute flex items-center justify-center bottom-0 right-0 w-13 h-13 bg-(--color_secondary) z-[2] before:content-['+'] before:text-white before:text-2xl"></div>
    </Link>
  )
}

import { Metadata } from "next"
import Breadcrumb from "../components/Breadcrumb"
import { SITE_NAME } from "../utils/constants"

export const metadata:Metadata = {
  title: {
    default: `Serviços`,
    template: `%s / Serviços - ${SITE_NAME}`,
    absolute: "",
  },

  description: "Automatize sua casa com tecnologia inteligente. Conforto, segurança e praticidade ao alcance de um toque."
}

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Breadcrumb 
        title_page="Serviços"
        banner="/assets/images/hero1.webp"
      />
      <div className="w_content py-20">
        {children}
      </div>
    </>
  )
}
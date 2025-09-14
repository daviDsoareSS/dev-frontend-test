"use client";

import Breadcrumb from "../components/Breadcrumb"
import ServicesList from "../components/ServicesList"
import { usePathname } from "next/navigation"
import { links_services } from "../utils/services_links";

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentService = links_services.find(service => service.url === pathname);

  const banner = currentService ? currentService.banner : '/assets/images/servicos/banner_servicos.webp';
  const title_page = currentService ? currentService.label : 'Serviços';

  return (
    <>
      <Breadcrumb 
        title_page={title_page}
        banner={banner}
      />
      <div className="flex flex-col gap-10 justify-between w_content py-20 md:flex-row">
        <div className={`pr-0 w-full ${pathname === '/servicos' ? 'w-full' : 'md:w-200'} md:pr-10`}>
          {children}
        </div>
        { pathname === '/servicos' ? '' :
          <ServicesList />
        }
      </div>
    </>
  )
}
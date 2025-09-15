import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.PUBLIC_BASE_URL}/`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/empresa`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/servicos`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/servicos/iluminacao-inteligente`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/servicos/seguranca-e-monitoramento`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/servicos/energia-sustentavel`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.PUBLIC_BASE_URL}/contato`,
            lastModified: new Date(),
        }
    ]
}
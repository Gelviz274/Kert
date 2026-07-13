import maletasData from "@/app/coleccion/maletas/data/maletas.json";
import rinonerasData from "@/app/coleccion/rinoneras/data/rinoneras.json";
import otrosData from "@/app/coleccion/otros/data/OtrosProductos.json";
import bolsosData from "@/app/coleccion/bolsos/data/bolsos.json";
import bolsosMultiusoData from "@/app/coleccion/bolsos-multiuso/data/bolsos-multiuso.json";
import bolsasCambrelData from "@/app/coleccion/bolsas-cambrel/data/bolsas-cambrel.json";
import bolsasTelaData from "@/app/coleccion/bolsas-tela/data/bolsas-tela.json";

const BASE_URL = "https://www.creacionkert.com";

export default async function sitemap() {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/sobre-nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/coleccion`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/materiales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/politica-de-privacidad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/terminos-y-condiciones`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  const categoryRoutes = [
    { slug: "maletas", priority: 0.85, data: maletasData.maletas },
    { slug: "rinoneras", priority: 0.85, data: rinonerasData.rinoneras },
    { slug: "otros", priority: 0.85, data: otrosData.productos },
    { slug: "bolsos", priority: 0.85, data: bolsosData.productos },
    { slug: "bolsos-multiuso", priority: 0.85, data: bolsosMultiusoData.productos },
    { slug: "bolsas-cambrel", priority: 0.85, data: bolsasCambrelData.productos },
    { slug: "bolsas-tela", priority: 0.85, data: bolsasTelaData.productos },
  ];

  const categoryPages = categoryRoutes.map(({ slug, priority }) => ({
    url: `${BASE_URL}/coleccion/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));

  const productPages = categoryRoutes.flatMap(({ slug, data }) =>
    data.map((product) => ({
      url: `${BASE_URL}/coleccion/${slug}/${product["name-title"]}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  return [...staticPages, ...categoryPages, ...productPages];
}

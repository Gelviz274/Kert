import React from "react";
import { Backpack } from "lucide-react";
import NavProduct from "@/components/navproduct";
import rinonerasData from "./data/rinoneras.json";

const bags = rinonerasData.rinoneras.map(rinonera => ({
  id: rinonera.id,
  name: rinonera.name,
  category: rinonera.category,
  icon: <Backpack className="w-6 h-6" />,
  direccion: `/coleccion/rinoneras/${rinonera["name-title"]}`
}));

export const metadata = {
  title: "Riñoneras | Kert S.A.S - Catálogo de Riñoneras al Por Mayor",
  description: "Explora nuestra colección de riñoneras al por mayor. Diseños funcionales y modernos para distribuidores y empresas.",
  keywords: "riñoneras al por mayor Colombia, comprar riñoneras por mayor, riñoneras personalizadas con logo, riñoneras promocionales, fabricante riñoneras Bogotá, riñoneras mayoristas Colombia, riñoneras para eventos, riñoneras corporativas",
  alternates: {
    canonical: "https://creacionkert.com/coleccion/rinoneras",
  },
  openGraph: {
    title: "Riñoneras | Kert S.A.S - Catálogo de Riñoneras al Por Mayor",
    description: "Explora nuestra colección de riñoneras al por mayor. Diseños funcionales y modernos para distribuidores y empresas.",
    url: "https://creacionkert.com/coleccion/rinoneras",
    type: "website",
    locale: "es_CO",
    siteName: "Kert S.A.S",
    images: [
      {
        url: "https://creacionkert.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Riñoneras al por mayor - Kert S.A.S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riñoneras | Kert S.A.S - Catálogo de Riñoneras al Por Mayor",
    description: "Explora nuestra colección de riñoneras al por mayor. Diseños funcionales y modernos para distribuidores y empresas.",
    images: ["https://creacionkert.com/og-image.jpg"],
  },
};

export default function RinonerasLayout({ children }) {
  return (
    <div className="flex flex-col w-full">
      <NavProduct bags={bags}/>
      {children}
    </div>
  );
}

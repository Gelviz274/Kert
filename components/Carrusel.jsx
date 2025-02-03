import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils"; // Si usas esta función para concatenar clases

const items = [
  {
    image: "/Fabrica/IMG_1866.jpg",
    title: "Maleta de Viaje",
    description: "Resistente y espaciosa, ideal para viajes largos.",
    buttonText: "Ver más",
    href: "/productos/maletas",
  },
  {
    image: "/Fabrica/IMG_1878.jpg",
    title: "Mochila Escolar",
    description: "Ligera y cómoda para el uso diario.",
    buttonText: "Comprar",
    href: "/productos/mochilas",
  },
  {
    image: "/Fabrica/IMG_1888.jpg",
    title: "Bolsa Deportiva",
    description: "Perfecta para el gimnasio y entrenamientos.",
    buttonText: "Explorar",
    href: "/productos/bolsos",
  },
];

export default function Carrusel() {
  return (
    <Carousel className="w-full h-[600px] relative">
      <CarouselContent className="h-full">
        {items.map((item, index) => (
          <CarouselItem key={index} className="h-full flex items-center justify-center">
            <Card className="w-full h-full overflow-hidden relative">
              {/* Imagen de fondo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0"
              />

              {/* Contenido con fondo semitransparente */}
              <CardContent
                className="relative z-10 w-2/3 h-full flex flex-col items-start justify-center px-20 bg-gradient-to-r from-azul/95 from-60% to-transparent"
              >
                <h3 className="text-4xl font-bold text-white">{item.title}</h3>
                <p className="text-md text-white/60 mt-2">{item.description}</p>
                <a
                  href={item.href}
                  className="mt-4 px-6 py-3 bg-amarillo text-azul rounded-lg font-semibold hover:bg-amarillo/50 transition"
                >
                  {item.buttonText}
                </a>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

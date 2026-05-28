"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const items = [
  {
    image: "/productos/maletas/ref-5-all-in/01.webp",
    title: "ALL-IN",
    description: "Múltiples compartimientos de gran volumen con cremalleras bidireccionales y detalles en rojo de alta resistencia. La máxima capacidad en una sola maleta.",
    buttonText: "Conócela ahora",
    href: "/coleccion/maletas/ref-5-all-in",
  },
  {
    image: "/productos/rinoneras/ref-15-etib/01.webp",
    title: "ETIB",
    description: "Dos compartimientos principales, bolsillo frontal de gran relieve y bolsillos laterales en malla elástica. Ideal para el día a día.",
    buttonText: "Descúbrela aquí",
    href: "/coleccion/rinoneras/ref-15-etib",
  },
  {
    image: "/productos/maletas/ref-9-explorer/01.webp",
    title: "EXPLORER",
    description: "Cinco compartimientos, bolsillo para portátil y tela resistente al agua. Diseñada para los que siempre están en movimiento.",
    buttonText: "Explorar",
    href: "/coleccion/maletas/ref-9-explorer",
  },
  
];

export default function Carrusel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef(null);
  const pathname = usePathname();
  
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  // Función para manejar el cambio manual de diapositiva
  const handleSlideChange = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo(index);
      setActiveIndex(index);
    }
  };

  // Actualizar el índice activo cuando cambia el carrusel
  useEffect(() => {
    const handleSelect = () => {
      if (carouselRef.current && typeof carouselRef.current.selectedScrollSnap === 'function') {
        const index = carouselRef.current.selectedScrollSnap();
        setActiveIndex(index);
      }
    };

    if (carouselRef.current && typeof carouselRef.current.on === 'function') {
      carouselRef.current.on('select', handleSelect);
      // Inicializar el índice activo
      handleSelect();
    }

    return () => {
      if (carouselRef.current && typeof carouselRef.current.off === 'function') {
        carouselRef.current.off('select', handleSelect);
      }
    };
  }, [carouselRef.current]);

  // Reiniciar el carrusel cuando cambia la ruta
  useEffect(() => {
    setActiveIndex(0);
    if (carouselRef.current && typeof carouselRef.current.scrollTo === 'function') {
      carouselRef.current.scrollTo(0);
    }
  }, [pathname]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <Carousel 
        plugins={[plugin.current]}
        className="w-full h-full"
          onMouseEnter={() => {
          if (plugin.current && typeof plugin.current.stop === 'function') {
            plugin.current.stop();
          }
        }}
        onMouseLeave={() => {
          if (plugin.current && typeof plugin.current.play === 'function') {
            plugin.current.play();
          }
        }}
        setApi={(api) => {
          carouselRef.current = api;
        }}
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="h-full">
          {items.map((item, index) => (
            <CarouselItem key={index} className="h-full flex items-center justify-center">
              <Card className="w-full h-full overflow-hidden relative border-none rounded-none">
                {/* Imagen de fondo */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700`}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-azul/70"></div>
                </div>

                {/* Contenido siempre visible */}
                <CardContent className="relative z-10 w-full h-full flex flex-col items-start justify-center px-8 md:px-20 lg:px-28">
                  <div className="max-w-2xl">
                    <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-3">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-md lg:text-lg text-white/80 mb-6 max-w-lg">
                      {item.description}
                    </p>
                    <a
                      href={item.href}
                      className="inline-block px-6 py-3 bg-amarillo text-azul rounded-lg font-semibold hover:bg-white hover:text-azul transition-all duration-300 transform hover:scale-105"
                    >
                      {item.buttonText}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Botones de navegación personalizados */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
          <button 
            onClick={() => {
              if (carouselRef.current && typeof carouselRef.current.scrollPrev === 'function') {
                carouselRef.current.scrollPrev();
              }
            }}
            className="h-12 w-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
          <button 
            onClick={() => {
              if (carouselRef.current && typeof carouselRef.current.scrollNext === 'function') {
                carouselRef.current.scrollNext();
              }
            }}
            className="h-12 w-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/30 backdrop-blur-sm text-white"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Indicadores de slides */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "bg-amarillo w-8" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : "false"}
            />
          ))}
        </div>
        
        {/* Indicador de número de slide actual */}
        <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20">
          {activeIndex + 1} / {items.length}
        </div>
      </Carousel>
    </div>
  );
}

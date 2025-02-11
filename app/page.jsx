"use client";
import React from "react";
import Carrusel from "@/components/Carrusel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Testimonios from "@/components/testimonios";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <>
      <div className="flex text-white bg-azul w-full h-auto">
        <Carrusel />
      </div>
      <section className="bg-gray-50 w-full py-4 flex flex-col items-center">
        <h3 className="text-4xl font-bold p-6 text-gray-900">Sobre Kert</h3>
        <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex gap-10">

            {/* Imagen */}
            <div className="w-full md:w-1/2">
              <Image
                src="/Fabrica/IMG_1866.jpg"
                alt="Maleta de Viaje"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                En Kert nos dedicamos a la fabricación de mochilas, maletas y bolsos de la más alta calidad, con materiales resistentes y duraderos.
                Nuestros productos son ideales para viajes, uso diario y entrenamientos, con diseños modernos y funcionales.
              </p>
              <Link href="/" className="inline-block">
                <Button variant="solid" size="md" className="bg-azul text-amarillo px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition">
                  Conoce más
                </Button>
              </Link>
            </div>
          </div>

        </div>

        {/* Sección de Beneficios */}
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-3 px-6">
          {[
            { icon: TrendingUp, title: 'Socio de Crecimiento', text: 'Ayudamos a nuestros socios a expandir su negocio con precios competitivos y apoyo.' },
            { icon: Shield, title: 'Calidad Garantizada', text: 'Cada producto pasa por rigurosas pruebas de control de calidad.' },
            { icon: Truck, title: 'Logística Global', text: 'Red eficiente de envíos y distribución mundial.' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <item.icon className="w-14 h-14 text-amarillo mb-4" />
              <h3 className="text-xl font-bold text-azul mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.text}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="py-20 px-4 bg-azul">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-5 text-white">Nuestras Categorías de Productos</h2>
          <hr className="w-2/6 h-1 *:p-0  bg-amarillo mx-auto mb-12  " />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Riñoneras',
                image: '/Productos/rinonera-olimpica.jpg',
                description: 'El compañero perfecto para tus viajes y actividades diarias, combinando estilo y comodidad.',
              },
              {
                title: 'Mochilas',
                image: '/Productos/Bolso-azul-rojo.jpg',
                description: 'Mochilas duraderas para uso diario y aventura',
              },
              {
                title: 'Bolsos de Negocios',
                image: '/Productos/Bolso-negro-u.jpg',
                description: 'Diseño moderno y funcional, ideal para el viajero urbano que busca calidad y practicidad.',
              },
            ].map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div
                  className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ backgroundColor: 'rgba(12, 8, 68, 0.6)' }}>
                  <h3 className="text-amarillo/90 text-2xl font-bold mb-2">{product.title}</h3>
                  <p className="text-white text-center px-4">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-center mt-10">
            <Link href="/coleccion">
              <motion.button
                className="bg-[#FFCF00] text-[#0C0844] px-4 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              >
                Ver Colección<ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      <Testimonios />
    </>
  );
}

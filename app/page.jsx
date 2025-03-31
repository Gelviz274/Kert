"use client";
import React from "react";
import Carrusel from "@/components/Carrusel";
import Image from "next/image";
import {
  TrendingUp,
  Shield,
  Globe,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Testimonios from "@/components/testimonios";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="flex text-white bg-azul w-full h-auto">
        <Carrusel />
      </div>
      {/* About Kert Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  width={1200}
                  height={1200}
                  src="/Fabrica/IMG_1871.jpg"
                  alt="Kert Workspace"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-[#0C0844] opacity-10 rounded-2xl"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#FFCF00] rounded-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0C0844] leading-tight">
                Sobre <span className="text-[#FFCF00]">Kert</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                En Kert, nos dedicamos a revolucionar la industria de bolsos al
                por mayor, combinando diseño innovador, calidad excepcional y
                servicio personalizado. Nuestra pasión por la excelencia nos
                impulsa a crear colecciones que marcan tendencia y satisfacen
                las demandas del mercado moderno.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(12, 8, 68, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFCF00] text-[#0C0844] px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center transition-all duration-300 hover:bg-[#FFD700]"
              >
                Conoce más
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 mx-auto mb-6 bg-[#FFCF00] rounded-full flex items-center justify-center"
              >
                <TrendingUp className="h-8 w-8 text-[#0C0844]" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#0C0844] mb-4">
                Socio de Crecimiento
              </h3>
              <p className="text-gray-600">
                Impulsamos el éxito de nuestros clientes con estrategias
                personalizadas y soporte continuo.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 mx-auto mb-6 bg-[#FFCF00] rounded-full flex items-center justify-center"
              >
                <Shield className="h-8 w-8 text-[#0C0844]" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#0C0844] mb-4">
                Calidad Garantizada
              </h3>
              <p className="text-gray-600">
                Cada producto cumple con los más altos estándares de calidad y
                durabilidad.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 mx-auto mb-6 bg-[#FFCF00] rounded-full flex items-center justify-center"
              >
                <Globe className="h-8 w-8 text-[#0C0844]" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#0C0844] mb-4">
                Logística Global
              </h3>
              <p className="text-gray-600">
                Red de distribución eficiente que garantiza entregas puntuales
                en todo el mundo.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-azul">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-5 text-white">
            Nuestras Categorías de Productos
          </h2>
          <div className="w-2/6 h-1  bg-amarillo mx-auto mb-12  " />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Riñoneras",
                image: "/Productos/rinonera-olimpica.jpg",
                description:
                  "El compañero perfecto para tus viajes y actividades diarias, combinando estilo y comodidad.",
              },
              {
                title: "Mochilas",
                image: "/Productos/Bolso-azul-rojo.jpg",
                description: "Mochilas duraderas para uso diario y aventura",
              },
              {
                title: "Bolsos de Negocios",
                image: "/Productos/Bolso-negro-u.jpg",
                description:
                  "Diseño moderno y funcional, ideal para el viajero urbano que busca calidad y practicidad.",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div
                  className="h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ backgroundColor: "rgba(12, 8, 68, 0.6)" }}
                >
                  <h3 className="text-amarillo/90 text-2xl font-bold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-white text-center px-4">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full items-center justify-center mt-10">
            <Link href="/coleccion">
              <motion.button
                className="bg-[#FFCF00] text-[#0C0844] px-4 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-amarillo/90 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ver Colección
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      <Testimonios />
    </>
  );
}

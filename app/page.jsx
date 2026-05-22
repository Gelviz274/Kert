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
                  src="/fabrica/img_1871.jpg"
                  alt="Kert Workspace"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-azul opacity-10 rounded-2xl"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amarillo rounded-2xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-azul leading-tight">
                Sobre <span className="text-amarillo">Kert</span>
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
                className="bg-amarillo text-azul px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center transition-all duration-300 hover:bg-[#FFD700]"
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
                className="w-16 h-16 mx-auto mb-6 bg-amarillo rounded-full flex items-center justify-center"
              >
                <TrendingUp className="h-8 w-8 text-azul" />
              </motion.div>
              <h3 className="text-xl font-semibold text-azul mb-4">
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
                className="w-16 h-16 mx-auto mb-6 bg-amarillo rounded-full flex items-center justify-center"
              >
                <Shield className="h-8 w-8 text-azul" />
              </motion.div>
              <h3 className="text-xl font-semibold text-azul mb-4">
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
                className="w-16 h-16 mx-auto mb-6 bg-amarillo rounded-full flex items-center justify-center"
              >
                <Globe className="h-8 w-8 text-azul" />
              </motion.div>
              <h3 className="text-xl font-semibold text-azul mb-4">
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

      <section className="py-24 px-4 bg-linear-to-b from-azul to-[#05004c] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">
              Nuestras Categorías de Productos
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amarillo to-amarillo/50 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Riñoneras",
                image: "/productos/olimpica/cangureraolimpica.webp",
                description:
                  "El compañero perfecto para tus viajes y actividades diarias, combinando estilo y comodidad.",
              },
              {
                title: "Mochilas",
                image: "/productos/isabel/bolso-azul-rojo.jpg",
                description: "Mochilas duraderas para uso diario y aventura",
              },
              {
                title: "Bolsos de Negocios",
                image: "/productos/hubemar/hubemar.jpg",
                description:
                  "Diseño moderno y funcional, ideal para el viajero urbano que busca calidad y practicidad.",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amarillo/20 transition-all duration-500"
              >
                <div
                  className="h-96 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-azul/90 via-azul/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-amarillo text-3xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {product.title}
                  </h3>
                  <p className="text-white/90 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {product.description}
                  </p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="mt-4"
                  >
                    <Link href={`/coleccion/${product.title.toLowerCase()}`}>
                      <button className="bg-amarillo/90 hover:bg-amarillo text-azul px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                        Explorar
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex w-full items-center justify-center mt-16"
          >
            <Link href="/coleccion">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amarillo text-azul px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-3 hover:bg-amarillo/90 transition-all duration-300 shadow-lg hover:shadow-amarillo/20"
              >
                Ver Colección Completa
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Testimonios />
    </>
  );
}

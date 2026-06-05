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
import { useRouter } from "next/navigation";
import Testimonios from "@/components/testimonios";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex text-white bg-azul w-full h-auto">
        <Carrusel />
      </div>

      {/* Transición sutil entre carrusel y disclaimer */}
      <div className="relative h-16 md:h-20 bg-azul overflow-hidden -mt-1">
        <div className="absolute inset-0 bg-gradient-to-b from-azul/0 via-amarillo/[0.02] to-azul" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] md:w-[40%] h-px bg-gradient-to-r from-transparent via-amarillo/20 to-transparent" />
      </div>

      {/* Disclaimer destacado */}
      <section className="bg-azul py-20 md:py-28 relative overflow-hidden border-b border-white/5">
        {/* Brillos sutiles con opacidad (sin blur para respetar el design system) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,207,0,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,207,0,0.02)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-white/10 rounded-sm p-8 md:p-12 lg:p-16 relative bg-white/[0.01]"
          >
            {/* Esquinas decorativas de precisión (concepto de taller editorial/artesanal) */}
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-amarillo/40 rounded-tl-sm" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-amarillo/40 rounded-tr-sm" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-amarillo/40 rounded-bl-sm" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-amarillo/40 rounded-br-sm" />

            {/* Columna Izquierda: Titular y Badge */}
            <div className="lg:col-span-7 space-y-4">
              <motion.span
                variants={{
                  initial: { opacity: 0, y: 15 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="inline-flex items-center gap-2 text-amarillo text-xs font-bold tracking-[0.25em] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amarillo animate-pulse" />
                Personalización Empresarial
              </motion.span>
              <motion.h2
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
              >
                Tu marca, <br className="hidden md:inline" />
                en cada detalle.
              </motion.h2>
            </div>

            {/* Divisor Vertical Elegante (solo en desktop) */}
            <div className="hidden lg:flex lg:col-span-1 justify-center h-full py-4">
              <div className="w-px h-32 bg-white/10" />
            </div>

            {/* Columna Derecha: Texto descriptivo y CTA */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:pl-4">
              <motion.p
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-white/60 text-base md:text-lg leading-relaxed font-normal"
              >
                Maletas, morrales y bolsos corporativos personalizados y fabricados a la medida de tu organización.
              </motion.p>
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 15 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <motion.a
                  href="https://wa.me/573116095224"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center bg-amarillo text-azul px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-amarillo/90 transition-all cursor-pointer w-full lg:w-auto"
                >
                  Cotizar ahora
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
                onClick={() => router.push('/sobre-nosotros')}
                className="bg-amarillo text-azul px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center transition-all duration-300 hover:bg-[#FFD700] cursor-pointer"
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
                title: "Maletas",
                slug: "maletas",
                image: "/productos/maletas/ref-9-explorer/01.webp",
                description: "Diseñadas para resistir el ritmo diario, combinando estilo, funcionalidad y materiales de alta calidad.",
              },
              {
                title: "Riñoneras",
                slug: "rinoneras",
                image: "/productos/rinoneras/ref-15-etib/01.webp",
                description: "Prácticas, ligeras y con el espacio justo para lo esencial. Ideal para eventos, promociones o uso diario.",
              },
              {
                title: "Bolsos",
                slug: "bolsos",
                image: "/productos/bolsos/ref-26-city-bag/01.webp",
                description: "Diseño moderno y funcional, ideal para el viajero urbano que busca calidad y practicidad.",
              },
              {
                title: "Bolsos Multiuso",
                slug: "bolsos-multiuso",
                image: "/productos/bolsos-multiuso/ref-29-weekend/01.webp",
                description: "Versatilidad y amplitud para tus actividades diarias, viajes y dotación empresarial.",
              },
              {
                title: "Bolsas en Cambrel",
                slug: "bolsas-cambrel",
                image: "/productos/bolsas-cambrel/ref-20-cambrel-basic/01.webp",
                description: "Resistencia y liviandad en una sola bolsa. Ideales para ferias, promociones y eventos.",
              },
              {
                title: "Bolsas en Tela",
                slug: "bolsas-tela",
                image: "/productos/bolsas-tela/ref-23-canvas-classic/01.webp",
                description: "Elegancia y durabilidad en materiales textiles de alta calidad para uso diario.",
              },
              {
                title: "Otros",
                slug: "otros",
                image: "/productos/otros/ref-12-botiquin/01.webp",
                description: "Soluciones especializadas: botiquines, pierneras y accesorios tácticos funcionales.",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amarillo/20 transition-all duration-500 cursor-pointer"
              >
                <div
                  className="h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-azul/90 via-azul/40 to-azul/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                  <h3 className="text-amarillo text-3xl font-bold mb-3">
                    {product.title}
                  </h3>
                  <p className="text-white/90 text-center max-w-xs">
                    {product.description}
                  </p>
                  <Link href={`/coleccion/${product.slug}`} className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-amarillo/90 hover:bg-amarillo text-azul px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer"
                    >
                      Explorar
                    </motion.button>
                  </Link>
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

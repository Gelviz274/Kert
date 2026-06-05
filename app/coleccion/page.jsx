"use client";

import React from "react";
import { motion} from "framer-motion";
import {
  ArrowRight,
  Download,
  Package,
  Truck,
  Users,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Maletas",
    subtitle: "Pedido mínimo: 50 unidades",
    image: "/productos/maletas/ref-1-color-basic/01.webp",
    className: "col-span-1 row-span-1",
    href: "/coleccion/maletas",
  },
  {
    title: "Riñoneras",
    subtitle: "Pedido mínimo: 150 unidades",
    image: "/productos/rinoneras/ref-15-etib/01.webp",
    className: "col-span-1 row-span-1",
    href: "/coleccion/rinoneras",
  },
  {
    title: "Bolsos",
    subtitle: "Pedido mínimo: 150 unidades",
    image: "/productos/bolsos/ref-26-city-bag/01.webp",
    className: "col-span-1 row-span-1",
    href: "/coleccion/bolsos",
  },
  {
    title: "Bolsos Multiuso",
    subtitle: "Pedido mínimo: 120 unidades",
    image: "/productos/bolsos-multiuso/ref-29-weekend/01.webp",
    className: "col-span-1 row-span-1",
    href: "/coleccion/bolsos-multiuso",
  },
  {
    title: "Bolsas en Cambrel",
    subtitle: "Pedido mínimo: 300 unidades",
    image: "/productos/bolsas-cambrel/ref-20-cambrel-basic/01.webp",
    className: "col-span-1 row-span-1",
    href: "/coleccion/bolsas-cambrel",
  },
  {
    title: "Bolsas en Tela",
    subtitle: "Pedido mínimo: 150 unidades",
    image: "/productos/bolsas-tela/ref-23-canvas-classic/01.webp",
    className: "col-span-1 row-span-1",
    href: "/coleccion/bolsas-tela",
  },
  {
    title: "Otros",
    subtitle: "Pedido mínimo: 50 unidades",
    image: "/productos/otros/ref-12-botiquin/01.webp",
    className: "col-span-1 row-span-1",
    href: "/coleccion/otros",
  },
];

const benefits = [
  {
    icon: Package,
    title: "Precios Mayoristas",
    description: "Descuentos exclusivos por volumen de compra",
  },
  {
    icon: Truck,
    title: "Envío Nacional",
    description: "Distribución a todo el país",
  },
  {
    icon: Users,
    title: "Soporte Dedicado",
    description: "Asesoría personalizada para tu negocio",
  },
];

const mas_vendidos = [
  {
    id: 1,
    Nombre: "ETIB",
    Material: "Lona de alta resistencia",
    Pedido_min: 300,
    image: "/productos/rinoneras/ref-15-etib/01.webp",
  },
  {
    id: 2,
    Nombre: "ALL-IN",
    Material: "Lona Morral importada",
    Pedido_min: 250,
    image: "/productos/maletas/ref-5-all-in/01.webp",
  },
  {
    id: 3,
    Nombre: "BLACK MEDIUM",
    Material: "Lona resistente",
    Pedido_min: 250,
    image: "/productos/maletas/ref-2-black-medium/01.webp",
  },
  {
    id: 4,
    Nombre: "BOTIQUÍN",
    Material: "Lona Morral Nacional",
    Pedido_min: 300,
    image: "/productos/otros/ref-12-botiquin/01.webp",
  },
];

const stats = [
  { number: "500+", label: "Clientes Satisfechos" },
  { number: "10K+", label: "Productos Entregados" },
  { number: "98%", label: "Tasa de Satisfacción" },
  { number: "100%", label: "Soporte Personalizado" },
];

export default function ColeccionPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-azul to-[#05004c] text-white">
      {/* Hero Section - Mejorado */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/productos/maletas/ref-5-all-in/02.webp"
            alt="Hero background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-azul/40 via-azul/20 to-azul/60" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="bg-amarillo/20 text-amarillo px-4 py-2 rounded-full text-sm font-medium">
              Mayorista Oficial
            </span>
          </motion.div>
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-white/80"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Colección Kert
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Calidad y diseño exclusivo para tu negocio
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="/Portafolio%202026%20KERT%20S.A.S.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amarillo text-azul px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-amarillo/90 transition-all duration-300 shadow-lg hover:shadow-amarillo/20 cursor-pointer"
            >
              Descargar catálogo <Download className="w-5 h-5" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              onClick={() =>
                window.open("https://wa.me/+573116095224", "_blank")
              }
            >
              Contactar por WhatsApp
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
        </motion.div>
      </section>

      {/* Disclaimer llamativo */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              initial: {},
              animate: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden border border-white/10"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amarillo via-amarillo/60 to-transparent" />
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-amarillo/40 rounded-tl-sm" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-amarillo/40 rounded-tr-sm" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-amarillo/40 rounded-bl-sm" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-amarillo/40 rounded-br-sm" />

            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 text-center lg:text-left">
                <motion.span
                  variants={{
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="inline-flex items-center gap-2 text-amarillo text-xs font-bold tracking-[0.25em] uppercase mb-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amarillo animate-pulse" />
                  Personalización Empresarial
                </motion.span>
                <motion.h2
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4"
                >
                  Tu marca, <br className="hidden md:inline" />
                  en cada detalle.
                </motion.h2>
                <motion.p
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl font-normal"
                >
                  Maletas, morrales y bolsos corporativos personalizados y fabricados a la medida de tu organización.
                </motion.p>
              </div>
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 15 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flex-shrink-0"
              >
                <motion.a
                  href="https://wa.me/573116095224"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center bg-amarillo text-azul px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-amarillo/90 transition-all cursor-pointer"
                >
                  Cotizar ahora
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Nueva */}
      <section className="py-16 bg-white/5 relative">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-amarillo mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Mejorado */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amarillo font-medium mb-2 block">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/80">
              Ventajas para Mayoristas
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amarillo/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-amarillo/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-amarillo" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - Mejorado */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amarillo font-medium mb-2 block">
            Explora nuestra colección
          </span>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/80">
            Nuestro Catálogo
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-amarillo/20 transition-all duration-500 ${category.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-azul via-azul/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-amarillo mb-4">{category.subtitle}</p>
                  <Link href={category.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-white bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                    >
                      Ver catálogo <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products - Rediseñado premium */}
      <section className="bg-white/5 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <span className="text-amarillo text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
              Productos destacados
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Los Más Vendidos
            </h2>
            <div className="w-16 h-px bg-amarillo/40 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mas_vendidos.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group bg-white/[0.05] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.06] hover:border-amarillo/30 transition-all duration-500"
              >
                {/* Imagen con overlay hover */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.Nombre}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-azul/80 via-azul/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Badge Más vendido */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-3 left-3"
                  >
                    <span className="inline-flex items-center gap-1.5 bg-amarillo text-azul text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide shadow-lg shadow-amarillo/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-azul animate-pulse" />
                      Más vendido
                    </span>
                  </motion.div>
                </div>

                {/* Información del producto */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-amarillo transition-colors duration-300">
                    {item.Nombre}
                  </h3>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.12em] min-w-[64px]">
                        Material
                      </span>
                      <span className="text-white/70 text-sm">
                        {item.Material}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.12em] min-w-[64px]">
                        Mínimo
                      </span>
                      <span className="text-amarillo font-bold text-sm">
                        {item.Pedido_min} unidades
                      </span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open("https://wa.me/+573116095224", "_blank")}
                    className="w-full mt-2 bg-amarillo/10 hover:bg-amarillo text-amarillo hover:text-azul border border-amarillo/20 hover:border-amarillo px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
                  >
                    Consultar precio
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mejorado */}
      <section className="py-32 text-center relative">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-linear-to-r from-white to-white/80">
              Impulsa tu negocio con productos de calidad al mejor precio
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Únete a nuestra red de distribuidores y accede a precios
              exclusivos, productos de alta calidad y soporte personalizado.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amarillo text-azul px-12 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-amarillo/90 transition-all duration-300 shadow-lg hover:shadow-amarillo/20"
              onClick={() =>
                window.open("https://wa.me/+573116095224", "_blank")
              }
            >
              Contactar <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

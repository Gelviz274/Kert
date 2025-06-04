"use client";

import React from "react";
import { motion} from "framer-motion";
import {
  ArrowRight,
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
    image: "/Productos/Bolso-negro-u.jpg",
    className: "col-span-1 row-span-1",
    href: "/coleccion/maletas",
  },
  {
    title: "Bolsos",
    subtitle: "Pedido mínimo: 100 unidades",
    image: "/Productos/bolso-dhl.jpg",
    className: "col-span-1 row-span-1",
    href: "/coleccion/bolsos",
  },
  {
    title: "Rinoneras",
    subtitle: "Pedido mínimo: 200 unidades",
    image: "/Productos/rinonera-negra.jpg",
    className: "col-span-1 row-span-1",
    href: "/coleccion/rinoneras",
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
    Nombre: "Rinonera 'Auricular' ",
    Material: "Lona Guayera",
    Pedido_min: 100,
    image: "/Productos/rinonera-negra.jpg",
  },
  {
    id: 2,
    Nombre: "Bolso 'Isabel'",
    Material: "Lona Morral importado",
    Pedido_min: 200,
    image: "/Productos/Bolso-azul-rojo.jpg",
  },
  {
    id: 3,
    Nombre: "Morral 'Fura'",
    Material: "Lona Morral Nacional",
    Pedido_min: 200,
    image: "/Productos/Bolso-negro-u.jpg",
  },
  {
    id: 4,
    Nombre: "Botiquin Cruz Roja",
    Material: "Lona Morral Nacional",
    Pedido_min: 200,
    image: "/Productos/Botiquin-cruz-roja.jpg",
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
    <main className="min-h-screen bg-gradient-to-b from-azul to-[#05004c] text-white">
      {/* Hero Section - Mejorado */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Productos/Bolso-azul-rojo.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-azul/40 via-azul/20 to-azul/60" />
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
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
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amarillo text-azul px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-amarillo/90 transition-all duration-300 shadow-lg hover:shadow-amarillo/20"
            >
              Solicitar catálogo <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
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

      {/* Stats Section - Nueva */}
      <section className="py-16 bg-white/5 relative">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
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
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
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
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
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
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
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
                <div className="absolute inset-0 bg-gradient-to-t from-azul via-azul/50 to-transparent opacity-80" />
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

      {/* Featured Products - Mejorado */}
      <section className="bg-white/5 py-24 relative">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amarillo font-medium mb-2 block">
              Productos destacados
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Productos Más Vendidos
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {mas_vendidos.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-amarillo/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.Nombre}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-amarillo text-azul px-2 py-1 rounded-full text-xs font-semibold">
                    Más vendido
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.Nombre}</h3>
                <p className="text-amarillo mb-2">
                  Mínimo {item.Pedido_min} unidades
                </p>
                <div className="flex w-full gap-2">
                  <p className="text-white/80 font-medium">Material: </p>
                  <p className="text-gray-400">{item.Material}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  onClick={() =>
                    window.open("https://wa.me/+573116095224", "_blank")
                  }
                >
                  Consultar precio
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mejorado */}
      <section className="py-32 text-center relative">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
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

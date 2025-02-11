"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Package, Truck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Maletas",
    subtitle: "Pedido mínimo: 50 unidades",
    image: "/Productos/Bolso-negro-u.jpg",
    className: "col-span-1 row-span-1",
    href:"/coleccion/maletas"
  },
  {
    title: "Bolsos",
    subtitle: "Pedido mínimo: 100 unidades",
    image: "/Productos/bolso-dhl.jpg",
    className: "col-span-1 row-span-1",
    href:"/coleccion/bolsos"
  },
  {
    title: "Rinoneras",
    subtitle: "Pedido mínimo: 200 unidades",
    image: "/Productos/rinonera-negra.jpg",
    className: "col-span-1 row-span-1",
    href:"/coleccion/rinoneras"
  }
];

const benefits = [
  {
    icon: Package,
    title: "Precios Mayoristas",
    description: "Descuentos exclusivos por volumen de compra"
  },
  {
    icon: Truck,
    title: "Envío Nacional",
    description: "Distribución a todo el país"
  },
  {
    icon: Users,
    title: "Soporte Dedicado",
    description: "Asesoría personalizada para tu negocio"
  }
];


const mas_vendidos = [
  {
    id: 1,
    Nombre: "Rinonera 'Auricular' ",
    Material: "Lona Guayera",
    Pedido_min: 100,
    image: "/Productos/rinonera-negra.jpg"
  },
  {
    id: 2,
    Nombre: "Bolso 'Isabel'",
    Material: "Lona Morral importado",
    Pedido_min: 200,
    image: "/Productos/Bolso-azul-rojo.jpg"
  },
  {
    id: 3,
    Nombre: "Morral 'Fura'",
    Material: "Lona Morral Nacional",
    Pedido_min: 200,
    image: "/Productos/Bolso-negro-u.jpg"
  },
  {
    id: 4,
    Nombre: "Botiquin Cruz Roja",
    Material: "Lona Morral Nacional",
    Pedido_min: 200,
    image: "/Productos/Botiquin-cruz-roja.jpg"
  }
]

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export default function ColeccionPage() {
  return (
    <main className="min-h-screen bg-[#0C0844] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Productos/Bolso-azul-rojo.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Colección Kert
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Calidad y diseño exclusivo para tu negocio
          </motion.p>
          <motion.button
            className="bg-[#FFCF00] text-[#0C0844] px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto hover:bg-white transition-colors duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar catálogo  <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            {...fadeInUp}
          >
            Ventajas para Mayoristas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-[#FFCF00]" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          {...fadeInUp}
        >
          Nuestro Catálogo
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`relative overflow-hidden rounded-2xl ${category.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0844] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-[#FFCF00] mb-4">{category.subtitle}</p>
                  <Link href={category.href}>
                  <button className="flex items-center gap-2 text-white bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors">
                    Ver catálogo <ArrowRight className="w-4 h-4" />
                  </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            {...fadeInUp}
          >
            Productos Más Vendidos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {mas_vendidos.map((item) => (
            
              <motion.div
                key={item.id}
                className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.Nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.Nombre}</h3>
                <p className="text-gray-400 mb-2">Minimo {item.Pedido_min} unidades</p>
                <div className="flex w-full gap-2">
                  <p className="text-white font-semibold ">Material: </p>
                  <p className="text-gray-400 font-semibold">{item.Material}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Impulsa tu negocio con productos de calidad al mejor precio
          </motion.h2>
          <motion.button
            className="bg-[#FFCF00] text-[#0C0844] px-12 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-white transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar representante <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </main>
  );
}
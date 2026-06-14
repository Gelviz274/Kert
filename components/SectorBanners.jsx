"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { GraduationCap, Megaphone, Truck, Landmark } from "lucide-react"

const sectores = [
  {
    titulo: "Educación, Eventos e Instituciones",
    descripcion: "Kits de bienvenida para estudiantes, maletines para congresos y recordatorios de marca.",
    icono: GraduationCap,
  },
  {
    titulo: "Marketing, Publicidad y Consumo Masivo",
    descripcion: "Diseños atractivos para campañas masivas de posicionamiento e identidad corporativa.",
    icono: Megaphone,
  },
  {
    titulo: "Transporte, Logística y Manufactura",
    descripcion: "Morrales reforzados de alta durabilidad y resistencia extrema para personal operativo de campo.",
    icono: Truck,
  },
  {
    titulo: "Corporativo, Servicios, Financiero y Gobierno",
    descripcion: "Maletines ejecutivos premium, portadocumentos de alta gama y regalos ejecutivos para licitaciones.",
    icono: Landmark,
  },
]

export default function SectorBanners() {
  return (
    <section className="bg-azul py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Soluciones por Sector
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/50 text-center max-w-2xl mx-auto mb-12 text-lg"
        >
          Cada industria tiene necesidades distintas. Te ayudamos a encontrar el producto ideal para tu sector.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {sectores.map((sector, i) => {
            const Icon = sector.icono
            return (
              <motion.div
                key={sector.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-amarillo/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amarillo" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{sector.titulo}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{sector.descripcion}</p>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-amarillo text-azul font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Solicitar Cotización
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

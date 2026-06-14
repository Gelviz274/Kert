"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Phone,
  FileDown,
  Ruler,
  Layers,
  ShieldCheck,
  Zap,
  GraduationCap,
  Megaphone,
  Truck,
  Landmark,
  Check,
  ArrowRight,
  Sparkles,
  Gem,
  Star,
} from "lucide-react"
import { useRef, useState, useEffect, useMemo } from "react"

const lonas = [
  { nombre: "Lona 840", composicion: "Poliéster + PVC", caracteristica: "Alta resistencia e impermeabilidad", uso: "Maletas ejecutivas y morrales corporativos", rango: "premium" },
  { nombre: "Lona África", composicion: "Poliéster plastificado", caracteristica: "Flexible y económica", uso: "Morrales promocionales", rango: "economica" },
  { nombre: "Lona África PVC", composicion: "Poliéster + PVC", caracteristica: "Mayor impermeabilidad", uso: "Maletas económicas", rango: "economica" },
  { nombre: "Lona Ducati", composicion: "PVC Poliéster texturizado", caracteristica: "Acabado premium y moderno", uso: "Morrales corporativos premium", rango: "premium" },
  { nombre: "Lona Guayera", composicion: "Tafetán laminado", caracteristica: "Liviana y económica", uso: "Bolsos promocionales", rango: "economica" },
  { nombre: "Lona Guayera PVC", composicion: "Tafetán + PVC", caracteristica: "Mayor cuerpo y resistencia", uso: "Morrales corporativos", rango: "estandar" },
  { nombre: "Lona HTR", composicion: "Poliéster plastificado", caracteristica: "Alta resistencia", uso: "Morrales de carga", rango: "estandar" },
  { nombre: "Lona HTR Estampada", composicion: "HTR sublimable", caracteristica: "Personalización gráfica total", uso: "Merchandising y promociones", rango: "estandar" },
  { nombre: "Lona HTR Escarchada", composicion: "HTR especial", caracteristica: "Acabado decorativo", uso: "Productos promocionales", rango: "estandar" },
  { nombre: "Lona Kodra", composicion: "Poliéster PVC compacto", caracteristica: "Estructura firme", uso: "Bolsos económicos y estructurados", rango: "economica" },
  { nombre: "Lona Madre Selva", composicion: "Tejido grueso textil", caracteristica: "Apariencia textil natural", uso: "Bolsos corporativos", rango: "premium" },
  { nombre: "Lona Morral PU", composicion: "Poliéster + PU/PVC", caracteristica: "Uso frecuente en morrales", uso: "Morrales corporativos", rango: "estandar" },
  { nombre: "Lona Nigeria", composicion: "Poliéster plastificado", caracteristica: "Flexible y durable", uso: "Morrales y bolsos", rango: "estandar" },
  { nombre: "Lona Oxford", composicion: "Poliéster Oxford PVC", caracteristica: "Versátil y de uso popular", uso: "Morrales, tulas y bolsos", rango: "estandar" },
  { nombre: "Lona Rombo", composicion: "Jacquard + PVC", caracteristica: "Diseño premium texturizado", uso: "Línea ejecutiva", rango: "premium" },
  { nombre: "Lona Suiza PVC", composicion: "Poliéster PVC", caracteristica: "Alta resistencia estructural", uso: "Maletas ejecutivas", rango: "premium" },
  { nombre: "Adidas", composicion: "Poliéster texturizado", caracteristica: "Ligera y resistente", uso: "Dotaciones empresariales", rango: "estandar" },
  { nombre: "Alaska", composicion: "Poliéster antifluido", caracteristica: "Liviana con tratamiento especial", uso: "Uniformes y bolsos", rango: "economica" },
]

const cremalleras = [
  { nombre: "Nylon #5", tipo: "Nylon", medida: "#5", caracteristica: "Liviana y flexible", uso: "Bolsillos internos" },
  { nombre: "Nylon #8", tipo: "Nylon", medida: "#8", caracteristica: "Resistencia media", uso: "Morrales corporativos" },
  { nombre: "Nylon #10", tipo: "Nylon", medida: "#10", caracteristica: "Alta resistencia", uso: "Maletas ejecutivas" },
  { nombre: "Invisible #3-5", tipo: "Invisible", medida: "#3 - #5", caracteristica: "Acabado discreto", uso: "Compartimientos ocultos" },
  { nombre: "Diente Plástico #5-10", tipo: "Diente Plástico", medida: "#5 - #10", caracteristica: "Mayor durabilidad", uso: "Maletas de viaje" },
  { nombre: "Metálica #5-8", tipo: "Metálica", medida: "#5 - #8", caracteristica: "Acabado premium", uso: "Línea ejecutiva" },
]

const reatas = [
  { nombre: "Reata Poliéster", variante: "1 / 1.5 / 2 pulgadas", usos: "Correas pequeñas, morrales corporativos y maletas de viaje" },
  { nombre: "Reata Nylon", variante: "1 / 1.5 / 2 pulgadas", usos: "Alta tenacidad para aplicaciones de carga" },
  { nombre: "Reata Espiga", variante: "1 pulgada", usos: "Ajustes ligeros y detalles decorativos" },
  { nombre: "Reata Algodón", variante: "1 / 1.5 pulgadas", usos: "Acabado natural y orgánico" },
]

const sectores = [
  { titulo: "Educación, Eventos e Instituciones", descripcion: "Kits de bienvenida, maletines para congresos y recordatorios de marca con tu identidad.", icono: GraduationCap },
  { titulo: "Marketing, Publicidad y Consumo Masivo", descripcion: "Campañas masivas de posicionamiento e identidad corporativa con diseño Impactante.", icono: Megaphone },
  { titulo: "Transporte, Logística y Manufactura", descripcion: "Morrales reforzados de alta durabilidad para personal operativo en terreno.", icono: Truck },
  { titulo: "Corporativo, Financiero y Gobierno", descripcion: "Maletines ejecutivos premium, portadocumentos y regalos para licitaciones.", icono: Landmark },
]

const categorias = [
  { id: "lonas", label: "Lonas" },
  { id: "cremalleras", label: "Cremalleras" },
  { id: "reatas", label: "Reatas" },
  { id: "herrajes", label: "Herrajes" },
  { id: "insumos", label: "Insumos" },
]

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])
  const stableIds = useMemo(() => sectionIds, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )
    stableIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [stableIds])
  return active
}

function stagger(delay = 0.05) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    viewport: { once: true },
  }
}

const rangoEstilos = {
  premium: {
    bg: "bg-azul/[0.03]",
    border: "border-azul/10",
    hoverBorder: "hover:border-azul/25",
    badge: "bg-azul/10 text-azul border-azul/15",
    icon: Gem,
    label: "Premium",
  },
  estandar: {
    bg: "bg-cyan-50/40",
    border: "border-cyan-200/60",
    hoverBorder: "hover:border-cyan-300/80",
    badge: "bg-cyan-100/60 text-cyan-800 border-cyan-200/60",
    icon: Star,
    label: "Estándar",
  },
  economica: {
    bg: "bg-rose-50/40",
    border: "border-rose-200/60",
    hoverBorder: "hover:border-rose-300/80",
    badge: "bg-rose-100/60 text-rose-800 border-rose-200/60",
    icon: Sparkles,
    label: "Económica",
  },
}

export default function MaterialesPage() {
  const sectionIds = categorias.map((c) => c.id)
  const activeSection = useActiveSection(sectionIds)

  return (
    <main className="min-h-screen bg-white">

      {/* ─── HERO ─── */}
      <section className="relative bg-azul text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,207,0,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,90,95,0.03)_0%,transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-24 md:pt-36 md:pb-32">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-amarillo text-sm font-bold tracking-[0.2em] uppercase mb-4"
            >
              Catálogo Técnico
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Materiales
              <br />
              <span className="text-white/70">e Insumos</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              Cada producto Kert nace de una selección precisa de materiales.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="https://wa.me/+573116095224?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20de%20materiales"
                target="_blank"
                className="group inline-flex items-center gap-2.5 bg-amarillo text-azul font-semibold px-7 py-3.5 rounded-full hover:scale-[1.03] transition-transform"
              >
                <Phone className="w-4 h-4" />
                Cotización por WhatsApp
              </Link>
              <a
                href="/Portafolio 2026 KERT S.A.S.pdf"
                download
                className="group inline-flex items-center gap-2.5 border border-white/20 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/5 transition-colors"
              >
                <FileDown className="w-4 h-4" />
                Descargar Catálogo PDF
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DISCLAIMER ─── */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-amber-50 rounded-xl p-5 md:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amarillo/20 flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <p className="font-semibold text-azul text-lg">Capacidad de personalización total</p>
              <p className="text-gray-600 mt-1">
                Kert tiene la capacidad de trabajar con <strong>cualquier tipo de lona o material</strong>{" "}
                solicitado por el cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STICKY SECTION NAV ─── */}
      <div className="sticky top-[68px] z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-4 flex overflow-x-auto gap-1 py-3 scrollbar-none">
          {categorias.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === cat.id
                  ? "bg-azul text-white"
                  : "text-gray-500 hover:text-azul hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ─── LONAS ─── */}
      <section id="lonas" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...stagger()}>
            <span className="inline-block text-amarillo text-sm font-bold tracking-[0.2em] uppercase mb-3">01</span>
            <h2 className="text-4xl md:text-5xl font-bold text-azul mb-4">Lonas</h2>
            <p className="text-gray-500 max-w-2xl mb-3 text-lg">
              Dieciocho tipos de lona clasificados por rango de uso y rendimiento.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-azul bg-azul/5 rounded-full px-3 py-1">
                <Gem className="w-3 h-3" /> Premium
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-700 bg-cyan-50 rounded-full px-3 py-1">
                <Star className="w-3 h-3" /> Estándar
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-700 bg-rose-50 rounded-full px-3 py-1">
                <Sparkles className="w-3 h-3" /> Económica
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lonas.map((lona, i) => {
              const estilo = rangoEstilos[lona.rango]
              const IconoRango = estilo.icon
              return (
                <motion.div
                  key={lona.nombre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.08 } }}
                  className={`group rounded-xl p-5 border cursor-default ${estilo.bg} ${estilo.border} ${estilo.hoverBorder} transition-colors`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        lona.rango === "premium" ? "bg-azul/10" :
                        lona.rango === "estandar" ? "bg-cyan-100/60" :
                        "bg-rose-100/60"
                      }`}>
                        <IconoRango className={`w-3.5 h-3.5 ${
                          lona.rango === "premium" ? "text-azul" :
                          lona.rango === "estandar" ? "text-cyan-700" :
                          "text-rose-600"
                        }`} />
                      </div>
                      <h3 className="text-lg font-bold text-azul">{lona.nombre}</h3>
                    </div>
                    <span className={`text-[10px] font-bold tracking-wider uppercase rounded-full px-2.5 py-0.5 shrink-0 ${estilo.badge}`}>
                      {estilo.label}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm ml-9">
                    <div className="flex items-start gap-2">
                      <Layers className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{lona.composicion}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                      <span className="text-gray-600">{lona.caracteristica}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 ml-9">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Uso recomendado</p>
                    <p className="text-sm text-azul/70 mt-0.5">{lona.uso}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CREMALLERAS ─── */}
      <section id="cremalleras" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...stagger()}>
            <span className="inline-block text-amarillo text-sm font-bold tracking-[0.2em] uppercase mb-3">02</span>
            <h2 className="text-4xl md:text-5xl font-bold text-azul mb-4">Cremalleras</h2>
            <p className="text-gray-500 max-w-2xl mb-12 text-lg">
              Seis tipos clasificados por resistencia y aplicación.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {cremalleras.map((c, i) => {
              const badgeBg = c.tipo === "Metálica" ? "bg-amber-100/70 text-amber-800 border-amber-200/60" :
                c.tipo === "Invisible" ? "bg-gray-100 text-gray-600 border-gray-200" :
                c.tipo === "Diente Plástico" ? "bg-sky-100/70 text-sky-800 border-sky-200/60" :
                "bg-azul/5 text-azul/60 border-azul/10"
              const dotColor = c.tipo === "Metálica" ? "bg-amber-400" :
                c.tipo === "Invisible" ? "bg-gray-300" :
                c.tipo === "Diente Plástico" ? "bg-sky-400" :
                "bg-azul/20"
              return (
                <motion.div
                  key={c.nombre}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -2, transition: { duration: 0.08 } }}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-azul/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`} />
                    <h3 className="font-bold text-azul text-sm">{c.nombre}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{c.caracteristica}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{c.uso}</span>
                    <span className={`text-[10px] font-bold tracking-wider uppercase rounded-full px-2.5 py-0.5 border ${badgeBg}`}>
                      {c.tipo === "Metálica" ? "Premium" : c.tipo === "Invisible" ? "Oculto" : c.tipo === "Diente Plástico" ? "Durable" : c.medida}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── REATAS ─── */}
      <section id="reatas" className="py-16 md:py-24 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...stagger()}>
            <span className="inline-block text-amarillo text-sm font-bold tracking-[0.2em] uppercase mb-3">03</span>
            <h2 className="text-4xl md:text-5xl font-bold text-azul mb-4">Reatas</h2>
            <p className="text-gray-500 max-w-2xl mb-12 text-lg">
              Cuatro tipos en múltiples anchos para cada aplicación.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {reatas.map((r, i) => (
              <motion.div
                key={r.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -2, transition: { duration: 0.08 } }}
                className="flex items-start gap-5 bg-white rounded-xl p-6 border border-gray-200 hover:border-azul/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-azul/5 flex items-center justify-center shrink-0">
                  <Ruler className="w-5 h-5 text-azul" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-azul mb-1">{r.nombre}</h3>
                  <p className="text-sm text-gray-400 mb-2">{r.variante}</p>
                  <p className="text-sm text-gray-600">{r.usos}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HERRAJES ─── */}
      <section id="herrajes" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...stagger()}>
            <span className="inline-block text-amarillo text-sm font-bold tracking-[0.2em] uppercase mb-3">04</span>
            <h2 className="text-4xl md:text-5xl font-bold text-azul mb-4">Herrajes, Ajustes y Fijaciones</h2>
            <p className="text-gray-500 max-w-2xl mb-12 text-lg">
              Chapas, hebillas, argollas, mosquetones y velcros.
            </p>
          </motion.div>

          {/* Chapas */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-azul mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amarillo" />
              Chapas y Hebillas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Chapa Plástica", "Chapa Liberación Rápida", "Chapa Metálica"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-amber-50/40 rounded-lg px-4 py-3 border border-amber-200/50 text-sm"
                >
                  <p className="font-medium text-azul">{item}</p>
                  <p className="text-amber-700/60 text-xs mt-0.5">1", 1.5", 2"</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Argollas */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-azul mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amarillo" />
              Argollas
            </h3>
            <p className="text-sm text-gray-400 mb-4">Correas, mosquetones y accesorios de enganche.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Argolla D", "Argolla Rectangular", "Argolla Metálica"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-sky-50/40 rounded-lg px-4 py-3 border border-sky-200/50 text-sm"
                >
                  <p className="font-medium text-azul">{item}</p>
                  <p className="text-sky-700/60 text-xs mt-0.5">1", 1.5", 2"</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mosquetones + Velcros grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-azul mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amarillo" />
                Mosquetones
              </h3>
              <p className="text-sm text-gray-400 mb-4">Correas removibles y bolsos ejecutivos.</p>
              <div className="space-y-2">
                {["Mosquetón Plástico", "Mosquetón Metálico", "Mosquetón Metálico Giratorio"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-rose-50/40 rounded-lg px-4 py-3 border border-rose-200/50 text-sm flex justify-between items-center"
                  >
                    <span className="font-medium text-azul">{item}</span>
                    <span className="text-rose-700/60 text-xs">1" - 1.5"</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-azul mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amarillo" />
                Velcros
              </h3>
              <p className="text-sm text-gray-400 mb-4">Cierres rápidos en compartimientos y portadocumentos.</p>
              <div className="space-y-2">
                {["Velcro Gancho", "Velcro Felpa", "Velcro Adhesivo"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200 text-sm flex justify-between items-center"
                  >
                    <span className="font-medium text-azul">{item}</span>
                    <span className="text-gray-400 text-xs">1" - 2"</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSUMOS ─── */}
      <section id="insumos" className="py-16 md:py-24 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...stagger()}>
            <span className="inline-block text-amarillo text-sm font-bold tracking-[0.2em] uppercase mb-3">05</span>
            <h2 className="text-4xl md:text-5xl font-bold text-azul mb-4">Cordones, Tancas, Mallas y Espumas</h2>
            <p className="text-gray-500 max-w-2xl mb-12 text-lg">
              El complemento perfecto para cada diseño.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cordones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-amber-50/40 rounded-xl p-6 border border-amber-200/50"
            >
              <h3 className="text-lg font-bold text-azul mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Cordones
              </h3>
              <p className="text-sm text-gray-400 mb-4">Tulas, morrales deportivos y bolsillos ajustables.</p>
              <div className="space-y-2">
                {[
                  { nombre: "Cordón Poliéster", detalle: "3 mm / 5 mm / 8 mm" },
                  { nombre: "Cordón Nylon", detalle: "5 mm" },
                  { nombre: "Cordón Elástico", detalle: "5 mm" },
                ].map((c, i) => (
                  <div key={c.nombre} className="flex items-center gap-3 text-sm">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="text-gray-700">{c.nombre}</span>
                    <span className="text-gray-400 ml-auto">{c.detalle}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tancas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-sky-50/40 rounded-xl p-6 border border-sky-200/50"
            >
              <h3 className="text-lg font-bold text-azul mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Tancas
              </h3>
              <div className="space-y-2">
                {[
                  { nombre: "Tanca Sencilla", detalle: "Pequeña y grande" },
                  { nombre: "Tanca Doble Salida", detalle: "Estándar" },
                  { nombre: "Tanca Premium", detalle: "Reforzada" },
                ].map((t, i) => (
                  <div key={t.nombre} className="flex items-center gap-3 text-sm">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span className="text-gray-700">{t.nombre}</span>
                    <span className="text-gray-400 ml-auto">{t.detalle}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mallas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-rose-50/40 rounded-xl p-6 border border-rose-200/50"
            >
              <h3 className="text-lg font-bold text-azul mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                Mallas
              </h3>
              <p className="text-sm text-gray-400 mb-4">Espaldares acolchados, bolsillos porta-termos y ventilación.</p>
              <div className="space-y-2">
                {[
                  { nombre: "Malla Sanduchera", detalle: "Liviana y gruesa" },
                  { nombre: "Malla 3D", detalle: "3 mm / 5 mm / 8 mm" },
                ].map((m, i) => (
                  <div key={m.nombre} className="flex items-center gap-3 text-sm">
                    <Check className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span className="text-gray-700">{m.nombre}</span>
                    <span className="text-gray-400 ml-auto">{m.detalle}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Espumas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-azul/[0.03] rounded-xl p-6 border border-azul/10"
            >
              <h3 className="text-lg font-bold text-azul mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-azul/30" />
                Espumas Yumbolon
              </h3>
              <p className="text-sm text-gray-400 mb-4">Estructura y acolchado en espesores progresivos.</p>
              <div className="flex flex-wrap gap-2">
                {["2 mm", "3 mm", "5 mm", "8 mm", "10 mm"].map((esp) => (
                  <span key={esp} className="bg-white rounded-full px-3.5 py-1.5 text-sm font-medium text-azul border border-azul/10">
                    {esp}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTOR BANNERS ─── */}
      <section className="bg-azul py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...stagger()}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Soluciones por Sector</h2>
            <p className="text-white/50 max-w-2xl mb-12 text-lg">
              Cada industria tiene necesidades distintas. Te ayudamos a encontrar la combinación de materiales ideal.
            </p>
          </motion.div>

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
                  whileHover={{ y: -3, transition: { duration: 0.08 } }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-colors"
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
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-azul mb-4 leading-tight">
              ¿Listo para tu<br />próximo proyecto?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg">
              Contáctanos para recibir asesoría personalizada, cotización inmediata y muestras de materiales.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://wa.me/+573116095224?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20de%20materiales"
                target="_blank"
                className="group inline-flex items-center gap-2.5 bg-amarillo text-azul font-semibold px-8 py-4 rounded-full hover:scale-[1.03] transition-transform text-lg"
              >
                Cotización por WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

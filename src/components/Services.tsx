"use client";

import { motion } from "framer-motion";
import { Layout, Workflow, Bot, BarChart3, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages Premium",
    description:
      "Diseñadas para convertir visitantes en oportunidades reales de negocio. Diseño que comunica, copy que convierte.",
    featured: true,
    tag: "★ Más solicitado",
  },
  {
    icon: Workflow,
    title: "Automatizaciones",
    description:
      "Procesos inteligentes para ahorrar tiempo y escalar operaciones. Desde notificaciones hasta flujos complejos multi-paso.",
    featured: false,
    tag: null,
  },
  {
    icon: Bot,
    title: "IA Aplicada",
    description:
      "Asistentes, agentes conversacionales y flujos potenciados por IA para atender, calificar y cerrar clientes.",
    featured: false,
    tag: "Nuevo",
  },
  {
    icon: BarChart3,
    title: "CRM y Ventas",
    description:
      "Implementación de sistemas para centralizar clientes, mejorar seguimiento y acelerar el ciclo de ventas.",
    featured: false,
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF5A1F] border border-[#FF5A1F]/25 rounded-full px-4 py-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-[blink_1.5s_infinite]" />
              Qué hacemos
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight leading-tight">
              Servicios que
              <br />
              <span className="gradient-text">generan resultados</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-sm text-[#9CA3AF] text-sm leading-relaxed md:text-right"
          >
            Cada servicio está diseñado para un objetivo concreto: más
            visibilidad, más leads, más ventas.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative group border rounded-3xl p-8 overflow-hidden transition-all duration-300 cursor-default hover:-translate-y-1 ${
                s.featured
                  ? "bg-gradient-to-br from-[#1a0e06] via-[#161616] to-[#161616] border-[#FF5A1F]/30 md:col-span-2"
                  : "bg-[#161616] border-[#2a2a2a] hover:border-[#FF5A1F]/30"
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className={`relative flex ${s.featured ? "flex-col md:flex-row md:items-start gap-8" : "flex-col"}`}>
                <div className={s.featured ? "flex-1" : ""}>
                  {s.tag && (
                    <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#FF5A1F] bg-[#FF5A1F]/10 rounded-full px-3 py-1 mb-4">
                      {s.tag}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 flex items-center justify-center mb-5 group-hover:bg-[#FF5A1F]/20 transition-colors duration-300">
                    <s.icon size={22} className="text-[#FF5A1F]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF5A1F] group-hover:border-[#FF5A1F]">
                  <ArrowUpRight
                    size={16}
                    className="text-[#4B5563] group-hover:text-white transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

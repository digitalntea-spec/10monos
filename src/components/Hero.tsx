"use client";

import { motion } from "framer-motion";
import { ArrowDown, Zap, Bot, BarChart3, Layout } from "lucide-react";

const highlights = [
  { icon: Layout, label: "Landing Pages de Alta Conversión" },
  { icon: Zap, label: "Automatizaciones Inteligentes" },
  { icon: BarChart3, label: "CRM y Embudos de Venta" },
  { icon: Bot, label: "Implementación de IA" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden animated-gradient"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#FF5A1F]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FBBF24]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF5A1F] border border-[#FF5A1F]/30 rounded-full px-4 py-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-[blink_1.5s_infinite]" />
            Agencia Digital · Buenos Aires, Argentina
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.95] tracking-[-0.04em] mb-6"
        >
          Convertimos{" "}
          <span className="gradient-text">visitas</span>
          <br />
          en clientes.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-[#9CA3AF] max-w-xl mb-10 leading-relaxed font-light"
        >
          Landing Pages, Automatización e Inteligencia Artificial para empresas
          que quieren crecer de verdad.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollTo("#contacto")}
            className="group bg-[#FF5A1F] hover:bg-[#e84e18] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(255,90,31,0.45)] hover:-translate-y-0.5 flex items-center gap-2"
          >
            Solicitar Diagnóstico Gratuito
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-1"
            />
          </button>
          <button
            onClick={() => scrollTo("#servicios")}
            className="text-[#9CA3AF] hover:text-white font-semibold text-base px-6 py-4 rounded-full border border-[#2a2a2a] hover:border-[#FF5A1F]/50 transition-all duration-200"
          >
            Ver Servicios
          </button>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="glass rounded-2xl px-4 py-3 flex items-center gap-3 group hover:border-[#FF5A1F]/30 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF5A1F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF5A1F]/20 transition-colors">
                <h.icon size={16} className="text-[#FF5A1F]" />
              </div>
              <span className="text-xs font-medium text-[#9CA3AF] group-hover:text-white transition-colors leading-tight">
                {h.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest text-[#4B5563] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#FF5A1F]/40 to-transparent animate-[float_2s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
}

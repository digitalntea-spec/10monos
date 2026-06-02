"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function CTA() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden border border-[#FF5A1F]/20 bg-gradient-to-br from-[#1a0e06] via-[#161616] to-[#0f0f0f] p-12 md:p-20 text-center"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#FF5A1F]/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-[#FBBF24]/5 blur-[80px] pointer-events-none" />

          {/* Grid */}
          <div className="absolute inset-0 grid-pattern opacity-50" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF5A1F] border border-[#FF5A1F]/25 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-[blink_1.5s_infinite]" />
              ¿Listo para crecer?
            </span>

            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-black tracking-tight leading-tight mb-6">
              Tu próxima venta puede
              <br />
              estar a un{" "}
              <span className="gradient-text">clic.</span>
            </h2>

            <p className="text-[#9CA3AF] text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Construyamos un sistema digital que trabaje para tu negocio,
              incluso cuando vos no estás.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollTo("#contacto")}
                className="group flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#e84e18] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_50px_rgba(255,90,31,0.5)] hover:-translate-y-1"
              >
                <Calendar size={18} />
                Agendar Reunión
              </button>
              <a
                href="https://wa.me/5491140784646?text=Hola%2C%20quiero%20saber%20más%20sobre%2010%20Monos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9CA3AF] hover:text-white font-semibold text-base px-6 py-4 rounded-full border border-[#2a2a2a] hover:border-[#FF5A1F]/40 transition-all duration-200"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

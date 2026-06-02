"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Más contactos calificados",
  "Menor costo operativo",
  "Seguimiento automático",
  "Mayor velocidad de respuesta",
  "Mejor experiencia del cliente",
  "Escalabilidad digital",
];

export default function Benefits() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF5A1F] border border-[#FF5A1F]/25 rounded-full px-4 py-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-[blink_1.5s_infinite]" />
              Resultados que importan
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight leading-tight mb-6">
              ¿Por qué elegir
              <br />
              <span className="gradient-text">10 Monos?</span>
            </h2>
            <p className="text-[#9CA3AF] leading-relaxed mb-8">
              No somos una agencia más. Somos un equipo obsesionado con los
              resultados, que combina diseño, tecnología e inteligencia
              artificial para construir sistemas digitales que trabajan 24/7
              por tu negocio.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contacto");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#FF5A1F] hover:bg-[#e84e18] text-white font-bold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,90,31,0.4)] hover:-translate-y-0.5 text-sm"
            >
              Quiero estos resultados →
            </button>
          </motion.div>

          {/* Right - Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="flex items-center gap-3 bg-[#161616] border border-[#2a2a2a] rounded-2xl px-4 py-4 group hover:border-[#FF5A1F]/30 transition-all duration-300"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FF5A1F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF5A1F]/20 transition-colors">
                  <Check size={14} className="text-[#FF5A1F]" />
                </div>
                <span className="text-sm font-medium text-[#9CA3AF] group-hover:text-white transition-colors">
                  {b}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

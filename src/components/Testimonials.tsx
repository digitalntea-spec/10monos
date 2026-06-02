"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Pasamos de recibir consultas dispersas a tener un sistema comercial ordenado. En 3 meses duplicamos los leads calificados y el equipo de ventas trabaja mucho más eficientemente.",
    name: "Martín G.",
    company: "PyME Argentina",
    role: "Director Comercial",
    initials: "MG",
    gradient: "from-[#FF5A1F] to-[#FBBF24]",
  },
  {
    text: "La automatización nos permitió ahorrar 15 horas semanales de trabajo manual. Ahora respondemos leads en minutos, no en días. El ROI fue evidente desde el primer mes.",
    name: "Laura P.",
    company: "Empresa de Servicios",
    role: "CEO & Fundadora",
    initials: "LP",
    gradient: "from-[#7B2FF7] to-[#FF5A1F]",
  },
  {
    text: "La landing que nos hicieron tiene una tasa de conversión del 12%. Antes teníamos el 2%. El equipo de 10 Monos entiende de negocios, no solo de diseño.",
    name: "Diego R.",
    company: "Inmobiliaria",
    role: "Socio Gerente",
    initials: "DR",
    gradient: "from-[#FBBF24] to-[#FF5A1F]",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF5A1F] border border-[#FF5A1F]/25 rounded-full px-4 py-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-[blink_1.5s_infinite]" />
            Lo que dicen nuestros clientes
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight leading-tight">
            El éxito lo cuentan
            <br />
            <span className="gradient-text">ellos</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-[#161616] border border-[#2a2a2a] rounded-3xl p-8 flex flex-col hover:border-[#FF5A1F]/25 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#FBBF24] text-sm">★</span>
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={20} className="text-[#FF5A1F]/30 mb-3" />

              {/* Text */}
              <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#2a2a2a]">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-black text-xs flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-[#4B5563]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

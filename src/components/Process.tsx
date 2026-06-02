"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Auditamos tu presencia digital, analizamos tu competencia y definimos objetivos claros y medibles.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Diseño Estratégico",
    description:
      "Diseñamos un plan a medida basado en tu industria, presupuesto y metas de negocio.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementación",
    description:
      "Ejecutamos con precisión. Cada pieza del sistema se construye para funcionar desde el día uno.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimización",
    description:
      "Medimos, aprendemos y mejoramos continuamente. Cuando algo funciona, lo escalamos.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-[#0D0D0D]">
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
            Cómo trabajamos
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight leading-tight">
            De cero a resultados
            <br />
            <span className="gradient-text">en 4 pasos</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative"
              >
                {/* Step number & icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative w-12 h-12 rounded-2xl bg-[#161616] border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#FF5A1F]/50 group-hover:bg-[#FF5A1F]/10 transition-all duration-300">
                    <step.icon
                      size={20}
                      className="text-[#4B5563] group-hover:text-[#FF5A1F] transition-colors"
                    />
                    {/* Pulse ring on hover */}
                    <div className="absolute inset-0 rounded-2xl border border-[#FF5A1F]/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                  </div>
                  <span className="text-xs font-black tracking-widest text-[#FF5A1F]">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold mb-2 tracking-tight group-hover:text-[#FF5A1F] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

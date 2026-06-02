"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, ShoppingCart, TrendingUp } from "lucide-react";

const cases = [
  {
    icon: Building2,
    industry: "Inmobiliaria",
    result: "+180%",
    metric: "Leads calificados",
    description:
      "Implementamos una landing page de alto impacto + CRM automatizado que triplicó las consultas mensuales.",
    tags: ["Landing Page", "CRM", "Meta Ads"],
    color: "#FF5A1F",
  },
  {
    icon: Briefcase,
    industry: "Servicios Profesionales",
    result: "+220%",
    metric: "Conversiones",
    description:
      "Automatización de seguimiento + secuencias de email que convirtieron leads fríos en clientes.",
    tags: ["Automatización", "Email", "IA"],
    color: "#FBBF24",
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce",
    result: "+35%",
    metric: "Ventas netas",
    description:
      "Optimización de embudos de venta y flujos de recupero de carrito con IA conversacional.",
    tags: ["E-commerce", "IA", "Funnels"],
    color: "#FF5A1F",
  },
];

export default function CaseStudies() {
  return (
    <section id="resultados" className="py-24 bg-[#0D0D0D]">
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
              Casos de éxito
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight leading-tight">
              Impacto
              <br />
              <span className="gradient-text">real</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xs text-[#9CA3AF] text-sm leading-relaxed md:text-right"
          >
            Números reales, clientes reales. Sin promesas vacías.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.industry}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-[#161616] border border-[#2a2a2a] rounded-3xl p-8 hover:border-[#FF5A1F]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Icon + industry */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF5A1F]/10 flex items-center justify-center">
                  <c.icon size={18} className="text-[#FF5A1F]" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#4B5563]">
                  {c.industry}
                </span>
              </div>

              {/* Result */}
              <div className="mb-2">
                <span className="text-6xl font-black tracking-tight gradient-text leading-none">
                  {c.result}
                </span>
              </div>
              <div className="text-sm font-semibold text-white mb-4 flex items-center gap-1.5">
                <TrendingUp size={14} className="text-[#FF5A1F]" />
                {c.metric}
              </div>

              <p className="text-sm text-[#9CA3AF] leading-relaxed flex-1 mb-6">
                {c.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold tracking-widest uppercase text-[#4B5563] border border-[#2a2a2a] rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

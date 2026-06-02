"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 300, suffix: "%", label: "Más Leads", prefix: "+" },
  { value: 24, suffix: "/7", label: "Automatización", prefix: "" },
  { value: 70, suffix: "%", label: "Menos Tareas Manuales", prefix: "-" },
  { value: 40, suffix: "%", label: "Mayor Conversión", prefix: "+" },
];

function useCounter(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  prefix,
  index,
}: (typeof stats)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCounter(value, 1800, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group bg-[#161616] border border-[#2a2a2a] rounded-3xl p-8 overflow-hidden hover:border-[#FF5A1F]/40 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="text-5xl font-black text-white mb-2 tracking-tight">
          <span className="text-[#FF5A1F]">{prefix}</span>
          {count}
          <span className="text-[#FF5A1F]">{suffix}</span>
        </div>
        <div className="text-sm text-[#9CA3AF] font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold tracking-widest uppercase text-[#4B5563] mb-12"
        >
          Empresas que buscan crecer eligen procesos inteligentes
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

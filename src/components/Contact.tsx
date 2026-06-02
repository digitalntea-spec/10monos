"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

interface FormData {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  mensaje: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  const inputClass =
    "w-full bg-[#161616] border border-[#2a2a2a] text-white placeholder-[#4B5563] text-sm rounded-xl px-4 py-3.5 outline-none focus:border-[#FF5A1F]/60 focus:ring-1 focus:ring-[#FF5A1F]/20 transition-all duration-200";

  return (
    <section id="contacto" className="py-24 bg-[#0A0A0A]">
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
            Hablemos
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight leading-tight">
            Empezá hoy.
            <br />
            <span className="gradient-text">Es gratis.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-[#161616] border border-[#2a2a2a] rounded-3xl p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF5A1F]/10 flex items-center justify-center mb-4">
                  <Send size={28} className="text-[#FF5A1F]" />
                </div>
                <h3 className="text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-[#9CA3AF] text-sm">
                  Nos ponemos en contacto en menos de 24hs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#9CA3AF] mb-1.5 uppercase tracking-wider">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#9CA3AF] mb-1.5 uppercase tracking-wider">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Tu empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#9CA3AF] mb-1.5 uppercase tracking-wider">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="+54 9 11..."
                      value={form.telefono}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#9CA3AF] mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#9CA3AF] mb-1.5 uppercase tracking-wider">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder="Contanos sobre tu proyecto o necesidad..."
                    value={form.mensaje}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 bg-[#FF5A1F] hover:bg-[#e84e18] disabled:opacity-60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,90,31,0.4)] hover:-translate-y-0.5 text-sm"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Solicitar Diagnóstico
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Contact cards */}
            {[
              { icon: Mail, label: "Email", value: "digital.ntea@gmail.com", href: "mailto:digital.ntea@gmail.com" },
              { icon: Phone, label: "WhatsApp", value: "+54 11 4078-4646", href: "https://wa.me/5491140784646" },
              { icon: MapPin, label: "Ubicación", value: "Buenos Aires, Argentina", href: null },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5 flex items-center gap-4 hover:border-[#FF5A1F]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF5A1F]/10 flex items-center justify-center group-hover:bg-[#FF5A1F]/20 transition-colors flex-shrink-0">
                  <c.icon size={18} className="text-[#FF5A1F]" />
                </div>
                <div>
                  <div className="text-xs text-[#4B5563] font-semibold uppercase tracking-wider mb-0.5">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-[#FF5A1F] transition-colors font-medium"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white font-medium">{c.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Promise box */}
            <div className="bg-gradient-to-br from-[#1a0e06] to-[#161616] border border-[#FF5A1F]/20 rounded-2xl p-6 mt-2">
              <h4 className="font-bold text-sm mb-3 text-white">
                Nuestra promesa
              </h4>
              <ul className="space-y-2">
                {[
                  "Respuesta en menos de 24hs",
                  "Primera consulta 100% gratuita",
                  "Sin contratos forzados",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <span className="text-[#FF5A1F]">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

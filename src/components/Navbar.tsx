"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Resultados", href: "#resultados" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-[#2a2a2a] py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#FF5A1F] flex items-center justify-center text-white font-black text-sm transition-transform group-hover:scale-110">
              10
            </div>
            <span className="font-black text-lg tracking-tight text-white">
              Monos
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200 font-medium"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contacto")}
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors font-medium px-4 py-2"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollTo("#contacto")}
              className="bg-[#FF5A1F] hover:bg-[#e84e18] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,90,31,0.4)] hover:-translate-y-0.5"
            >
              Diagnóstico Gratis →
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#9CA3AF] hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-3xl font-black text-white hover:text-[#FF5A1F] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contacto")}
            className="mt-4 bg-[#FF5A1F] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#e84e18] transition-colors"
          >
            Diagnóstico Gratis →
          </button>
        </div>
      )}
    </>
  );
}

"use client";

const links = {
  Servicios: [
    "Landing Pages Premium",
    "Automatizaciones",
    "IA Aplicada",
    "CRM y Ventas",
  ],
  Empresa: ["Proceso", "Resultados", "Testimonios", "Contacto"],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0A0A0A] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF5A1F] flex items-center justify-center text-white font-black text-sm">
                10
              </div>
              <span className="font-black text-lg tracking-tight text-white">
                Monos
              </span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs mb-5">
              Agencia de marketing digital en Buenos Aires. Landing Pages,
              Automatizaciones e IA para empresas que quieren resultados reales.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {["in", "ig", "x"].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#4B5563] hover:text-[#FF5A1F] hover:border-[#FF5A1F]/50 transition-all cursor-pointer text-xs font-bold uppercase"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h5 className="text-xs font-bold tracking-widest uppercase text-white mb-4">
                {title}
              </h5>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(`#${item.toLowerCase().replace(/ /g, "-")}`)}
                      className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#2a2a2a]">
          <p className="text-[#4B5563] text-xs">
            © 2025 10 Monos. Todos los derechos reservados.
          </p>
          <p className="text-[#4B5563] text-xs">
            Hecho con{" "}
            <span className="text-[#FF5A1F]">♥</span> en Buenos Aires,
            Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600 && !dismissed) setVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const handleClick = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setVisible(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-[#2a2a2a] px-6 py-3 md:py-4"
        >
          <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-[#9CA3AF] hidden sm:block">
              🚀 <strong className="text-white">¿Listo para crecer?</strong>{" "}
              Pedí tu diagnóstico gratuito hoy.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <button
                onClick={handleClick}
                className="flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#e84e18] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,90,31,0.4)] whitespace-nowrap"
              >
                Solicitar Diagnóstico
                <ArrowRight size={14} />
              </button>
            </div>
            <button
              onClick={() => { setVisible(false); setDismissed(true); }}
              className="text-[#4B5563] hover:text-white transition-colors flex-shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

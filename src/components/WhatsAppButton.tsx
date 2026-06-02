"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                className="bg-[#161616] border border-[#2a2a2a] rounded-2xl px-4 py-3 shadow-xl max-w-[220px]"
              >
                <button
                  onClick={() => setTooltipOpen(false)}
                  className="absolute top-2 right-2 text-[#4B5563] hover:text-white"
                >
                  <X size={12} />
                </button>
                <p className="text-xs text-[#9CA3AF] leading-relaxed pr-4">
                  ¡Hola! ¿Querés una consulta gratuita? 🚀
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <div className="relative">
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-[pulseRing_2s_ease-out_infinite]" />
            <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-10 animate-[pulseRing_2s_ease-out_0.5s_infinite]" />

            <a
              href="https://wa.me/5491112345678?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20con%2010%20Monos"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setTooltipOpen(false)}
              onMouseEnter={() => setTooltipOpen(true)}
              onMouseLeave={() => setTooltipOpen(false)}
              className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all duration-200 hover:-translate-y-1"
            >
              <MessageCircle size={26} className="text-white" fill="white" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

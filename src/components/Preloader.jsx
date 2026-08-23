import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/config";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#080808] text-white"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <motion.div
            className="absolute left-0 top-0 h-px w-full origin-left bg-[#ff2a2a]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="relative w-[min(78vw,420px)]">
            <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
              <span>Portfolio / 2026</span>
              <span className="flex items-center gap-2 text-[#ff5555]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff2a2a]" />
                Loading
              </span>
            </div>

            <div className="relative mb-10 overflow-hidden">
              <motion.div
                className="absolute -left-3 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-[#ff2a2a]/30"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.8, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
              <p className="relative mb-3 font-mono text-xs tracking-[0.25em] text-[#ff5555]">
                // build with purpose
              </p>
              <h1 className="relative text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-white md:text-7xl">
                {personalInfo.firstName}
                <span className="text-[#ff2a2a]">.</span>
              </h1>
            </div>

            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              <div className="mb-3 flex justify-between">
                <span>Initializing experience</span>
                <span className="text-white/80">01 / 01</span>
              </div>
              <div className="h-px w-full bg-white/15">
                <motion.div
                  className="h-full origin-left bg-[#ff2a2a]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
              <span>Java / Full Stack</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <motion.div
            className="absolute bottom-8 left-8 font-mono text-[9px] uppercase tracking-[0.28em] text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            ST / 001
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-8 h-2 w-2 border-r border-b border-[#ff2a2a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

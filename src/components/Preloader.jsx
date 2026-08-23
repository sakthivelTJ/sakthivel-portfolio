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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#ff2a2a]"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative text-5xl md:text-7xl font-black tracking-tighter uppercase">
            {/* Background Layer (dark text) */}
            <div className="text-black/20">{personalInfo.brandName}</div>

            {/* Foreground Layer (clipping animation) */}
            <motion.div
              className="absolute top-0 left-0 text-white whitespace-nowrap"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{
                duration: 1.6,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {personalInfo.brandName}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

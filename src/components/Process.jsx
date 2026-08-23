import React, { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { processData } from "../data/config";

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [activeCards, setActiveCards] = React.useState(0);
  const cardThresholds = [0.08, 0.34, 0.53, 0.78];

  useMotionValueEvent(pathLength, "change", (latest) => {
    const nextActiveCards = cardThresholds.filter(
      (threshold) => latest >= threshold,
    ).length;
    setActiveCards((current) =>
      current === nextActiveCards ? current : nextActiveCards,
    );
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-white px-6 py-24 md:px-12 md:pb-32 overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[80px_80px]"
    >
      <div className="container max-w-6xl relative min-h-0 md:min-h-337.5">
        <div
          className="relative z-20 w-full max-w-xl mb-16 md:mb-0 md:absolute md:top-10 md:left-0"
          data-aos="fade-up"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-800 mb-4">
            Development Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How I bring ideas to life
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            My streamlined approach to building scalable and user-friendly
            software solutions, from conception to deployment.
          </p>
        </div>

        <svg
          className="hidden md:block absolute inset-0 z-0 h-full w-full pointer-events-none"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          <motion.path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#111827"
            strokeWidth="2"
            strokeDasharray="8 10"
            style={{ pathLength }}
            className="drop-shadow-sm"
          />
        </svg>

        <svg
          className="md:hidden absolute top-0 left-1/2 z-0 h-full w-4 -translate-x-1/2 pointer-events-none"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#111827"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength }}
          />
        </svg>

        <div className="relative z-10 flex w-full flex-col items-center gap-8 pt-4 pb-12 md:block md:pt-0 md:pb-0">
          {(processData?.cards || []).map((item, index) => {
            const gradients = [
              "bg-linear-to-br from-[#0f766e] via-[#0891b2] to-[#38bdf8] border-cyan-200 shadow-[0_20px_50px_rgba(8,145,178,0.35)]",
              "bg-linear-to-br from-[#155e75] via-[#0e7490] to-[#22d3ee] border-cyan-100 shadow-[0_20px_50px_rgba(14,116,144,0.35)]",
              "bg-linear-to-br from-[#164e63] via-[#0284c7] to-[#67e8f9] border-sky-200 shadow-[0_20px_50px_rgba(2,132,199,0.35)]",
              "bg-linear-to-br from-[#0f766e] via-[#0d9488] to-[#5eead4] border-teal-200 shadow-[0_20px_50px_rgba(13,148,136,0.35)]",
            ];
            const positions = [
              "md:absolute md:top-[10px] md:right-[10%] md:rotate-6",
              "md:absolute md:top-[450px] md:left-[10%] md:-rotate-6",
              "md:absolute md:top-[700px] md:right-[15%] md:rotate-3",
              "md:absolute md:top-[1050px] md:left-[25%] md:-rotate-3",
            ];
            return (
              <div
                key={index}
                className={`relative z-10 w-72 sm:w-80 rounded-4xl border-2 p-2 transition-all duration-700 hover:scale-[1.02] ${positions[index % positions.length]} ${activeCards > index ? gradients[index] : "bg-white border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"}`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={(index + 1) * 100}
              >
                <div
                  className={`mt-8 flex min-h-55 flex-col rounded-3xl p-8 transition-colors duration-700 ${activeCards > index ? "bg-black/15" : "bg-gray-50"}`}
                >
                  <span
                    className={`mb-2 text-xl font-bold italic transition-colors duration-700 ${activeCards > index ? "text-cyan-50" : "text-gray-400"}`}
                  >
                    {item.number || String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mb-3 text-2xl font-black tracking-tight transition-colors duration-700 ${activeCards > index ? "text-white" : "text-gray-900"}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm font-medium leading-relaxed transition-colors duration-700 ${activeCards > index ? "text-cyan-50" : "text-gray-500"}`}
                  >
                    {item.text || item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="hidden md:block absolute top-312.5 left-[60%] rotate-6 font-['Caveat',cursive] text-3xl text-gray-600"
          data-aos="fade-in"
        >
          Ready to ship!
        </div>
      </div>
    </section>
  );
}

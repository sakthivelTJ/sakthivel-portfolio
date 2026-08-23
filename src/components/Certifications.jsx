import React from "react";
import { certifications } from "../data/config";

export default function Certifications() {
  return (
    <section className="relative bg-gradient-to-br from-[#d9163f] via-[#f04432] to-[#ff7043] text-white py-32 overflow-hidden">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#0a0a0a]"
          ></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-40 left-10 opacity-20 animate-pulse">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <div
        className="absolute bottom-20 right-20 opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Continuous learning and professional verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(
            certifications?.featured ||
            (Array.isArray(certifications) ? certifications : [])
          ).map((cert, idx) => (
            <div
              key={idx}
              className="bg-black/20 border border-white/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-black/30 transition-colors"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-white/80 mb-4">{cert.issuer}</p>
              <span className="inline-block py-1 px-3 bg-white/10 rounded-full text-xs">
                {cert.year}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <button className="px-8 py-3 bg-white text-[#ff2a2a] rounded-full font-bold hover:bg-gray-100 transition-colors">
            View All Certificates
          </button>
        </div>
      </div>
    </section>
  );
}

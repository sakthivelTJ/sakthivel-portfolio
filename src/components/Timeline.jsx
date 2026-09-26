import React, { useState } from "react";
import { achievements } from "../data/config";

export default function Timeline() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative bg-[#0a0a0a] text-white py-32 overflow-hidden">
      {/* Wave Divider at Top */}
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
            className="fill-[#ff2a2a]"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & Engagement
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff2a2a] via-[#ff2a2a]/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {achievements?.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={idx * 100}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#ff2a2a] rounded-full transform -translate-x-[6px] md:-translate-x-1/2 mt-6 md:mt-0 z-10 border-4 border-[#0a0a0a]"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                    idx % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <span className="py-1 px-3 bg-white/10 rounded-full text-xs font-medium text-gray-300">
                        {item.badge || item.tag || "Activity"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-[#ff2a2a] font-medium text-sm">
                        {item.role}
                      </p>
                      {item.image && (
                        <button
                          onClick={() => setSelectedImage({ title: item.title, image: item.image })}
                          className="px-3 py-1 bg-white/10 hover:bg-[#ff2a2a] text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
                        >
                          <span>📜</span> View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox for Timeline Certificate Images */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/50">
              <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
              <div className="flex items-center gap-3">
                <a
                  href={selectedImage.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs rounded-lg text-white font-medium transition-colors border border-white/10 flex items-center gap-1"
                >
                  ↗ Open Original
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-4 bg-black max-h-[75vh] overflow-auto flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto rounded-lg shadow-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

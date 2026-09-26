import React, { useState } from "react";
import { certifications } from "../data/config";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certList =
    certifications?.featured ||
    (Array.isArray(certifications) ? certifications : []);

  return (
    <section className="relative bg-gradient-to-br from-[#d9163f] via-[#f04432] to-[#ff7043] text-white py-32 overflow-hidden" id="certifications">
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
            Continuous learning and professional verification. Click any certificate to view it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {certList.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => cert.image && setSelectedCert(cert)}
              className="group bg-black/30 border border-white/30 rounded-2xl overflow-hidden backdrop-blur-md hover:bg-black/50 hover:border-white/60 transition-all duration-300 cursor-pointer shadow-xl transform hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {cert.image && (
                <div className="relative h-56 overflow-hidden bg-black/40">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/20 flex items-center gap-1.5">
                    <span>🔍</span> Click to View
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-amber-200 transition-colors">
                    {cert.name}
                  </h3>
                  <span className="shrink-0 py-1 px-3 bg-white/10 rounded-full text-xs font-medium ml-2">
                    {cert.year}
                  </span>
                </div>
                <p className="text-white/80 text-sm mb-4">{cert.issuer}</p>
                {cert.image && (
                  <div className="inline-flex items-center text-xs font-semibold text-white group-hover:underline">
                    View Full Certificate &rarr;
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {certifications?.viewAllUrl && (
          <div className="text-center" data-aos="fade-up">
            <a
              href={certifications.viewAllUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-[#ff2a2a] rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              View All Certificates on GitHub
            </a>
          </div>
        )}
      </div>

      {/* Lightbox / Modal for Certificate Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/50">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedCert.name}</h3>
                <p className="text-xs text-gray-400">{selectedCert.issuer} ({selectedCert.year})</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs rounded-lg text-white font-medium transition-colors border border-white/10 flex items-center gap-1"
                >
                  ↗ Open Original
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Certificate Image View */}
            <div className="p-4 bg-black max-h-[75vh] overflow-auto flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="max-h-[70vh] w-auto rounded-lg shadow-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

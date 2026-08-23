import React from "react";
import { experience } from "../data/config";

export default function Experience() {
  return (
    <section className="relative bg-gradient-to-br from-[#d9163f] via-[#f04432] to-[#ff7043] text-white py-32 overflow-hidden">
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
            className="fill-[#0a0a0a]"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            A track record of delivering value and growing as a professional.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience?.map((exp, idx) => (
            <div
              key={idx}
              className="bg-black/30 border border-white/30 rounded-2xl p-6 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-lg text-white/90 font-medium">
                    {exp.organization}
                  </p>
                </div>
                <span className="mt-2 md:mt-0 py-1 px-4 bg-white/20 rounded-full text-sm font-medium">
                  {exp.duration}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-2 mb-6 text-white/80">
                {(exp.skills || exp.responsibilities || []).map(
                  (item, rIdx) => (
                    <li key={rIdx}>{item}</li>
                  ),
                )}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech?.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative SVG Star */}
      <div className="absolute top-20 right-10 opacity-20 animate-pulse">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="white">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    </section>
  );
}

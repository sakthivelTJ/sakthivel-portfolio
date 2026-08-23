import React from "react";
import { innovationData, socialLinks } from "../data/config";

export default function Innovation() {
  return (
    <section
      id="creator"
      className="relative bg-[#0a0a0a] text-white py-32 overflow-hidden"
    >
      {/* Blurred decorative bg circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-4">
            {innovationData?.badge || "Creator"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {innovationData?.heading || "Beyond the code"}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {innovationData?.description ||
              "Exploring new ideas, contributing to open source, and building tools."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {innovationData?.categories?.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#0f0f0f]/95 border border-white/10 rounded-2xl p-8 transition-all hover:border-white/25 hover:bg-[#151515] hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl">{cat.icon}</span>
                <span className="py-1 px-3 rounded-full bg-white/10 text-xs font-bold text-gray-300">
                  {cat.stats}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
              <p className="text-gray-400">{cat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#d9163f] via-[#f04432] to-[#ff7043] text-white font-medium hover:brightness-110 transition-colors gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            Explore Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

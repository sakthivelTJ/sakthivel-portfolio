import React from 'react';
import { softSkills } from '../data/config';

export default function SoftSkills() {
  return (
    <section className="relative bg-white text-gray-900 py-32 overflow-hidden bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0a0a0a]"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium mb-4">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Soft Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {softSkills?.map((skill, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-500">{skill.desc || skill.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

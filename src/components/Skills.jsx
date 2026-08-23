import React from 'react';
import { skillsData } from '../data/config';

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0a0a0a] text-white py-24 overflow-hidden">
      {/* Decorative blurred red circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff2a2a]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff2a2a]/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-4">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skillset</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I use to build scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData?.categories?.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills?.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#ff2a2a] to-red-400 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

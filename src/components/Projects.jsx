import React from "react";
import { projects, socialLinks } from "../data/config";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0a] text-white py-32 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-4">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work that speaks for itself
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in full-stack
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects?.map((project, idx) => (
            <div
              key={idx}
              className={`bg-[#111111]/90 border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-[1.02] hover:border-[#ff2a2a]/60 hover:shadow-[0_18px_45px_rgba(255,42,42,0.3)] active:scale-[0.99] ${project.isFlagship || project.flagship ? "border-[#ff2a2a]/30" : ""}`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-xs font-medium">
                  {project.badge || project.tag || "Project"}
                </span>
                <span className="text-gray-500 font-mono text-sm">
                  {project.number || `0${idx + 1}`}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {(project.techTags || project.tech || []).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-white/10 rounded-full px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.links?.github || project.github) && (
                <a
                  href={project.links?.github || project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#ff2a2a] transition-colors self-start"
                >
                  View on GitHub
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-white/20 hover:border-white/50 rounded-full bg-transparent text-white font-medium transition-all hover:bg-white/5"
          >
            Explore All My Repositories
          </a>
        </div>
      </div>
    </section>
  );
}

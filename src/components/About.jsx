import React from "react";
import { aboutInfo } from "../data/config";

const technologyIcons = [
  { name: "Java", icon: "/java.svg" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/ffffff" },
  { name: "Hibernate", icon: "https://cdn.simpleicons.org/hibernate/ffffff" },
  { name: "Spring", icon: "https://cdn.simpleicons.org/spring/ffffff" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/ffffff" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/ffffff" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-linear-to-br from-[#d9163f] via-[#f04432] to-[#ff7043] py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative Stars */}
      <div className="absolute top-10 left-10 text-black/10 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 text-black/10 animate-pulse delay-700">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Left: Polaroid Image */}
          <div
            className="w-full md:w-5/12 flex justify-center md:justify-end"
            data-aos="drop-bounce"
            data-aos-duration="900"
          >
            <div className="relative mt-16 md:mt-24">
              {/* Hanging Mechanics */}
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-1 h-32 bg-black/80 z-20"></div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-10 bg-zinc-800 rounded z-20 shadow-lg border border-zinc-700"></div>

              {/* Card */}
              <div className="bg-gray-900 rounded-2xl p-3 shadow-2xl shadow-black/50 w-64 h-[22rem] sm:w-72 sm:h-96 -rotate-3 hover:rotate-0 transition-transform duration-500 origin-top">
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover object-top rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-7/12 text-white" data-aos="fade-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tight">
              Hello!
            </h2>
            <div
              className="text-lg md:text-xl font-medium leading-relaxed opacity-90 space-y-4 mb-10"
              dangerouslySetInnerHTML={{ __html: aboutInfo.bio }}
            />

            {/* Technology Icons */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {technologyIcons.map((technology, i) => (
                <div
                  key={technology.name}
                  className="group flex flex-col items-center gap-2"
                  data-aos="zoom-in"
                  data-aos-delay={i * 50}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-black/20 p-3 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-black/40 group-hover:shadow-lg">
                    <img
                      src={technology.icon}
                      alt={`${technology.name} icon`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-white/90">
                    {technology.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SVG Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12.5 md:h-25"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.93,121.2,201,112.5,241.6,107.54,282.51,84.32,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/config";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hireMailto = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent("Hiring inquiry for Sakthivel T")}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : mobileMenuOpen ? "bg-gradient-to-r from-[#d9163f] via-[#f04432] to-[#ff7043] py-4" : "bg-transparent py-6"}`}
    >
      <div className="container max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-black text-white tracking-tighter"
        >
          {personalInfo.brandName}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={hireMailto}
            className="px-6 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md text-white font-medium text-sm hover:bg-white/20 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100 bg-gradient-to-r from-[#d9163f] via-[#f04432] to-[#ff7043]" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pt-2 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={hireMailto}
            className="inline-block mt-2 px-6 py-3 bg-white text-[#ff2a2a] text-center rounded-full font-bold w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

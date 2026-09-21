import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo, socialLinks } from "../data/config";

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const message = formData.get("message");
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent("Portfolio contact message")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative bg-[#0a0a0a] min-h-svh py-28 md:py-32 overflow-hidden flex items-center"
    >
      {/* Giant Parallax Background Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"
        style={{ y }}
      >
        <h1 className="text-[clamp(4rem,14vw,12rem)] font-black text-white scale-y-[1.35] leading-none">
          CONTACT
        </h1>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div
          className="bg-linear-to-br from-[#d9163f] via-[#f04432] to-[#ff7043] rounded-3xl p-7 md:p-10 w-full max-w-2xl lg:max-w-3xl shadow-2xl"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
              Reach Me
            </h2>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-6 bg-white/20 hover:bg-white/30 text-white rounded-full font-medium transition-colors text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors resize-none"
                required
              ></textarea>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="permission"
                className="mt-1 accent-white"
                required
              />
              <label htmlFor="permission" className="text-white/80 text-sm">
                I agree to the processing of my personal data. I will respond to
                your message within 24-48 hours.
              </label>
            </div>

            <button
              type="submit"
              className="px-8 py-3 border border-white/50 text-white rounded-full font-medium hover:bg-white hover:text-[#ff2a2a] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

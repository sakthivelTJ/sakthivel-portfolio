import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Innovation from "./components/Innovation";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import Certifications from "./components/Certifications";
import SoftSkills from "./components/SoftSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: false,
      mirror: true,
      offset: 100,
      easing: "ease-out",
    });

    const refreshTimer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 2400);

    return () => window.clearTimeout(refreshTimer);
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      <Innovation />
      <Experience />
      <Timeline />
      <Certifications />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

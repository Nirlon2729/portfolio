import { useEffect, useState } from "react";
import AOS from "aos";
import Lenis from "lenis";

import "aos/dist/aos.css";

import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import WhyHireMe from "./components/WhyHireMe";
import Certificate from "./components/Certificate";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading Screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // AOS Animation
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Education />
        <Services />
        <Skills />
        <Portfolio />
        <WhyHireMe />
        <Certificate />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
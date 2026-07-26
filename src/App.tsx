import { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Roadmap } from './components/Roadmap';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Ensure i18n is initialized
import './i18n';

export function App() {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white relative min-h-screen">
      {/* Premium Loader */}
      <PageLoader />

      {/* Interactive Cursor */}
      <CustomCursor />

      {/* Floating Header Navigation */}
      <Navbar />

      {/* Main Content Layout Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Roadmap />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
export default App;

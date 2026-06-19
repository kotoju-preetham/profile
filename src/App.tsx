import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Vision } from './components/Vision';
import { Projects } from './components/Projects';
import { ServicesCertifications } from './components/ServicesCertifications';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0c]">
      {/* Background Interactive particle field */}
      <BackgroundCanvas />

      {/* GSAP Custom Cursor tracking */}
      <CustomCursor />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative w-full z-10">
        <Hero />
        <About />
        <Vision />
        <Projects />
        <ServicesCertifications />
      </main>

      {/* Footer Contact Section */}
      <Footer />
    </div>
  );
}

export default App;

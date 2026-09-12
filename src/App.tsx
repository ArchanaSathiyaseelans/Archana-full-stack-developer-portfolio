import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { EducationSection } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen animate-rainbow-bg text-white transition-colors duration-300 font-sans relative overflow-x-hidden">
      {/* Global Animated Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-white/20 rounded-full mix-blend-overlay filter blur-[100px] animate-blob animate-float"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-white/20 rounded-full mix-blend-overlay filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-white/20 rounded-full mix-blend-overlay filter blur-[100px] animate-blob animation-delay-4000 animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-white/20 rounded-full mix-blend-overlay filter blur-[100px] animate-blob animation-delay-6000"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <EducationSection />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

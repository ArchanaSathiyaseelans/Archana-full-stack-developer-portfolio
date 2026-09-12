import { motion } from "motion/react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profilePic from "../assets/images/profile_picture_exact_1787480221475.jpg";
import { downloadResume } from "../utils/downloadResume";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 animate-pulse-glow">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full border-4 border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-2 -right-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 animate-bounce-slow">
                <span className="text-xl">👋</span>
              </div>
            </div>
          </motion.div>
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold tracking-wide border border-white/20 mb-4 animate-float shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Available for new opportunities ✨
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Hi, I'm <span className="animate-rainbow-text font-black">Archana Seelan</span>
            <br className="hidden md:block" /> Full-Stack Developer
          </h1>
          
          <motion.p
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="max-w-2xl mx-auto text-3xl md:text-4xl font-cursive text-white/90 leading-relaxed drop-shadow-md animate-pulse-glow"
          >
            Building scalable MERN applications with modern tooling. I transform complex problems into elegant, performant, and user-friendly digital experiences.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="/resume.pdf"
              download="Archana_Sathiya_Seelan_Resume.pdf"
              onClick={downloadResume}
              className="inline-flex items-center px-8 py-3.5 border border-white/30 text-base font-bold rounded-full shadow-lg text-white bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-105 transition-all duration-300 animate-float cursor-pointer"
            >
              Resume
              <Download className="ml-2 -mr-1" size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 border border-white/30 text-base font-bold rounded-full shadow-lg text-white bg-black/20 backdrop-blur-md hover:bg-black/30 hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: '0.2s' }}
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:text-white/80 hover:-translate-y-2 transition-all duration-300 bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 animate-pulse-glow">
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-white/80 hover:-translate-y-2 transition-all duration-300 bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 animate-pulse-glow" style={{ animationDelay: '0.1s' }}>
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a href="mailto:archanaseelan4@gmail.com" className="text-white hover:text-white/80 hover:-translate-y-2 transition-all duration-300 bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 animate-pulse-glow" style={{ animationDelay: '0.2s' }}>
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

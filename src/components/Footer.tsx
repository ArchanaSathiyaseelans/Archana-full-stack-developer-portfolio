import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-white/20 dark:bg-slate-900/20 border-t border-white/20 dark:border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white block mb-2">
              Portfolio<span className="text-blue-600 dark:text-blue-400">.</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Archana Seelan. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com" className="text-slate-400 hover:text-slate-900 dark:hover:text-white hover:-translate-y-1 transition-all duration-300">
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="mailto:archanaseelan4@gmail.com" className="text-slate-400 hover:text-red-500 hover:-translate-y-1 transition-all duration-300">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

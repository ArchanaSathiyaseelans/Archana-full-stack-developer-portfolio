import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";
import { initialProjects } from "../data";

export function Projects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch projects, using local fallback", err);
      });
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 border border-white/40 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-12">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <motion.p
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="text-xl md:text-2xl font-cursive text-black/80 max-w-2xl mx-auto leading-relaxed"
          >
            A selection of my recent work showcasing full-stack capabilities, from complex database integrations to polished user interfaces.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
              <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col backdrop-blur-md bg-white/20 dark:bg-slate-800/40 rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={
                    project.image.includes("github.com") && project.image.includes("/blob/")
                      ? project.image.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/")
                      : project.image
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80";
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-black/80 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-blue-900/30 text-blue-800 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm font-medium text-black/70 hover:text-black transition-colors"
                  >
                    <Github size={16} className="mr-1.5" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

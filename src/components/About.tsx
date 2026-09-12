import { motion } from "motion/react";
import { Code2, Database, Layout, Server } from "lucide-react";

export function About() {
  const skills = [
    { name: "React.js" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "shadCN UI" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Python" },
    { name: "C/C++" },
    { name: "SQL" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "Git" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "REST API" }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 border border-white/40 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-12">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <motion.p
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="text-xl md:text-2xl font-cursive text-black/80 max-w-2xl mx-auto leading-relaxed"
          >
            I'm a passionate full-stack developer with a strong focus on the MERN ecosystem. 
            I love architecting scalable backend systems and crafting intuitive, dynamic user interfaces.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&q=80"
                alt="Developer working"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium text-lg">Always learning, always building.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-black mb-4">Technical Focus</h3>
              <p className="text-black/80 mb-6">
                My approach to software development emphasizes clean code, robust architecture, and seamless user experiences. I specialize in bridging the gap between complex backend logic and elegant frontend design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-sm border border-white/40">
                <Layout className="text-blue-500 mb-2" size={24} />
                <h4 className="font-semibold text-black">FrontEnd</h4>
                <p className="text-sm text-black/70 mt-1 leading-relaxed">HTML5, CSS3, Tailwind CSS, JavaScript, React.js, vite, shadCN UI, TypeScript</p>
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-sm border border-white/40">
                <Server className="text-green-500 mb-2" size={24} />
                <h4 className="font-semibold text-black">BackEnd</h4>
                <p className="text-sm text-black/70 mt-1 leading-relaxed">Node.js, Express.js, Python, C/C++, JWT, JSON, jQuery, REST API, FAST APIs</p>
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-sm border border-white/40">
                <Database className="text-purple-500 mb-2" size={24} />
                <h4 className="font-semibold text-black">Database</h4>
                <p className="text-sm text-black/70 mt-1 leading-relaxed">SQL, MySQL, MongoDB, PostgreSQL, Querying, Schema design</p>
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-sm border border-white/40">
                <Code2 className="text-orange-500 mb-2" size={24} />
                <h4 className="font-semibold text-black">Deployment Tools & Practices</h4>
                <p className="text-sm text-black/70 mt-1 leading-relaxed">Git, GitHub, Postman, AWS, Docker, VSCode, Render, Vercel, Agile, Version Control, Responsive design, npm, CI/CD pipelines</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-white/50 text-black text-sm font-medium rounded-full"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}

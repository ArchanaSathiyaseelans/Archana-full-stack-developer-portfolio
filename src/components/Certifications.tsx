import { motion } from "motion/react";
import { Award, ExternalLink, Code } from "lucide-react";

export function Certifications() {
  const achievements = [
    {
      id: "1",
      title: "Become a Full Stack Web Developer",
      issuer: "LinkedIn Learning",
      link: "https://drive.google.com/file/d/1R6UuPtlRFllxIfnZ0nSYQgFSjrP-mvhY/view?usp=sharing",
      icon: <Award className="text-yellow-500" size={24} />,
    },
    {
      id: "2",
      title: "Python and Intermediate Machine Learning",
      issuer: "Kaggle",
      link: "https://drive.google.com/file/d/1NvQuYbg75s54g3gVegLO5UyjSMZg1g9E/view?usp=sharing",
      icon: <Award className="text-yellow-500" size={24} />,
    },
    {
      id: "3",
      title: "Solved 100+ DSA Problems",
      issuer: "LeetCode",
      link: "https://leetcode.com/u/TEih9RkLXQ/",
      icon: <Code className="text-blue-500" size={24} />,
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 border border-white/40 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Certifications & Achievements</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm font-medium text-black/70 mb-4">{item.issuer}</p>
                <div className="mt-auto flex items-center text-sm font-bold text-blue-700 group-hover:text-blue-800">
                  View <ExternalLink size={14} className="ml-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

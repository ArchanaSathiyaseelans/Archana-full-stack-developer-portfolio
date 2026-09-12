import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import type { Education } from "../types";
import { initialEducation } from "../data";

export function EducationSection() {
  const [educationList, setEducationList] = useState<Education[]>(initialEducation);

  useEffect(() => {
    fetch("/api/education")
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setEducationList(data);
        }
      })
      .catch((err) => console.error("Failed to fetch education", err));
  }, []);

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 border border-white/40 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-12">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-slate-200 dark:border-slate-700 ml-3 md:ml-0 md:pl-0">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative md:pl-8 pl-6"
            >
              {/* Timeline dot */}
              <div className="absolute w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full -left-[13px] md:-left-3 border-4 border-white dark:border-slate-900 flex items-center justify-center">
                <GraduationCap size={12} className="text-blue-600 dark:text-blue-400" />
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 w-fit">
                      {edu.period}
                    </span>
                    {edu.cgpa && (
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                  </div>
                </div>
                {edu.description && (
                  <div className="mt-4">
                    {edu.description.startsWith("Relevant Course Work:") ? (
                      <>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Relevant Course Work</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.description.replace("Relevant Course Work:", "").split(",").map((course) => (
                            <span
                              key={course.trim()}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-full"
                            >
                              {course.trim().replace(".", "")}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

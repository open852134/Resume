import { FolderOpen } from "lucide-react";
import AnimateSection from "./AnimateSection";
import type { Dictionary } from "@/dictionaries/types";

export default function Projects({ copy }: { copy: Dictionary["projects"] }) {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="gradient-orb w-64 h-64 bg-pink-400/10 top-32 left-10" />
      <div className="gradient-orb w-48 h-48 bg-violet-400/10 bottom-20 right-20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimateSection>
          <div className="flex flex-col mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              {copy.title}
            </h2>
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full" />
              <p className="text-xs font-bold text-slate-400 dark:text-slate-300 uppercase tracking-[0.2em]">
                {copy.subtitle}
              </p>
            </div>
          </div>
        </AnimateSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.items.map((project, i) => (
            <AnimateSection key={project.name} delay={i * 0.1}>
              <div className="group h-full glass-card p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/60 dark:border-white/20 flex items-center justify-center text-slate-400 dark:text-slate-200 mb-6 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300">
                  <FolderOpen size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/30 dark:border-white/15">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-chip px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}

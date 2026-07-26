import { Briefcase } from "lucide-react";
import AnimateSection from "./AnimateSection";
import type { Dictionary } from "@/dictionaries/types";

export default function WorkExperience({ copy }: { copy: Dictionary["experience"] }) {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="gradient-orb w-96 h-96 bg-purple-400/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimateSection>
          <div className="flex flex-col mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              {copy.title}
            </h2>
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
              <p className="text-xs font-bold text-slate-400 dark:text-slate-300 uppercase tracking-[0.2em]">
                {copy.subtitle}
              </p>
            </div>
          </div>
        </AnimateSection>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-violet-200/50 dark:before:via-violet-500/40 before:to-transparent">
          {copy.jobs.map((job, i) => (
            <AnimateSection key={`${job.company}-${job.period}`} delay={i * 0.1}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full glass-panel text-slate-400 dark:text-slate-200 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-[.is-active]:bg-violet-500/80 group-[.is-active]:text-white group-[.is-active]:border-violet-300/50 group-[.is-active]:shadow-violet-200/30 transition-colors duration-500">
                  <Briefcase size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6">
                  <div className="flex items-center justify-between space-x-2 mb-3">
                    <div className="font-bold text-slate-900 dark:text-white">{job.company}</div>
                    <time className="font-mono text-[10px] font-bold text-violet-700 dark:text-violet-200 glass-chip px-2 py-1">
                      {job.period}
                    </time>
                  </div>
                  <div className="space-y-4">
                    {job.roles.map((role) => (
                      <div
                        key={role.title}
                        className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-violet-300 dark:before:bg-violet-400 before:rounded-full"
                      >
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug">
                          {role.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Layers } from "lucide-react";
import AnimateSection from "./AnimateSection";
import type { Dictionary } from "@/dictionaries/types";

export default function Skills({ copy }: { copy: Dictionary["skills"] }) {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="gradient-orb w-80 h-80 bg-cyan-400/10 top-20 right-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimateSection>
          <div className="flex flex-col mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              {copy.title}
            </h2>
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
              <p className="text-xs font-bold text-slate-400 dark:text-slate-300 uppercase tracking-[0.2em]">
                {copy.subtitle}
              </p>
            </div>
          </div>
        </AnimateSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {copy.categories.map((cat, i) => (
            <AnimateSection key={cat.title} delay={i * 0.1}>
              <div className="group h-full glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest">
                      {cat.subtitle}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-sm border border-white/60 dark:border-white/20 flex items-center justify-center text-slate-400 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300">
                    <Layers size={18} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="glass-chip px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/30 dark:border-white/15">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    &ldquo;{cat.note}&rdquo;
                  </p>
                </div>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}

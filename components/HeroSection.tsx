import { Monitor, Code2 } from "lucide-react";
import AnimateSection from "./AnimateSection";

function IconGithub({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.253-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.393.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconLinkedin({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconFacebook({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
      <AnimateSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Profile & Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="relative inline-block">
              <div className="w-40 h-40 rounded-3xl bg-slate-50 overflow-hidden ring-1 ring-slate-200 shadow-xl shadow-slate-200/40 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full flex items-center justify-center text-4xl text-slate-300 font-bold tracking-tighter">
                  SW
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 transform rotate-12">
                <Code2 size={20} className="text-white" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="h-px w-6 bg-slate-200" />
                  Experience
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Placements.io",
                    "4IDPS",
                    "三商電腦",
                    "鵬柏科技",
                    "專智科技",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-full border border-slate-200/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="h-px w-6 bg-slate-200" />
                  Core Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Next.js",
                    "C#",
                    "Tailwind",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50/50 rounded-lg border border-indigo-100/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/open852134"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all duration-200"
                  aria-label="GitHub"
                >
                  <IconGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/steven-weng-195348132"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <IconLinkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/open852134"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-blue-500 hover:border-blue-100 hover:bg-white hover:shadow-sm transition-all duration-200"
                  aria-label="Facebook"
                >
                  <IconFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Intro Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-wider mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Hello, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Steven Weng
              </span>
            </h1>

            <p className="text-xl text-slate-500 font-medium mb-10 max-w-2xl leading-relaxed">
              Senior Frontend Engineer focusing on building exceptional digital experiences that are fast, accessible, and visually stunning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600">
              <div className="space-y-4">
                <p className="leading-relaxed">
                  嗨！ 我是于宸 Steven，目前擔任高階前端工程師。擁有豐富的工業控制系統與網頁開發經驗，專注於 React、TypeScript 以及高效能應用的架構設計。
                </p>
                <p className="leading-relaxed">
                  除了開發工作，我也熱衷於社群貢獻，曾參與多場技術年會與社群活動，致力於持續學習最新的前端技術與最佳實踐。
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 italic text-sm leading-relaxed text-slate-500">
                &ldquo;I believe that good design is as little design as possible. Focused on clean code, baseline rhythm, and user-centric solutions.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </AnimateSection>
    </section>
  );
}

import { Layers } from "lucide-react";
import AnimateSection from "./AnimateSection";

interface SkillCategory {
  title: string;
  subtitle: string;
  items: string[];
  note: string;
}

const SKILLS: SkillCategory[] = [
  {
    title: "網頁前端",
    subtitle: "Frontend",
    items: ["React + Redux (Redux Thunk)", "HTML5", "CSS3 (SCSS)", "JavaScript", "jQuery", "Vue.js"],
    note: "近一年半多專注於前端開發。本身也喜歡閱讀 UI/UX 相關文章，提升設計美感。",
  },
  {
    title: "網頁後端",
    subtitle: "Backend",
    items: ["C# (WinForm · WebForm · MVC)", "PHP (CodeIgniter)", "Node.js"],
    note: "開發過電商網站，串接過金流（智付通、歐付寶）。",
  },
  {
    title: "資料庫 · 系統",
    subtitle: "Database & Systems",
    items: ["MySQL", "MSSQL", "MongoDB", "Windows Server", "Linux (Ubuntu · Fedora)"],
    note: "兩大平台都有接觸，包含服務的架設部署。",
  },
  {
    title: "其他",
    subtitle: "Others",
    items: ["PhoneGap", "ChatBot", "Adobe Illustrator", "Adobe Photoshop"],
    note: "玩過 Chatbot 聊天機器人，也修過 Illustrator、Photoshop 設計相關課程。",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateSection>
          <div className="flex flex-col mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">專業技能</h2>
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-indigo-600 rounded-full" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Technical Arsenal</p>
            </div>
          </div>
        </AnimateSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((cat, i) => (
            <AnimateSection key={cat.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-slate-200/60 bg-white p-6 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cat.subtitle}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300">
                    <Layers size={18} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg border border-slate-200/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-50">
                  <p className="text-sm text-slate-500 leading-relaxed italic">
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

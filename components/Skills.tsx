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
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateSection>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
              <Layers size={17} className="text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">專業技能</h2>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mt-0.5">Professional Skills</p>
            </div>
          </div>
        </AnimateSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILLS.map((cat, i) => (
            <AnimateSection key={cat.title} delay={i * 0.09}>
              <div className="h-full rounded-xl border border-gray-200 bg-white p-5 hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900">{cat.title}</h3>
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">{cat.subtitle}</span>
                </div>
                <ul className="flex flex-wrap gap-1.5 mb-4 mt-3">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="px-2.5 py-0.5 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100/80 font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-50 pt-3">{cat.note}</p>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}

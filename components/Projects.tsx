import { FolderOpen } from "lucide-react";
import AnimateSection from "./AnimateSection";

interface Project {
  name: string;
  description: string;
  tech: string[];
}

const PROJECTS: Project[] = [
  {
    name: "太陽人全民電廠",
    description:
      "使用 C# ASP.NET WebForm 架構開發，建置太陽能購買平台，串接金流服務，支援信用卡及 ATM 轉帳。",
    tech: ["C# ASP.NET WebForm", "HTML5", "CSS3", "MSSQL", "智付通金流", "Google Cloud", "Win Server"],
  },
  {
    name: "DMS 提款機監控 + 入金機後台翻新",
    description:
      "協助將 ASP 舊專案更新至 ASP.NET，重新設計 HTML5 前端介面，並優化 SQL Stored Procedure 查詢效能。",
    tech: ["C# ASP.NET WebForm", "MSSQL", "HTML5", "CSS3", "jQuery"],
  },
  {
    name: "Relay 驛站停車場 — 形象網站",
    description:
      "純前端客製化響應式形象網站，使用 HTML5、CSS3、JavaScript 開發。",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery"],
  },
  {
    name: "豪運租賃 — 形象網站",
    description:
      "使用 C# ASP.NET WebForm 建置前端形象網站，含後台供客戶自行編輯頁面內容，架設於 AWS 雲端。",
    tech: ["C# ASP.NET WebForm", "MSSQL", "HTML5", "jQuery", "AWS Cloud"],
  },
  {
    name: "紙捲自動化噴印系統",
    description:
      "使用 C# WinForm 開發工業控制自動流程，配合 PLC 及各類 Sensor 獲取資料，整合至系統產生報表與生產履歷。",
    tech: ["C# WinForm", "MSSQL", "MySQL", "SQLite", "SAP ERP", "PLC"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background orbs */}
      <div className="gradient-orb w-64 h-64 bg-pink-400/10 top-32 left-10" />
      <div className="gradient-orb w-48 h-48 bg-violet-400/10 bottom-20 right-20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimateSection>
          <div className="flex flex-col mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">專案經驗</h2>
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Featured Works</p>
            </div>
          </div>
        </AnimateSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <AnimateSection key={project.name} delay={i * 0.1}>
              <div className="group h-full glass-card p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 flex items-center justify-center text-slate-400 mb-6 group-hover:text-violet-600 transition-colors duration-300">
                  <FolderOpen size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight group-hover:text-violet-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/30">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="glass-chip px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500"
                    >
                      {t}
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

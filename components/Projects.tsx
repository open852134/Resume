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
    <section id="projects" className="bg-gray-50/70 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateSection>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
              <FolderOpen size={17} className="text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">專案經驗</h2>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mt-0.5">Projects</p>
            </div>
          </div>
        </AnimateSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <AnimateSection key={project.name} delay={i * 0.08}>
              <div className="h-full bg-white rounded-xl border border-gray-200 p-5 flex flex-col hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 tracking-tight">{project.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{project.description}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-md bg-gray-100 text-gray-600 font-medium"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}

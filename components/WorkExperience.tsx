import { Briefcase } from "lucide-react";
import AnimateSection from "./AnimateSection";

interface Job {
  period: string;
  company: string;
  roles: { title: string; description: string }[];
}

const JOBS: Job[] = [
  {
    period: "2020.09 — 2026.03",
    company: "Placements.io",
    roles: [
      {
        title: "Senior Frontend Engineer",
        description:
          "Lead frontend architecture decisions across the revenue management platform, establishing patterns for scalable, maintainable React applications used by enterprise clients.",
      },
      {
        title: "Large-Scale Data Dashboard Optimization",
        description:
          "Designed and optimized high-performance dashboards handling millions of ad spend records, reducing load times by leveraging virtualization, memoization, and efficient API pagination.",
      },
      {
        title: "Mentorship & Team Development",
        description:
          "Mentor junior and mid-level engineers through code reviews, pair programming sessions, and internal tech talks on React, TypeScript, and frontend best practices.",
      },
      {
        title: "Cross-Functional Collaboration",
        description:
          "Partner closely with product, design, and backend teams to deliver end-to-end features — from API contract design to pixel-perfect UI implementation and QA sign-off.",
      },
    ],
  },
  {
    period: "2018.12 — 2020.09",
    company: "4IDPS 我愛數位科技",
    roles: [
      {
        title: "獨立負責 MES 系統開發",
        description:
          "包含系統規劃、設計、執行。技術使用 NodeJS + Oracle 搭配前端 React + Redux。",
      },
      {
        title: "負責 Nextmile 網站前後端開發",
        description:
          "技術包含：AWS Serverless (Amplify, DynamoDB, AppSync, S3), React + GraphQL。",
      },
      {
        title: "負責 LevelHeroes 網站前端開發",
        description:
          "技術包含：React, CSS-in-JS (Styled Components), Hooks, Storybook。",
      },
      {
        title: "內部訓練經驗分享",
        description:
          "CSS、React、JavaScript 等技術分享，以及專案經驗分享。",
      },
    ],
  },
  {
    period: "2017-08 — 2018-12",
    company: "三商電腦",
    roles: [
      {
        title: "入金系統專案維護與需求開發",
        description:
          "包含 ASP.NET 維護、排程作業維護、MSSQL Stored Procedure 維護更新及備份。",
      },
      {
        title: "ATM 監控系統翻新",
        description: "協助將 ASP 舊專案升級至 ASP.NET。",
      },
      {
        title: "導入前後端分離架構",
        description:
          "協助評估 VueJS，進行基礎教育訓練，建置前後端分離的開發架構。",
      },
    ],
  },
  {
    period: "2016-03 — 2017-08",
    company: "鵬柏科技",
    roles: [
      {
        title: "台中正隆紙廠產線自動化系統開發",
        description:
          "使用 C# 開發桌面程式及硬體通訊程式，整合 SAP ERP 系統達到自動生產入庫。",
      },
      {
        title: "印尼 Fajar Paper 紙廠自動化系統開發",
        description: "負責兩套程式開發以及印尼現場作業規劃、會議進行。",
      },
      {
        title: "蘇花改灌漿機程式開發",
        description:
          "使用 C# 串接印表機及 Sensor 設備，紀錄灌漿資料至 SQLite 並即時列印數據。",
      },
    ],
  },
  {
    period: "2014 — 2015",
    company: "專智科技",
    roles: [
      {
        title: "電商網站維護",
        description:
          "接觸正在運行的 VB.NET / PHP 專案，學習 Linux 伺服器架設、CRM 系統維護、前端 jQuery 開發及 PhoneGap APP 開發。",
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="bg-gray-50/70 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateSection>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
              <Briefcase size={17} className="text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">工作經驗</h2>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] mt-0.5">Work Experience</p>
            </div>
          </div>
        </AnimateSection>

        <div className="relative pl-6 border-l-2 border-indigo-100 space-y-8">
          {JOBS.map((job, i) => (
            <AnimateSection key={job.company} delay={i * 0.07}>
              <div className="relative">
                <span className="absolute -left-[29px] top-7 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-white ring-2 ring-indigo-100" />
                <div className="rounded-xl border border-gray-200 bg-white p-5 hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4">
                    <span className="text-[11px] font-mono text-gray-400 tracking-wide">{job.period}</span>
                    <h3 className="text-base font-semibold text-gray-900 tracking-tight">{job.company}</h3>
                  </div>
                  <ul className="space-y-3">
                    {job.roles.map((role) => (
                      <li key={role.title}>
                        <p className="text-sm font-medium text-gray-800">{role.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{role.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}

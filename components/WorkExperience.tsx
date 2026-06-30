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
    <section id="experience" className="py-24 sm:py-32 relative">
      {/* Background orb */}
      <div className="gradient-orb w-96 h-96 bg-purple-400/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimateSection>
          <div className="flex flex-col mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">工作經歷</h2>
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Professional Journey</p>
            </div>
          </div>
        </AnimateSection>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-violet-200/50 before:to-transparent">
          {JOBS.map((job, i) => (
            <AnimateSection key={job.company} delay={i * 0.1}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full glass-panel text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-[.is-active]:bg-violet-500/80 group-[.is-active]:text-white group-[.is-active]:border-violet-300/50 group-[.is-active]:shadow-violet-200/30 transition-colors duration-500">
                  <Briefcase size={16} />
                </div>
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] glass-card p-6">
                  <div className="flex items-center justify-between space-x-2 mb-3">
                    <div className="font-bold text-slate-900">{job.company}</div>
                    <time className="font-mono text-[10px] font-bold text-violet-600 glass-chip px-2 py-1">{job.period}</time>
                  </div>
                  <div className="space-y-4">
                    {job.roles.map((role, idx) => (
                      <div key={idx} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-violet-300 before:rounded-full">
                        <h4 className="text-sm font-bold text-slate-800 leading-snug">{role.title}</h4>
                        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{role.description}</p>
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

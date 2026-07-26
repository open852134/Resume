import type { Dictionary } from "./types";

const zh: Dictionary = {
  meta: {
    title: "Steven Weng — 前端工程師",
    description: "翁于宸（Steven Weng）的個人履歷與部落格，高階前端工程師。",
  },
  nav: {
    brand: "Steven Weng",
    about: "關於",
    experience: "經歷",
    skills: "技能",
    projects: "專案",
    blog: "部落格",
    localeEn: "EN",
    localeZh: "中文",
  },
  footer: {
    copyright: "Steven Weng · 以 Next.js 與 Tailwind CSS 建置",
  },
  hero: {
    experienceLabel: "經歷",
    coreStackLabel: "核心技術",
    available: "可承接新專案",
    greeting: "你好，我是",
    name: "Steven Weng",
    tagline:
      "高階前端工程師，專注打造快速、可及且視覺出色的數位體驗。",
    bio: [
      "嗨！我是于宸 Steven，目前擔任高階前端工程師。擁有豐富的工業控制系統與網頁開發經驗，專注於 React、TypeScript 以及高效能應用的架構設計。",
      "除了開發工作，我也熱衷於社群貢獻，曾參與多場技術年會與社群活動，致力於持續學習最新的前端技術與最佳實踐。",
    ],
    quote:
      "我相信好的設計是盡可能少的設計。專注乾淨的程式碼、穩定節奏，以及以使用者為中心的解決方案。",
    companies: ["Placements.io", "4IDPS", "三商電腦", "鵬柏科技", "專智科技"],
    stack: ["React", "TypeScript", "Node.js", "Next.js", "C#", "Tailwind"],
    photoAlt: "翁于宸 Steven Weng",
  },
  experience: {
    title: "工作經歷",
    subtitle: "職涯軌跡",
    jobs: [
      {
        period: "2020.09 — 2026.03",
        company: "Placements.io",
        roles: [
          {
            title: "高階前端工程師",
            description:
              "主導營收管理平台的前端架構決策，建立可擴充、可維護的 React 應用模式，服務企業客戶。",
          },
          {
            title: "大規模資料儀表板優化",
            description:
              "設計並優化處理數百萬筆廣告花費資料的高效能儀表板，透過虛擬化、memoization 與高效 API 分頁降低載入時間。",
          },
          {
            title: "導師制與團隊成長",
            description:
              "透過 code review、結對程式設計與內部技術分享，指導初階與中階工程師 React、TypeScript 與前端最佳實踐。",
          },
          {
            title: "跨職能協作",
            description:
              "與產品、設計與後端緊密合作，交付端到端功能——從 API 契約設計、精準 UI 實作到 QA 驗收。",
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
            description: "CSS、React、JavaScript 等技術分享，以及專案經驗分享。",
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
    ],
  },
  skills: {
    title: "專業技能",
    subtitle: "技術武器庫",
    categories: [
      {
        title: "網頁前端",
        subtitle: "Frontend",
        items: [
          "React + Redux (Redux Thunk)",
          "HTML5",
          "CSS3 (SCSS)",
          "JavaScript",
          "jQuery",
          "Vue.js",
        ],
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
        items: [
          "MySQL",
          "MSSQL",
          "MongoDB",
          "Windows Server",
          "Linux (Ubuntu · Fedora)",
        ],
        note: "兩大平台都有接觸，包含服務的架設部署。",
      },
      {
        title: "其他",
        subtitle: "Others",
        items: ["PhoneGap", "ChatBot", "Adobe Illustrator", "Adobe Photoshop"],
        note: "玩過 Chatbot 聊天機器人，也修過 Illustrator、Photoshop 設計相關課程。",
      },
    ],
  },
  projects: {
    title: "專案經驗",
    subtitle: "精選作品",
    items: [
      {
        name: "太陽人全民電廠",
        description:
          "使用 C# ASP.NET WebForm 架構開發，建置太陽能購買平台，串接金流服務，支援信用卡及 ATM 轉帳。",
        tech: [
          "C# ASP.NET WebForm",
          "HTML5",
          "CSS3",
          "MSSQL",
          "智付通金流",
          "Google Cloud",
          "Win Server",
        ],
      },
      {
        name: "DMS 提款機監控 + 入金機後台翻新",
        description:
          "協助將 ASP 舊專案更新至 ASP.NET，重新設計 HTML5 前端介面，並優化 SQL Stored Procedure 查詢效能。",
        tech: ["C# ASP.NET WebForm", "MSSQL", "HTML5", "CSS3", "jQuery"],
      },
      {
        name: "Relay 驛站停車場 — 形象網站",
        description: "純前端客製化響應式形象網站，使用 HTML5、CSS3、JavaScript 開發。",
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
    ],
  },
  blog: {
    metaTitle: "部落格 — Steven Weng",
    metaDescription: "關於 React、TypeScript 與前端工程的筆記。",
    title: "部落格",
    subtitle: "前端工程筆記",
    empty: "目前尚無文章，稍後再來看看。",
    back: "回到部落格",
  },
};

export default zh;

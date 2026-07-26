import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Steven Weng — Frontend Engineer",
    description:
      "Portfolio and blog of Steven Weng (翁于宸), Senior Frontend Engineer.",
  },
  nav: {
    brand: "Steven Weng",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    blog: "Blog",
    localeEn: "EN",
    localeZh: "中文",
  },
  footer: {
    copyright: "Steven Weng · Built with Next.js & Tailwind CSS",
  },
  hero: {
    experienceLabel: "Experience",
    coreStackLabel: "Core Stack",
    available: "Available for new projects",
    greeting: "Hello, I'm",
    name: "Steven Weng",
    tagline:
      "Senior Frontend Engineer focusing on building exceptional digital experiences that are fast, accessible, and visually stunning.",
    bio: [
      "Hi! I'm Steven (于宸). I'm a senior frontend engineer with deep experience in industrial control systems and web development, focused on React, TypeScript, and high-performance application architecture.",
      "Beyond day-to-day engineering, I enjoy community work — speaking at and joining tech conferences and meetups, and continuously learning modern frontend practices.",
    ],
    quote:
      "I believe that good design is as little design as possible. Focused on clean code, baseline rhythm, and user-centric solutions.",
    companies: ["Placements.io", "4IDPS", "Mercuries Data Systems", "Pengbo Tech", "Zhuanzhi Tech"],
    stack: ["React", "TypeScript", "Node.js", "Next.js", "C#", "Tailwind"],
    photoAlt: "Steven Weng",
  },
  experience: {
    title: "Work Experience",
    subtitle: "Professional Journey",
    jobs: [
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
        company: "4IDPS",
        roles: [
          {
            title: "Owned MES system development end-to-end",
            description:
              "Covered planning, design, and delivery using Node.js + Oracle with a React + Redux frontend.",
          },
          {
            title: "Nextmile full-stack web development",
            description:
              "Built with AWS Serverless (Amplify, DynamoDB, AppSync, S3) and React + GraphQL.",
          },
          {
            title: "LevelHeroes frontend development",
            description:
              "React, CSS-in-JS (Styled Components), Hooks, and Storybook.",
          },
          {
            title: "Internal tech sharing",
            description:
              "Shared CSS, React, JavaScript practices and project learnings with the team.",
          },
        ],
      },
      {
        period: "2017-08 — 2018-12",
        company: "Mercuries Data Systems",
        roles: [
          {
            title: "Cash deposit system maintenance & feature work",
            description:
              "ASP.NET maintenance, scheduled jobs, and MSSQL stored procedure updates and backups.",
          },
          {
            title: "ATM monitoring system refresh",
            description: "Helped migrate a legacy ASP project to ASP.NET.",
          },
          {
            title: "Adopted frontend/backend separation",
            description:
              "Evaluated Vue.js, ran baseline training, and established a separated FE/BE architecture.",
          },
        ],
      },
      {
        period: "2016-03 — 2017-08",
        company: "Pengbo Tech",
        roles: [
          {
            title: "Cheng Long Paper (Taichung) production-line automation",
            description:
              "Built C# desktop and hardware communication software integrated with SAP ERP for automated production inbound.",
          },
          {
            title: "Fajar Paper (Indonesia) automation systems",
            description:
              "Delivered two applications and coordinated on-site planning and meetings in Indonesia.",
          },
          {
            title: "Suhua Highway improvement grouting machine software",
            description:
              "Used C# to integrate printers and sensors, store grouting data in SQLite, and print metrics in real time.",
          },
        ],
      },
      {
        period: "2014 — 2015",
        company: "Zhuanzhi Tech",
        roles: [
          {
            title: "E-commerce site maintenance",
            description:
              "Worked on live VB.NET / PHP projects while learning Linux server setup, CRM maintenance, frontend jQuery, and PhoneGap apps.",
          },
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Technical Arsenal",
    categories: [
      {
        title: "Frontend",
        subtitle: "Web Frontend",
        items: [
          "React + Redux (Redux Thunk)",
          "HTML5",
          "CSS3 (SCSS)",
          "JavaScript",
          "jQuery",
          "Vue.js",
        ],
        note: "Focused on frontend for the past year and a half. I also enjoy UI/UX reading to sharpen design taste.",
      },
      {
        title: "Backend",
        subtitle: "Web Backend",
        items: ["C# (WinForm · WebForm · MVC)", "PHP (CodeIgniter)", "Node.js"],
        note: "Built e-commerce sites and integrated payment gateways (Pay2go / NewebPay, allPay / ECPay).",
      },
      {
        title: "Database & Systems",
        subtitle: "Infrastructure",
        items: [
          "MySQL",
          "MSSQL",
          "MongoDB",
          "Windows Server",
          "Linux (Ubuntu · Fedora)",
        ],
        note: "Hands-on with both major platforms, including service setup and deployment.",
      },
      {
        title: "Others",
        subtitle: "Extras",
        items: ["PhoneGap", "ChatBot", "Adobe Illustrator", "Adobe Photoshop"],
        note: "Explored chatbot projects and took Illustrator / Photoshop design courses.",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Featured Works",
    items: [
      {
        name: "Solar Citizen Power Plant",
        description:
          "Built a solar purchase platform with C# ASP.NET WebForm, payment integration, and support for credit cards and ATM transfers.",
        tech: [
          "C# ASP.NET WebForm",
          "HTML5",
          "CSS3",
          "MSSQL",
          "Pay2go",
          "Google Cloud",
          "Win Server",
        ],
      },
      {
        name: "DMS ATM monitoring + deposit machine admin refresh",
        description:
          "Helped upgrade a legacy ASP project to ASP.NET, redesigned the HTML5 UI, and optimized SQL stored procedure performance.",
        tech: ["C# ASP.NET WebForm", "MSSQL", "HTML5", "CSS3", "jQuery"],
      },
      {
        name: "Relay parking — marketing site",
        description:
          "Custom responsive marketing site built with HTML5, CSS3, and JavaScript.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      },
      {
        name: "Haoyun Leasing — marketing site",
        description:
          "C# ASP.NET WebForm marketing site with a CMS for client editing, hosted on AWS.",
        tech: ["C# ASP.NET WebForm", "MSSQL", "HTML5", "jQuery", "AWS Cloud"],
      },
      {
        name: "Paper-roll automated printing system",
        description:
          "C# WinForm industrial control flow integrated with PLC and sensors for reports and production history.",
        tech: ["C# WinForm", "MSSQL", "MySQL", "SQLite", "SAP ERP", "PLC"],
      },
    ],
  },
  blog: {
    metaTitle: "Blog — Steven Weng",
    metaDescription: "Writing about React, TypeScript, and frontend engineering.",
    title: "Blog",
    subtitle: "Frontend engineering notes",
    empty: "No posts yet. Check back soon.",
    back: "Back to Blog",
  },
};

export default en;

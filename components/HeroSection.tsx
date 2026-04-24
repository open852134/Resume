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
    <section id="about" className="max-w-5xl mx-auto px-4 py-20">
      <AnimateSection>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left sidebar */}
          <div className="md:w-64 flex-shrink-0 flex flex-col gap-7">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-100 via-indigo-50 to-white overflow-hidden ring-4 ring-white shadow-lg shadow-indigo-100/50">
              <div className="w-full h-full flex items-center justify-center text-3xl text-indigo-400 font-bold tracking-tighter">
                SW
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-semibold text-gray-400 uppercase tracking-[0.12em] mb-2.5">
                  <Monitor size={12} />
                  Experience
                </div>
                <ul className="text-sm text-gray-600 space-y-1.5 pl-4 border-l border-gray-100">
                  <li>聖約翰科大 資管系</li>
                  <li>專智科技 — 工程師助理</li>
                  <li>鵬柏科技 — 專案工程師</li>
                  <li>三商電腦 — 全端工程師</li>
                  <li>4IDPS — 前端工程師</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[10px] font-semibold text-gray-400 uppercase tracking-[0.12em] mb-2.5">
                  <Code2 size={12} />
                  Core Stack
                </div>
                <ul className="text-sm text-gray-600 space-y-1.5 pl-4 border-l border-gray-100">
                  <li>React / TypeScript</li>
                  <li>HTML5 · CSS3 · JavaScript</li>
                  <li>C# · PHP · Node.js</li>
                  <li>MSSQL · MySQL</li>
                </ul>
              </div>

              <div className="flex gap-3.5 pt-1">
                <a
                  href="https://github.com/open852134"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <IconGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/%E4%BA%8E%E5%AE%B8-%E7%BF%81-195348132/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <IconLinkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/open852134"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <IconFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: intro */}
          <div className="flex-1 pt-1">
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                翁于宸 Steven Weng
              </span>
            </h1>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-indigo-500 uppercase mb-8">
              Frontend Engineer
            </p>

            <div className="prose prose-gray max-w-none space-y-4 text-[15px] leading-[1.8] text-gray-600">
              <p>
                嗨！ 我是于宸 Steven，畢業於聖約翰科技大學資訊管理系。本身從事軟體開發近4年左右的時間，開發過工業控制相關的整合系統，有硬體串接的整合能力，同時也開發過網頁前後端，包含電商EC網站、企業形象網站等等。
              </p>
              <p>
                熟悉前後端串接、Server建置部署以及資料庫的操作。現階段我將自己定位在前端工程師的角色上。
              </p>
              <p>
                平時除了工作外，我也很喜歡參加各種讀書會或是 Conf 的活動。學生時期曾擔任過 PHP Conf 2016 的工作人員，也參加過 HitCon 台灣駭客年會、TDOH，以及各程式語言的小聚會或黑客松活動。
              </p>
            </div>
          </div>
        </div>
      </AnimateSection>
    </section>
  );
}

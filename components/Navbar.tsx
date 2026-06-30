"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FileText, BookOpen } from "lucide-react";

const NAV_SECTIONS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 rounded-2xl ${
        scrolled
          ? "glass-panel-strong shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="px-5 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <FileText size={17} className="text-violet-500" />
          <span className="font-bold text-sm gradient-text-purple tracking-tight">
            Steven Weng
          </span>
        </Link>

        <div className="flex items-center gap-0.5">
          {isHome && (
            <div className="hidden md:flex items-center gap-0.5">
              {NAV_SECTIONS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="px-3 py-1.5 text-sm text-slate-600 hover:text-violet-700 rounded-xl hover:bg-white/40 transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
          <Link
            href="/blog"
            className="flex items-center gap-1.5 md:ml-1 px-3 py-1.5 text-sm font-medium text-violet-600 hover:text-violet-700 rounded-xl hover:bg-violet-50/60 transition-all duration-200"
          >
            <BookOpen size={14} />
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}

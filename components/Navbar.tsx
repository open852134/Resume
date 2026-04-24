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
      className={`sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg shadow-gray-200/20 rounded-2xl"
          : "bg-transparent border-transparent rounded-2xl"
      }`}
    >
      <nav className="px-5 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <FileText size={17} className="text-indigo-500" />
          <span className="font-bold text-sm bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight">
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
                  className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100/80 transition-all duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
          <Link
            href="/blog"
            className="flex items-center gap-1.5 md:ml-1 px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 rounded-lg hover:bg-indigo-50/80 transition-all duration-200"
          >
            <BookOpen size={14} />
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}

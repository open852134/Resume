"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FileText, BookOpen } from "lucide-react";
import LocaleToggle from "./LocaleToggle";
import type { Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/types";

interface NavbarProps {
  locale: Locale;
  labels: Dictionary["nav"];
}

export default function Navbar({ locale, labels }: NavbarProps) {
  const pathname = usePathname() || "/";
  const homeHref = localizedHref(locale, "/");
  const isHome = pathname === homeHref || pathname === `/${locale}`;
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { href: `${homeHref}#about`, label: labels.about },
    { href: `${homeHref}#experience`, label: labels.experience },
    { href: `${homeHref}#skills`, label: labels.skills },
    { href: `${homeHref}#projects`, label: labels.projects },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 rounded-2xl ${
        scrolled ? "glass-panel-strong shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="px-5 h-14 flex items-center justify-between gap-3">
        <Link
          href={homeHref}
          className="flex items-center gap-2 transition-opacity hover:opacity-80 min-w-0"
        >
          <FileText size={17} className="text-violet-600 dark:text-violet-300 shrink-0" />
          <span className="font-bold text-sm gradient-text-purple tracking-tight truncate">
            {labels.brand}
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {isHome && (
            <div className="hidden md:flex items-center gap-0.5">
              {sections.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  className="px-3 py-1.5 text-sm text-slate-600 dark:text-slate-200 hover:text-violet-700 dark:hover:text-violet-300 rounded-xl hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-200"
                >
                  {section.label}
                </a>
              ))}
            </div>
          )}
          <Link
            href={localizedHref(locale, "/blog")}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-violet-700 dark:text-violet-300 hover:text-violet-800 dark:hover:text-violet-200 rounded-xl hover:bg-violet-50/60 dark:hover:bg-violet-500/15 transition-all duration-200"
          >
            <BookOpen size={14} />
            {labels.blog}
          </Link>
          <LocaleToggle
            locale={locale}
            labels={{ en: labels.localeEn, zh: labels.localeZh }}
          />
        </div>
      </nav>
    </header>
  );
}

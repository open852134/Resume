"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { locales, swapLocaleInPathname } from "@/lib/i18n";

interface LocaleToggleProps {
  locale: Locale;
  labels: {
    en: string;
    zh: string;
  };
}

export default function LocaleToggle({ locale, labels }: LocaleToggleProps) {
  const pathname = usePathname() || "/";

  return (
    <div
      className="flex items-center rounded-xl border border-white/40 dark:border-white/15 bg-white/30 dark:bg-white/5 p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      {locales.map((item) => {
        const active = item === locale;
        const href = swapLocaleInPathname(pathname, item);
        const label = item === "en" ? labels.en : labels.zh;
        return (
          <Link
            key={item}
            href={href}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              active
                ? "bg-violet-600 text-white dark:bg-violet-500"
                : "text-slate-600 dark:text-slate-200 hover:text-violet-700 dark:hover:text-violet-200"
            }`}
            aria-current={active ? "page" : undefined}
            hrefLang={item === "zh" ? "zh-TW" : "en"}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

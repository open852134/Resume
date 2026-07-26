import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SetHtmlLang from "@/components/SetHtmlLang";
import {
  getDictionary,
  isLocale,
  localeHtmlLang,
  locales,
  type Locale,
} from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <SetHtmlLang lang={localeHtmlLang[locale]} />
      <Navbar locale={locale} labels={dictionary.nav} />
      <main className="flex-1">{children}</main>
      <footer className="glass-panel py-6 text-center text-xs text-slate-500 dark:text-slate-300 mt-12">
        © {new Date().getFullYear()} {dictionary.footer.copyright}
      </footer>
    </>
  );
}

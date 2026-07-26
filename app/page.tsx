import Link from "next/link";
import { defaultLocale, localizedHref } from "@/lib/i18n";

export default function RootPage() {
  const href = localizedHref(defaultLocale, "/");
  const refreshTarget = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${defaultLocale}/`;

  return (
    <main className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
      <meta httpEquiv="refresh" content={`0; url=${refreshTarget}`} />
      <p className="text-slate-600 dark:text-slate-300 text-sm">Redirecting to English…</p>
      <Link
        href={href}
        className="text-violet-700 dark:text-violet-300 font-medium underline underline-offset-4"
      >
        Continue to English site
      </Link>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(refreshTarget)});`,
        }}
      />
    </main>
  );
}

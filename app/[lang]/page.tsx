import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = await getDictionary(lang as Locale);

  return (
    <>
      <HeroSection copy={dictionary.hero} />
      <WorkExperience copy={dictionary.experience} />
      <Skills copy={dictionary.skills} />
      <Projects copy={dictionary.projects} />
    </>
  );
}

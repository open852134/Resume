export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    blog: string;
    localeEn: string;
    localeZh: string;
  };
  footer: {
    copyright: string;
  };
  hero: {
    experienceLabel: string;
    coreStackLabel: string;
    available: string;
    greeting: string;
    name: string;
    tagline: string;
    bio: string[];
    quote: string;
    companies: string[];
    stack: string[];
    photoAlt: string;
  };
  experience: {
    title: string;
    subtitle: string;
    jobs: {
      period: string;
      company: string;
      roles: { title: string; description: string }[];
    }[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      title: string;
      subtitle: string;
      items: string[];
      note: string;
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      description: string;
      tech: string[];
    }[];
  };
  blog: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    empty: string;
    back: string;
  };
}

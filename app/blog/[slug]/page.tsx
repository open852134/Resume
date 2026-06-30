import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPost, markdownToHtml } from "@/lib/markdown";
import { ArrowLeft, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — Steven Weng`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-gray-200 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to Blog
      </Link>

      <header className="glass-card p-6 mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-gray-100 mb-2">{post.title}</h1>
        <p className="text-sm text-slate-400 dark:text-gray-400">{post.date}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-1.5 mt-3">
            <Tag size={12} className="text-slate-400 dark:text-gray-500" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="glass-chip text-xs px-2 py-0.5 text-slate-500 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article
        className="glass-panel rounded-2xl p-8 prose prose-gray dark:prose-invert max-w-none prose-headings:font-semibold prose-code:text-violet-600 dark:prose-code:text-violet-300 prose-pre:bg-gray-950 prose-pre:text-gray-100 prose-a:text-violet-600 dark:prose-a:text-violet-400 prose-strong:text-slate-900 dark:prose-strong:text-gray-100"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

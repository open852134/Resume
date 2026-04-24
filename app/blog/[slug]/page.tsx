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
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to Blog
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-400">{post.date}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-1.5 mt-3">
            <Tag size={12} className="text-gray-400" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article
        className="prose prose-gray max-w-none prose-headings:font-semibold prose-code:text-indigo-600 prose-pre:bg-gray-950 prose-pre:text-gray-100"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

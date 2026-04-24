import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import { BookOpen, ArrowRight, Tag } from "lucide-react";

export const metadata = {
  title: "Blog — Steven Weng",
  description: "Writing about React, TypeScript, and frontend engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-10">
        <BookOpen size={20} className="text-indigo-600" />
        <div>
          <h1 className="text-xl font-bold text-gray-900">Blog</h1>
          <p className="text-sm text-gray-500">Frontend engineering notes</p>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-sm">No posts yet. Check back soon.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-gray-200 p-5 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5 mb-2">{post.date}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
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
                  </div>
                  <ArrowRight
                    size={16}
                    className="flex-shrink-0 mt-1 text-gray-300 group-hover:text-indigo-400 transition-colors"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

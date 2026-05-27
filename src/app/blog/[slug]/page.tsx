import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Pratik Sapkota`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen section-padding pt-28 pb-20 max-w-3xl mx-auto relative z-10">
      <Link
        href="/#blog"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] mb-10 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>

      <p className="font-mono text-xs text-[var(--color-sand)] mb-3">{post.date}</p>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-cream)] mb-4">
        {post.title}
      </h1>
      <p className="text-[var(--color-muted)] mb-10 leading-relaxed">{post.excerpt}</p>

      <div className="blog-prose border-t border-white/10 pt-10">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}

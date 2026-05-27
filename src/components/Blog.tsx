import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Blog() {
  const blogPosts = getAllPosts();

  return (
    <section id="blog" className="section-padding relative z-10">
      <RevealOnScroll>
        <SectionHeading
          label="07 — Blog"
          title="Writing & notes"
          subtitle="Technical articles on wireless, simulation, and ML — edit posts in content/blog/"
        />
      </RevealOnScroll>

      {blogPosts.length === 0 ? (
        <p className="text-[var(--color-muted)]">
          No posts yet. Add a <code className="text-[var(--color-sand)]">.md</code> file in{" "}
          <code className="text-[var(--color-sand)]">content/blog/</code>.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <RevealOnScroll key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="block glass rounded-2xl p-8 holo-card group h-full"
              >
                <p className="font-mono text-xs text-[var(--color-muted)] mb-3">{post.date}</p>
                <h3 className="text-lg font-bold text-[var(--color-cream)] group-hover:text-[var(--color-beige)] transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{post.excerpt}</p>
                <span className="inline-block mt-4 text-sm text-[var(--color-sand)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more →
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      )}
    </section>
  );
}

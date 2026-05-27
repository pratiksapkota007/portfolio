import { blogPosts } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative z-10">
      <RevealOnScroll>
        <SectionHeading
          label="07 — Blog"
          title="Writing & notes"
          subtitle="Technical articles coming soon. Replace placeholders in portfolio.ts when ready."
        />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, i) => (
          <RevealOnScroll key={post.title} delay={i * 0.1}>
            <a
              href={post.slug}
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
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

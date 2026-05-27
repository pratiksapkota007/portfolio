import { research } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Research() {
  return (
    <section id="research" className="section-padding relative z-10">
      <RevealOnScroll>
        <SectionHeading
          label="06 — Research"
          title="Publications & thesis"
          subtitle="Conference papers, journal submissions, and academic research."
        />
      </RevealOnScroll>

      <div className="space-y-6">
        {research.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <article className="glass rounded-2xl p-8 holo-card">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-white/[0.06] text-[var(--color-sand)] mb-4">
                {item.type}
              </span>
              <p className="text-[var(--color-muted)] leading-relaxed text-sm md:text-base">
                {item.citation}
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

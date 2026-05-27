import { about } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="section-padding relative z-10">
      <RevealOnScroll>
        <SectionHeading
          label="01 — About"
          title="Signals, systems, and intelligence"
          subtitle="From live RAN deployments to ML research — I work where hardware meets code."
        />
      </RevealOnScroll>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 space-y-6">
          {about.paragraphs.map((p, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <p className="text-[var(--color-muted)] leading-relaxed text-lg">{p}</p>
            </RevealOnScroll>
          ))}
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((h, i) => (
              <RevealOnScroll key={h.label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 text-center holo-card">
                  <p className="text-3xl font-bold text-[var(--color-cream)]">{h.value}</p>
                  <p className="text-sm text-[var(--color-muted)] mt-2">{h.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

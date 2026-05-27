import { education, certifications } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Education() {
  return (
    <section id="education" className="section-padding relative z-10">
      <RevealOnScroll>
        <SectionHeading
          label="05 — Education"
          title="Academic foundation"
        />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {education.map((edu, i) => (
          <RevealOnScroll key={edu.degree} delay={i * 0.1}>
            <div className="glass rounded-2xl p-8 holo-card h-full">
              <p className="font-mono text-xs text-[var(--color-sand)] mb-2">{edu.period}</p>
              <h3 className="text-lg font-bold text-[var(--color-cream)] mb-1">{edu.degree}</h3>
              <p className="text-[var(--color-beige)] text-sm mb-1">{edu.school}</p>
              <p className="text-sm text-[var(--color-muted)]">{edu.location}</p>
              {edu.detail && (
                <p className="mt-3 text-sm text-[var(--color-muted)] border-t border-white/10 pt-3">
                  {edu.detail}
                </p>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {certifications.length > 0 && (
        <RevealOnScroll>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-mono text-sm uppercase tracking-wider text-[var(--color-muted)] mb-3">
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-[var(--color-cream)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sand)]" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      )}
    </section>
  );
}

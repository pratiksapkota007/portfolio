"use client";

import { experience } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative z-10">
      <RevealOnScroll>
        <SectionHeading
          label="04 — Experience"
          title="Where I've worked"
          subtitle="Field deployments, enterprise IT, and broadcast engineering."
        />
      </RevealOnScroll>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] md:left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-sand)] via-[var(--color-stone)] to-transparent opacity-40" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <RevealOnScroll key={job.company} delay={i * 0.12}>
              <div className="relative pl-10 md:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 border-[var(--color-sand)] bg-[var(--color-void)]">
                  <div className="absolute inset-1 rounded-full bg-[var(--color-sand)] opacity-50" />
                </div>

                <div className="glass rounded-2xl p-8 holo-card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-cream)]">{job.role}</h3>
                      <p className="text-[var(--color-beige)] font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm text-[var(--color-muted)]">{job.period}</p>
                      <p className="text-sm text-[var(--color-muted)]">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-[var(--color-muted)] leading-relaxed flex gap-2"
                      >
                        <span className="text-[var(--color-sand)] mt-1.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

function ProjectLinks({ url }: { url: string }) {
  if (!url || url === "#") return null;

  return (
    <div className="flex gap-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
        aria-label="View on GitHub"
      >
        <Github size={18} />
      </a>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
        aria-label="Open repository"
      >
        <ExternalLink size={18} />
      </a>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative z-10">
      <RevealOnScroll>
        <SectionHeading
          label="03 — Projects"
          title="Built & simulated"
          subtitle="From ns-3 network twins to deep learning pipelines — selected work."
        />
      </RevealOnScroll>

      {/* Featured — large cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featured.map((project, i) => (
          <RevealOnScroll key={project.title} delay={i * 0.1}>
            <article
              className={`glass rounded-2xl p-8 holo-card flex flex-col h-full ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-xs text-[var(--color-sand)]">
                  {project.year}
                </span>
                <ProjectLinks url={project.github} />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-cream)] mb-3">{project.title}</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded text-xs font-mono bg-white/[0.06] text-[var(--color-beige)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      {/* Other projects — compact list */}
      <div className="space-y-4">
        {others.map((project, i) => (
          <RevealOnScroll key={project.title} delay={i * 0.08}>
            <article className="glass rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 holo-card group">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-[var(--color-cream)] group-hover:text-[var(--color-beige)] transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-[var(--color-muted)]">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-muted)]">{project.description}</p>
              </div>
              <div className="flex items-center gap-3 sm:justify-end">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-mono bg-white/5 text-[var(--color-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ProjectLinks url={project.github} />
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

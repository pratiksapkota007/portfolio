"use client";

import { Mail, Linkedin, Github, MapPin, Phone, Download } from "lucide-react";
import { site } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const links = [
    { icon: Mail, label: site.email, href: site.social.email },
    { icon: Phone, label: site.phone, href: `tel:${site.phone}` },
    { icon: Linkedin, label: "LinkedIn", href: site.social.linkedin },
    { icon: Github, label: "GitHub", href: site.social.github },
    { icon: MapPin, label: site.location, href: "#" },
  ];

  return (
    <section id="contact" className="section-padding relative z-10">
      <RevealOnScroll>
        <SectionHeading
          label="08 — Contact"
          title="Let's connect"
          subtitle="Open to research collaborations, engineering roles, and interesting problems."
        />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-12">
        <RevealOnScroll>
          <div className="space-y-4">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 glass rounded-xl p-4 holo-card group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                  <Icon size={18} className="text-[var(--color-beige)]" />
                </div>
                <span className="text-[var(--color-muted)] group-hover:text-[var(--color-cream)] transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="glass rounded-2xl p-8 holo-card flex flex-col items-center justify-center text-center h-full min-h-[300px]">
            <p className="text-6xl mb-4">⚡</p>
            <h3 className="text-2xl font-bold text-[var(--color-cream)] mb-3">
              Ready to build something?
            </h3>
            <p className="text-[var(--color-muted)] mb-8 max-w-sm">
              Download my resume or drop me an email — I typically respond within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton href={site.social.email}>
                <Mail size={18} /> Email Me
              </MagneticButton>
              <MagneticButton href={site.resumePath} variant="ghost" download>
                <Download size={18} /> Resume
              </MagneticButton>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

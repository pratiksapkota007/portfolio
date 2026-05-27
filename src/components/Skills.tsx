"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative z-10">
      <RevealOnScroll>
        <SectionHeading
          label="02 — Skills"
          title="Tools of the trade"
          subtitle="Technologies I use across wireless engineering, simulation, and machine learning."
        />
      </RevealOnScroll>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, gi) => (
          <RevealOnScroll key={group.category} delay={gi * 0.08}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 holo-card h-full"
              style={{ borderColor: `${group.color}22` }}
            >
              <h3
                className="font-mono text-sm uppercase tracking-wider mb-4"
                style={{ color: group.color }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm bg-white/[0.04] border border-white/[0.08] text-[var(--color-muted)] hover:text-[var(--color-cream)] hover:border-white/15 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

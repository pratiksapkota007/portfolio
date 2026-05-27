"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, FileText } from "lucide-react";
import { site } from "@/data/portfolio";
import MagneticButton from "@/components/ui/MagneticButton";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % site.heroRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28 pb-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Mobile & tablet — photo at top of hero */}
        <div className="flex justify-center mb-10 lg:hidden">
          <ProfilePhoto variant="about" />
        </div>

        <div className="grid lg:grid-cols-[1fr_minmax(16rem,20rem)] xl:grid-cols-[1fr_22rem] gap-10 lg:gap-16 items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#d4c4a8] animate-pulse" />
              <span className="text-sm font-mono text-[#9c958c]">{site.heroBadge}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              <span className="block text-[#f5f0e8]">Pratik</span>
              <span className="block text-[#e8dcc8]">Sapkota</span>
            </h1>

            <div className="h-10 mb-6">
              <p className="text-xl md:text-2xl font-mono text-[#d4c4a8]">
                {site.heroRoles[roleIndex]}
              </p>
            </div>

            <p className="text-lg text-[#9c958c] max-w-xl mb-10 leading-relaxed">
              {site.tagline}
            </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href={site.resumePage} variant="ghost" newTab>
              <FileText size={18} /> View CV
            </MagneticButton>
            <MagneticButton href={site.resumePath} variant="ghost" download>
              <Download size={18} /> Download
            </MagneticButton>
          </div>
          </div>

          {/* Desktop — photo beside name */}
          <div className="hidden lg:flex justify-end items-center w-full">
            <ProfilePhoto variant="hero" />
          </div>
        </div>
      </div>

      {ready && (
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#9c958c] hover:text-[#f5f0e8] transition-colors"
          aria-label="Scroll to about"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown size={24} />
          </motion.div>
        </motion.a>
      )}
    </section>
  );
}

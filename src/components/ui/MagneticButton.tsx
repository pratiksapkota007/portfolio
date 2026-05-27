"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  download?: boolean;
  /** Open link in a new browser tab */
  newTab?: boolean;
}

/**
 * MagneticButton — a link that subtly follows your cursor on hover.
 * Great for CTAs like "Download Resume" or "Get in Touch".
 */
export default function MagneticButton({
  href,
  children,
  variant = "primary",
  download,
  newTab,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-cream)] text-[var(--color-void)] hover:bg-[var(--color-beige)]"
      : "glass text-[var(--color-cream)] hover:border-white/20";

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={newTab || href.startsWith("http") ? "_blank" : undefined}
      rel={newTab || href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

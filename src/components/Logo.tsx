"use client";

import { motion } from "framer-motion";

interface LogoProps {
  /** Show "sapkota" text beside the icon */
  showWordmark?: boolean;
  /** Icon size in pixels */
  size?: number;
  className?: string;
}

/**
 * Custom logo — stylized "P" monogram + RF signal arcs.
 *
 * HOW TO CUSTOMIZE:
 * - Colors: uses CSS vars --color-electric and --color-violet (change in globals.css)
 * - Wordmark: set showWordmark={false} for icon-only
 * - Replace the SVG paths below if you want a completely different mark
 */
export default function Logo({
  showWordmark = true,
  size = 36,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="var(--color-electric)" />
            <stop offset="100%" stopColor="var(--color-violet)" />
          </linearGradient>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring — like an antenna aperture */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="url(#logo-gradient)"
          strokeWidth="1.2"
          strokeOpacity="0.35"
          fill="none"
        />

        {/* Letter P — geometric monogram */}
        <path
          d="M13 10v20M13 10h9.5c4.2 0 6.5 2.2 6.5 5.5s-2.3 5.5-6.5 5.5H13"
          stroke="url(#logo-gradient)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#logo-glow)"
        />

        {/* RF signal arcs — emanating from the P */}
        <path
          d="M27 14c3 1.5 4.5 3.8 4.5 6s-1.5 4.5-4.5 6"
          stroke="var(--color-electric)"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M29.5 11.5c4.5 2.2 6.8 5.5 6.8 8.5s-2.3 6.3-6.8 8.5"
          stroke="var(--color-electric)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M32 9c6 3 9 7.2 9 11s-3 8-9 11"
          stroke="var(--color-violet)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />

        {/* Signal nodes — pulse like live RF links */}
        <circle cx="13" cy="10" r="2" fill="var(--color-electric)">
          <animate
            attributeName="opacity"
            values="1;0.4;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="13" cy="30" r="1.5" fill="var(--color-violet)" opacity="0.7" />
        <circle cx="27" cy="20" r="1.8" fill="var(--color-electric)" opacity="0.85">
          <animate
            attributeName="opacity"
            values="0.85;0.3;0.85"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </motion.svg>

      {showWordmark && (
        <span className="hidden sm:flex flex-col leading-none">
          <span className="font-bold text-sm tracking-tight text-[var(--color-cream)] group-hover:text-[var(--color-beige)] transition-colors">
            pratik
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)]">
            sapkota
          </span>
        </span>
      )}
    </div>
  );
}

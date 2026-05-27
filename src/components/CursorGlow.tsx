"use client";

import { useEffect } from "react";

/**
 * CursorGlow — tracks mouse position and updates CSS variables.
 * The glow is rendered in globals.css using --cursor-x and --cursor-y.
 * This is a "client component" because it uses browser APIs (mousemove).
 */
export default function CursorGlow() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="cursor-glow" aria-hidden />;
}

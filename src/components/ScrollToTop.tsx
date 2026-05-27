"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Back to top — appears when you're near the bottom of the page.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      const scrolled = window.scrollY + clientHeight;
      const nearBottom = scrolled >= scrollHeight - 320;
      setVisible(nearBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 glass holo-card px-4 py-3 rounded-full text-sm text-[var(--color-cream)] hover:border-white/20 transition-all shadow-lg"
    >
      <ArrowUp size={18} className="text-[var(--color-beige)]" />
      <span className="hidden sm:inline font-medium">Top</span>
    </button>
  );
}

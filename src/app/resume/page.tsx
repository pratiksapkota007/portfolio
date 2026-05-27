import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/data/portfolio";

export const metadata = {
  title: `CV | ${site.name}`,
  description: "Resume / curriculum vitae",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col relative z-10 bg-[#0a0a0a]">
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
        <a
          href={site.resumePath}
          download
          className="text-sm px-4 py-2 rounded-full border border-white/15 text-[var(--color-cream)] hover:bg-white/5 transition-colors"
        >
          Download PDF
        </a>
      </header>

      <iframe
        src={site.resumePath}
        title={`${site.name} — CV`}
        className="flex-1 w-full min-h-[calc(100vh-4rem)] border-0"
      />
    </div>
  );
}

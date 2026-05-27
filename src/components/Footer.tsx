import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/15 bg-[#0a0a0a] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[#f5f0e8]">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a
            href={site.social.email}
            className="text-[#9c958c] hover:text-[#f5f0e8] transition-colors"
          >
            {site.email}
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9c958c] hover:text-[#f5f0e8] transition-colors"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9c958c] hover:text-[#f5f0e8] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

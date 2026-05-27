"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { site } from "@/data/portfolio";

interface ProfilePhotoProps {
  variant?: "hero" | "about";
  className?: string;
}

/** Portrait 4:5 — sized for hero vs about */
const sizes = {
  hero: "w-full aspect-[4/5]",
  about: "w-full max-w-[17rem] sm:max-w-xs aspect-[4/5]",
};

const imageStyles =
  "w-full h-full object-cover object-[center_20%] grayscale contrast-[1.06] brightness-[0.92]";

export default function ProfilePhoto({
  variant = "about",
  className = "",
}: ProfilePhotoProps) {
  const src = site.profileImage || "/images/profile.jpg";
  const [failed, setFailed] = useState(false);

  const frame = `${sizes[variant]} rounded-2xl overflow-hidden border border-white/12 bg-[#111] shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ${className}`;

  if (failed) {
    return (
      <div
        className={`${frame} flex flex-col items-center justify-center gap-2 border-dashed p-4 text-center`}
      >
        <User size={36} className="text-[var(--color-stone)]" />
        <p className="text-xs text-[var(--color-muted)] leading-relaxed">
          Add your photo as
          <br />
          <span className="font-mono text-[var(--color-sand)]">public/images/profile.jpg</span>
        </p>
      </div>
    );
  }

  return (
    <div className={frame}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${site.name} — profile photo`}
        className={imageStyles}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

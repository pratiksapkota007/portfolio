interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

/**
 * SectionHeading — consistent title block for every section.
 * Change the styling here once → all sections update.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <p className="font-mono text-sm tracking-[0.3em] uppercase text-[var(--color-sand)] mb-3">
        {label}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-cream)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--color-muted)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/** Wraps sections — always visible (no hidden opacity). */
export default function RevealOnScroll({
  children,
  className = "",
}: RevealOnScrollProps) {
  return <div className={className}>{children}</div>;
}

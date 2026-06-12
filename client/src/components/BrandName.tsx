interface BrandNameProps {
  className?: string;
}

export default function BrandName({ className = 'text-2xl sm:text-3xl' }: BrandNameProps) {
  return (
    <span className={`font-bold tracking-tight leading-tight ${className}`}>
      <span className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
        NEXORA
      </span>
      <span className="text-foreground"> Solution</span>
    </span>
  );
}

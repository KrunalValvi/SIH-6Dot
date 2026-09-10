type BadgeVariant = "default" | "coral" | "pending" | "approved" | "rejected" | "active" | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  uppercase?: boolean;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-brand-surface-card text-brand-ink",
  coral: "bg-brand-primary text-brand-on-primary",
  pending: "bg-brand-surface-soft text-brand-warning",
  approved: "bg-brand-success/10 text-brand-success",
  rejected: "bg-brand-error/10 text-brand-error",
  active: "bg-brand-accent-teal/10 text-brand-accent-teal",
  neutral: "bg-brand-surface-card text-brand-muted",
};

export function Badge({ children, variant = "default", uppercase = false, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-caption font-medium whitespace-nowrap ${variantClasses[variant]} ${uppercase ? "uppercase tracking-[0.09375em] text-caption-upper" : ""} ${className}`}
    >
      {children}
    </span>
  );
}

import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "canvas" | "card" | "dark";
}

const variantClasses: Record<string, string> = {
  canvas: "bg-brand-canvas",
  card: "bg-brand-surface-card",
  dark: "bg-brand-surface-dark text-brand-on-dark",
};

export function Card({ children, className = "", variant = "canvas" }: CardProps) {
  return (
    <div className={`rounded-lg p-8 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

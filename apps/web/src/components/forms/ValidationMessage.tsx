import type { ReactNode } from "react";

interface ValidationMessageProps {
  children: ReactNode;
  tone?: "error" | "success" | "info";
  className?: string;
}

export function ValidationMessage({ children, tone = "error", className = "" }: ValidationMessageProps) {
  const toneClasses: Record<string, string> = {
    error: "text-brand-error bg-brand-error/5 border-brand-error/20",
    success: "text-brand-success bg-brand-success/5 border-brand-success/20",
    info: "text-brand-body bg-brand-surface-soft border-brand-hairline",
  };

  return (
    <div
      role={tone === "error" ? "alert" : tone === "success" ? "status" : undefined}
      className={`rounded-md border px-4 py-3 text-body-sm ${toneClasses[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
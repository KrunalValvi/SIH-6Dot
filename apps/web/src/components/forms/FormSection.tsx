import type { ReactNode } from "react";

interface FormSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function FormSection({ title, description, children, className = "" }: FormSectionProps) {
  return (
    <fieldset className={`${className}`}>
      {title && (
        <legend className="text-title-sm font-medium text-brand-ink mb-1">{title}</legend>
      )}
      {description && (
        <p className="text-body-sm text-brand-muted mb-4">{description}</p>
      )}
      <div className="space-y-4">{children}</div>
    </fieldset>
  );
}
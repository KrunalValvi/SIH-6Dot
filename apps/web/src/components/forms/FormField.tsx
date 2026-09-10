import type { ReactNode } from "react";

interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function FormField({ label, htmlFor, error, hint, required, children, className = "" }: FormFieldProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-body-sm font-medium text-brand-ink mb-1.5"
        >
          {label}
          {required && <span className="text-brand-primary ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1.5 text-caption text-brand-error" role="alert">{error}</p>
      )}
      {!error && hint && (
        <p className="mt-1.5 text-caption text-brand-muted-soft">{hint}</p>
      )}
    </div>
  );
}
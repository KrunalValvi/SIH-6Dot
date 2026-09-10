import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { APP_NAME } from "@/config";

interface AuthLayoutProps {
  children: ReactNode;
  pageTitle?: string;
  subtitle?: string;
}

export function AuthLayout({ children, pageTitle, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-brand-canvas flex flex-col">
      <header className="h-16 border-b border-brand-hairline flex items-center">
        <div className="max-w-content mx-auto px-6 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-title-md font-display font-medium text-brand-ink">
            <span className="inline-flex items-center w-6 h-6 rounded-sm bg-brand-primary text-brand-on-primary">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
              </svg>
            </span>
            <span>{APP_NAME}</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">
          {pageTitle && (
            <div className="text-center mb-8">
              <h1 className="text-display-sm font-display text-brand-ink leading-snug">
                {pageTitle}
              </h1>
              {subtitle && (
                <p className="mt-2 text-body-sm text-brand-muted">{subtitle}</p>
              )}
            </div>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
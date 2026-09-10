import { useState } from "react";
import { Link } from "react-router-dom";
import { APP_NAME } from "@/config";

const navLinks = [
  { label: "Platform", href: "#solution" },
  { label: "For Students", href: "#ecosystem" },
  { label: "For Industry", href: "#ecosystem" },
  { label: "How It Works", href: "#how-it-works" },
];

export function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 bg-brand-canvas border-b border-brand-hairline">
      <div className="max-w-content mx-auto px-6 h-full flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-title-md font-display font-medium text-brand-ink"
          onClick={() => setIsOpen(false)}
        >
          <span className="inline-flex items-center w-6 h-6 rounded-sm bg-brand-primary text-brand-on-primary">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
            </svg>
          </span>
          <span className="font-display">{APP_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-nav-link text-brand-muted hover:text-brand-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-nav-link text-brand-ink hover:text-brand-primary transition-colors">
            Sign In
          </Link>
          <Link to="/signup" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-ink hover:bg-brand-surface-soft rounded-md -mr-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <XIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu sheet */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-brand-canvas flex flex-col">
          <nav className="flex flex-col p-6 gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-title-md text-brand-ink border-b border-brand-hairline-soft"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto p-6 flex flex-col gap-3 border-t border-brand-hairline">
            <Link to="/login" className="btn-secondary w-full text-center" onClick={() => setIsOpen(false)}>
              Sign In
            </Link>
            <Link to="/signup" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
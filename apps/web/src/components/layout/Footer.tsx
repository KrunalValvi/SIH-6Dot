import { Link } from "react-router-dom";
import { APP_NAME } from "@/config";

const platformLinks = [
  { label: "Platform", to: "/#solution" },
  { label: "How It Works", to: "/#how-it-works" },
  { label: "Sign In", to: "/login" },
  { label: "Create Account", to: "/signup" },
];

const roleLinks = [
  { label: "For Students", to: "/#ecosystem" },
  { label: "For Industry", to: "/#ecosystem" },
  { label: "For Academicians", to: "/#ecosystem" },
  { label: "For Institutions", to: "/#ecosystem" },
];

const legalLinks = [
  { label: "Privacy", to: "#" },
  { label: "Terms", to: "#" },
  { label: "Contact", to: "#" },
];

export function Footer() {
  return (
    <footer className="bg-brand-surface-dark text-brand-on-dark-soft">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 text-brand-on-dark">
              <span className="inline-flex items-center w-6 h-6 rounded-sm bg-brand-primary text-brand-on-primary">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
                </svg>
              </span>
              <span className="text-title-md font-display">{APP_NAME}</span>
            </div>
            <p className="mt-4 text-body-sm text-brand-on-dark-soft">
              A portal for academia–industry collaboration — skill mapping,
              internships, and placement, connecting students, institutions,
              and industry partners.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title="Platform">
              {platformLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>{link.label}</FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Who It's For">
              {roleLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>{link.label}</FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Legal">
              {legalLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>{link.label}</FooterLink>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-surface-dark-elevated text-caption text-brand-on-dark-soft">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-caption-upper uppercase tracking-wider text-brand-on-dark mb-4">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-body-sm text-brand-on-dark-soft hover:text-brand-on-dark transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { ReactNode } from "react";

interface EcosystemCardProps {
  title: string;
  tagline: string;
  points: string[];
  icon: ReactNode;
  to: string;
}

function EcosystemCard({ title, tagline, points, icon, to }: EcosystemCardProps) {
  return (
    <Card variant="canvas" className="border border-brand-hairline flex flex-col h-full">
      <div className="w-11 h-11 rounded-md bg-brand-surface-card flex items-center justify-center text-brand-ink mb-4">
        {icon}
      </div>
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-title-md font-medium text-brand-ink">{title}</h3>
      </div>
      <p className="text-body-sm text-brand-muted mb-4">{tagline}</p>
      <ul className="space-y-2 mb-6">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-body-sm text-brand-body">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-pill bg-brand-primary shrink-0" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
      <Link to={to} className="text-link text-body-sm mt-auto">
        Create account
      </Link>
    </Card>
  );
}

export function EcosystemSection({ id = "ecosystem" }: { id?: string }) {
  return (
    <section id={id} className="bg-brand-canvas py-section" aria-labelledby="ecosystem-heading">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge uppercase className="mb-4">Built for Every Stakeholder</Badge>
          <h2 id="ecosystem-heading" className="text-display-lg font-display text-brand-ink">
            One platform, five connected roles
          </h2>
          <p className="mt-4 text-body-md text-brand-muted">
            Each stakeholder gets a workspace designed around how they participate in
            the talent ecosystem — all on shared data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EcosystemCard
            title="Students"
            tagline="From skill profile to placement in one place"
            points={[
              "Build a verified skill profile",
              "Identify skill gaps and learning paths",
              "Discover internships and jobs that match",
              "Track every application end to end",
            ]}
            icon={<StudentIcon />}
            to="/signup"
          />
          <EcosystemCard
            title="Industry"
            tagline="Post, discover, and recruit with confidence"
            points={[
              "Post opportunities with controlled visibility",
              "Discover relevant, verified talent",
              "Run learning programs and campus drives",
              "Collaborate with institutions on hiring",
            ]}
            icon={<IndustryIcon />}
            to="/signup"
          />
          <EcosystemCard
            title="Academicians"
            tagline="Mentor, develop, and collaborate"
            points={[
              "Mentor students on real projects",
              "Access faculty development and training",
              "Connect with industry for research",
              "Build industry-facing collaborations",
            ]}
            icon={<AcademicianIcon />}
            to="/signup"
          />
          <EcosystemCard
            title="Institutions"
            tagline="Verify, monitor, and build partnerships"
            points={[
              "Verify students and faculty in the ecosystem",
              "Track skill development and placement metrics",
              "Manage industry partnerships centrally",
              "Monitor the full placement cycle",
            ]}
            icon={<InstitutionIcon />}
            to="/signup"
          />
        </div>
      </div>
    </section>
  );
}

function StudentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function AcademicianIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M12 14c-4 0-7 2.5-7 5.5V21h14v-1.5c0-3-3-5.5-7-5.5z" />
    </svg>
  );
}

function InstitutionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="16" height="11" rx="1" />
      <path d="M2 10L12 4l10 6" />
      <line x1="12" y1="6" x2="12" y2="4" />
      <line x1="9" y1="14" x2="15" y2="14" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  );
}
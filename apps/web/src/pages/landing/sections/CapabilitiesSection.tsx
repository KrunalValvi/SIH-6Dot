import { Badge } from "@/components/ui/Badge";
import type { ReactNode } from "react";

interface CapabilityCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

function CapabilityCard({ title, description, icon }: CapabilityCardProps) {
  return (
    <div className="rounded-lg bg-brand-surface-card p-6">
      <div className="w-10 h-10 rounded-md bg-brand-canvas flex items-center justify-center text-brand-ink mb-4">
        {icon}
      </div>
      <h3 className="text-title-sm font-medium text-brand-ink">{title}</h3>
      <p className="mt-2 text-body-sm text-brand-body">{description}</p>
    </div>
  );
}

export function CapabilitiesSection() {
  const capabilities: Array<{ title: string; description: string; icon: ReactNode }> = [
    {
      title: "Skill Assessment",
      description: "Structured questionnaires covering technical and soft skills, mapped to a consistent skill taxonomy.",
      icon: <ClipboardIcon />,
    },
    {
      title: "Skill Mapping",
      description: "Skills expressed in a shared vocabulary — understood by students, institutions, and industry alike.",
      icon: <MapIcon />,
    },
    {
      title: "Skill Gap Analysis",
      description: "Compare a profile against industry demand to see exactly what to learn next.",
      icon: <GapIcon />,
    },
    {
      title: "Personalized Opportunities",
      description: "Internships and jobs matched to a student's verified skills and interests.",
      icon: <TargetIcon />,
    },
    {
      title: "Internships & Placements",
      description: "Full application workflow from discovery and application through selection and placement.",
      icon: <BriefcaseIcon />,
    },
    {
      title: "Learning & Upskilling",
      description: "Recommended learning paths that close skills gaps and keep profiles industry-relevant.",
      icon: <BookIcon />,
    },
    {
      title: "Mentorship",
      description: "Academicians and industry professionals mentor students through programs and live projects.",
      icon: <UsersIcon />,
    },
    {
      title: "Academia–Industry Collaboration",
      description: "Forum for research, FDPs, guest lectures, and structured university–company partnerships.",
      icon: <ConnectIcon />,
    },
    {
      title: "Institutional Analytics",
      description: "Placement trends, skill-gap heatmaps, and company-wise reports for institutions and administrators.",
      icon: <ChartIcon />,
    },
  ];

  return (
    <section className="bg-brand-canvas py-section" aria-labelledby="capabilities-heading">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge uppercase className="mb-4">Core Capabilities</Badge>
          <h2 id="capabilities-heading" className="text-display-lg font-display text-brand-ink">
            Everything the talent ecosystem needs
          </h2>
          <p className="mt-4 text-body-md text-brand-muted">
            From skill assessment to placement tracking to institutional reporting —
            built to connect learning directly to opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClipboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}

function GapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ConnectIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="11.5" x2="15.4" y2="6.5" />
      <line x1="8.6" y1="12.5" x2="15.4" y2="17.5" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
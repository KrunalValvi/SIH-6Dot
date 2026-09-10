import { ROLE_META, PUBLIC_SIGNUP_ROLES } from "@/config/roles";
import type { PublicSignupRole } from "../types/auth.types";

interface SignupRoleSelectorProps {
  selected: PublicSignupRole | null;
  onSelect: (role: PublicSignupRole) => void;
}

export function SignupRoleSelector({ selected, onSelect }: SignupRoleSelectorProps) {
  return (
    <div role="radiogroup" aria-label="Choose your account type">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PUBLIC_SIGNUP_ROLES.map((role) => {
          const meta = ROLE_META[role];
          const isSelected = selected === role;

          return (
            <button
              key={role}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(role)}
              className={`rounded-lg border p-5 text-left transition-colors duration-150 ${
                isSelected
                  ? "border-brand-primary bg-brand-primary/5 ring-[3px] ring-brand-primary/15"
                  : "border-brand-hairline bg-brand-canvas hover:border-brand-muted"
              }`}
            >
              <div className="flex items-start justify-between">
                <RoleIcon role={role} />
                <span
                  className={`w-4 h-4 rounded-full border-2 mt-1 ${
                    isSelected
                      ? "bg-brand-primary border-brand-primary"
                      : "border-brand-hairline"
                  }`}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-3 text-title-sm font-medium text-brand-ink">{meta.label}</h3>
              <p className="mt-0.5 text-caption text-brand-muted">{meta.tagline}</p>
              <p className="mt-2 text-body-sm text-brand-muted">{meta.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RoleIcon({ role }: { role: PublicSignupRole }) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (role) {
    case "student":
      return (
        <svg {...commonProps}>
          <path d="M22 10L12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
        </svg>
      );
    case "industry":
      return (
        <svg {...commonProps}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "academician":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="4" />
          <path d="M12 14c-4 0-7 2.5-7 5.5V21h14v-1.5c0-3-3-5.5-7-5.5z" />
        </svg>
      );
    case "institution":
      return (
        <svg {...commonProps}>
          <rect x="4" y="10" width="16" height="11" rx="1" />
          <path d="M2 10L12 4l10 6" />
          <line x1="12" y1="6" x2="12" y2="4" />
        </svg>
      );
  }
}
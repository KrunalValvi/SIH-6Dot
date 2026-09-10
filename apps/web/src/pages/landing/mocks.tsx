import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";

export function SkillProfileMock() {
  const skills = [
    { name: "React", level: 85, tone: "bg-brand-primary" },
    { name: "TypeScript", level: 72, tone: "bg-brand-accent-teal" },
    { name: "Data Structures", level: 58, tone: "bg-brand-accent-amber" },
  ];

  const gaps = [
    { name: "System Design", level: 62, demo: 0 },
    { name: "Cloud / DevOps", level: 48, demo: 0 },
  ];

  return (
    <div className="w-full rounded-xl bg-brand-canvas border border-brand-hairline p-6 shadow-[0_1px_3px_rgba(20,20,19,0.08)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-title-md font-medium text-brand-ink">Your Skill Profile</h3>
        <Badge variant="active">Assessed</Badge>
      </div>

      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-body-sm text-brand-body">{skill.name}</span>
              <span className="text-caption text-brand-muted-soft">{skill.level}%</span>
            </div>
            <div className="h-1.5 rounded-pill bg-brand-surface-soft overflow-hidden">
              <div
                className={`h-full rounded-pill ${skill.tone}`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-brand-hairline-soft">
        <div className="flex items-center justify-between mb-2">
          <span className="text-body-sm font-medium text-brand-ink">Skill Gaps</span>
          <Badge variant="pending">2 to close</Badge>
        </div>
        <ul className="space-y-1.5">
          {gaps.map((gap) => (
            <li key={gap.name} className="flex justify-between text-body-sm">
              <span className="text-brand-muted">{gap.name}</span>
              <span className="text-brand-primary">Improve</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function OpportunityMock() {
  return (
    <div className="w-full rounded-xl bg-brand-canvas border border-brand-hairline p-6 shadow-[0_1px_3px_rgba(20,20,19,0.08)]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-brand-surface-dark text-brand-on-dark flex items-center justify-center font-display text-title-sm">
            A
          </div>
          <div>
            <h3 className="text-title-sm font-medium text-brand-ink">Frontend Development Intern</h3>
            <p className="text-caption text-brand-muted">Acme Software · Remote</p>
          </div>
        </div>
        <Badge variant="approved">Open</Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="default">React</Badge>
        <Badge variant="default">TypeScript</Badge>
        <Badge variant="default">REST APIs</Badge>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Badge variant="active">92% match</Badge>
        <Link to="/signup" className="text-link text-body-sm">
          Apply now
        </Link>
      </div>
    </div>
  );
}

export function MatchingMock() {
  return (
    <div className="w-full rounded-xl bg-brand-surface-dark text-brand-on-dark p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-title-sm font-medium text-brand-on-dark">Ecosystem Match</h3>
        <span className="inline-flex items-center gap-1.5 text-caption text-brand-accent-teal">
          <span className="w-1.5 h-1.5 rounded-pill bg-brand-accent-teal" aria-hidden="true" />
          Live
        </span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex -space-x-3">
          <div className="w-9 h-9 rounded-pill bg-brand-accent-teal flex items-center justify-center text-caption text-brand-on-primary font-medium">
            S
          </div>
          <div className="w-9 h-9 rounded-pill bg-brand-accent-amber flex items-center justify-center text-caption text-brand-ink font-medium">
            C
          </div>
          <div className="w-9 h-9 rounded-pill bg-brand-primary flex items-center justify-center text-caption text-brand-on-primary font-medium">
            U
          </div>
        </div>
        <div className="text-2xl font-display text-brand-accent-teal" aria-hidden="true">
          ↔
        </div>
        <div className="flex items-center justify-center w-9 h-9 rounded-pill bg-brand-surface-dark-elevated border border-brand-surface-dark-soft">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </div>
      </div>

      <p className="mt-4 text-body-sm text-brand-on-dark-soft">
        A student with matching skills found your internship posting.
      </p>
    </div>
  );
}
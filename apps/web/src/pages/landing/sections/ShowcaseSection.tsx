import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";

export function ShowcaseSection() {
  return (
    <section className="bg-brand-canvas py-section" aria-labelledby="showcase-heading">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge uppercase className="mb-4">Opportunities & Collaboration</Badge>
          <h2 id="showcase-heading" className="text-display-lg font-display text-brand-ink">
            The ecosystem in action
          </h2>
          <p className="mt-4 text-body-md text-brand-muted">
            A look at the kinds of opportunities and collaborations the platform
            connects. Demonstrations only — the real flow depends on the ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-brand-canvas border border-brand-hairline p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-title-md font-medium text-brand-ink">
                  Frontend Development Intern
                </h3>
                <p className="text-caption text-brand-muted mt-1">Open to All · Remote</p>
              </div>
              <Badge variant="approved">Open</Badge>
            </div>
            <p className="text-body-sm text-brand-body mb-4">
              Build real product features with a senior team while closing your
              skill gaps through structured feedback.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">React</Badge>
              <Badge variant="default">TypeScript</Badge>
              <Badge variant="default">REST APIs</Badge>
            </div>
            <div className="mt-5 pt-4 border-t border-brand-hairline-soft flex items-center justify-between">
              <Badge variant="active">87% average match</Badge>
              <Link to="/signup" className="text-link text-body-sm">Create account to apply</Link>
            </div>
          </div>

          <div className="rounded-lg bg-brand-surface-dark text-brand-on-dark p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-title-md font-medium text-brand-on-dark">
                  Industry Mentorship Program
                </h3>
                <p className="text-caption text-brand-on-dark-soft mt-1">University ↔ Company</p>
              </div>
              <Badge variant="active">Collaboration</Badge>
            </div>
            <p className="text-body-sm text-brand-on-dark-soft mb-4">
              A structured partnership connecting faculty mentors with industry
              professionals for live project guidance and research.
            </p>
            <div className="mt-5 pt-4 border-t border-brand-surface-dark-elevated flex items-center justify-between">
              <span className="text-caption text-brand-on-dark-soft">
                Faculty · Students · Industry
              </span>
              <Badge variant="neutral">Proposal Phase</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
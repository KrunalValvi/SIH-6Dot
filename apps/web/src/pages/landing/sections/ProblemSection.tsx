import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const gaps = [
  {
    title: "Academic learning vs industry requirements",
    description:
      "What students learn on campus and what employers actually need evolve at different speeds. Without a shared vocabulary for skills, the gap stays invisible until it's too late.",
  },
  {
    title: "A fragmented stakeholder ecosystem",
    description:
      "Students, institutions, faculty, and companies each hold a piece of the picture — but there's no single place where skills, opportunities, and outcomes connect.",
  },
  {
    title: "No shared path from assessment to placement",
    description:
      "Skills are assessed in isolation, gaps are discovered too late, and opportunities aren't matched to what a student can actually do today.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-brand-canvas py-section" aria-labelledby="problem-heading">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge uppercase className="mb-4">The Problem</Badge>
          <h2 id="problem-heading" className="text-display-lg font-display text-brand-ink">
            Education and industry speak different languages
          </h2>
          <p className="mt-4 text-body-md text-brand-muted">
            The disconnect between what is taught, what is learned, and what industry actually
            needs creates lost opportunities for every stakeholder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gaps.map((gap) => (
            <Card key={gap.title} variant="card" className="flex flex-col">
              <h3 className="text-title-md font-medium text-brand-ink">{gap.title}</h3>
              <p className="mt-3 text-body-sm text-brand-body">{gap.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-brand-surface-soft px-8 py-6 text-center">
          <p className="text-body-sm text-brand-body max-w-3xl mx-auto">
            The result: students graduate with skills they can't connect to market demand,
            companies hire reactively instead of strategically, and institutions track
            placements without a clear line back to skills and curriculum.
          </p>
        </div>
      </div>
    </section>
  );
}
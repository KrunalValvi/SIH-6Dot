import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";

const layers = [
  {
    role: "Student",
    description: "Assess skills → identify gaps → learn → apply discovered opportunities",
    tone: "bg-brand-primary text-brand-on-primary",
  },
  {
    role: "Institution",
    description: "Verify the ecosystem, track students and faculty, monitor placements",
    tone: "bg-brand-surface-dark text-brand-on-dark",
  },
  {
    role: "Industry",
    description: "Post opportunities, discover relevant talent, recruit and collaborate",
    tone: "bg-brand-accent-teal text-brand-on-primary",
  },
];

export function SolutionSection({ id = "solution" }: { id?: string }) {
  return (
    <section id={id} className="bg-brand-surface-dark py-section" aria-labelledby="solution-heading">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge uppercase className="mb-4">The Solution</Badge>
            <h2 id="solution-heading" className="text-display-lg font-display text-brand-on-dark">
              One connected ecosystem for the entire talent cycle
            </h2>
            <p className="mt-4 text-body-md text-brand-on-dark-soft max-w-xl">
              Academia × Industry brings students, institutions, industry, and
              academicians onto a single platform — from skill assessment to
              placement, from hiring to collaboration.
            </p>
            <Link to="/signup" className="btn-secondary-on-dark mt-8">
              Get Started as a Student
            </Link>
          </div>

          <div className="space-y-4">
            {layers.map((layer, index) => (
              <div key={layer.role} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-md flex items-center justify-center text-caption font-bold ${layer.tone}`}
                  >
                    {index + 1}
                  </div>
                  {index < layers.length - 1 && (
                    <div className="w-px flex-1 bg-brand-surface-dark-soft my-1" aria-hidden="true" />
                  )}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-title-md font-medium text-brand-on-dark">{layer.role}</h3>
                  <p className="mt-1 text-body-sm text-brand-on-dark-soft">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
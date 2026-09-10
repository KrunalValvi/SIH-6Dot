import { Badge } from "@/components/ui/Badge";

const studentFlow = [
  "Create profile",
  "Assess skills",
  "Identify gaps",
  "Learn",
  "Discover opportunities",
  "Apply",
  "Track",
];

const companyFlow = [
  "Register",
  "Get verified",
  "Post opportunity",
  "Discover talent",
  "Recruit",
];

export function HowItWorksSection({ id = "how-it-works" }: { id?: string }) {
  return (
    <section id={id} className="bg-brand-surface-soft py-section" aria-labelledby="how-heading">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge uppercase className="mb-4">How It Works</Badge>
          <h2 id="how-heading" className="text-display-lg font-display text-brand-ink">
            A clear path from learning to earning
          </h2>
          <p className="mt-4 text-body-md text-brand-muted">
            Two journeys, one ecosystem. Students move from assessment to placement.
            Companies move from verification to recruitment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-lg bg-brand-canvas border border-brand-hairline p-8">
            <h3 className="text-title-md font-medium text-brand-ink mb-6">For Students</h3>
            <ol className="space-y-0">
              {studentFlow.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-md bg-brand-primary text-brand-on-primary flex items-center justify-center text-caption font-medium shrink-0">
                      {index + 1}
                    </div>
                    {index < studentFlow.length - 1 && (
                      <div className="w-px flex-1 bg-brand-hairline my-1" aria-hidden="true" />
                    )}
                  </div>
                  <div className="py-1 text-body-md text-brand-ink">{step}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg bg-brand-surface-dark text-brand-on-dark p-8">
            <h3 className="text-title-md font-medium text-brand-on-dark mb-6">For Companies</h3>
            <ol className="space-y-0">
              {companyFlow.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center text-caption font-medium shrink-0 ${
                        index < 3
                          ? "bg-brand-accent-teal text-brand-on-primary"
                          : "bg-brand-surface-dark-elevated text-brand-on-dark"
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index < companyFlow.length - 1 && (
                      <div className="w-px flex-1 bg-brand-surface-dark-soft my-1" aria-hidden="true" />
                    )}
                  </div>
                  <div className="py-1 text-body-md text-brand-on-dark-soft">{step}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
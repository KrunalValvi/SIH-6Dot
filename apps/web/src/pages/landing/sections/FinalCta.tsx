import { Link } from "react-router-dom";
import { APP_NAME } from "@/config";

export function FinalCta() {
  return (
    <section className="bg-brand-canvas pb-section" aria-labelledby="cta-heading">
      <div className="max-w-content mx-auto px-6">
        <div className="rounded-lg bg-brand-primary text-brand-on-primary px-8 py-12 md:px-16 md:py-16 text-center">
          <h2 id="cta-heading" className="text-display-sm md:text-display-md font-display text-brand-on-primary leading-snug tracking-tight">
            Build the bridge between learning and opportunity
          </h2>
          <p className="mt-3 text-body-md text-brand-on-primary/90 max-w-xl mx-auto">
            Join {APP_NAME} — whether you're a student, a company, an academician, or
            an institution, your place in the ecosystem starts here.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center h-10 px-5 rounded-md bg-brand-on-primary text-brand-primary text-btn font-medium hover:opacity-90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center h-10 px-5 rounded-md border border-brand-on-primary/40 text-brand-on-primary text-btn font-medium hover:bg-brand-primary-active transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
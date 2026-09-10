import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import { SkillProfileMock, OpportunityMock, MatchingMock } from "../mocks";

export function Hero() {
  return (
    <section className="bg-brand-canvas py-16 md:py-section">
      <div className="max-w-content mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Badge uppercase className="mb-6">
            SIH 26044 · Academia × Industry
          </Badge>
          <h1 className="text-display-md md:text-display-xl font-display text-brand-ink leading-tight tracking-tight">
            Where academic skills meet industry opportunity
          </h1>
          <p className="mt-6 text-body-md text-brand-body max-w-xl">
            A connected ecosystem for skill mapping, learning, and placement.
            Students discover the skills industry needs. Companies discover the
            talent they're looking for. Institutions bring it all together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/signup" className="btn-primary text-center">
              Get Started
            </Link>
            <a href="#solution" className="btn-secondary text-center">
              Explore Platform
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="order-1">
              <SkillProfileMock />
            </div>
            <div className="order-3 sm:order-2 flex flex-col gap-4">
              <OpportunityMock />
              <MatchingMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
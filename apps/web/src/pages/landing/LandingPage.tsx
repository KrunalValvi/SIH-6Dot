import { PublicNavbar } from "@/components/navigation/PublicNavbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "./sections/Hero";
import { ProblemSection } from "./sections/ProblemSection";
import { SolutionSection } from "./sections/SolutionSection";
import { EcosystemSection } from "./sections/EcosystemSection";
import { CapabilitiesSection } from "./sections/CapabilitiesSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import { FinalCta } from "./sections/FinalCta";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-canvas flex flex-col">
      <PublicNavbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesSection />
        <EcosystemSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
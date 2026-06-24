import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CtaSection } from "@/components/landing/cta-section";
import { CareersHeroSection } from "@/components/careers/careers-hero";
import { PerksSection } from "@/components/careers/perks-section";
import { OpenPositionsSection } from "@/components/careers/open-positions";

export const metadata = {
  title: "Careers | Syntrix Technologies",
  description: "Join the team at Syntrix Technologies. Explore open roles and perks.",
};

export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip noise-overlay">
      <Navigation />
      
      {/* Careers Specific Sections */}
      <CareersHeroSection />
      <PerksSection />
      <OpenPositionsSection />
      
      {/* Reused Sections */}
      <CtaSection />
      <FooterSection />
    </main>
  );
}

import { Suspense } from "react";
import { Navigation } from "@/components/landing/navigation";
import { CtaSection } from "@/components/landing/cta-section";
import { AboutHeroSection } from "@/components/about/about-hero";
import { TeamSection } from "@/components/about/team-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata = {
  title: "About Us | Syntrix Technologies",
  description: "Meet the team behind Syntrix Technologies and learn about our mission.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip noise-overlay">
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>

      {/* About Specific Sections */}
      <AboutHeroSection />
      <TeamSection />

      {/* Reused Sections */}
      <Suspense fallback={null}>
        <CtaSection />
      </Suspense>
      <FooterSection />
    </main>
  );
}

import { Suspense } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CareersHeroSection } from "@/components/careers/careers-hero";
import { AboutUsCareersSection } from "@/components/careers/about-us";
import { ApplicationFormSection } from "@/components/careers/application-form";

export const metadata = {
  title: "Careers | Syntrix Technologies",
  description: "Join the team at Syntrix Technologies. Explore open roles and apply.",
};

export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip noise-overlay">
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>
      
      {/* Careers Specific Sections */}
      <CareersHeroSection />
      <AboutUsCareersSection />
      <ApplicationFormSection />
      
      {/* Reused Sections */}
      <FooterSection />
    </main>
  );
}

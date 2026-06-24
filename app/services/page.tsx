import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CtaSection } from "@/components/landing/cta-section";
import { ServicesHeroSection } from "@/components/services/services-hero";
import { ServicesListSection } from "@/components/services/services-list";

export const metadata = {
  title: "Services | Syntrix Technologies",
  description: "Explore our expert digital services including web development, mobile apps, UI/UX design, and AI solutions.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip noise-overlay">
      <Navigation />
      
      {/* Services Specific Sections */}
      <ServicesHeroSection />
      <ServicesListSection />
      
      {/* Reused Sections */}
      <CtaSection />
      <FooterSection />
    </main>
  );
}

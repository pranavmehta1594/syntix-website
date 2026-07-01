import { Suspense } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ContactHeroSection } from "@/components/contact/contact-hero";
import { ContactFormSection } from "@/components/contact/contact-form";

export const metadata = {
  title: "Contact Us | Syntrix Technologies",
  description: "Get in touch with Syntrix Technologies to build your next digital product.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip noise-overlay">
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>
      
      {/* Contact Specific Sections */}
      <ContactHeroSection />
      <ContactFormSection />
      
      {/* Reused Sections */}
      <FooterSection />
    </main>
  );
}

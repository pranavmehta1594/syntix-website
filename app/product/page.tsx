import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { CtaSection } from "@/components/landing/cta-section";
import { ProductHeroSection } from "@/components/product/product-hero";
import { ProductFeaturesSection } from "@/components/product/product-features";

export const metadata = {
  title: "GO Clinic | The Complete Healthcare Management Platform",
  description: "Transform your clinic operations with GO Clinic - India's leading healthcare SaaS platform.",
};

export default function ProductPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip noise-overlay">
      <Navigation />
      
      {/* Product Specific Sections */}
      <ProductHeroSection />
      <ProductFeaturesSection />
      
      {/* Reused Sections */}
      <CtaSection />
      <FooterSection />
    </main>
  );
}

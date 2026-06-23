import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { VideoSection } from "@/components/landing/video-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { ProcessSection } from "@/components/landing/process-section";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";


export default function Home() {
  const timelineData = [
    {
      id: 1,
      title: "Consultation",
      date: "01",
      content: "Business analysis and requirement gathering.",
      category: "Strategy",
      icon: "Calendar",
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "UI/UX Design",
      date: "02",
      content: "Creating intuitive and modern user experiences.",
      category: "Design",
      icon: "FileText",
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 3,
      title: "Development",
      date: "03",
      content: "Website, Mobile App, SaaS & Custom Software Development.",
      category: "Development",
      icon: "Code",
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 80,
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      date: "04",
      content: "Deployment, automation, monitoring, and scalability setup.",
      category: "Infrastructure",
      icon: "User",
      relatedIds: [3, 5],
      status: "pending" as const,
      energy: 70,
    },
    {
      id: 5,
      title: "Growth & Marketing",
      date: "05",
      content: "SEO, digital marketing, analytics, and long-term support.",
      category: "Growth",
      icon: "Clock",
      relatedIds: [4],
      status: "pending" as const,
      energy: 100,
    },
  ];
  return (
    <main className="relative min-h-screen overflow-x-clip noise-overlay">
      <Navigation />
      <HeroSection />
      <VideoSection />
      <ProcessSection />
      {/* <FeaturesSection /> */}
      {/* <HowItWorksSection /> */}

      <RadialOrbitalTimeline timelineData={timelineData} />

      <IntegrationsSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

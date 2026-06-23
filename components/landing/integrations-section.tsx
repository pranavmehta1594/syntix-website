"use client";

import { useEffect, useState, useRef } from "react";

const integrations = [
  {
    name: "Website Development",
    category: "Next.js • React.js • Full Stack",
  },
  {
    name: "Mobile App Development",
    category: "Android • iOS • Cross Platform",
  },
  {
    name: "UI/UX Design",
    category: "Figma • Prototyping • Branding",
  },
  {
    name: "Custom Software Development",
    category: "Business Solutions",
  },
  {
    name: "SaaS Product Development",
    category: "Scalable Cloud Applications",
  },
  {
    name: "Cloud Solutions",
    category: "AWS • Azure • GCP",
  },
  {
    name: "DevOps Services",
    category: "CI/CD • Automation • Monitoring",
  },
  {
    name: "SEO Optimization",
    category: "Technical SEO • Local SEO",
  },
  {
    name: "Digital Marketing",
    category: "Growth & Lead Generation",
  },
  {
    name: "E-Commerce Solutions",
    category: "Shopify • WooCommerce",
  },
  {
    name: "API Development",
    category: "REST • GraphQL • Integrations",
  },
  {
    name: "Maintenance & Support",
    category: "24/7 Technical Assistance",
  },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Software development services
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            designed for growth.
          </h2>
          <p className="text-xl text-muted-foreground">
            Syntrix Technologies delivers website development, mobile apps,
            SaaS platforms, cloud solutions, DevOps, SEO, and digital marketing
            services for startups, enterprises, and growing businesses.
          </p>
        </div>

      </div>

      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {integrations.map((integration) => (
                <div
                  key={`${integration.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...integrations].reverse().map((integration) => (
                <div
                  key={`${integration.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

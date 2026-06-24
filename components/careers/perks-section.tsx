"use client";

import { useEffect, useState } from "react";
import { Coffee, Globe, HeartPulse, Laptop, Plane, Zap } from "lucide-react";

const perks = [
  {
    title: "Remote First",
    description: "Work from wherever you are most productive. We're a global, remote-first team.",
    icon: Globe,
  },
  {
    title: "Flexible Hours",
    description: "We care about outcomes, not hours logged. Design your own workday.",
    icon: Coffee,
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive medical coverage and wellness stipends for a healthy lifestyle.",
    icon: HeartPulse,
  },
  {
    title: "Home Office Setup",
    description: "We provide the best gear and a generous stipend to upgrade your home office.",
    icon: Laptop,
  },
  {
    title: "Annual Retreats",
    description: "We meet up once a year in exciting locations to bond and plan the future.",
    icon: Plane,
  },
  {
    title: "Continuous Learning",
    description: "Education stipends for courses, conferences, and books to level up your skills.",
    icon: Zap,
  },
];

export function PerksSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("perks-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="perks-section" className="py-32 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Benefits & Perks
          </span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground">
            Why work <br />
            <span className="text-muted-foreground">with us?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#4372F9]/10 flex items-center justify-center mb-6">
                <perk.icon className="w-6 h-6 text-[#4372F9]" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-3">{perk.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

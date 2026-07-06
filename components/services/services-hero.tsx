"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { HeroGridBackground } from "@/components/ui/theme-elements";

export function ServicesHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden pt-24 md:pt-32 pb-4 md:pb-20">
      {/* Background Gradients & Noise */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HeroGridBackground />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 w-full text-left md:text-center flex flex-col items-start md:items-center">
        {/* Eyebrow */}
        <div
          className={`mb-4 md:mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground uppercase tracking-widest">
            <span className="w-8 h-px bg-foreground/30" />
            Our Expertise
            <span className="w-8 h-px bg-foreground/30" />
          </span>
        </div>

        {/* Main headline */}
        <div className="w-full max-w-5xl mx-auto">
          <h1
            className={`w-full text-[clamp(2.5rem,10vw,7rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Digital solutions
            <span className="block text-muted-foreground text-[clamp(2rem,8vw,5.5rem)] mt-2 md:mt-4">engineered for growth.</span>
          </h1>
        </div>

        {/* Description */}
        <div className="w-full max-w-2xl mx-auto mt-6 mb-8 md:mt-10 md:mb-16">
          <p
            className={`text-xl md:text-2xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            We combine strategic thinking with technical excellence to build custom software, engaging mobile apps, and robust enterprise systems that solve real business challenges.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`hidden md:flex w-12 h-12 rounded-full border border-foreground/20 items-center justify-center animate-bounce transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}

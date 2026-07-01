"use client";

import { useEffect, useState } from "react";
import { HeroGridBackground } from "@/components/ui/theme-elements";

export function ContactHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[40vh] flex flex-col justify-center overflow-hidden pt-32 pb-10">
      {/* Subtle grid lines matching the hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <HeroGridBackground />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full text-center">
        {/* Eyebrow */}
        <div
          className={`mb-6 transition-all duration-700 flex justify-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            Get in touch
            <span className="w-8 h-px bg-foreground/30" />
          </span>
        </div>

        {/* Main headline */}
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-[clamp(2.5rem,7vw,5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Let's build something <br />
            <span className="text-muted-foreground">extraordinary.</span>
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto mt-8">
          <p
            className={`text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you turn your vision into reality.
          </p>
        </div>
      </div>
    </section>
  );
}

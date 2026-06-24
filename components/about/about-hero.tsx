"use client";

import { useEffect, useState } from "react";

export function AboutHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Subtle grid lines matching the hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            Who We Are
          </span>
        </div>

        {/* Main headline */}
        <div className="max-w-4xl">
          <h1
            className={`text-[clamp(2.5rem,7vw,5rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We build digital <br />
            <span className="text-muted-foreground">experiences that matter.</span>
          </h1>
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mt-12">
          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Syntrix Technologies is a premier software development agency dedicated to transforming ambitious ideas into exceptional digital products.
          </p>

          <div
            className={`flex flex-col gap-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-12">
              <div>
                <div className="text-4xl font-display text-foreground">10+</div>
                <div className="text-sm font-mono text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-display text-foreground">200+</div>
                <div className="text-sm font-mono text-muted-foreground mt-1">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

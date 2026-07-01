"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Activity } from "lucide-react";
import { HeroGridBackground } from "@/components/ui/theme-elements";

export function ProductHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Background Gradients & Noise */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HeroGridBackground />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#4372F9]/10 border border-[#4372F9]/20 text-[#4372F9] text-sm font-bold px-4 py-2 rounded-full">
            <Activity className="w-4 h-4" />
            Our Flagship Product
          </div>
        </div>

        {/* Main headline */}
        <div className="max-w-5xl mx-auto">
          <h1
            className={`text-[clamp(3rem,8vw,6.5rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4372F9] to-[#2DB13F]">GO Clinic.</span>
            <br />
            <span className="text-muted-foreground text-[clamp(2rem,5vw,4.5rem)]">The Future of Healthcare.</span>
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto mt-8 mb-12">
          <p
            className={`text-xl md:text-2xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            We built GO Clinic to transform how Indian clinics operate. It's a complete healthcare management platform featuring AI-powered consultations, WhatsApp appointments, and full ABDM compliance.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <a href="https://www.goclinic.online" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-[#4372F9] hover:bg-[#345ad4] text-white rounded-full h-14 px-8 text-lg group">
              Explore GO Clinic
              <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </a>
          <a href="https://www.goclinic.online" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg border-foreground/20 hover:bg-foreground/5 text-foreground">
              Start 14-Day Free Trial
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

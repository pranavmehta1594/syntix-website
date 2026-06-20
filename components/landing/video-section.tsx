"use client";

import { useEffect, useRef, useState } from "react";

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="video"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-foreground/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div> */}

      <div className="relative">
        {/* <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-6 lg:mb-8">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
              <span className="w-8 h-px bg-foreground/30" />
              Process Video
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight">
              See the workflow in motion.
            </h2>
          </div>
        </div> */}

        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-full overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <video
              className="block w-full aspect-video object-cover"
              autoPlay
              loop
              muted
              playsInline
              // controls
              preload="metadata"
            >
              <source src="/video/zeeframes-process.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

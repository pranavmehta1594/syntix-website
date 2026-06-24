"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const positions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote (US)",
    type: "Full-time",
  },
];

export function OpenPositionsSection() {
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

    const element = document.getElementById("open-positions");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="open-positions" className="py-32 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Open Roles
          </span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground">
            Find your next <br />
            <span className="text-muted-foreground">great opportunity.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {positions.map((position, i) => (
            <a
              key={i}
              href="#"
              className={`group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-display text-foreground group-hover:text-[#4372F9] transition-colors duration-300">
                  {position.title}
                </h3>
                <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                  <span>{position.department}</span>
                  <span className="w-1 h-1 rounded-full bg-foreground/30" />
                  <span>{position.location}</span>
                  <span className="w-1 h-1 rounded-full bg-foreground/30" />
                  <span>{position.type}</span>
                </div>
              </div>

              <div className="mt-6 md:mt-0 w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-[#4372F9] group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

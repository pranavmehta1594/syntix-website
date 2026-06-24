"use client";

import { useEffect, useState } from "react";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years in tech innovation.",
    image: "/api/placeholder/400/500", // Will be replaced later
  },
  {
    name: "Sarah Chen",
    role: "Head of Engineering",
    bio: "Full-stack expert obsessed with scalable architecture.",
    image: "/api/placeholder/400/500", // Will be replaced later
  },
  {
    name: "Marcus Wright",
    role: "Design Director",
    bio: "Creating pixel-perfect experiences that drive engagement.",
    image: "/api/placeholder/400/500", // Will be replaced later
  },
];

export function TeamSection() {
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

    const element = document.getElementById("team-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="team-section" className="py-32 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-foreground">
              The minds behind <br />
              <span className="text-muted-foreground">the magic.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            We are a collective of thinkers, makers, and innovators dedicated to excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl bg-foreground/5 border border-foreground/10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-foreground/10">
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                
                {/* Placeholder block until image is added */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm font-mono z-0">
                  Image Placeholder
                </div>
                
                {/* <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                /> */}
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end">
                  <h3 className="text-2xl font-display text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-mono text-muted-foreground mb-4">{member.role}</p>
                  
                  {/* Hover Reveal Content */}
                  <div className="h-0 overflow-hidden opacity-0 group-hover:h-[80px] group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

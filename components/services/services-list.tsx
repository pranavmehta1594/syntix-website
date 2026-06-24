"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Web Application Development",
    description: "We engineer custom, scalable, and highly secure web applications tailored to your unique business needs. Utilizing modern frameworks like React, Next.js, and Node.js, we ensure blazing fast performance, ironclad security, and a seamless user experience across all devices and browsers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    tags: ["React & Next.js", "Cloud Architecture", "API Integration"],
    accent: "text-blue-500",
  },
  {
    title: "Mobile App Development",
    description: "Transform your ideas into stunning mobile experiences. We develop native and cross-platform applications for iOS and Android. From engaging consumer apps to complex enterprise mobility solutions, we build resilient architectures that users love to interact with every single day.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    tags: ["React Native", "iOS / Swift", "Android / Kotlin"],
    accent: "text-purple-500",
  },
  {
    title: "UI/UX Design & Branding",
    description: "Great software is defined by its usability. Our design team employs data-driven, user-centric methodologies to craft beautiful, intuitive interfaces. We go beyond aesthetics to create meaningful interactions that maximize conversion rates and foster deep customer loyalty.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    tags: ["Wireframing", "Prototyping", "Design Systems"],
    accent: "text-orange-500",
  },
  {
    title: "AI & Machine Learning",
    description: "Stay ahead of the curve by integrating intelligent automation and predictive analytics into your existing workflows. We help businesses build custom AI models, leverage powerful LLMs, and unlock the hidden value in their data to drive unprecedented operational efficiency.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    tags: ["LLM Integration", "Predictive Analytics", "NLP"],
    accent: "text-emerald-500",
  },
  {
    title: "Video Editing & Post-Production",
    description: "Tell your brand's story through captivating visuals. Our expert video editing team delivers cinematic quality for commercials, social media content, corporate videos, and full-scale post-production. We handle everything from color grading to motion graphics.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Premiere Pro", "After Effects", "Color Grading"],
    accent: "text-red-500",
  },
  {
    title: "Digital Marketing & Strategy",
    description: "Drive targeted traffic and exponentially grow your revenue. We design comprehensive digital marketing campaigns that span across social media, email marketing, and paid advertising to ensure your brand reaches the right audience at the perfect time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["PPC Campaigns", "Social Media", "Content Strategy"],
    accent: "text-cyan-500",
  },
  {
    title: "SEO & Growth Hacking",
    description: "Dominate search engine rankings and secure long-term organic growth. Our SEO experts utilize deep technical audits, high-quality backlink strategies, and keyword optimization to ensure your business remains visible to high-intent customers.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    tags: ["Technical SEO", "Link Building", "Analytics"],
    accent: "text-green-500",
  },
  {
    title: "Graphic Design & Illustration",
    description: "Elevate your visual identity with bespoke graphic design. Whether you need a complete rebrand, engaging marketing collateral, stunning illustrations, or highly converting ad creatives, we design assets that command attention and drive action.",
    image: "https://images.unsplash.com/photo-1626785776985-04b7a0f6df41?q=80&w=2070&auto=format&fit=crop",
    tags: ["Brand Identity", "Illustrations", "Ad Creatives"],
    accent: "text-pink-500",
  },
  {
    title: "Cloud & DevOps Services",
    description: "Modernize your infrastructure for maximum uptime and zero friction. Our DevOps engineers construct automated CI/CD pipelines, execute secure cloud migrations, and manage 24/7 server monitoring across AWS, Azure, and Google Cloud.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    tags: ["AWS / Azure", "Kubernetes", "CI/CD Pipelines"],
    accent: "text-indigo-500",
  },
];

export function ServicesListSection() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleSections((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".service-row").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative bg-background border-t border-foreground/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col gap-32">
        {services.map((service, i) => {
          const isEven = i % 2 === 0;
          const isVisible = visibleSections.includes(i);

          return (
            <div
              key={i}
              data-index={i}
              className={`service-row flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-24 items-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-foreground/5 rounded-[2.5rem] transform group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                    0{i + 1}
                  </span>
                  <div className="w-12 h-px bg-foreground/20" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground mb-6">
                  {service.title}
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="text-sm font-medium text-foreground/80 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#" className={`inline-flex items-center gap-2 text-lg font-medium ${service.accent} hover:opacity-80 transition-opacity w-fit group`}>
                  Learn more about {service.title.split(' ')[0]}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

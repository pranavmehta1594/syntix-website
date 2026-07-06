"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update active index when a section crosses the 50% threshold
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { threshold: 0.6 } // Requires 60% of the text block to be visible
    );

    document.querySelectorAll(".service-text-block").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-background border-t border-foreground/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row relative">

        {/* Left Side: Scrolling Text Blocks */}
        <div className="w-full lg:w-[55%] flex flex-col py-12 lg:py-[30vh] gap-20 lg:gap-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              data-index={i}
              className="service-text-block lg:min-h-[80vh] flex flex-col justify-center pr-0 lg:pr-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                  0{i + 1}
                </span>
                <div className="w-12 h-px bg-foreground/20" />
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display tracking-tight text-foreground mb-4 md:mb-6">
                {service.title}
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-10">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10">
                {service.tags.map((tag, j) => (
                  <span key={j} className="text-sm font-medium text-foreground/80 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#" className={`inline-flex items-center gap-2 text-lg font-medium ${service.accent} hover:opacity-80 transition-opacity w-fit group`}>
                Start your project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Mobile Image (Hidden on Desktop) */}
              <div className="lg:hidden mt-8 md:mt-12 w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Sticky Image Gallery (Desktop Only) */}
        <div className="hidden lg:flex w-[45%] h-screen sticky top-0 items-center justify-center pl-12 py-20">
          <div className="relative w-[80%] max-w-[480px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-foreground/5 border border-foreground/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover brightness-90"
              />
            </AnimatePresence>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Sticky Content Overlay */}
            <motion.div
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-10 left-10 right-10"
            >
              <div className="text-white/80 font-mono text-sm tracking-widest uppercase mb-2">
                Expertise Area
              </div>
              <div className="text-3xl font-display text-white">
                {services[activeIndex].title}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

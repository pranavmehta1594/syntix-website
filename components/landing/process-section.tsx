"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const processSteps = [
  {
    index: "01",
    total: "04",
    title: "Strategy",
    description:
      "We get to know you and your brand. Goals, audience, competition. Out of that comes the roadmap everything else stands on.",
    deliverables: [
      "Briefing & Workshop",
      "Competitor Analysis",
      "Brand Strategy",
      "Roadmap",
    ],
    image: "/process/strategy.avif",
    alt: "Strategy",
  },
  {
    index: "02",
    total: "04",
    title: "Design",
    description:
      "Identity, interface, prototype. This is where the brand becomes visible - from logo to the last pixel of the site.",
    deliverables: [
      "Brand Identity",
      "Wireframes & UX",
      "UI Design",
      "Design System",
    ],
    image: "/process/design.avif",
    alt: "Design",
  },
  {
    index: "03",
    total: "04",
    title: "Build",
    description:
      "Engineering on a modern stack: Next.js, React, performance-first. Clean code that scales and still runs in five years.",
    deliverables: [
      "Frontend & CMS",
      "Backend / API",
      "Performance & SEO",
      "QA & Testing",
    ],
    image: "/process/build.avif",
    alt: "Build",
  },
  {
    index: "04",
    total: "04",
    title: "Launch & Care",
    description:
      "Deployment, monitoring, continuous optimization. We stay on it - your brand grows, and we grow with it.",
    deliverables: [
      "Go-Live",
      "Analytics",
      "Maintenance & Updates",
      "Iteration & Growth",
    ],
    image: "/process/launch-care.avif",
    alt: "Launch & Care",
  },
] as const;

// Visible "deck" offset between stacked cards on desktop, in px.
const STACK_OFFSET_PX = 14;

// Where the stack should sit in the viewport before cards start
// overlapping. Adjust to match your fixed header height.
const STICK_BASE_PX = 96;

function ProcessCard({
  step,
  index,
  progress,
  totalSteps,
}: {
  step: (typeof processSteps)[number];
  index: number;
  progress: MotionValue<number>;
  totalSteps: number;
}) {
  // A card starts scaling/darkening only when the NEXT card starts covering it.
  const startProgress = (index + 1) / totalSteps;
  const endProgress = 1;

  const overlayOpacity = useTransform(
    progress,
    [startProgress, endProgress],
    [0, 0.7]
  );

  return (
    <div
      className="lg:sticky"
      style={{
        top: `calc(${STICK_BASE_PX}px + ${index * STACK_OFFSET_PX}px)`,
        zIndex: 10 + index,
      }}
    >
      <motion.article

        className="
          relative overflow-hidden border border-white/10 bg-[#141416]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_80px_-24px_rgba(0,0,0,0.7)]
          transition-colors duration-300
          lg:grid lg:h-[480px] lg:grid-cols-2
        "
      >
        <div className="relative overflow-hidden bg-[#111111]">
          <img
            src={step.image}
            alt={step.alt}
            className="h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center px-6 py-8 sm:px-9">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#c9e265]">
            {step.index}
            <span className="mx-1 text-white/30">/</span>
            {step.total}
          </span>

          <h3 className="mt-4 text-[clamp(2rem,3.6vw,4.2rem)] font-display leading-[0.92] tracking-[-0.045em] text-white">
            {step.title}
          </h3>

          <p className="mt-5 max-w-[50ch] text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            {step.description}
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-2 p-0">
            {step.deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="inline-flex items-center gap-2 font-mono text-[0.74rem] uppercase tracking-[0.04em] text-white/52"
              >
                <span
                  className="h-1 w-1 shrink-0 rounded-full bg-white/30"
                  aria-hidden="true"
                />
                {deliverable}
              </li>
            ))}
          </ul>
        </div>

        {/* Darkening overlay to simulate depth without making the card transparent */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 bg-[#090909]"
        />
      </motion.article>
    </div>
  );
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Track from when the top of the section hits the top of the viewport
    // to when the bottom of the section hits the bottom of the viewport
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative border-t border-white/10 bg-[#090909] text-white"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <header className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/55 sm:text-sm">
            <span className="h-px w-6 bg-[#c9e265]" aria-hidden="true" />
            <span className="font-mono text-white/70">[04]</span>
            <span>Process / How we work</span>
          </p>
          <h2 className="mt-5 text-[clamp(2.6rem,4.8vw,5.5rem)] font-display leading-[0.94] tracking-[-0.05em] text-white">
            From <em className="font-display italic text-[#c9e265]">briefing</em>{" "}
            to <em className="font-display italic text-[#c9e265]">launch.</em>
          </h2>
        </header>

        <div className="mt-10 space-y-6 pb-4 sm:mt-14 lg:space-y-0">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.index}
              step={step}
              index={index}
              totalSteps={processSteps.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

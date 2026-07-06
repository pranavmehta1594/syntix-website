"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { 
  DesignAnimation, 
  DevelopmentAnimation, 
  CloudDevOpsAnimation, 
  GrowthAnimation 
} from "@/components/animations/process-animations";

const processSteps = [
  {
    index: "01",
    total: "04",
    title: "Web & Mobile App Development",
    description:
      "Custom software engineering on a modern stack for scalable, high-performance web and mobile solutions.",
    deliverables: [
      "Web Development",
      "Mobile Apps",
      "Custom Software",
      "API Integration",
    ],
    animation: <DevelopmentAnimation />,
  },
  {
    index: "02",
    total: "04",
    title: "SaaS Development",
    description:
      "End-to-end software as a service platform creation, focusing on scalability, multi-tenancy, and growth.",
    deliverables: [
      "Platform Architecture",
      "Multi-Tenancy",
      "Subscription Systems",
      "Growth Dashboards",
    ],
    animation: <GrowthAnimation />,
  },
  {
    index: "03",
    total: "04",
    title: "UI/UX Designs",
    description:
      "Creating intuitive, stunning, and modern user experiences. From wireframes to the final polished design system.",
    deliverables: [
      "Wireframes & UX",
      "Prototyping",
      "UI Design",
      "Design Systems",
    ],
    animation: <DesignAnimation />,
  },
  {
    index: "04",
    total: "04",
    title: "Cloud Services",
    description:
      "Deployment, automation, monitoring, and robust infrastructure setup. We ensure your platforms are secure and ready to scale.",
    deliverables: [
      "Cloud Architecture",
      "CI/CD Pipelines",
      "Monitoring & Alerts",
      "Scalability Setup",
    ],
    animation: <CloudDevOpsAnimation />,
  },
];

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
      className="sticky mb-10"
      style={{
        top: `calc(${STICK_BASE_PX}px + ${index * STACK_OFFSET_PX}px)`,
        zIndex: 10 + index,
      }}
    >
      <motion.article

        className="
          relative overflow-hidden rounded-3xl border border-white/10 bg-[#141416]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_40px_80px_-24px_rgba(0,0,0,0.7)]
          transition-colors duration-300
          lg:grid lg:h-[480px] lg:grid-cols-2
        "
      >
        <div className="relative overflow-hidden bg-[#111111] h-[250px] sm:h-[300px] lg:h-full w-full flex items-center justify-center p-0 lg:p-8">
          {step.animation}
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
      className="relative border-y border-zinc-800 bg-zinc-950 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <header className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/55 sm:text-sm">
            <span className="h-px w-6 bg-[#c9e265]" aria-hidden="true" />
            <span className="font-mono text-white/70">[04]</span>
            <span>Services / What we do</span>
          </p>
          <h2 className="mt-5 text-[clamp(2.6rem,4.8vw,5.5rem)] font-display leading-[0.94] tracking-[-0.05em] text-white">
            <em className="font-display italic text-[#c9e265]">Solutions</em>{" "}
            for your <em className="font-display italic text-[#c9e265]">growth.</em>
          </h2>
        </header>

        <div className="mt-10 space-y-10 pb-4 sm:mt-14 lg:space-y-16">
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

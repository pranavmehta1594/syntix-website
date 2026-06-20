"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    tag: "Research & Domain Analysis",
    description:
      "Don't ignore the crucial step of Research & Development in the UX Design Process! Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback. Improve user experience.",
    image: "https://zeeframes.com/frontend-assets/images/home-process-mob-1.webp",
  },
  {
    id: "02",
    title: "Flows",
    tag: "User Journey Map Sitemap",
    description:
      "Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.",
    image: "https://zeeframes.com/frontend-assets/images/home-process-mob-2.webp",
  },
  {
    id: "03",
    title: "Wireframes",
    tag: "Low - Fidelity Design",
    description:
      "Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.",
    image: "https://zeeframes.com/frontend-assets/images/home-process-mob-3.webp",
  },
  {
    id: "04",
    title: "Mockups",
    tag: "High - Fidelity Design",
    description:
      "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
    image: "https://zeeframes.com/frontend-assets/images/home-process-mob-4.webp",
  },
  {
    id: "05",
    title: "Prototyping",
    tag: "Interaction Design",
    description:
      "UX Designers create clickable prototypes for your product using tools like Invision to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.",
    image: "https://zeeframes.com/frontend-assets/images/home-process-mob-5.webp",
  },
  {
    id: "06",
    title: "Testing",
    tag: "Usability Testing",
    description:
      "UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.",
    image: "https://zeeframes.com/frontend-assets/images/home-process-mob-6.webp",
  },
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  const activeStep = processSteps[activeIndex];
  const scrollTrackHeight = useMemo(
    () => `${processSteps.length * 100}vh`,
    [],
  );

  useEffect(() => {
    const updateActiveStep = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const sectionRect = sectionEl.getBoundingClientRect();
      const sectionTop = window.scrollY + sectionRect.top;
      const sectionHeight = sectionEl.offsetHeight;
      const viewportHeight = window.innerHeight;
      const stickyHeight = viewportHeight;
      const availableScroll = Math.max(sectionHeight - stickyHeight, 1);
      const progress = Math.min(
        Math.max((window.scrollY - sectionTop) / availableScroll, 0),
        1,
      );

      const nextIndex = Math.min(
        processSteps.length - 1,
        Math.floor(progress * processSteps.length),
      );

      setActiveIndex(nextIndex);
    };

    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#090909] text-white"
      style={{ height: scrollTrackHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="container h-full">
          <div className="flex h-full flex-col justify-center py-16">
            <div className="mx-auto max-w-[596px] text-center">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/55">
                Our process, Your Advantage
              </p>
              <h2 className="mt-4 text-4xl font-display leading-tight tracking-tight text-white sm:text-5xl">
                From Idea To Execution
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/55 sm:text-base">
                We have become experts in creating top-notch digital products.
                We design beautifully and develop excellently. And we care
                deeply about what we do.
              </p>
            </div>

            <div className="mt-10 grid min-h-0 flex-1 gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,527px)] lg:gap-16">
              <div className="relative min-h-0 overflow-hidden">
                <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/20" />
                <div
                  className="absolute left-[11px] top-0 w-px bg-[#f4f45b] transition-[height] duration-300"
                  style={{
                    height: `${((activeIndex + 1) / processSteps.length) * 100}%`,
                  }}
                  aria-hidden="true"
                />

                <div className="space-y-0">
                  {processSteps.map((step, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <article
                        key={step.id}
                        ref={(el) => {
                          stepRefs.current[index] = el;
                        }}
                        className="relative min-h-[calc(100vh-11rem)] border-l border-white/10 py-10 pl-6 lg:min-h-[calc(100vh-12rem)] lg:py-14 lg:pl-14"
                      >
                        <span
                          className={`absolute -left-[35px] top-12 hidden h-5 w-5 rounded-full border transition-all duration-300 lg:block ${
                            isActive
                              ? "border-[#f4f45b] bg-[#f4f45b] shadow-[0_0_0_6px_rgba(244,244,91,0.12)]"
                              : "border-white/25 bg-[#090909]"
                          }`}
                          aria-hidden="true"
                        />

                        <div
                          className="cursor-pointer"
                          role="button"
                          tabIndex={0}
                          onClick={() => setActiveIndex(index)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              setActiveIndex(index);
                            }
                          }}
                        >
                          <span className="mb-3 block text-sm font-medium text-white/75">
                            {step.id}
                          </span>
                          <h3
                            className={`text-[clamp(2.4rem,4.2vw,4.2rem)] font-display leading-[0.92] tracking-tight transition-colors duration-300 ${
                              isActive ? "text-white" : "text-white/40"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <h4
                            className={`mt-4 text-lg transition-colors duration-300 sm:text-2xl ${
                              isActive ? "text-white/60" : "text-white/38"
                            }`}
                          >
                            {step.tag}
                          </h4>
                          <p
                            className={`mt-6 max-w-[620px] text-base leading-8 transition-colors duration-300 sm:text-lg ${
                              isActive ? "text-white/85" : "text-white/48"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="sticky top-1/2 -translate-y-1/2 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-white/20" />
                      <span className="h-3 w-3 rounded-full bg-white/20" />
                      <span className="h-3 w-3 rounded-full bg-white/20" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                      process
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="overflow-hidden rounded-[1rem]">
                      <img
                        key={activeStep.image}
                        src={activeStep.image}
                        alt={activeStep.title}
                        className="h-[520px] w-full object-cover transition-opacity duration-500"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-4 px-1">
                      <div>
                        <div className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">
                          {activeStep.id}
                        </div>
                        <div className="mt-1 text-2xl font-display tracking-tight text-white">
                          {activeStep.title}
                        </div>
                      </div>
                      <div className="max-w-[220px] text-right text-sm leading-6 text-white/55">
                        {activeStep.tag}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

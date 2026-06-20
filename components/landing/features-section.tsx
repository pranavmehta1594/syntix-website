"use client";

import { useEffect, useRef, useState } from "react";

// const features = [
//   {
//     number: "01",
//     title: "Instant Deployment",
//     description: "Push to production in seconds. Our edge network ensures your applications load instantly, anywhere in the world.",
//     visual: "deploy",
//   },
//   {
//     number: "02",
//     title: "AI-Native Workflows",
//     description: "Build intelligent applications with built-in AI capabilities. From inference to training, everything scales automatically.",
//     visual: "ai",
//   },
//   {
//     number: "03",
//     title: "Real-time Collaboration",
//     description: "Work together seamlessly. Live preview, instant feedback, and version control that actually makes sense.",
//     visual: "collab",
//   },
//   {
//     number: "04",
//     title: "Enterprise Security",
//     description: "Bank-grade encryption, SOC 2 compliance, and granular access controls. Your data stays yours.",
//     visual: "security",
//   },
// ];
const features = [
  {
    number: "01",
    title: "Strategy & Discovery",
    description:
      "We analyze your business challenges and create a roadmap for successful digital transformation.",
    visual: "strategy",
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "Beautiful UI/UX, modern web technologies, and scalable architectures built for long-term success.",
    visual: "design",
  },
  {
    number: "03",
    title: "Cloud & Infrastructure",
    description:
      "Reliable cloud solutions, DevOps automation, and secure infrastructure that scales with your business.",
    visual: "cloud",
  },
  {
    number: "04",
    title: "Growth & Optimization",
    description:
      "SEO, performance optimization, and digital marketing strategies designed to maximize results.",
    visual: "growth",
  },
];

function StrategyVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Main board */}
      <rect
        x="20"
        y="20"
        width="160"
        height="120"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Central Goal */}
      <circle
        cx="100"
        cy="50"
        r="10"
        fill="currentColor"
        opacity="0.8"
      >
        <animate
          attributeName="r"
          values="10;12;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Strategy Nodes */}
      {[
        { x: 50, y: 100 },
        { x: 100, y: 120 },
        { x: 150, y: 100 },
      ].map((node, i) => (
        <g key={i}>
          <line
            x1="100"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="2s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </line>

          <circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill="currentColor"
            opacity="0.4"
          >
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Animated scanning line */}
      <line
        x1="30"
        y1="30"
        x2="170"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.2"
      >
        <animate
          attributeName="y1"
          values="30;130;30"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y2"
          values="30;130;30"
          dur="4s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}

function DesignVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Browser Window */}
      <rect
        x="20"
        y="20"
        width="160"
        height="120"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Browser Header */}
      <line
        x1="20"
        y1="45"
        x2="180"
        y2="45"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Header Dots */}
      {[35, 50, 65].map((x) => (
        <circle
          key={x}
          cx={x}
          cy={33}
          r="3"
          fill="currentColor"
          opacity="0.4"
        />
      ))}

      {/* Hero Block */}
      <rect
        x="35"
        y="60"
        width="80"
        height="20"
        rx="2"
        fill="currentColor"
        opacity="0.2"
      >
        <animate
          attributeName="width"
          values="20;80;20"
          dur="3s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Content Lines */}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="35"
          y={90 + i * 12}
          width="60"
          height="4"
          rx="2"
          fill="currentColor"
          opacity="0.3"
        >
          <animate
            attributeName="width"
            values="10;60;10"
            dur="3s"
            begin={`${i * 0.3}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}

      {/* Design Card */}
      <rect
        x="120"
        y="60"
        width="35"
        height="55"
        rx="4"
        fill="currentColor"
        opacity="0.15"
      >
        <animate
          attributeName="opacity"
          values="0.15;0.5;0.15"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Cursor */}
      <path
        d="M140 90 L150 110 L145 110 L142 118 L138 116 L141 108 L136 108 Z"
        fill="currentColor"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 5 -5; 0 0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
function CloudVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Cloud */}
      <path
        d="M70 85
           C70 65, 90 55, 105 65
           C110 50, 135 50, 140 70
           C160 70, 170 85, 170 100
           C170 115, 158 125, 140 125
           L75 125
           C55 125, 40 112, 40 95
           C40 80, 52 70, 65 70
           C66 70, 68 70, 70 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Servers */}
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={55 + i * 35}
          y="95"
          width="25"
          height="18"
          rx="2"
          fill="currentColor"
          opacity="0.2"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.7;0.2"
            dur="2s"
            begin={`${i * 0.3}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}

      {/* Data Flow */}
      {[0, 1, 2].map((i) => (
        <line
          key={i}
          x1={67 + i * 35}
          y1="95"
          x2={100}
          y2="75"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1.5s"
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Floating Data Packets */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={70 + i * 25}
          cy="85"
          r="3"
          fill="currentColor"
        >
          <animate
            attributeName="cy"
            values="110;75;110"
            dur="2s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Status Indicator */}
      <circle
        cx="160"
        cy="40"
        r="5"
        fill="currentColor"
      >
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function GrowthVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Chart Container */}
      <rect
        x="30"
        y="20"
        width="140"
        height="110"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Grid Lines */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="30"
          y1={40 + i * 22}
          x2="170"
          y2={40 + i * 22}
          stroke="currentColor"
          opacity="0.1"
        />
      ))}

      {/* Growth Line */}
      <path
        d="M45 105 L75 90 L105 95 L135 65 L155 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="300"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="300;0"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      {/* Data Points */}
      {[
        { x: 45, y: 105 },
        { x: 75, y: 90 },
        { x: 105, y: 95 },
        { x: 135, y: 65 },
        { x: 155, y: 40 },
      ].map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="4"
          fill="currentColor"
        >
          <animate
            attributeName="r"
            values="4;6;4"
            dur="2s"
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Arrow Head */}
      <path
        d="M150 35 L155 40 L148 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* KPI Badge */}
      <circle
        cx="170"
        cy="20"
        r="8"
        fill="currentColor"
        opacity="0.2"
      >
        <animate
          attributeName="opacity"
          values="0.2;0.8;0.2"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "strategy":
      return <StrategyVisual />;
    case "design":
      return <DesignVisual />;
    case "cloud":
      return <CloudVisual />;
    case "growth":
      return <GrowthVisual />;
    default:
      return <StrategyVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>

        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Capabilities
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Everything you need.
            <br />
            <span className="text-muted-foreground">Nothing you don&apos;t.</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const services = [
    {
        title: "Web Application Development",
        description: "We engineer custom, scalable, and highly secure web applications tailored to your unique business needs. Utilizing modern frameworks like React, Next.js, and Node.js, we ensure blazing fast performance, ironclad security, and a seamless user experience.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        tags: ["React & Next.js", "Cloud Architecture", "API Integration"],
        accent: "text-blue-500",
        bgColor: "bg-[#0A0A0A]",
    },
    {
        title: "Mobile App Development",
        description: "Transform your ideas into stunning mobile experiences. We develop native and cross-platform applications for iOS and Android. From engaging consumer apps to complex enterprise mobility solutions, we build resilient architectures.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        tags: ["React Native", "iOS / Swift", "Android / Kotlin"],
        accent: "text-purple-500",
        bgColor: "bg-[#111111]",
    },
    {
        title: "UI/UX Design & Branding",
        description: "Great software is defined by its usability. Our design team employs data-driven, user-centric methodologies to craft beautiful, intuitive interfaces. We go beyond aesthetics to create meaningful interactions that maximize conversion rates.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        tags: ["Wireframing", "Prototyping", "Design Systems"],
        accent: "text-orange-500",
        bgColor: "bg-[#0A0A0A]",
    },
    {
        title: "AI & Machine Learning",
        description: "Stay ahead of the curve by integrating intelligent automation and predictive analytics into your workflows. We help businesses build custom AI models, leverage LLMs, and unlock the hidden value in their data to drive unprecedented efficiency.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
        tags: ["LLM Integration", "Predictive Analytics", "NLP"],
        accent: "text-emerald-500",
        bgColor: "bg-[#111111]",
    },
    {
        title: "Video Editing & Post-Production",
        description: "Tell your brand's story through captivating visuals. Our expert video editing team delivers cinematic quality for commercials, social media content, corporate videos, and full-scale post-production. We handle everything from color grading to motion graphics.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Premiere Pro", "After Effects", "Color Grading"],
        accent: "text-red-500",
        bgColor: "bg-[#0A0A0A]",
    },
    {
        title: "Digital Marketing & Strategy",
        description: "Drive targeted traffic and exponentially grow your revenue. We design comprehensive digital marketing campaigns that span across social media, email marketing, and paid advertising to ensure your brand reaches the right audience.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["PPC Campaigns", "Social Media", "Content Strategy"],
        accent: "text-cyan-500",
        bgColor: "bg-[#111111]",
    },
    {
        title: "SEO & Growth Hacking",
        description: "Dominate search engine rankings and secure long-term organic growth. Our SEO experts utilize deep technical audits, high-quality backlink strategies, and keyword optimization to ensure your business remains visible.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        tags: ["Technical SEO", "Link Building", "Analytics"],
        accent: "text-green-500",
        bgColor: "bg-[#0A0A0A]",
    },
    {
        title: "Graphic Design & Illustration",
        description: "Elevate your visual identity with bespoke graphic design. Whether you need a complete rebrand, engaging marketing collateral, stunning illustrations, or highly converting ad creatives, we design assets that command attention.",
        image: "https://images.unsplash.com/photo-1626785776985-04b7a0f6df41?q=80&w=2070&auto=format&fit=crop",
        tags: ["Brand Identity", "Illustrations", "Ad Creatives"],
        accent: "text-pink-500",
        bgColor: "bg-[#111111]",
    },
    {
        title: "Cloud & DevOps Services",
        description: "Modernize your infrastructure for maximum uptime and zero friction. Our DevOps engineers construct automated CI/CD pipelines, execute secure cloud migrations, and manage 24/7 server monitoring across AWS, Azure, and Google Cloud.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        tags: ["AWS / Azure", "Kubernetes", "CI/CD Pipelines"],
        accent: "text-indigo-500",
        bgColor: "bg-[#0A0A0A]",
    },
];

interface ServiceCardProps {
    service: typeof services[0];
    index: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
}

const ServiceCard = ({ service, index, progress, range, targetScale }: ServiceCardProps) => {
    // As scroll progress goes from this card's activation point to the end, scale it down.
    const scale = useTransform(progress, range, [1, targetScale]);
    // Also fade it out slightly to push it into the background.
    const opacity = useTransform(progress, range, [1, 0.4]);
    // Add a slight top offset so they stack visibly.
    const topOffset = `calc(10vh + ${index * 20}px)`;

    return (
        <div className="h-screen flex items-center justify-center sticky" style={{ top: 0 }}>
            <motion.div
                style={{ scale, opacity, top: topOffset }}
                className={`relative w-full max-w-[1200px] h-[75vh] md:h-[65vh] ${service.bgColor} border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transform-origin-top flex flex-col lg:flex-row gap-8 lg:gap-16 items-center`}
            >
                {/* Subtle top glare */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col z-10">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <span className="text-xs md:text-sm font-mono text-white/40 uppercase tracking-wider">
                            Service 0{index + 1}
                        </span>
                        <div className="w-8 md:w-12 h-px bg-white/20" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-white mb-4 md:mb-6 leading-tight">
                        {service.title}
                    </h2>

                    <p className="text-base md:text-lg text-white/60 leading-relaxed mb-6 md:mb-10">
                        {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-10">
                        {service.tags.map((tag, j) => (
                            <span key={j} className="text-xs md:text-sm font-medium text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a href="#" className={`inline-flex items-center gap-2 text-base md:text-lg font-medium ${service.accent} hover:opacity-80 transition-opacity w-fit group`}>
                        Start your project
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-1/2 h-48 md:h-full relative rounded-2xl md:rounded-[2rem] overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export function ServicesListSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of the entire stack container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section className="relative bg-background w-full">
            <div
                ref={containerRef}
                className="relative w-full px-4 md:px-6 lg:px-12"
                // The height needs to be large enough to allow scrolling through all cards.
                // N cards = N * 100vh height.
                style={{ height: `${services.length * 100}vh` }}
            >
                {services.map((service, i) => {
                    // Calculate the point at which this card should start scaling down.
                    // It starts scaling when the *next* card hits the top of the screen.
                    const targetScale = 1 - ((services.length - i) * 0.04);

                    return (
                        <ServiceCard
                            key={i}
                            index={i}
                            service={service}
                            progress={scrollYProgress}
                            range={[i * (1 / services.length), 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}

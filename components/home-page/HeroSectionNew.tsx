"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSphere } from "../landing/animated-sphere";

const words = ["Websites", "Mobile Apps", "SaaS Platforms", "AI Solutions"];

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden">
            {/* Dynamic Glowing Backdrop using Animated Sphere */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] lg:w-[1200px] lg:h-[1200px] opacity-30 pointer-events-none blur-[100px] mix-blend-screen">
                <AnimatedSphere />
            </div>

            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-32 lg:pt-40 flex flex-col items-center text-center">

                {/* Premium Badge */}
                <div
                    className={`mb-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-foreground/80">
                        Syntrix 2.0 is now live
                    </span>
                    <div className="w-px h-4 bg-foreground/20 mx-1" />
                    <a href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 group">
                        Explore features
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Massive Headline */}
                <div className="mb-8 w-full max-w-5xl">
                    <h1
                        className={`text-[clamp(3rem,8vw,6.5rem)] font-display leading-[1.05] tracking-tight transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        We engineer premium
                        <br />
                        <span className="relative inline-flex flex-col h-[1.2em] overflow-hidden align-bottom justify-end">
                            {words.map((word, i) => (
                                <span
                                    key={i}
                                    className={`absolute left-0 right-0 w-full text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 transition-all duration-700 ease-in-out ${i === wordIndex ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                                        }`}
                                >
                                    {word}
                                </span>
                            ))}
                            {/* Invisible placeholder to maintain height */}
                            <span className="invisible px-4">SaaS Platforms</span>
                        </span>
                        <br />
                        for industry leaders.
                    </h1>
                </div>

                {/* Description */}
                <p
                    className={`text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    From highly scalable web architectures to immersive mobile experiences. We design, build, and scale digital products that dominate markets.
                </p>

                {/* CTAs */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <Button
                        size="lg"
                        className="relative bg-foreground hover:bg-foreground/90 text-background px-10 h-14 text-base rounded-full group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center">
                            Start Your Project
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="h-14 px-10 text-base rounded-full border-foreground/20 hover:bg-foreground/5 bg-background/50 backdrop-blur-md"
                    >
                        View Our Work
                    </Button>
                </div>
            </div>

            {/* Stats marquee - Glassmorphic container pinned to bottom */}
            <div
                className={`absolute bottom-0 left-0 right-0 border-t border-foreground/10 bg-background/40 backdrop-blur-xl transition-all duration-1000 delay-500 py-6 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 overflow-hidden relative mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
                    <div className="flex gap-24 marquee whitespace-nowrap">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-24">
                                {[
                                    { value: "10+", label: "Services Offered", company: "SYNTRIX" },
                                    { value: "24/7", label: "Support Available", company: "SYNTRIX" },
                                    { value: "100%", label: "Custom Solutions", company: "SYNTRIX" },
                                    { value: "Fast", label: "Project Delivery", company: "SYNTRIX" },
                                ].map((stat) => (
                                    <div key={`${stat.company}-${i}`} className="flex items-center gap-4">
                                        <span className="text-3xl font-display text-foreground">{stat.value}</span>
                                        <span className="text-sm text-muted-foreground flex flex-col justify-center">
                                            {stat.label}
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">{stat.company}</span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

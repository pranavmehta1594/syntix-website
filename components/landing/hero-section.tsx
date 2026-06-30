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
        <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-slate-50">
            {/* Clear, Unblurred Circle Animation on the Right */}
            <div className="absolute -right-20 lg:-right-10 top-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[750px] lg:h-[750px] opacity-50 pointer-events-none z-0">
                <AnimatedSphere />
                {/* Subtle radial gradient behind the sphere to make it pop slightly */}
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
            </div>

            {/* Soft Light Blue Background Glows (Matching Product Section) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[60%] h-[80%] bg-blue-200/50 blur-[150px] rounded-full"></div>
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-100/50 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-[20%] left-0 w-full h-[30%] bg-blue-100/50 blur-[100px]"></div>
            </div>

            {/* Grid pattern overlay (Matching Product Section) */}
            <div
                className="absolute inset-0 opacity-[0.4] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            ></div>

            {/* Added pb-32 to prevent content from overlapping with the absolute bottom slider */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:pt-28 pb-32 flex w-full">

                {/* Left Aligned Content */}
                <div className="w-full lg:w-[60%] flex flex-col items-start text-left">

                    {/* Premium Badge */}
                    <div
                        className={`mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white shadow-sm transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-zinc-700">
                            Syntrix 2.0 is now live
                        </span>
                    </div>

                    {/* Massive Headline */}
                    <div className="mb-6 w-full">
                        <h1
                            className={`text-[clamp(2.5rem,5vw,4.5rem)] font-display leading-[1.05] tracking-tight text-zinc-900 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            We engineer premium
                            <br />
                            <span className="relative inline-flex flex-col h-[1.2em] overflow-hidden align-bottom justify-end min-w-[300px]">
                                {words.map((word, i) => (
                                    <span
                                        key={i}
                                        className={`absolute left-0 w-full text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 transition-all duration-700 ease-in-out ${i === wordIndex ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                                            }`}
                                    >
                                        {word}
                                    </span>
                                ))}
                                {/* Invisible placeholder to maintain height */}
                                <span className="invisible pr-4">SaaS Platforms</span>
                            </span>
                            <br />
                            for industry leaders.
                        </h1>
                    </div>

                    {/* Description */}
                    <p
                        className={`text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl mb-10 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        From highly scalable web architectures to immersive mobile experiences. We design, build, and scale digital products that dominate markets.
                    </p>

                    {/* CTAs */}
                    <div
                        className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                    >
                        <Button
                            size="lg"
                            className="relative bg-zinc-900 hover:bg-zinc-800 text-white px-8 h-12 lg:h-14 lg:px-10 text-base rounded-full group overflow-hidden shadow-lg shadow-zinc-900/10"
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
                            className="h-12 lg:h-14 px-8 lg:px-10 text-base rounded-full border-zinc-300 hover:bg-zinc-100 text-zinc-800 bg-white/50 backdrop-blur-md"
                        >
                            View Our Work
                        </Button>
                    </div>
                </div>
            </div>

            {/* Stats marquee - Glassmorphic container pinned to bottom */}
            <div
                className={`absolute bottom-0 left-0 right-0 border-t border-zinc-200 bg-white/40 backdrop-blur-xl transition-all duration-1000 delay-500 py-4 lg:py-6 z-20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                                        <span className="text-2xl lg:text-3xl font-display text-zinc-900">{stat.value}</span>
                                        <span className="text-xs lg:text-sm text-zinc-600 flex flex-col justify-center">
                                            {stat.label}
                                            <span className="font-mono text-[9px] lg:text-[10px] uppercase tracking-widest text-zinc-400">{stat.company}</span>
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

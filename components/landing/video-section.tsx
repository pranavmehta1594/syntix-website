"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function VideoSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize(); // Get initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate final mobile frame dimensions (16:9 aspect ratio, larger size)
  const isMobile = windowSize.width < 768;
  const finalWidth = isMobile ? windowSize.width * 0.9 : Math.min(900, windowSize.width * 0.7);
  const finalHeight = finalWidth * (9 / 16);

  // Smoothly interpolate between full screen and the phone frame size over the first 40% of the scroll
  const width = useTransform(scrollYProgress, [0, 0.4], [windowSize.width, finalWidth]);
  const height = useTransform(scrollYProgress, [0, 0.4], [windowSize.height, finalHeight]);
  
  // Transition border radius and bezel width over the first 40%
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "36px"]);
  const innerBorderRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "28px"]);
  const borderWidth = useTransform(scrollYProgress, [0, 0.15, 0.4], ["0px", "0px", "8px"]);
  
  // Fade in mobile frame details (notch, buttons)
  const frameOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  if (!mounted) return null; // Avoid hydration mismatch on dimensions

  return (
    <section
      id="video"
      ref={containerRef}
      className="relative h-[350vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width,
            height,
            borderRadius,
            borderWidth,
            borderColor: "#111", // Dark bezel color typical of phones
            borderStyle: "solid",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          }}
          className="relative bg-[#111] flex-shrink-0"
        >
          {/* --- Mobile Phone Frame Details --- */}
          
          {/* Camera Hole (Horizontal mode - placed on the left side) */}
          <motion.div 
            style={{ opacity: frameOpacity }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border border-[#222] shadow-[inset_0_0_4px_rgba(255,255,255,0.1)] z-20 flex items-center justify-center"
          >
             <div className="w-2 h-2 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.4)]" />
          </motion.div>

          {/* Power Button (Top edge) */}
          <motion.div 
            style={{ opacity: frameOpacity }}
            className="absolute -top-[20px] left-[20%] w-[60px] h-[4px] bg-[#333] rounded-t-md z-0"
          />

          {/* Volume Buttons (Bottom edge) */}
          <motion.div 
            style={{ opacity: frameOpacity }}
            className="absolute -bottom-[20px] left-[20%] w-[50px] h-[4px] bg-[#333] rounded-b-md z-0"
          />
          <motion.div 
            style={{ opacity: frameOpacity }}
            className="absolute -bottom-[20px] left-[28%] w-[50px] h-[4px] bg-[#333] rounded-b-md z-0"
          />

          {/* Inner Video Container */}
          <motion.div 
            style={{ borderRadius: innerBorderRadius }}
            className="w-full h-full overflow-hidden relative z-10"
          >
            <video
              className="block w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/video/zeeframes-process.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


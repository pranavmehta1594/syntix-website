"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";

export function ApiIntegrationDiagram() {
  const integrations = [
    { name: "Google Meet", src: "https://framerusercontent.com/images/06zJFC72rPY14V6J7uEo48uM5pc.png" },
    { name: "Zoom", src: "https://framerusercontent.com/images/1UB0IrmPnkvRQLZO8wqFU1Cuzc.png" },
    { name: "Teams", src: "https://framerusercontent.com/images/OlNwpIMAuu4Hs4QR9okqS86ML4.png" },
    { name: "Webex", src: "https://framerusercontent.com/images/5LWtanIXJI2DjHdivMft9zDFs.png" },
    { name: "Slack", src: "https://framerusercontent.com/images/CDjktfLPL9icDNQDp0AklCE4WPk.png" },
    { name: "GoToMeeting", src: "https://framerusercontent.com/images/CGdea58pCDhuGJH34kTg4MmaaM.png" },
    { name: "Aircall", src: "https://framerusercontent.com/images/5YhBptNQPAzFG8zbti4gLiCB3QM.png" },
    { name: "Zoho", src: "https://framerusercontent.com/images/JWnqWElO2DlqR5rVi2OQAAoM1c.png" }
  ];

  return (
    <div className="w-full min-h-[900px] bg-[#111111] bg-grid-white/[0.02] flex items-center justify-center p-8 relative overflow-hidden font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-[1000px] mx-auto flex flex-col items-center gap-12">
        
        {/* Top Integrations Row */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 w-full z-20">
          {integrations.map((app, i) => (
            <div key={i} className="relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] bg-[#1a1b1e] border border-white/5 flex items-center justify-center relative overflow-hidden shadow-xl">
                {/* 4 dots in corners like in the image */}
                <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-white/10 rounded-full"></div>
                <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-1.5 right-1.5 w-1 h-1 bg-white/10 rounded-full"></div>
                
                <img 
                  src={app.src} 
                  alt={app.name} 
                  className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        {/* SVG Connecting Lines - Top */}
        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-full max-w-[1005px] h-[316px] pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1005 316">
            {/* The 8 static grey lines */}
            {[
              "M1 0c0 4.174 0 6.26.058 8.154 1.539 50.36 33.395 94.781 80.6 112.391 1.775.662 3.751 1.332 7.705 2.67l363.714 123.171C482.919 256.491 503 284.493 503 316",
              "M142 0c0 12.23 0 18.346.512 23.96a124 124 0 0 0 63.051 97.022c4.924 2.748 10.512 5.232 21.688 10.199l217.446 96.643C479.543 243.311 502 277.867 502 316",
              "M285 0c0 25.025 0 37.538 2.23 49.138a124.006 124.006 0 0 0 36.082 66.217c8.538 8.163 19.052 14.946 40.081 28.513l69.108 44.586c12.369 7.98 18.554 11.97 23.928 16.359a123.997 123.997 0 0 1 44.797 82.211C502 293.92 502 301.28 502 316",
              "M429 0v32.518c0 30.24 0 45.359 3.564 59.9 3.563 14.542 10.554 27.949 24.535 54.762l16.802 32.223c13.981 26.814 20.972 40.22 24.535 54.762C502 248.707 502 263.827 502 294.066V316",
              "M575 0v32.518c0 30.24 0 45.359-3.564 59.9-3.563 14.542-10.554 27.949-24.535 54.762l-16.802 32.223c-13.981 26.814-20.972 40.22-24.535 54.762C502 248.707 502 263.827 502 294.066V316",
              "M719 0c0 25.025 0 37.538-2.23 49.138a124.006 124.006 0 0 1-36.082 66.217c-8.538 8.163-19.052 14.946-40.081 28.513l-69.108 44.586c-12.369 7.98-18.554 11.97-23.928 16.359a123.997 123.997 0 0 0-44.797 82.211C502 293.92 502 301.28 502 316",
              "M862 0c0 10.209 0 15.313-.354 19.988-3.27 43.189-28.839 81.541-67.447 101.171-4.179 2.125-8.891 4.088-18.315 8.014l-206.769 86.154C528.474 232.261 502 271.972 502 316",
              "M1004 0c0 4.174 0 6.26-.06 8.154-1.54 50.36-33.393 94.781-80.598 112.391-1.775.662-3.751 1.332-7.705 2.67L551.923 246.386C522.081 256.491 502 284.493 502 316"
            ].map((path, i) => (
              <path
                key={`bg-line-${i}`}
                d={path}
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
                strokeLinejoin="round" 
                strokeLinecap="round"
                fill="transparent"
              />
            ))}
            
            {/* Animated Pulses on Lines */}
            {[
              "M1 0c0 4.174 0 6.26.058 8.154 1.539 50.36 33.395 94.781 80.6 112.391 1.775.662 3.751 1.332 7.705 2.67l363.714 123.171C482.919 256.491 503 284.493 503 316",
              "M142 0c0 12.23 0 18.346.512 23.96a124 124 0 0 0 63.051 97.022c4.924 2.748 10.512 5.232 21.688 10.199l217.446 96.643C479.543 243.311 502 277.867 502 316",
              "M285 0c0 25.025 0 37.538 2.23 49.138a124.006 124.006 0 0 0 36.082 66.217c8.538 8.163 19.052 14.946 40.081 28.513l69.108 44.586c12.369 7.98 18.554 11.97 23.928 16.359a123.997 123.997 0 0 1 44.797 82.211C502 293.92 502 301.28 502 316",
              "M429 0v32.518c0 30.24 0 45.359 3.564 59.9 3.563 14.542 10.554 27.949 24.535 54.762l16.802 32.223c13.981 26.814 20.972 40.22 24.535 54.762C502 248.707 502 263.827 502 294.066V316",
              "M575 0v32.518c0 30.24 0 45.359-3.564 59.9-3.563 14.542-10.554 27.949-24.535 54.762l-16.802 32.223c-13.981 26.814-20.972 40.22-24.535 54.762C502 248.707 502 263.827 502 294.066V316",
              "M719 0c0 25.025 0 37.538-2.23 49.138a124.006 124.006 0 0 1-36.082 66.217c-8.538 8.163-19.052 14.946-40.081 28.513l-69.108 44.586c-12.369 7.98-18.554 11.97-23.928 16.359a123.997 123.997 0 0 0-44.797 82.211C502 293.92 502 301.28 502 316",
              "M862 0c0 10.209 0 15.313-.354 19.988-3.27 43.189-28.839 81.541-67.447 101.171-4.179 2.125-8.891 4.088-18.315 8.014l-206.769 86.154C528.474 232.261 502 271.972 502 316",
              "M1004 0c0 4.174 0 6.26-.06 8.154-1.54 50.36-33.393 94.781-80.598 112.391-1.775.662-3.751 1.332-7.705 2.67L551.923 246.386C522.081 256.491 502 284.493 502 316"
            ].map((path, i) => {
              return (
                <motion.path
                  key={`pulse-${i}`}
                  d={path}
                  fill="none"
                  stroke="#FD6316"
                  strokeWidth="2"
                  strokeLinejoin="round" 
                  strokeLinecap="round"
                  strokeDasharray="30 100"
                  pathLength={100}
                  initial={{ strokeDashoffset: 130, opacity: 0 }}
                  animate={{ strokeDashoffset: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: i * 0.15, 
                    repeat: Infinity, 
                    repeatType: "loop",
                    ease: "linear"
                  }}
                />
              );
            })}
          </svg>
        </div>

        {/* Central API Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-20 w-full max-w-[340px] bg-white rounded-xl shadow-2xl overflow-hidden mt-32"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
            <div className="bg-[#4372F9] text-white text-[11px] font-bold px-2 py-1 rounded-[4px] flex items-center gap-1 font-mono tracking-wide">
              <span className="text-white/70 font-normal">#</span> meetstream.api
            </div>
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-[#4372F9] px-2 py-1 rounded-[4px] hover:bg-[#345ad4] transition-colors">
              <Copy className="w-3 h-3" /> Copy code
            </button>
          </div>
          
          {/* Terminal */}
          <div className="p-3 bg-white text-[12px] font-mono leading-relaxed">
            <div className="flex rounded-md overflow-hidden bg-[#4372F9] text-white">
              <div className="flex flex-col text-white/40 font-bold bg-[#345ad4] px-2 py-2 text-right select-none">
                <span>1</span>
                <span>2</span>
              </div>
              <div className="flex flex-col px-3 py-2 font-medium">
                <span><span className="text-[#2DB13F] font-bold">$</span> curl -X POST</span>
                <span className="text-white">  https://api.meetstream.ai/api/v1/bot \</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SVG Connecting Lines - Bottom */}
        <div className="absolute top-[440px] left-1/2 -translate-x-1/2 w-[2px] h-[102px] pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 2 102">
            {/* The static grey line */}
            <path
              d="M1 1v100"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              strokeLinejoin="round" 
              strokeLinecap="round"
              fill="transparent"
            />
            
            {/* Animated Pulse */}
            <motion.path
              d="M1 1v100"
              fill="none"
              stroke="#FD6316"
              strokeWidth="2"
              strokeLinejoin="round" 
              strokeLinecap="round"
              strokeDasharray="30 100"
              pathLength={100}
              initial={{ strokeDashoffset: 130, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: 1, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "linear"
              }}
            />
          </svg>
        </div>

        {/* Bottom Output Blocks */}
        <div className="flex flex-col sm:flex-row items-start justify-center gap-12 sm:gap-28 w-full z-20 mt-16">
          
          {/* Chat Transcript Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-full max-w-[280px] bg-white rounded-xl p-4 shadow-2xl relative"
          >
            <div className="flex flex-col gap-4">
              {/* Emily Message */}
              <div className="flex flex-col gap-1 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="bg-[#5C7BF4] text-white text-[11px] font-bold px-2 py-0.5 rounded-[4px]">Emily</span>
                  <span className="bg-[#5C7BF4] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[4px] opacity-90">10:30 AM</span>
                </div>
                <div className="bg-[#5C7BF4] text-white text-[11px] font-medium p-2 rounded-[6px] rounded-tl-none inline-block w-fit mt-1 leading-snug">
                  I've reviewed the latest designs, and they look fantastic. Great work!
                </div>
              </div>

              {/* John Message */}
              <div className="flex flex-col gap-1 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="bg-[#5C7BF4] text-white text-[11px] font-bold px-2 py-0.5 rounded-[4px]">John</span>
                  <span className="bg-[#5C7BF4] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[4px] opacity-90">10:30 AM</span>
                </div>
                <div className="bg-[#5C7BF4] text-white text-[11px] font-medium p-2 rounded-[6px] rounded-tl-none inline-block w-fit mt-1 leading-snug">
                  Appreciate it! We're excited to move forward with the final version.
                </div>
              </div>

              {/* File Badge */}
              <div className="flex items-center gap-1.5 mt-1">
                <svg width="12" height="14" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5C1 0.671573 1.67157 0 2.5 0H8.5L13 4.5V14.5C13 15.3284 12.3284 16 11.5 16H2.5C1.67157 16 1 15.3284 1 14.5V1.5Z" stroke="#5C7BF4" strokeWidth="1.5"/>
                  <path d="M8.5 0V4.5H13" stroke="#5C7BF4" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span className="bg-[#5C7BF4] text-white px-2 py-0.5 rounded-[4px] text-[11px] font-bold">Transcript.txt</span>
              </div>
            </div>
          </motion.div>

          {/* Right Blocks */}
          <div className="flex flex-col gap-5 w-full max-w-[200px]">
            {/* User Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white rounded-xl p-2.5 flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FD6316] text-white font-bold text-sm flex items-center justify-center">
                JC
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="bg-[#5C7BF4] text-white font-bold text-[11px] px-2 py-0.5 rounded-[4px] w-fit">John Carter</span>
                <span className="bg-[#5C7BF4] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[4px] opacity-90 w-fit">Joined at 10:45</span>
              </div>
            </motion.div>

            {/* Video File */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-white rounded-[16px] p-2 shadow-xl flex flex-col items-center pb-3"
            >
              <div className="w-full aspect-square bg-[#FDF1E8] rounded-xl mb-3 overflow-hidden flex items-center justify-center relative">
                <img 
                  src="https://framerusercontent.com/images/TGKbqdVI1wwQ4qxeRwzyMYTo3s.png?width=472&height=472" 
                  alt="John Carter Video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#111111]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                Videofile.mp4
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

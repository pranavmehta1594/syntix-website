"use client";

import { motion } from "framer-motion";
import { MessageSquare, Target, Lightbulb, MousePointer2, Code2, Server, Cloud, TrendingUp, Settings, Terminal, ArrowUpRight, BarChart3, PieChart, Activity } from "lucide-react";

export function ConsultationAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-950/50 rounded-[2rem] overflow-hidden p-4 sm:p-8">
      <div className="relative w-full h-full max-w-lg flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        
        {/* Strategy Document */}
        <motion.div 
          initial={{ rotate: -5, y: 20, opacity: 0 }}
          animate={{ rotate: -5, y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-40 sm:w-48 h-56 sm:h-64 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl flex flex-col p-4 z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
              <Target className="w-4 h-4 text-zinc-300" />
            </div>
            <div className="w-16 h-3 bg-zinc-800 rounded-full" />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-zinc-400 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-zinc-300 rounded-full"
                />
              </div>
              <div className="w-24 h-2 bg-zinc-800 rounded-full" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-zinc-700" />
              <div className="w-20 h-2 bg-zinc-800 rounded-full" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-zinc-700" />
              <div className="w-16 h-2 bg-zinc-800 rounded-full" />
            </div>
          </div>
          
          <motion.div 
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-4 left-4 h-1 bg-zinc-500 rounded-full w-[calc(100%-2rem)] opacity-50"
          />
        </motion.div>

        {/* Workflow Nodes */}
        <div className="relative w-40 h-40">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Connecting lines */}
            <motion.path 
              d="M 20,50 L 80,20" 
              stroke="#52525b" strokeWidth="2" strokeDasharray="4 4" fill="none"
            />
            <motion.path 
              d="M 20,50 L 80,80" 
              stroke="#52525b" strokeWidth="2" strokeDasharray="4 4" fill="none"
            />
            <motion.circle 
              cx="50" cy="35" r="4" fill="#a1a1aa"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle 
              cx="50" cy="65" r="4" fill="#a1a1aa"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </svg>
          
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-zinc-950 border-2 border-zinc-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] z-10"
          >
            <MessageSquare className="w-5 h-5 text-zinc-300" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 right-0 w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center z-10"
          >
            <Lightbulb className="w-5 h-5 text-zinc-400" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 right-0 w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center z-10"
          >
            <Target className="w-5 h-5 text-zinc-400" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function DesignAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-transparent rounded-[2rem] overflow-hidden p-4 sm:p-8">
      <div className="relative w-full h-full max-w-lg flex items-center justify-center gap-4 sm:gap-8 scale-[0.75] sm:scale-[0.9] lg:scale-100 origin-center">
        
        {/* Mobile App Mockup */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-32 sm:w-40 h-64 sm:h-72 bg-white border-[3px] border-zinc-200 rounded-3xl overflow-hidden shadow-xl flex flex-col"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-zinc-200 rounded-b-xl z-10" />
          
          <div className="pt-6 pb-2 px-3 flex justify-between items-center bg-zinc-50 border-b border-zinc-100">
            <div className="w-6 h-6 rounded-full border-2 border-zinc-200" />
            <div className="w-12 h-2.5 bg-zinc-200 rounded-full" />
          </div>

          <div className="flex-1 p-3 flex flex-col gap-3">
            <motion.div 
              animate={{ borderColor: ["#e4e4e7", "#a1a1aa", "#e4e4e7"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-full h-24 rounded-xl border-2 border-dashed border-zinc-300"
            />
            <div className="flex justify-between items-center">
              <div className="w-16 h-3 bg-zinc-200 rounded-full" />
              <div className="w-8 h-3 bg-zinc-100 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="w-full h-12 bg-transparent border-2 border-zinc-200 rounded-lg" />
              <div className="w-full h-12 bg-transparent border-2 border-zinc-200 rounded-lg" />
            </div>
          </div>
          
          <div className="h-12 bg-zinc-50 border-t-2 border-zinc-100 flex justify-around items-center px-4">
            <div className="w-4 h-4 rounded-full border-2 border-blue-400" />
            <div className="w-4 h-4 rounded-full border-2 border-zinc-200" />
            <div className="w-4 h-4 rounded-full border-2 border-zinc-200" />
          </div>
        </motion.div>

        {/* Desktop Web Mockup */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-48 sm:w-64 h-48 sm:h-56 bg-white border-2 border-zinc-200 rounded-xl overflow-hidden shadow-xl flex flex-col"
        >
          <div className="h-6 bg-zinc-50 flex items-center px-2 gap-1.5 border-b-2 border-zinc-100">
            <div className="w-2 h-2 rounded-full bg-zinc-200" />
            <div className="w-2 h-2 rounded-full bg-zinc-200" />
            <div className="w-2 h-2 rounded-full bg-zinc-200" />
          </div>
          
          <div className="flex-1 p-3 flex gap-3">
            <div className="w-1/4 h-full flex flex-col gap-2 border-r-2 border-zinc-100 pr-3">
              <div className="w-full h-2.5 bg-zinc-300 rounded-full mb-2" />
              <div className="w-full h-2 bg-zinc-200 rounded-full" />
              <div className="w-full h-2 bg-zinc-200 rounded-full" />
              <div className="w-3/4 h-2 bg-zinc-200 rounded-full" />
            </div>
            
            <div className="w-3/4 h-full flex flex-col gap-3">
              <div className="w-full h-16 bg-transparent border-2 border-dashed border-zinc-300 rounded-lg relative overflow-hidden" />
              <div className="flex gap-2">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], borderColor: ["#e4e4e7", "#60a5fa", "#e4e4e7"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1/3 h-12 bg-transparent border-2 border-zinc-200 rounded-md"
                />
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], borderColor: ["#e4e4e7", "#60a5fa", "#e4e4e7"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-1/3 h-12 bg-transparent border-2 border-zinc-200 rounded-md"
                />
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], borderColor: ["#e4e4e7", "#60a5fa", "#e4e4e7"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="w-1/3 h-12 bg-transparent border-2 border-zinc-200 rounded-md"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ x: [-40, 80, 20, -40], y: [40, -20, 60, 40], scale: [1, 0.9, 1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-20 pointer-events-none"
        >
          <MousePointer2 className="w-8 h-8 text-blue-500 fill-white drop-shadow-xl" />
        </motion.div>
      </div>
    </div>
  );
}


export function DevelopmentAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-transparent rounded-[2rem] overflow-hidden p-4 sm:p-8">
      <div className="relative w-full h-full max-w-lg flex items-center justify-center gap-4 sm:gap-8 scale-[0.85] sm:scale-100 origin-center">
        
        {/* Desktop Web Layout */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-56 sm:w-72 h-48 sm:h-56 bg-white border-2 border-zinc-200 rounded-xl overflow-hidden shadow-xl flex flex-col z-10"
        >
          <div className="h-8 bg-zinc-50 flex items-center px-3 gap-1.5 border-b-2 border-zinc-100">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            <motion.div 
              animate={{ borderColor: ["#e4e4e7", "#9ca3af", "#e4e4e7"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full h-16 bg-transparent border-2 border-dashed border-zinc-300 rounded-lg flex items-center justify-center overflow-hidden relative"
            >
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-12 animate-[pulse_2s_infinite]" />
            </motion.div>
            <div className="flex gap-3">
              <div className="w-1/3 h-12 bg-transparent border-2 border-zinc-200 rounded-lg" />
              <div className="w-1/3 h-12 bg-transparent border-2 border-zinc-200 rounded-lg" />
              <div className="w-1/3 h-12 bg-transparent border-2 border-zinc-200 rounded-lg" />
            </div>
          </div>
        </motion.div>

        {/* Mobile App Layout */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-0 sm:right-4 -bottom-4 sm:-bottom-8 w-28 sm:w-36 h-56 sm:h-64 bg-white border-[3px] border-zinc-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col z-20"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-zinc-200 rounded-b-lg z-10" />
          <div className="flex-1 p-3 pt-8 flex flex-col gap-3">
            <motion.div 
              animate={{ scale: [0.95, 1, 0.95] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-full h-16 bg-transparent border-2 border-dashed border-zinc-300 rounded-xl"
            />
            <div className="w-3/4 h-3 bg-zinc-200 rounded-full" />
            <div className="w-1/2 h-3 bg-zinc-100 rounded-full" />
            <div className="grid grid-cols-2 gap-2 mt-auto pb-2">
              <div className="w-full h-12 bg-transparent border-2 border-zinc-200 rounded-lg" />
              <div className="w-full h-12 bg-transparent border-2 border-zinc-200 rounded-lg" />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}


export function CloudDevOpsAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-transparent rounded-[2rem] overflow-hidden p-4 sm:p-8">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative w-full h-full max-w-lg flex flex-row items-center justify-center gap-6 sm:gap-16 scale-[0.75] sm:scale-[0.9] lg:scale-100 origin-center">
        {/* Server Racks (Left) */}
        <div className="flex flex-col gap-4">
          {[0, 1].map((rack) => (
            <div key={rack} className="w-32 sm:w-40 bg-white border-2 border-zinc-200 rounded-xl p-3 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <Server className="w-4 h-4 text-zinc-400" />
                <div className="flex gap-1.5">
                  <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: rack }} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <div className="w-1.5 h-1.5 rounded-full border border-zinc-300" />
                </div>
              </div>
              <div className="space-y-2">
                {[0, 1, 2].map((blade) => (
                  <div key={blade} className="h-5 border-2 border-zinc-100 rounded flex items-center px-2">
                    <div className="flex gap-1">
                      <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.8, repeat: Infinity, delay: blade * 0.2 + rack }} className="w-1.5 h-1.5 rounded-sm bg-zinc-300" />
                      <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity, delay: blade * 0.3 + rack }} className="w-1.5 h-1.5 rounded-sm bg-blue-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Pipelines (Middle) */}
        <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path d="M 0,25 C 50,25 50,50 100,50" fill="none" stroke="#e4e4e7" strokeWidth="2" strokeDasharray="4 4" className="opacity-100" />
            <motion.path d="M 0,75 C 50,75 50,50 100,50" fill="none" stroke="#e4e4e7" strokeWidth="2" strokeDasharray="4 4" className="opacity-100" />
            
            <motion.circle cx="0" cy="0" r="3" fill="#3b82f6" className="drop-shadow-sm">
              <animateMotion dur="2s" repeatCount="indefinite" path="M 0,25 C 50,25 50,50 100,50" />
            </motion.circle>
            <motion.circle cx="0" cy="0" r="3" fill="#60a5fa" className="drop-shadow-sm">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 0,75 C 50,75 50,50 100,50" />
            </motion.circle>
          </svg>
        </div>

        {/* Cloud Cluster (Right) */}
        <div className="relative">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 sm:w-40 aspect-square bg-white border-2 border-zinc-200 rounded-3xl flex items-center justify-center shadow-sm"
          >
            <Cloud className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
            
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-zinc-200 rounded-full flex items-center justify-center shadow-sm">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function GrowthAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-transparent rounded-[2rem] overflow-hidden p-4 sm:p-8">
      {/* SaaS Dashboard Mockup */}
      <div className="relative w-full max-w-2xl bg-white border-2 border-zinc-200 rounded-2xl shadow-xl flex flex-col overflow-hidden h-64 sm:h-80 scale-[0.85] sm:scale-100 origin-center">
        
        {/* Top Navigation */}
        <div className="h-14 border-b-2 border-zinc-200 bg-zinc-50 flex items-center px-4 gap-6">
          <div className="flex gap-1.5 mr-2 sm:mr-4">
            <div className="w-3 h-3 rounded-full bg-zinc-300" />
            <div className="w-3 h-3 rounded-full bg-zinc-300" />
            <div className="w-3 h-3 rounded-full bg-zinc-300" />
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 relative bg-white p-1 rounded-lg border-2 border-zinc-200">
            <motion.div 
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.45, 0.55, 0.95, 1], ease: "easeInOut" }}
              className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-zinc-100 rounded-md border border-zinc-200"
            />
            
            <div className="relative w-20 sm:w-24 py-1 text-center text-[10px] sm:text-xs text-zinc-600 font-medium z-10">
              Overview
            </div>
            <div className="relative w-20 sm:w-24 py-1 text-center text-[10px] sm:text-xs text-zinc-600 font-medium z-10">
              Analytics
            </div>
          </div>
          
          <div className="ml-auto w-8 h-8 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center">
             <div className="w-4 h-4 rounded-full border-2 border-zinc-300" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative w-full h-full p-4 overflow-hidden bg-white">
          
          {/* PAGE 1: Overview */}
          <motion.div
            animate={{ x: ["0%", "0%", "-100%", "-100%", "0%"], opacity: [1, 1, 0, 0, 1] }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.45, 0.55, 0.95, 1], ease: "easeInOut" }}
            className="absolute inset-4 flex flex-col gap-4"
          >
            <div className="flex gap-4">
               <div className="flex-1 h-16 bg-transparent border-2 border-zinc-200 rounded-xl p-3 flex flex-col justify-center">
                 <div className="w-16 h-2.5 bg-zinc-200 rounded-full mb-2" />
                 <div className="w-24 h-4 bg-zinc-300 rounded-full" />
               </div>
               <div className="flex-1 h-16 bg-transparent border-2 border-zinc-200 rounded-xl p-3 flex flex-col justify-center">
                 <div className="w-16 h-2.5 bg-zinc-200 rounded-full mb-2" />
                 <div className="w-24 h-4 bg-zinc-300 rounded-full" />
               </div>
            </div>
            
            <div className="flex-1 bg-transparent border-2 border-zinc-200 rounded-xl flex items-end p-4 gap-2 sm:gap-4 relative overflow-hidden">
               <div className="absolute top-4 left-4 w-32 h-2.5 bg-zinc-200 rounded-full" />
               
               {[30, 50, 40, 70, 60, 90, 80].map((height, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: "0%" }}
                   animate={{ height: `${height}%` }}
                   transition={{ duration: 1, delay: i * 0.1 }}
                   className={`flex-1 rounded-t-md ${i % 2 === 0 ? 'bg-blue-500' : 'bg-blue-200'}`} 
                 />
               ))}
            </div>
          </motion.div>

          {/* PAGE 2: Analytics */}
          <motion.div
            animate={{ x: ["100%", "100%", "0%", "0%", "100%"], opacity: [0, 0, 1, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.45, 0.55, 0.95, 1], ease: "easeInOut" }}
            className="absolute inset-4 flex flex-col bg-transparent border-2 border-zinc-200 rounded-xl p-4 gap-3"
          >
            <div className="w-32 h-3.5 bg-zinc-300 rounded-full mb-2" />
            
            <div className="h-8 border-b-2 border-zinc-200 flex items-center gap-4 px-2 bg-zinc-50 rounded-t-lg">
               <div className="w-1/4 h-2.5 bg-zinc-300 rounded-full" />
               <div className="w-1/4 h-2.5 bg-zinc-300 rounded-full" />
               <div className="w-1/4 h-2.5 bg-zinc-300 rounded-full" />
               <div className="w-1/4 h-2.5 bg-zinc-300 rounded-full" />
            </div>
            
            {[1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="h-6 flex items-center gap-4 px-2 border-b border-zinc-100">
                 <div className="w-1/4 h-2 bg-zinc-200 rounded-full" />
                 <div className="w-1/4 h-2 bg-zinc-100 rounded-full" />
                 <div className="w-1/4 h-2 bg-zinc-100 rounded-full" />
                 <div className="w-1/4 flex justify-end">
                   <div className="w-8 h-3 border border-zinc-200 rounded-sm" />
                 </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}

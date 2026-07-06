import React from 'react';
import Image from 'next/image';
import { Shield, Calendar, User, IndianRupee, MessageCircle, BarChart, ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProductSection() {
  const features = [
    {
      icon: Calendar,
      title: 'Online Appointments',
      description: 'Schedule, manage and track appointments with ease.',
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      icon: User,
      title: 'Patient Records',
      description: 'Digital records, history, reports and secure patient data.',
      color: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      icon: IndianRupee,
      title: 'Billing & Invoicing',
      description: 'Create invoices, track payments and manage dues effortlessly.',
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Alerts',
      description: 'Automated reminders and notifications to patients.',
      color: 'bg-green-500/10 text-green-500'
    },
    {
      icon: Shield,
      title: 'ABHA Integration',
      description: 'Seamless integration with ABHA for unified health records.',
      color: 'bg-indigo-500/10 text-indigo-500'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reports',
      description: 'Real-time insights and reports to grow your practice.',
      color: 'bg-orange-500/10 text-orange-500'
    }
  ];

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden text-zinc-900 bg-transparent">
      {/* Soft Light Blue Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Main center laptop glow */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[60%] h-[80%] bg-blue-200/50 blur-[150px] rounded-full"></div>
        {/* Left top subtle glow */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-100/50 blur-[120px] rounded-full"></div>
        {/* Bottom glowing floor effect */}
        <div className="absolute -bottom-[20%] left-0 w-full h-[30%] bg-blue-100/50 blur-[100px]"></div>
      </div>

      {/* Grid pattern overlay for tech feel */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Centered Top Heading */}
        <div className="flex items-center justify-center gap-4 mb-10 lg:mb-16">
          <div className="h-[1px] w-10 md:w-16 bg-zinc-300"></div>
          <span className="text-[11px] md:text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 uppercase tracking-[0.2em]">
            OUR PRODUCT
          </span>
          <div className="h-[1px] w-10 md:w-16 bg-zinc-300"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-[clamp(2.5rem,4vw,3.5rem)] font-display leading-[1.1] tracking-tight mb-4 text-zinc-900">
              Intelligent Clinic Management<br /> Built for the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Future</span>
            </h2>

            <p className="text-sm text-zinc-600 mb-6 max-w-xl leading-relaxed">
              Simplify appointments, patient records, billing, prescriptions and clinic workflows with a secure cloud platform trusted by modern healthcare providers.
            </p>

            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-2.5 p-2.5 rounded-2xl bg-white/70 backdrop-blur-md border border-zinc-200/60 hover:bg-white hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-zinc-100 shadow-sm`}>
                    <feature.icon className={`w-4 h-4 ${feature.color.split(' ')[1]}`} />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-900 mb-0.5">{feature.title}</h3>
                    <p className="text-[10px] text-zinc-500 leading-tight">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="default" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 h-10 text-sm font-semibold gap-2 shadow-lg shadow-blue-600/20 transition-all duration-300">
                <a href="https://www.goclinic.online" target="_blank" rel="noopener noreferrer">
                  Explore Product <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="default" variant="outline" className="rounded-xl px-6 h-10 text-sm font-semibold gap-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors border-zinc-300 bg-white/50 backdrop-blur-sm">
                Live Demo <PlayCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Video UI */}
          <div className="relative lg:ml-10 flex items-center justify-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-2xl animate-float drop-shadow-[0_20px_50px_rgba(37,99,235,0.15)]">

              {/* Laptop Lid / Screen Bezel */}
              <div className="relative w-full rounded-t-xl md:rounded-t-3xl border-[6px] md:border-[12px] border-[#18181b] bg-[#18181b] shadow-2xl z-10">
                {/* Webcam dot */}
                <div className="absolute top-[-4px] md:top-[-8px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#27272a] shadow-inner"></div>

                {/* Screen Content */}
                <div className="relative w-full overflow-hidden bg-white aspect-[16/10] rounded-sm md:rounded-md flex flex-col">

                  {/* Inner Browser Header */}
                  <div className="shrink-0 h-5 md:h-6 bg-zinc-50 border-b border-zinc-200 flex items-center px-3 relative z-10">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-400"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400"></div>
                    </div>
                    {/* URL Bar */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-3.5 md:h-4 bg-white rounded w-1/2 max-w-[150px] border border-zinc-200 shadow-sm flex items-center justify-center">
                      <Shield className="w-2 h-2 text-zinc-400 mr-1" />
                      <span className="text-[7px] md:text-[8px] text-zinc-500 font-medium">goclinic.online</span>
                    </div>
                  </div>

                  {/* Video Content - Filling the rest of the screen and cropping borders */}
                  <div className="relative w-full flex-1 overflow-hidden bg-zinc-900">
                    <video
                      src="/video/product-overview.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute top-0 left-0 w-full h-full object-cover scale-[1.10]"
                    />
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="relative w-[112%] -ml-[6%] h-3 md:h-5 bg-gradient-to-b from-[#f4f4f5] via-[#d4d4d8] to-[#a1a1aa] rounded-b-xl md:rounded-b-2xl shadow-2xl z-0 flex justify-center">
                {/* Thumb notch */}
                <div className="w-[15%] max-w-[80px] h-1.5 md:h-2 bg-[#e4e4e7] rounded-b-md shadow-inner"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

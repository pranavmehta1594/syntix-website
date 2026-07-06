"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Code, Server, Database, Smartphone, Cloud, Layers, Zap, Cpu, Lock, Megaphone, LineChart, Layout, Search, Video, Image as ImageIcon, PenTool, Box } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Sheet, SheetContent, SheetTitle, SheetHeader } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Product", href: "/product" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const servicesList = [
  { 
    name: 'Web Development', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "React", icon: Code }, { name: "Next.js", icon: Code }, { name: "Node.js", icon: Server }, 
      { name: "PostgreSQL", icon: Database }, { name: "GraphQL", icon: Zap }, { name: "TypeScript", icon: Code }, 
      { name: "Tailwind CSS", icon: Layout }, { name: "Prisma", icon: Database }, { name: "Redis", icon: Server },
      { name: "Vercel", icon: Cloud }, { name: "MongoDB", icon: Database }, { name: "Express", icon: Server }, { name: "Docker", icon: Box }
    ] 
  },
  { 
    name: 'App Development', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "React Native", icon: Smartphone }, { name: "Swift", icon: Smartphone }, { name: "Kotlin", icon: Smartphone }, 
      { name: "Flutter", icon: Layers }, { name: "Firebase", icon: Database }, { name: "GraphQL", icon: Zap }, 
      { name: "SQLite", icon: Database }, { name: "Redux", icon: Box }, { name: "Jetpack", icon: Code },
      { name: "Core Data", icon: Database }, { name: "App Store", icon: Cloud }, { name: "Fastlane", icon: Zap }
    ] 
  },
  { 
    name: 'SaaS Development', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "AWS", icon: Cloud }, { name: "Microservices", icon: Layers }, { name: "Stripe API", icon: Zap }, 
      { name: "Docker", icon: Box }, { name: "Kubernetes", icon: Box }, { name: "Next.js", icon: Code }, 
      { name: "Serverless", icon: Server }, { name: "OAuth", icon: Lock }, { name: "Postgres", icon: Database },
      { name: "Redis", icon: Server }, { name: "Terraform", icon: Layers }, { name: "Auth0", icon: Lock }
    ] 
  },
  { 
    name: 'Cloud Services', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "AWS / Azure", icon: Cloud }, { name: "Kubernetes", icon: Box }, { name: "CI/CD", icon: Cpu }, 
      { name: "Security", icon: Lock }, { name: "Terraform", icon: Layers }, { name: "Docker", icon: Box }, 
      { name: "Serverless", icon: Server }, { name: "Cloudflare", icon: Cloud }, { name: "Nginx", icon: Server },
      { name: "Linux", icon: Server }, { name: "Jenkins", icon: Cpu }, { name: "Google Cloud", icon: Cloud }
    ] 
  },
  { 
    name: 'Digital Marketing', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "Social Media", icon: Megaphone }, { name: "PPC", icon: LineChart }, { name: "Content Strategy", icon: Layout }, 
      { name: "Email Marketing", icon: Zap }, { name: "Google Ads", icon: LineChart }, { name: "Meta Ads", icon: Megaphone }, 
      { name: "SEO", icon: Search }, { name: "Analytics", icon: LineChart }, { name: "CRO", icon: Zap },
      { name: "Copywriting", icon: PenTool }, { name: "A/B Testing", icon: Layers }, { name: "Influencer", icon: Megaphone }
    ] 
  },
  { 
    name: 'SEO', img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "Technical SEO", icon: Search }, { name: "Analytics", icon: LineChart }, { name: "Link Building", icon: Layers }, 
      { name: "Keyword Research", icon: Search }, { name: "On-Page SEO", icon: Layout }, { name: "Local SEO", icon: Search }, 
      { name: "Ahrefs", icon: LineChart }, { name: "SEMrush", icon: LineChart }, { name: "Search Console", icon: Search },
      { name: "Screaming Frog", icon: Search }, { name: "Content Audits", icon: Layout }
    ] 
  },
  { 
    name: 'Video Editing', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "Premiere Pro", icon: Video }, { name: "After Effects", icon: Video }, { name: "DaVinci Resolve", icon: ImageIcon }, 
      { name: "CGI", icon: Box }, { name: "Color Grading", icon: ImageIcon }, { name: "Motion Graphics", icon: Layers }, 
      { name: "Sound Design", icon: Zap }, { name: "VFX", icon: Video }, { name: "Final Cut Pro", icon: Video },
      { name: "Audition", icon: Zap }, { name: "Storyboarding", icon: PenTool }
    ] 
  },
  { 
    name: 'Graphics Designing', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "Figma", icon: Layout }, { name: "Photoshop", icon: ImageIcon }, { name: "Illustrator", icon: PenTool }, 
      { name: "Brand ID", icon: Layers }, { name: "UI/UX", icon: Layout }, { name: "Typography", icon: PenTool }, 
      { name: "Print Design", icon: ImageIcon }, { name: "Logo Design", icon: PenTool }, { name: "InDesign", icon: Layout },
      { name: "Sketch", icon: PenTool }, { name: "Prototyping", icon: Layers }, { name: "Wireframing", icon: Layout }
    ] 
  },
  { 
    name: 'Landing Page Development', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "CRO", icon: Zap }, { name: "A/B Testing", icon: Layers }, { name: "Tailwind CSS", icon: Code }, 
      { name: "Framer Motion", icon: Box }, { name: "Next.js", icon: Code }, { name: "Copywriting", icon: PenTool }, 
      { name: "Analytics", icon: LineChart }, { name: "Stripe", icon: Zap }, { name: "HubSpot", icon: Cloud },
      { name: "Lead Gen", icon: LineChart }, { name: "Opt-in Forms", icon: Layout }, { name: "Fast Loading", icon: Zap }
    ] 
  },
  { 
    name: '3D Animation Website Development', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', 
    techStack: [
      { name: "Three.js", icon: Box }, { name: "WebGL", icon: Code }, { name: "Blender", icon: Box }, 
      { name: "GSAP", icon: Zap }, { name: "React Three Fiber", icon: Code }, { name: "Maya", icon: Box }, 
      { name: "Cinema 4D", icon: Box }, { name: "Shaders", icon: Layers }, { name: "ZBrush", icon: PenTool },
      { name: "Unity", icon: Box }, { name: "Unreal Engine", icon: Box }, { name: "Texturing", icon: ImageIcon }
    ] 
  }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoInverted, setIsLogoInverted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const openScheduleModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("schedule", "true");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if logo is over a dark section
      const darkSections = document.querySelectorAll('#process, #video, .bg-zinc-950, .bg-black');
      let isDark = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // The logo is roughly in the top 100px of the screen
        if (rect.top <= 80 && rect.bottom >= 80) {
          isDark = true;
        }
      });
      setIsLogoInverted(isDark);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed z-50 transition-all duration-500 top-0 left-0 right-0 flex justify-between items-start px-4 lg:px-8 pointer-events-none ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm md:bg-transparent md:backdrop-blur-none md:shadow-none" : "bg-transparent"}`}>

      {/* Logo */}
      <div className={`pointer-events-auto w-auto lg:w-64 flex-shrink-0 flex items-center transition-all duration-500 pl-2 lg:pl-0 ${isScrolled ? "h-16" : "h-16 lg:h-20"}`}>
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative transition-all duration-500 w-48 sm:w-52 lg:w-56 h-14">
            <Image
              src="/images/logo-new.png"
              alt="Logo"
              fill
              className={`object-contain object-left transition-all duration-300 ${isLogoInverted ? "md:invert" : ""}`}
              priority
            />
          </div>
        </a>
      </div>

      {/* Navigation Pill - Attached to top, centered (Desktop Only) */}
      <div className="hidden md:flex justify-center pointer-events-auto">
        <nav className={`transition-all duration-500 rounded-b-[2rem] ${isScrolled ? "bg-background/80 backdrop-blur-xl border-x border-b border-foreground/10 shadow-lg" : "bg-transparent"}`}>
          <div className={`flex items-center gap-12 transition-all duration-500 px-8 lg:px-12 py-2 relative ${isScrolled ? "h-16" : "h-20"}`}>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-12 h-full">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => link.name === 'Services' && setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => link.name === 'Services' && setIsServicesDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group flex items-center h-full"
                  >
                    {link.name}
                    <span className="absolute bottom-[calc(50%-12px)] left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                  </a>

                  {/* Services Dropdown */}
                  {link.name === 'Services' && (
                    <div
                      className={`absolute top-full -left-32 pt-2 transition-all duration-300 ${isServicesDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
                    >
                      <div className="w-[850px] bg-background border border-foreground/10 rounded-2xl shadow-2xl flex overflow-hidden">
                        {/* Left Column - Service List */}
                        <div className="w-1/2 p-8 border-r border-foreground/10 bg-background">
                          <div className="mb-6 border-b border-foreground/10 pb-4">
                            <h3 className="text-2xl font-bold text-foreground">Explore Our Services</h3>
                            <p className="text-sm text-muted-foreground mt-1">Comprehensive IT Solutions for Modern Businesses.</p>
                          </div>
                          <div className="flex flex-col gap-1">
                            {servicesList.map((service, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className={`px-4 py-2.5 -mx-4 rounded-lg text-sm transition-colors flex justify-between items-center ${activeServiceIndex === idx ? 'bg-foreground/5 text-foreground font-medium' : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'}`}
                                onMouseEnter={() => setActiveServiceIndex(idx)}
                              >
                                <span>{service.name}</span>
                                <ArrowRight className={`w-4 h-4 transition-all duration-300 ${activeServiceIndex === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Right Column - Tech Stack */}
                        <div className="w-1/2 p-8 bg-foreground/[0.02] flex flex-col">
                          <h3 className="text-xl font-bold text-foreground mb-6">Technologies & Expertise</h3>
                          <div className="rounded-xl overflow-hidden aspect-[4/3] relative mb-6 shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={servicesList[activeServiceIndex].img}
                              alt={servicesList[activeServiceIndex].name}
                              className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
                            />
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-2">
                            {servicesList[activeServiceIndex].techStack.map((tech, idx) => {
                              const Icon = tech.icon;
                              return (
                                <div key={idx} className="flex items-center gap-1.5 text-[13px] text-muted-foreground bg-foreground/5 px-3 py-1.5 rounded-full border border-foreground/10 transition-colors hover:bg-foreground/10">
                                  <Icon className="w-3.5 h-3.5 text-foreground/70" />
                                  <span className="font-medium text-foreground/90">{tech.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Right Side (Desktop CTA + Mobile Hamburger) */}
      <div className={`w-auto lg:w-64 flex items-center justify-end gap-6 pointer-events-auto flex-shrink-0 transition-all duration-500 pr-2 lg:pr-0 ${isScrolled ? "h-16" : "h-16 lg:h-20"}`}>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 text-foreground -mr-2"
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>

        {/* Desktop CTA */}
        <Button
          size="sm"
          onClick={openScheduleModal}
          className={`hidden lg:flex bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
        >
          Get Free Consultation
        </Button>
      </div>

      {/* Mobile Menu - Shadcn Sheet */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="flex flex-col w-[300px] sm:w-[400px] p-6 border-l border-foreground/10 z-[100]">
          <SheetHeader className="mb-8 mt-2 text-left p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="relative w-40 h-10">
              <Image
                src="/images/logo-new.png"
                alt="Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </SheetHeader>
          <div className="flex flex-col gap-6 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display text-foreground hover:text-muted-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pb-4 pt-6 border-t border-foreground/10">
            <Button
              className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 rounded-full text-base font-semibold"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openScheduleModal();
              }}
            >
              Get Free Consultation
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

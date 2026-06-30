"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Product", href: "/product" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const servicesList = [
  { name: 'Web Development', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', title: 'Modern Web Development Solutions' },
  { name: 'App Development', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', title: 'Next-Gen Mobile Applications' },
  { name: 'SaaS Development', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', title: 'Scalable SaaS Platforms' },
  { name: 'Cloud Services', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', title: 'Enterprise Cloud Infrastructure' },
  { name: 'Digital Marketing', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80', title: 'Data-Driven Digital Marketing' },
  { name: 'SEO', img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80', title: 'Advanced SEO Strategies' },
  { name: 'Video Editing', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80', title: 'Professional Video Production' },
  { name: 'Graphics Designing', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80', title: 'Creative Brand Identity & Design' },
  { name: 'Landing Page Development', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', title: 'High-Converting Landing Pages' },
  { name: '3D Animation Website Development', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', title: 'Immersive 3D Web Experiences' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${isScrolled
        ? "top-4 left-4 right-4"
        : "top-0 left-0 right-0"
        }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-[1200px]"
          : "bg-transparent max-w-[1400px]"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 relative ${isScrolled ? "h-14" : "h-20"
            }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className={`font-display tracking-tight transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}>Syntrix</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 h-full">
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

                      {/* Right Column - Featured Insight */}
                      <div className="w-1/2 p-8 bg-foreground/[0.02]">
                        <h3 className="text-xl font-bold text-foreground mb-6">Featured Insights</h3>
                        <div className="rounded-xl overflow-hidden aspect-[4/3] relative mb-6">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={servicesList[activeServiceIndex].img} 
                            alt={servicesList[activeServiceIndex].name}
                            className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-3 leading-tight">
                          {servicesList[activeServiceIndex].title}
                        </h4>
                        <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium">
                          Read Full Article
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className={`text-foreground/70 hover:text-foreground transition-all duration-500 ${isScrolled ? "text-xs" : "text-sm"}`}>
              View Work
            </a>
            <Button
              size="sm"
              className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
            >
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className={`flex gap-4 pt-8 border-t border-foreground/10 transition-all duration-500 ${isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Button
              variant="outline"
              className="flex-1 rounded-full h-14 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View Portfolio
            </Button>
            <Button
              className="flex-1 bg-foreground text-background rounded-full h-14 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile App Development", href: "/services" },
    { name: "Custom Software", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
  ],
  Solutions: [
    { name: "SaaS Development", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
    { name: "DevOps Services", href: "/services" },
    { name: "E-Commerce Solutions", href: "/services" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Careers", href: "/careers", badge: "Hiring" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "FAQ", href: "/faq" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-zinc-950 text-white border-t-0">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">Syntrix Technologies</span>
                <span className="text-xs text-background/70 font-mono">TM</span>
              </a>
              <p className="text-background/70 leading-relaxed mb-8 max-w-xs">
                Syntrix Technologies is a software development company specializing
                in custom web applications, mobile app development, SaaS products,
                cloud solutions, DevOps, SEO, and digital transformation services.
              </p>
              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-background/70 hover:text-background transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-background text-foreground rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70">
            © 2026 Syntrix Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/70">
            <a href="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-background transition-colors">Terms</a>
            <a href="/faq" className="hover:text-background transition-colors">FAQ</a>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for New Projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

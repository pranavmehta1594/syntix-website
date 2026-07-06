"use client";

import { ArrowUpRight, Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import Image from "next/image";

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
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "X", href: "#", icon: Twitter },
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
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-2 mb-6 relative w-72 h-20 md:w-80 md:h-24">
                <Image
                  src="/images/logo-new.png"
                  alt="Syntrix Technologies"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </a>
              <p className="text-background/70 leading-relaxed mb-8 max-w-xs">
                SyntrixVerse is a software development company specializing
                in custom web applications, mobile app development, SaaS products,
                cloud solutions, DevOps, SEO, and digital transformation services.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="w-10 h-10 rounded-full bg-background/5 border border-background/10 flex items-center justify-center text-background/70 hover:bg-background hover:text-foreground transition-all group"
                      aria-label={link.name}
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
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
        <div className="py-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>© 2026 Syntrix Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

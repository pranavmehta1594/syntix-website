"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Brain, ShieldCheck, FileText, BarChart3, Stethoscope } from "lucide-react";

const features = [
  {
    title: "WhatsApp Appointments",
    description: "Seamlessly book, reschedule, and manage patient appointments directly through WhatsApp with automated reminders.",
    icon: MessageCircle,
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
  },
  {
    title: "AI-Powered Consultations",
    description: "Leverage advanced AI to assist with clinical documentation, smart diagnoses, and treatment plan generation.",
    icon: Brain,
    color: "text-[#4372F9]",
    bg: "bg-[#4372F9]/10",
  },
  {
    title: "ABDM & ABHA Compliance",
    description: "Fully integrated with India's Ayushman Bharat Digital Mission. Easily generate and link ABHA IDs for patients.",
    icon: ShieldCheck,
    color: "text-[#FD6316]",
    bg: "bg-[#FD6316]/10",
  },
  {
    title: "Digital Prescriptions",
    description: "Create, save, and share professional digital prescriptions in seconds. Maintain a complete e-pharmacy record.",
    icon: FileText,
    color: "text-[#E1306C]",
    bg: "bg-[#E1306C]/10",
  },
  {
    title: "Smart Billing & Analytics",
    description: "Automate invoicing, track revenue, and gain deep insights into your clinic's performance with advanced dashboards.",
    icon: BarChart3,
    color: "text-[#833AB4]",
    bg: "bg-[#833AB4]/10",
  },
  {
    title: "Telemedicine Ready",
    description: "Conduct high-quality video consultations directly through the platform. Expand your reach beyond Tier 2 and Tier 3 cities.",
    icon: Stethoscope,
    color: "text-[#00C6FF]",
    bg: "bg-[#00C6FF]/10",
  },
];

export function ProductFeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("product-features");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="product-features" className="py-32 relative bg-background border-t border-foreground/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display tracking-tight text-foreground mb-6">
            Everything you need to run <br />
            <span className="text-muted-foreground">a modern clinic.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We designed GO Clinic specifically for the needs of Indian healthcare providers, combining cutting-edge technology with extreme ease of use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group p-8 rounded-[2rem] bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-display text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

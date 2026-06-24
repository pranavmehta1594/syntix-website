"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactFormSection() {
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

    const element = document.getElementById("contact-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="contact-section" className="py-20 relative bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-foreground mb-8">
              Contact Information
            </h2>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-[#4372F9]/10 group-hover:border-[#4372F9]/20 transition-colors">
                  <Mail className="w-5 h-5 text-foreground/70 group-hover:text-[#4372F9] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-display text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground font-mono text-sm mb-2">For general inquiries and support</p>
                  <a href="mailto:hello@syntrixtech.com" className="text-foreground hover:text-[#4372F9] transition-colors font-medium">
                    hello@syntrixtech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-[#4372F9]/10 group-hover:border-[#4372F9]/20 transition-colors">
                  <Phone className="w-5 h-5 text-foreground/70 group-hover:text-[#4372F9] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-display text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground font-mono text-sm mb-2">Mon-Fri from 9am to 6pm EST</p>
                  <a href="tel:+1234567890" className="text-foreground hover:text-[#4372F9] transition-colors font-medium">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-[#4372F9]/10 group-hover:border-[#4372F9]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-foreground/70 group-hover:text-[#4372F9] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-display text-foreground mb-1">Visit Us</h3>
                  <p className="text-muted-foreground font-mono text-sm mb-2">Our headquarters</p>
                  <address className="text-foreground not-italic font-medium">
                    123 Innovation Drive<br />
                    Suite 400<br />
                    San Francisco, CA 94103
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-display text-foreground mb-6">Send us a message</h3>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#4372F9] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#4372F9] transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#4372F9] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="services" className="text-sm font-medium text-foreground">What are you looking for?</label>
                  <select 
                    id="services" 
                    className="bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#4372F9] transition-colors appearance-none"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="consulting">Tech Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Project Details</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="bg-background border border-foreground/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#4372F9] transition-colors resize-none"
                    placeholder="Tell us a little bit about your project and goals..."
                  ></textarea>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-[#4372F9] hover:bg-[#345ad4] text-white rounded-xl h-14 text-base font-medium transition-colors mt-2"
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

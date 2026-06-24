"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar as CalendarIcon } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                  Your vision.
                  <br />
                  Our expertise.
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  We create exceptional digital experiences through custom software,
                  modern websites, mobile applications, cloud solutions, and scalable
                  technology that helps businesses thrive in a competitive market.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    size="lg"
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        variant="outline"
                        className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                      >
                        Book a Discovery Call
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-background border-foreground/10">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-display flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5 text-blue-500" />
                          Schedule a Call
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground pt-1">
                          Pick a time that works for you. We'll send a calendar invite with a meeting link.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4 mt-2">
                        <div className="grid gap-2">
                          <Label htmlFor="name" className="text-xs font-medium text-foreground/80">Full Name</Label>
                          <Input id="name" placeholder="John Doe" className="bg-foreground/[0.02] border-foreground/10 h-11" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email" className="text-xs font-medium text-foreground/80">Work Email</Label>
                          <Input id="email" type="email" placeholder="john@company.com" className="bg-foreground/[0.02] border-foreground/10 h-11" />
                        </div>
                        <div className="grid gap-2">
                          <Label className="text-xs font-medium text-foreground/80">Preferred Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full h-11 justify-start text-left font-normal bg-foreground/[0.02] border-foreground/10",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="topic" className="text-xs font-medium text-foreground/80">Project Type</Label>
                          <Input id="topic" placeholder="e.g. SaaS App Development" className="bg-foreground/[0.02] border-foreground/10 h-11" />
                        </div>
                      </div>
                      <div className="flex justify-end mt-2">
                        <Button type="button" className="w-full h-12 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90">
                          Confirm Booking
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  Web Development • Mobile Apps • SaaS • Cloud • DevOps
                </p>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}

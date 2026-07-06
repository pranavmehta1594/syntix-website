"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2, AlertCircle, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid work email.",
  }),
  date: z.date({
    required_error: "A date is required for the meeting.",
  }),
  projectType: z.string({
    required_error: "Please select a project type.",
  }),
  projectDescription: z.string().optional(),
});

export function ContactFormSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectDescription: "",
    },
  });

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "schedule_appointment",
          ...values,
        }),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit your request.");
      }

      setSubmitState("success");
      setSubmitMessage(result?.message || "Your request was sent successfully.");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error instanceof Error ? error.message : "Unable to submit your request.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <div className="bg-background shadow-lg border border-border rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-display text-foreground mb-2">Schedule a Call</h3>
              <p className="text-muted-foreground mb-6">Pick a time that works for you. We'll send a calendar invite with a meeting link.</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                  {submitState !== "idle" && submitMessage ? (
                    <div
                      className={cn(
                        "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
                        submitState === "success"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                          : "border-destructive/30 bg-destructive/10 text-destructive"
                      )}
                    >
                      {submitState === "success" ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                      ) : (
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      )}
                      <p>{submitMessage}</p>
                    </div>
                  ) : null}

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="h-11 bg-muted/30 rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@company.com" type="email" className="h-11 bg-muted/30 rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">Preferred Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full h-11 pl-3 text-left font-normal bg-muted/30 border-input rounded-sm focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "MMM d, yyyy")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date(new Date().setHours(0, 0, 0, 0))
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full h-11 bg-muted/30 rounded-sm focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="web">Web Development</SelectItem>
                              <SelectItem value="mobile">Mobile App</SelectItem>
                              <SelectItem value="saas">SaaS Platform</SelectItem>
                              <SelectItem value="cloud">Cloud / DevOps</SelectItem>
                              <SelectItem value="uiux">UI/UX Design</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {form.watch("projectType") === "other" && (
                    <FormField
                      control={form.control}
                      name="projectDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">Project Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us a little bit about your project..." 
                              className="resize-none bg-muted/30 rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-full mt-6 bg-[#4372F9] text-white hover:bg-[#345ad4] font-medium transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Confirming...
                      </>
                    ) : (
                      "Confirm Booking"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

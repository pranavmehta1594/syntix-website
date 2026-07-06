"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AlertCircle, CheckCircle2, Loader2, UploadCloud, FileText, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  positionType: z.string({
    required_error: "Please select a position type.",
  }),
  portfolioLink: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
  resumeFile: z.custom<File>((file) => file instanceof File && file.size > 0, {
    message: "Please upload your resume or CV.",
  }),
  whyJoinUs: z.string().min(10, {
    message: "Please provide a brief reason.",
  }),
});

export function ApplicationFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      positionType: "",
      portfolioLink: "",
      resumeFile: undefined,
      whyJoinUs: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitMessage("");

    try {
      const formData = new FormData();
      formData.append("formType", "careers_application");
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("positionType", values.positionType);
      formData.append("whyJoinUs", values.whyJoinUs);

      if (values.portfolioLink?.trim()) {
        formData.append("portfolioLink", values.portfolioLink.trim());
      }

      formData.append("resumeFile", values.resumeFile);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit your application.");
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your application."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative py-24 sm:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Side: Description */}
          <div className="flex flex-col space-y-6 lg:col-span-5">
            <Badge
              variant="outline"
              className="w-fit text-primary border-primary/30 bg-primary/10 px-3 py-1 text-sm"
            >
              Join the Team
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Build the Future With Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Take the next step in your career. We are always looking for passionate individuals to join our team.
              Whether you are looking for an internship to kickstart your journey or a full-time position to make a real impact, we want to hear from you.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="font-semibold text-xl text-foreground">Why Syntrixverse?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Work on cutting-edge technologies and AI.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Collaborative and fast-paced startup culture.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Remote-friendly and flexible working hours.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Opportunities for massive career growth.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-background border rounded-xl p-6 md:p-8 shadow-sm lg:col-span-7">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100/20 text-green-500 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Application Submitted!</h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {submitState === "error" && submitMessage ? (
                    <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <p>{submitMessage}</p>
                    </div>
                  ) : null}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="focus-visible:ring-0 focus-visible:ring-offset-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              className="focus-visible:ring-0 focus-visible:ring-offset-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="positionType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                                <SelectValue placeholder="Select a position" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="internship">Internship</SelectItem>
                              <SelectItem value="full-time">Full-time Job</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="resumeFile"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel>Upload Resume / CV</FormLabel>
                        <FormControl>
                          {value ? (
                            <div className="flex items-center justify-between p-3 border rounded-md bg-muted/30">
                              <div className="flex items-center space-x-3 overflow-hidden">
                                <FileText className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm font-medium truncate">{value.name}</span>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="w-8 h-8 shrink-0 text-muted-foreground hover:text-destructive"
                                onClick={() => onChange(undefined)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ) : (
                            <div className="flex justify-center w-full">
                              <label
                                htmlFor="resume-upload"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer bg-muted/20 hover:bg-muted/50 border-muted-foreground/20 hover:border-primary/50 transition-all duration-200"
                              >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <UploadCloud className="w-8 h-8 mb-3 text-muted-foreground transition-colors group-hover:text-primary" />
                                  <p className="mb-2 text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX</p>
                                </div>
                                <Input
                                  {...field}
                                  id="resume-upload"
                                  type="file"
                                  className="hidden"
                                  accept=".pdf,.doc,.docx"
                                  onChange={(event) => {
                                    const file = event.target.files?.[0];
                                    if (file) onChange(file);
                                  }}
                                />
                              </label>
                            </div>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="portfolioLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio Link</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://your-portfolio.com"
                            className="focus-visible:ring-0 focus-visible:ring-offset-0"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Optional link to your portfolio, LinkedIn, or website.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whyJoinUs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why do you want to join us?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us what excites you about Syntrix..."
                            className="min-h-[120px] resize-y focus-visible:ring-0 focus-visible:ring-offset-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

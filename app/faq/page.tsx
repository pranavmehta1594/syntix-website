import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Syntrix Technologies",
  description: "Frequently asked questions about Syntrix Technologies services, process, pricing, and technology.",
};

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What is Syntrix Technologies?",
        a: "Syntrix Technologies is a full-service software development company. We design, build, and scale premium web applications, mobile apps, SaaS platforms, and cloud infrastructure for businesses worldwide.",
      },
      {
        q: "Where is Syntrix Technologies located?",
        a: "We are a remote-first company with team members across multiple time zones, allowing us to serve clients globally with real-time collaboration and support.",
      },
      {
        q: "What industries do you serve?",
        a: "We serve clients across healthcare, fintech, e-commerce, logistics, education, and enterprise SaaS. Our team has deep domain experience to build industry-specific solutions that actually work.",
      },
    ],
  },
  {
    category: "Services & Process",
    items: [
      {
        q: "What services does Syntrix offer?",
        a: "We offer web development, mobile app development, SaaS product design & development, UI/UX design, cloud & DevOps, video editing, digital marketing, SEO, graphic design, and AI integration services.",
      },
      {
        q: "How does your development process work?",
        a: "We follow an agile, milestone-based process: Discovery → Design → Development → QA → Launch → Support. You get weekly progress updates and access to a project dashboard throughout.",
      },
      {
        q: "How long does a typical project take?",
        a: "Timeline depends on scope. A standard web application takes 6–12 weeks. A full SaaS product typically ranges from 3–6 months. We always provide a detailed timeline after the discovery phase.",
      },
      {
        q: "Do you work with startups or only enterprises?",
        a: "Both. We work with early-stage startups building their first product, as well as established enterprises modernizing legacy systems. Our engagement models scale to fit your stage and budget.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    items: [
      {
        q: "How is pricing structured?",
        a: "We offer fixed-price project contracts for well-defined scopes, and time & materials (T&M) engagements for flexible, evolving projects. Retainer models are available for ongoing product development.",
      },
      {
        q: "Do you offer a free consultation?",
        a: "Yes. We offer a free 30-minute discovery call to understand your project, answer questions, and determine if we're a good fit — no commitment required.",
      },
      {
        q: "What is your minimum project size?",
        a: "Our minimum engagement starts at $5,000 USD for small projects. For custom enterprise solutions, engagements typically range from $20,000 to $200,000+.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        q: "What technologies do you use?",
        a: "Our core stack includes Next.js, React, React Native, Node.js, Python, PostgreSQL, MongoDB, AWS, and GCP. We choose the best tools for each project rather than forcing one stack.",
      },
      {
        q: "Will I own the source code?",
        a: "Yes. Upon full payment, you receive complete ownership of all source code, intellectual property, and assets produced during the project.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Yes. We offer maintenance plans starting at $500/month covering bug fixes, security patches, dependency updates, and up to 10 hours of minor feature work per month.",
      },
      {
        q: "Can you integrate with our existing systems?",
        a: "Absolutely. We specialize in API integrations, legacy system modernization, and connecting third-party services including CRMs, ERPs, payment gateways, and communication platforms.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 pt-32 pb-20">
          <div className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Support
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-display leading-tight tracking-tight text-foreground mb-6">
            Frequently Asked{" "}
            <span className="text-muted-foreground">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Everything you need to know about working with Syntrix Technologies. Can't find what you're looking for?{" "}
            <a href="/contact" className="text-foreground underline underline-offset-4 hover:text-blue-400 transition-colors">
              Contact our team
            </a>.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="max-w-[900px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col gap-16">
          {faqs.map((section) => (
            <div key={section.category}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground px-3 py-1 rounded-full border border-foreground/10 bg-foreground/5">
                  {section.category}
                </span>
              </div>

              <div className="flex flex-col gap-px rounded-2xl border border-foreground/10 overflow-hidden">
                {section.items.map((item, i) => (
                  <details
                    key={i}
                    className="group border-b border-foreground/8 last:border-0 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                      <span className="text-base font-medium text-foreground leading-snug">{item.q}</span>
                      <span className="shrink-0 w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-muted-foreground group-open:rotate-45 transition-transform duration-300">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-20 rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-10 text-center">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Our team is happy to walk you through anything. Reach out and we'll respond within one business day.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Syntrix Technologies",
  description: "Terms and Conditions for using Syntrix Technologies services and website.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the website, products, or services provided by Syntrix Technologies ('Company', 'we', 'our', or 'us'), you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to these Terms, please do not use our services.",
      "We reserve the right to modify these Terms at any time. Continued use of our services after any changes constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "Services",
    content: [
      "Syntrix Technologies provides software development, design, digital marketing, cloud infrastructure, and related technology services ('Services') as described in individual project agreements or statements of work ('SOW').",
      "The specific scope, deliverables, timelines, and pricing for each engagement are outlined in a separate project agreement. In the event of a conflict between these Terms and a project agreement, the project agreement shall prevail.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "**Client-Owned Assets** — Upon receipt of full payment, the client receives full ownership of all custom code, designs, and deliverables produced specifically for their project.",
      "**Pre-existing IP** — Any tools, frameworks, libraries, or proprietary methodologies used by Syntrix Technologies in the delivery of services remain the property of Syntrix Technologies or their respective owners.",
      "**Third-Party Components** — Deliverables may include open-source software subject to their respective licences. Syntrix Technologies is not liable for the terms of such licences.",
      "**Portfolio Rights** — Unless expressly prohibited in a signed agreement, Syntrix Technologies reserves the right to reference the project and client name in its portfolio and marketing materials.",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "All fees are as specified in the project agreement or invoice. Standard payment terms are:",
      "• 50% deposit required before work commences.",
      "• Remaining balance due upon project completion or as specified in the SOW.",
      "• Invoices are payable within 14 days of issue unless otherwise agreed.",
      "• Late payments accrue interest at 2% per month after the due date.",
      "Syntrix Technologies reserves the right to pause or terminate work on any project with outstanding unpaid invoices beyond 30 days.",
    ],
  },
  {
    title: "Confidentiality",
    content: [
      "Both parties agree to keep confidential all non-public information disclosed during the engagement, including but not limited to business strategies, technical architecture, financial data, and client lists.",
      "Confidential information shall not be disclosed to any third party without prior written consent, except as required by law or to subcontractors who are bound by equivalent confidentiality obligations.",
      "This obligation survives the termination of any project agreement for a period of 3 years.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Syntrix Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
      "Our total liability for any claim arising from or relating to our services shall not exceed the total fees paid by the client in the 3 months preceding the claim.",
      "We are not responsible for third-party services, APIs, or infrastructure failures that affect your project's operation post-launch.",
    ],
  },
  {
    title: "Project Delays & Cancellations",
    content: [
      "**Client-Caused Delays** — If delays occur due to the client's failure to provide timely feedback, content, or approvals, Syntrix Technologies may adjust timelines and invoice for any additional time incurred.",
      "**Cancellation by Client** — If a client cancels a project mid-engagement, the deposit is non-refundable. Work completed up to the cancellation date will be invoiced at the hourly rate specified in the agreement.",
      "**Cancellation by Syntrix** — In rare cases where we must terminate an engagement (e.g., non-payment, unethical requirements), we will deliver all work completed and refund any prepaid unused portion.",
    ],
  },
  {
    title: "Warranties & Representations",
    content: [
      "Syntrix Technologies warrants that:",
      "• Services will be performed professionally and in accordance with industry standards.",
      "• All deliverables will substantially conform to agreed specifications.",
      "• We have the legal right to provide the services and that our work will not infringe any third-party intellectual property rights.",
      "We do not warrant that the deliverables will be error-free or that they will meet your specific business outcomes or revenue expectations.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Syntrix Technologies is registered, without regard to its conflict of law provisions.",
      "Any disputes arising under these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration.",
    ],
  },
  {
    title: "Contact",
    content: [
      "If you have any questions about these Terms, please contact us at legal@syntrixtechnologies.com or through our contact page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 pt-32 pb-20">
          <div className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Legal
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-display leading-tight tracking-tight text-foreground mb-6">
            Terms &amp; <span className="text-muted-foreground">Conditions</span>
          </h1>
          <p className="text-muted-foreground text-sm">Last updated: June 24, 2026</p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mt-4">
            Please read these Terms and Conditions carefully before engaging with Syntrix Technologies. By using our services, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-[800px] mx-auto px-6 lg:px-12 pt-12">
        <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Contents</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((s, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                >
                  <span className="font-mono text-xs text-muted-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[800px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex flex-col gap-12">
          {sections.map((section, i) => (
            <div key={i} id={`section-${i}`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-xs font-mono text-muted-foreground/40 mt-1.5 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-xl font-display font-semibold text-foreground">{section.title}</h2>
              </div>
              <div className="pl-10 flex flex-col gap-3">
                {section.content.map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
              {i < sections.length - 1 && <div className="mt-12 h-px bg-foreground/8" />}
            </div>
          ))}
        </div>

        {/* Contact Block */}
        <div className="mt-20 rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-10">
          <h2 className="text-xl font-display font-semibold text-foreground mb-3">Questions About Our Terms?</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            If you need clarification on any of these terms before engaging with us, our team is happy to discuss.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-foreground font-medium">Syntrix Technologies</span>
            <a href="mailto:legal@syntrixtechnologies.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              legal@syntrixtechnologies.com
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 mt-2 w-fit">
              Or use our contact form →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

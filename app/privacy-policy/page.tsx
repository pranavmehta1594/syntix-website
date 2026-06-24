import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Syntrix Technologies",
  description: "Privacy Policy for Syntrix Technologies. Learn how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you visit our website or use our services, we may collect the following types of information:",
      "• **Personal Identification Information** — name, email address, phone number, and company name when you fill out a contact form or request a consultation.",
      "• **Usage Data** — information about how you interact with our website, including pages visited, time spent, and browser type, collected via cookies and analytics tools.",
      "• **Communication Data** — any messages, emails, or content you share with us during the course of a business relationship.",
      "• **Technical Data** — IP address, browser version, device type, and operating system for security and performance monitoring.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
      "• To respond to your inquiries and provide requested services.",
      "• To communicate project updates, invoices, and relevant business correspondence.",
      "• To improve our website's functionality, content, and user experience.",
      "• To send periodic emails about services, promotions, or company news (you may unsubscribe at any time).",
      "• To comply with legal obligations and enforce our terms of service.",
      "We do not sell, trade, or transfer your personal information to third parties without your consent, except where required by law or necessary to provide contracted services.",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "Our website uses cookies — small data files stored on your browser — to enhance your experience. These include:",
      "• **Essential Cookies** — required for the website to function properly.",
      "• **Analytics Cookies** — help us understand how visitors interact with our site (e.g., Google Analytics).",
      "• **Preference Cookies** — remember your settings and preferences across visits.",
      "You can control cookie settings through your browser. Disabling cookies may affect certain features of our website.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We take the security of your personal data seriously. We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction.",
      "These measures include encrypted data transmission (HTTPS/TLS), access controls, regular security audits, and secure data storage practices.",
      "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "We may use trusted third-party services to support our operations. These include:",
      "• **Google Analytics** — website analytics and performance tracking.",
      "• **Stripe / Razorpay** — secure payment processing.",
      "• **Notion / Linear** — project management and communication.",
      "• **Vercel / AWS** — web hosting and cloud infrastructure.",
      "These services have their own privacy policies, and we encourage you to review them. We only share data necessary for service delivery and ensure our partners adhere to appropriate data protection standards.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Depending on your jurisdiction, you may have the following rights regarding your personal data:",
      "• **Access** — request a copy of the personal data we hold about you.",
      "• **Correction** — request correction of inaccurate or incomplete data.",
      "• **Deletion** — request that we delete your personal data (subject to legal obligations).",
      "• **Objection** — object to our processing of your data for direct marketing purposes.",
      "• **Portability** — receive your data in a structured, machine-readable format.",
      "To exercise any of these rights, please contact us at privacy@syntrixtechnologies.com.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your personal data only as long as necessary to fulfil the purposes outlined in this policy or as required by law. Client project data is retained for 7 years after project completion for legal and accounting purposes.",
      "Contact and marketing data is retained until you unsubscribe or request deletion.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the 'Last Updated' date at the top of this page. We encourage you to review this page periodically to stay informed about how we protect your information.",
      "Continued use of our website after any changes constitutes your acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative border-b border-foreground/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 pt-32 pb-20">
          <div className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Legal
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-display leading-tight tracking-tight text-foreground mb-6">
            Privacy <span className="text-muted-foreground">Policy</span>
          </h1>
          <p className="text-muted-foreground text-sm">Last updated: June 24, 2026</p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mt-4">
            At Syntrix Technologies, we are committed to protecting your personal information and your right to privacy. This policy explains what data we collect, why we collect it, and how we use it.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[800px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col gap-12">
          {sections.map((section, i) => (
            <div key={i} className="group">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-xs font-mono text-muted-foreground/50 mt-1.5 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
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
          <h2 className="text-xl font-display font-semibold text-foreground mb-3">Contact Us About Privacy</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            If you have any questions about this Privacy Policy or how we handle your data, please reach out to our privacy team.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-foreground font-medium">Syntrix Technologies</span>
            <a href="mailto:privacy@syntrixtechnologies.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              privacy@syntrixtechnologies.com
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

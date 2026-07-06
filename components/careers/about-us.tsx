import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function AboutUsCareersSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10 px-3 py-1 text-sm">
                Our Startup Journey
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Founding Team</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Syntrix Technologies, we are an early-stage startup on a mission to build a transformative AI platform. We are agile, moving fast, and looking for passionate individuals who want to get in on the ground floor. Here, your work directly shapes the future of our product.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2 p-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h4 className="text-lg font-bold text-foreground">High Impact</h4>
                <p className="text-sm text-muted-foreground leading-snug">Your work directly drives our growth.</p>
              </div>
              <div className="space-y-2 p-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h4 className="text-lg font-bold text-foreground">Fast-Paced</h4>
                <p className="text-sm text-muted-foreground leading-snug">Rapid prototyping and learning.</p>
              </div>
              <div className="space-y-2 p-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <h4 className="text-lg font-bold text-foreground">Build the Core</h4>
                <p className="text-sm text-muted-foreground leading-snug">Shape the fundamental architecture.</p>
              </div>
              <div className="space-y-2 p-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h4 className="text-lg font-bold text-foreground">100% Remote</h4>
                <p className="text-sm text-muted-foreground leading-snug">Work flexibly from anywhere.</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-3xl blur-2xl -z-10 transition duration-500 group-hover:from-primary/40 group-hover:to-purple-500/40" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=800"
                alt="Team working together"
                width={1200}
                height={800}
                className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

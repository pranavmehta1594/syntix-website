import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug } from "@/lib/blogs-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { GlobalThemeBackground } from "@/components/ui/theme-elements";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-slate-50 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      <GlobalThemeBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            {blog.category}
            <span className="w-8 h-px bg-foreground/30" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-[1.05] tracking-tight text-foreground mb-8 text-balance">
            {blog.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            {blog.excerpt}
          </p>

          {/* Meta Info Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={blog.author.avatar} 
                alt={blog.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div className="text-left">
                <p className="font-semibold text-foreground">{blog.author.name}</p>
                <p className="text-xs text-muted-foreground">{blog.author.role}</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-foreground/10" />

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time>{blog.date}</time>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{blog.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="px-4 lg:px-12 max-w-[1400px] mx-auto z-10 relative mb-16 lg:mb-32">
        <div className="relative aspect-video md:aspect-[21/9] w-full rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/5 bg-zinc-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto z-10 relative pb-32">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          
          {/* Left Column - Article Content */}
          <div className="w-full lg:w-2/3 lg:max-w-[760px]">
            {/* Custom tailored typography for premium feel */}
            <article 
              className="max-w-none text-zinc-600 text-lg md:text-xl leading-relaxed
                [&>h2]:font-display [&>h2]:font-medium [&>h2]:tracking-tight [&>h2]:text-foreground [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:mt-16 [&>h2]:mb-6
                [&>h3]:font-display [&>h3]:font-medium [&>h3]:tracking-tight [&>h3]:text-foreground [&>h3]:text-2xl md:[&>h3]:text-3xl [&>h3]:mt-12 [&>h3]:mb-4
                [&>p]:mb-8
                [&>a]:text-blue-600 [&>a]:underline-offset-4 hover:[&>a]:text-blue-700
                [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:bg-blue-50/50 [&>blockquote]:py-4 [&>blockquote]:px-6 [&>blockquote]:rounded-r-xl [&>blockquote]:text-blue-900 [&>blockquote]:font-medium [&>blockquote]:not-italic [&>blockquote]:mb-8
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-2 [&>ul>li]:marker:text-blue-500
                [&>strong]:text-zinc-900 [&>strong]:font-semibold
                [&>code]:text-blue-600 [&>code]:bg-blue-50 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-12">
              
              {/* Share Widget */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm">
                <h3 className="font-display text-xl mb-6 flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-muted-foreground" />
                  Share this article
                </h3>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                    <Facebook className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Author Widget */}
              <div className="p-8 rounded-3xl bg-zinc-950 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                <h3 className="font-display text-xl mb-6">About the Author</h3>
                <div className="flex items-start gap-4 mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={blog.author.avatar} 
                    alt={blog.author.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <p className="font-semibold text-lg">{blog.author.name}</p>
                    <p className="text-sm text-zinc-400 mb-2">{blog.author.role}</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Passionate about building scalable systems and intuitive user interfaces. Sharing insights from the frontier of web engineering and product design.
                </p>
              </div>

            </div>
          </div>
        </div>
        
        {/* Footer Navigation within Page */}
        <div className="mt-24 pt-12 border-t border-zinc-200 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

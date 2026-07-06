"use client";

import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import { blogs } from "@/lib/blogs-data";

export function BlogsSection() {
  return (
    <section className="pt-10 pb-6 md:pt-24 md:pb-10 relative overflow-hidden bg-transparent border-y border-foreground/5 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-foreground/30" />
            Our Blog
          </span>
          <h2 className="text-3xl sm:text-[clamp(2.5rem,4vw,3.5rem)] font-display leading-[1.1] tracking-tight text-zinc-900">
            Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Insights</span>
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {blogs.map((blog) => (
              <CarouselItem key={blog.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="group h-full flex flex-col rounded-2xl bg-background/50 border border-foreground/10 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur-md rounded-full text-xs font-medium text-foreground">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-3 mb-8 flex-1">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto">
                      <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Read Article
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls - Bottom Right */}
          <div className="flex justify-end gap-4 mt-8 pr-2">
            <CarouselPrevious className="static transform-none h-12 w-12 rounded-full border-foreground/20 bg-background hover:bg-foreground hover:text-background flex items-center justify-center transition-colors" />
            <CarouselNext className="static transform-none h-12 w-12 rounded-full border-foreground/20 bg-background hover:bg-foreground hover:text-background flex items-center justify-center transition-colors" />
          </div>
        </Carousel>

      </div>
    </section>
  );
}

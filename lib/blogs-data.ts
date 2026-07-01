export interface Blog {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  excerpt: string;
  content: string; // HTML string
}

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "future-of-web-development-2026",
    title: "The Future of Web Development in 2026",
    category: "Engineering",
    date: "Jun 24, 2026",
    readingTime: "5 min read",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      role: "Lead Frontend Engineer",
    },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Exploring the latest trends in frontend frameworks and how AI is revolutionizing the way we write code.",
    content: `
      <p>As we navigate through 2026, the landscape of web development has undergone a tectonic shift. The days of writing repetitive boilerplate are largely behind us, replaced by AI-assisted workflows that prioritize architecture and user experience over syntax memorization.</p>
      
      <h2>The Shift in Frontend Paradigms</h2>
      <p>Modern frontend frameworks have evolved. We are now seeing hybrid rendering models become the absolute standard, blurring the lines between client and server more than ever before.</p>
      
      <blockquote>
        "The best code is the code you don't have to write. AI is finally making that a reality for web developers."
      </blockquote>
      
      <h3>Key Trends Defining 2026</h3>
      <ul>
        <li><strong>AI-Driven Code Generation:</strong> Developers now act more as orchestrators of code rather than manual typists.</li>
        <li><strong>Edge Computing Default:</strong> Global state and computing at the edge is no longer a luxury, but the baseline for any serious application.</li>
        <li><strong>Wasm Dominance:</strong> WebAssembly has finally matured, allowing heavy computational tasks (like video rendering and 3D modeling) to run flawlessly in the browser.</li>
      </ul>

      <p>As we look to the future, the developers who will thrive are those who can zoom out, understand system architecture, and leverage these intelligent tools to build faster, more resilient products.</p>
    `,
  },
  {
    id: 2,
    slug: "mastering-nextjs-app-router",
    title: "Mastering Next.js App Router",
    category: "React",
    date: "May 12, 2026",
    readingTime: "7 min read",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      role: "React Ecosystem Specialist",
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    excerpt: "A deep dive into advanced server components, caching strategies, and performance optimizations.",
    content: `
      <p>When Next.js introduced the App Router, it fundamentally changed how we reason about React applications. By shifting the default to React Server Components (RSC), it forced a paradigm shift from client-side heavy applications to a more balanced, server-first approach.</p>
      
      <h2>The Magic of Caching</h2>
      <p>One of the most complex, yet powerful features of the App Router is its aggressive caching mechanism. Understanding the Request Memoization, Data Cache, Full Route Cache, and Router Cache is crucial for building high-performance applications.</p>
      
      <p>To truly master Next.js today, you need to know exactly when to opt-out of caching. Using <code>unstable_noStore</code> or dynamic functions correctly can be the difference between a blazing fast app and a stale data nightmare.</p>

      <h2>Server Actions: The End of API Routes?</h2>
      <p>Server Actions have completely streamlined data mutations. By allowing us to call server-side code directly from client components without manually setting up API endpoints, we've removed a massive layer of boilerplate.</p>
      
      <ul>
        <li>No more manual fetch calls.</li>
        <li>No more managing loading states manually (thanks to <code>useTransition</code> and <code>useFormStatus</code>).</li>
        <li>Built-in progressive enhancement.</li>
      </ul>
    `,
  },
  {
    id: 3,
    slug: "building-scalable-saas-architectures",
    title: "Building Scalable SaaS Architectures",
    category: "Architecture",
    date: "Apr 08, 2026",
    readingTime: "10 min read",
    author: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      role: "Cloud Architect",
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Learn how to design robust, multi-tenant systems that scale seamlessly with your growing user base.",
    content: `
      <p>Designing a SaaS application requires thinking about multi-tenancy from day one. Whether you choose a shared database with row-level security (RLS) or an isolated database-per-tenant approach, your architectural decisions early on will dictate your ability to scale.</p>
      
      <h2>Database Strategies</h2>
      <p>For most modern SaaS platforms, a pooled database approach using something like PostgreSQL with strong RLS (Row-Level Security) is the sweet spot between cost and isolation.</p>
      
      <blockquote>
        "Scale is not just about handling more users; it's about handling more complexity without proportionally increasing your operational overhead."
      </blockquote>
      
      <h2>Microservices vs. Monoliths in 2026</h2>
      <p>The debate continues, but the consensus has largely settled on the "Modular Monolith". Start with a single, well-structured codebase. Separate concerns logically, not physically. Only extract services when scaling demands it (usually for team scaling or specific performance bottlenecks).</p>
      
      <p>Serverless computing and edge functions have made deploying these modular monoliths incredibly efficient, allowing for infinite scaling without the massive DevOps overhead that microservices traditionally required.</p>
    `,
  },
  {
    id: 4,
    slug: "ui-ux-design-trends",
    title: "UI/UX Design Trends to Watch",
    category: "Design",
    date: "Mar 19, 2026",
    readingTime: "4 min read",
    author: {
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      role: "Principal Product Designer",
    },
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    excerpt: "Discover the aesthetic shifts driving modern digital products, from glassmorphism to neubrutalism.",
    content: `
      <p>Design trends are cyclical, but they always iterate. In 2026, we are moving away from the stark, purely functional minimalism of the early 2020s and embracing "Expressive Functionalism".</p>
      
      <h2>Micro-Interactions are Macro</h2>
      <p>Motion design is no longer an afterthought—it is a core component of the UX. Subtle, physics-based animations that guide the user's eye and provide immediate feedback are now expected in any premium digital product.</p>
      
      <h2>The Dark Mode Evolution</h2>
      <p>Dark mode has evolved from simply inverting colors to crafting entirely separate, deeply immersive environments. We're seeing the use of "OLED Blacks" combined with vibrant, glowing neon accents and glassmorphic overlays to create depth and hierarchy.</p>
      
      <ul>
        <li><strong>Bento Box Layouts:</strong> Clean, compartmentalized grids that make scanning dense information effortless.</li>
        <li><strong>Immersive 3D Elements:</strong> Lightweight WebGL experiences that add delight without sacrificing performance.</li>
        <li><strong>Hyper-legible Typography:</strong> High-contrast, variable fonts that adapt perfectly to the user's viewport and accessibility settings.</li>
      </ul>
    `,
  }
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

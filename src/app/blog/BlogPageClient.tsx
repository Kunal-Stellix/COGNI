"use client";

import React, { useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const CATEGORIES = [
  "All",
  "Smart Security",
  "Climate Control",
  "Lighting",
  "Energy Saving",
  "AI & Automation",
  "Getting Started",
];

const POSTS = [
  {
    id: 1,
    slug: "future-of-smart-home-security",
    category: "Smart Security",
    readTime: "6 min read",
    date: "2026-03-28",
    dateLabel: "Mar 28, 2026",
    title: "The Future of Smart Home Security: AI That Actually Thinks For You",
    excerpt:
      "AI-powered cameras can now distinguish between a mail carrier and a burglar, and proactively lock doors before you even notice a threat. Here's how Cogni's intelligence layer redefines home safety.",
    author: "Arjun Mehta",
    authorRole: "Head of AI Security",
  },
  {
    id: 2,
    slug: "optimizing-home-heating-with-smart-climate",
    category: "Climate Control",
    readTime: "5 min read",
    date: "2026-03-22",
    dateLabel: "Mar 22, 2026",
    title: "Cut Your Heating Bills by 30%: The Smart Climate Playbook",
    excerpt:
      "Intelligent scheduling, geo-fencing, and occupancy prediction can slash your HVAC costs dramatically. We break down the exact settings that make the biggest impact.",
    author: "Priya Sharma",
    authorRole: "Energy Systems Lead",
  },
  {
    id: 3,
    slug: "circadian-lighting-science",
    category: "Lighting",
    readTime: "7 min read",
    date: "2026-03-18",
    dateLabel: "Mar 18, 2026",
    title: "Circadian Lighting: Why the Right Light at the Right Time Changes Everything",
    excerpt:
      "Sunrise-simulating wake-ups. Focus-boosting cool whites at noon. Wind-down amber tones at dusk. Cogni's adaptive lighting follows your biology, automatically.",
    author: "Tara Venkatesh",
    authorRole: "Lighting Experience Designer",
  },
  {
    id: 4,
    slug: "cogni-energy-dashboard-deep-dive",
    category: "Energy Saving",
    readTime: "4 min read",
    date: "2026-03-14",
    dateLabel: "Mar 14, 2026",
    title: "Inside Cogni's Energy Dashboard: Real-Time Data, Real Savings",
    excerpt:
      "Track every watt. Identify energy hogs. Set smart goals. The Cogni Energy Dashboard gives you a command center for efficiency that is as intuitive as it is powerful.",
    author: "Rohan Gupta",
    authorRole: "Product Manager – Energy",
  },
  {
    id: 5,
    slug: "ai-routines-morning-automation",
    category: "AI & Automation",
    readTime: "8 min read",
    date: "2026-03-10",
    dateLabel: "Mar 10, 2026",
    title: "Build a Morning Routine So Good, You'll Actually Look Forward to Mondays",
    excerpt:
      "Coffee brewing, blinds rising, shower pre-warming — all triggered by a single 'Good Morning'. We walk you through building a persona-based AI routine with zero friction.",
    author: "Simran Kaur",
    authorRole: "Automation Product Lead",
  },
  {
    id: 6,
    slug: "getting-started-cogni-hub",
    category: "Getting Started",
    readTime: "3 min read",
    date: "2026-03-05",
    dateLabel: "Mar 5, 2026",
    title: "Setting Up Your Cogni Hub in Under 10 Minutes: A Beginner's Guide",
    excerpt:
      "Unbox, connect, and automate. This step-by-step guide takes you from zero to a fully working smart home in one session. No tech degree required.",
    author: "Varun Pillai",
    authorRole: "Customer Success Engineer",
  },
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = POSTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <main className="bg-slate-50 min-h-screen font-sans text-slate-900 border-x border-slate-200 max-w-[1600px] mx-auto">
      {/* ── HEADER ── */}
      <header className="bg-white px-6 lg:px-24 pt-32 pb-20 border-b border-slate-200">
        <div className="max-w-4xl">
          <span className="text-[#FF8A4C] font-bold tracking-[0.3em] text-xs uppercase mb-6 block">
            Cogni Insights
          </span>
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 uppercase mb-8">
            THINK SMARTER.<br />
            <span className="text-slate-400">LIVE BETTER.</span>
          </h1>
          <p className="text-slate-600 text-xl max-w-2xl leading-relaxed">
            Expert guides, architectural deep-dives, and the latest breakthroughs in home automation — straight from the engineers and visionaries at Cogni.
          </p>
        </div>
      </header>

      {/* ── CATEGORY NAVIGATION ── */}
      <nav aria-label="Blog categories" className="bg-white px-6 lg:px-24 py-8 border-b border-slate-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-widest transition-all
                ${activeCategory === cat 
                  ? "bg-[#FF8A4C] text-white border-[#FF8A4C] shadow-sm" 
                  : "bg-transparent text-slate-500 border-slate-300 hover:text-slate-900 hover:border-slate-400"
                }`}
              aria-current={activeCategory === cat ? "page" : undefined}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* ── POSTS LISTING ── */}
      <section className="px-6 lg:px-24 py-12" aria-label="Blog Posts">
        <div className="flex flex-col">
          {filtered.length > 0 ? (
            filtered.map((post) => (
              <article 
                key={post.id} 
                className="py-16 border-b border-slate-200 last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 group"
              >
                {/* Meta Information (Left Column) */}
                <div className="md:col-span-3 lg:col-span-2 flex flex-col justify-start">
                  <time dateTime={post.date} className="text-sm font-mono text-slate-500 mb-2 block">
                    {post.dateLabel}
                  </time>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#FF8A4C] font-black">
                    {post.category}
                  </span>
                  <div className="mt-8 hidden md:block">
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">{post.author}</p>
                    <p className="text-xs text-slate-500 mt-1">{post.authorRole}</p>
                  </div>
                </div>

                {/* Content (Right Column) */}
                <div className="md:col-span-9 lg:col-span-8">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tighter leading-tight mb-6 text-slate-900 group-hover:text-[#FF8A4C] transition-colors focus:outline-none focus:text-[#FF8A4C]">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-[#FF8A4C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF8A4C] focus:ring-offset-2 focus:ring-offset-white rounded-sm"
                      aria-label={`Read full article: ${post.title}`}
                    >
                      Read Article 
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500 font-mono text-xs uppercase tracking-wider">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Mobile Author Display */}
                  <div className="mt-8 md:hidden flex items-center justify-between border-t border-slate-200 pt-6">
                    <div>
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">{post.author}</p>
                      <p className="text-[10px] text-slate-500 mt-1 uppercase">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="py-32 text-center text-slate-500 font-mono uppercase tracking-widest">
              No results found for exactly this category.
            </div>
          )}
        </div>
      </section>

      {/* ── CLEAN NEWSLETTER FOOTER ── */}
      <aside className="px-6 lg:px-24 py-24 bg-white border-t border-slate-200" aria-label="Newsletter Subscribe">
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-slate-900">
            Stay in the loop.
          </h2>
          <p className="text-slate-600 text-lg mb-10">
            Get the freshest insights and architectural automation news delivered. No spam, just signal.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" aria-label="Newsletter sign up">
            <input
              type="email"
              placeholder="YOUR@EMAIL.COM"
              className="px-6 py-4 bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 uppercase font-mono text-sm tracking-wider focus:outline-none focus:border-[#FF8A4C] focus:bg-white flex-1 transition-all"
              required
              aria-label="Email address"
            />
            <button 
              type="submit" 
              className="px-10 py-4 bg-[#FF8A4C] text-white font-black uppercase tracking-widest text-sm hover:bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </aside>
    </main>
  );
}

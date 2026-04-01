"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CATEGORIES } from '@/data/categories';

/* ─────────────────────────────────────────
   MOCK PRODUCT DATA GENERATOR
───────────────────────────────────────── */
const generateMockProducts = (categoryId: string) => {
  return Array.from({ length: 3 }).map((_, i) => ({
    id: `${categoryId}-prod-${i + 1}`,
    name: `Cogni ${categoryId.split('-')[0].toUpperCase()} 0${i + 1}`,
    price: `$${(Math.random() * 200 + 49).toFixed(0)}`,
    description: "Architectural grade hardware. Zero-latency processing.",
  }));
};

/* ─────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────── */
export default function ProductsClient() {
  const [activeSection, setActiveSection] = useState<string>(CATEGORIES[0]?.id || "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-[#f7f9fb] min-h-screen font-sans text-slate-900 border-x border-slate-200/60 max-w-[1600px] mx-auto flex flex-col pt-24">
      
      {/* ── HEADER HERO ── */}
      <header className="bg-white px-6 lg:px-24 py-20 lg:py-28 border-b border-slate-200 flex flex-col items-start justify-center">
        <span className="text-[#FF8A4C] font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block border-l-2 border-[#FF8A4C] pl-4">
          The Ecosystem
        </span>
        <h1 className="text-6xl lg:text-7xl font-sans font-black tracking-tighter leading-[0.95] text-slate-900 uppercase max-w-4xl">
          Everything <span className="text-slate-400">Connected.</span><br/>All At Once.
        </h1>
      </header>

      {/* ── TWO COLUMN ARCHITECTURE ── */}
      <div className="flex flex-col lg:flex-row w-full relative">
        
        {/* LEFT COMPONENT: Sticky Category Nav (Clean & Sharp) */}
        <aside className="hidden lg:block w-1/4 xl:w-1/5 min-w-[300px] border-r border-slate-200 bg-white">
          <nav className="sticky top-[100px] max-h-[calc(100vh-100px)] overflow-y-auto py-12 px-10 flex flex-col gap-1 scrollbar-hide">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 pb-4 border-b border-slate-100">
              Categories
            </h3>
            {CATEGORIES.map((cat) => {
              const displayName = cat.name || cat.label || "Category";
              const isActive = activeSection === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`text-left py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative group
                    ${isActive ? "text-[#FF8A4C]" : "text-slate-500 hover:text-slate-900"}
                  `}
                >
                  <span className={`absolute left-[-20px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FF8A4C] transition-all duration-300 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:scale-50 group-hover:opacity-30 group-hover:bg-slate-900"
                  }`} />
                  {displayName}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* MOBILE CATEGORY SCROLL */}
        <nav className="lg:hidden sticky top-[72px] z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-4 overflow-x-auto whitespace-nowrap scrollbar-hide w-full shadow-sm">
          <div className="flex gap-4">
            {CATEGORIES.map((cat) => {
              const displayName = cat.name || cat.label || "Category";
              return (
                <button
                  key={`mobile-${cat.id}`}
                  onClick={() => scrollToSection(cat.id)}
                  className={`px-5 py-2 border text-[10px] font-black uppercase tracking-widest transition-colors rounded-none ${
                    activeSection === cat.id
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-600 border-slate-200"
                  }`}
                >
                  {displayName}
                </button>
              );
            })}
          </div>
        </nav>

        {/* RIGHT COMPONENT: Scrolling Content Area */}
        <div className="w-full lg:w-3/4 xl:w-4/5 bg-[#f7f9fb] px-6 lg:px-16 py-16 lg:py-24 flex flex-col gap-24 lg:gap-32">
          {CATEGORIES.map((cat) => {
            const displayName = cat.name || cat.label || "Category";
            const mockProducts = generateMockProducts(cat.id);

            return (
              <section 
                key={cat.id} 
                id={cat.id}
                ref={(el) => { sectionRefs.current[cat.id] = el }}
                className="scroll-mt-[100px] flex flex-col gap-10"
              >
                {/* Clean, Sharp Category Hero Panel (No extreme rounded corners) */}
                <div className="w-full h-[350px] xl:h-[450px] relative overflow-hidden bg-slate-900 group shadow-md border border-slate-200/50">
                  {cat.image && (
                    <Image 
                      src={`/${cat.image}`} 
                      alt={displayName}
                      fill
                      priority
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                      sizes="(min-width: 1024px) 75vw, 100vw"
                    />
                  )}
                  {/* Subtle architectural gradient for sharp text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                    <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-2">
                      {displayName}
                    </h2>
                    <p className="text-sm tracking-wide text-slate-300 max-w-xl font-medium uppercase opacity-80">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Sharp Architectural Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {mockProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="bg-white border text-left border-slate-200 p-6 flex flex-col group hover:border-slate-800 transition-colors duration-300 shadow-sm"
                    >
                      <div className="h-48 w-full bg-slate-50 mb-6 flex items-center justify-center relative overflow-hidden border border-slate-100/50">
                        {/* Clean Geometric Tech Graphic (Sharp vs Bubbly) */}
                        <div className="w-16 h-16 border-4 border-slate-200 group-hover:border-[#FF8A4C] transition-all duration-500 ease-out shadow-inner flex items-center justify-center">
                          <div className="w-2 h-2 bg-slate-300 group-hover:bg-[#FF8A4C] transition-colors duration-500"></div>
                        </div>
                      </div>
                      
                      <div className="flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-black tracking-tight text-slate-900 transition-colors">{product.name}</h4>
                        </div>
                        <p className="font-mono text-[10px] uppercase font-bold text-slate-400 mb-6 tracking-widest">{product.price}</p>
                        
                        <p className="text-xs text-slate-500 mb-8 leading-relaxed flex-grow">{product.description}</p>
                        
                        <button className="w-full py-4 bg-slate-900 hover:bg-[#FF8A4C] text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#FF8A4C] focus:ring-offset-2">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </main>
  );
}

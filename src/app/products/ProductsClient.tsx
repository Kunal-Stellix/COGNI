"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CATEGORIES } from '@/data/categories';

/* ─────────────────────────────────────────
   MOCK PRODUCT DATA GENERATOR
───────────────────────────────────────── */
const generateMockProducts = (categoryId: string) => {
  return Array.from({ length: 6 }).map((_, i) => ({
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
  const [activeCategoryId, setActiveCategoryId] = useState<string>(CATEGORIES[0]?.id || "");
  const [isAnimating, setIsAnimating] = useState(false);

  // Smooth fade transition when clicking a new category
  const handleCategoryChange = (id: string) => {
    if (id === activeCategoryId) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategoryId(id);
      setIsAnimating(false);
      const gridElement = document.getElementById("product-grid");
      if (gridElement) {
        // Adjust scroll position to account for sticky navbar
        const targetY = gridElement.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }
    }, 300); // Wait for fade out
  };

  const activeCategory = CATEGORIES.find(c => c.id === activeCategoryId) || CATEGORIES[0];
  const activeProducts = generateMockProducts(activeCategory.id);
  const activeDisplayName = activeCategory.name || (activeCategory as any).label || "Category";

  return (
    <main className="bg-[#f7f9fb] min-h-screen font-sans text-slate-900 border-x border-slate-200/60 max-w-[1600px] mx-auto flex flex-col">
      
      {/* ── HEADER HERO ── */}
      <header className="bg-white px-6 lg:px-24 py-16 lg:py-24 border-b border-slate-200 flex flex-col items-start justify-center">
        <span className="text-[#FF8A4C] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block border-l-2 border-[#FF8A4C] pl-4">
          The Ecosystem
        </span>
        <h1 className="text-5xl lg:text-7xl font-sans font-black tracking-tighter leading-[0.95] text-slate-900 uppercase max-w-4xl">
          Everything <span className="text-slate-400">Connected.</span><br/>ALL AT ONCE.
        </h1>
      </header>

      {/* ── TWO COLUMN ARCHITECTURE ── */}
      <div id="product-grid" className="flex flex-col lg:flex-row w-full relative">
        
        {/* LEFT COMPONENT: Sticky Category Nav (Clean & Sharp) */}
        <aside className="hidden lg:block w-1/4 xl:w-1/5 min-w-[300px] border-r border-slate-200 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
          <nav className="sticky top-[100px] max-h-[calc(100vh-100px)] overflow-y-auto py-12 px-10 flex flex-col gap-1 scrollbar-hide">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 pb-4 border-b border-slate-100">
              Categories
            </h3>
            {CATEGORIES.map((cat) => {
              const displayName = cat.name || (cat as any).label || "Category";
              const isActive = activeCategoryId === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
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
              const displayName = cat.name || (cat as any).label || "Category";
              const isActive = activeCategoryId === cat.id;
              
              return (
                <button
                  key={`mobile-${cat.id}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-5 py-2 border text-[10px] font-black uppercase tracking-widest transition-colors duration-300 rounded-none ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-white text-slate-600 border-slate-200"
                  }`}
                >
                  {displayName}
                </button>
              );
            })}
          </div>
        </nav>

        {/* RIGHT COMPONENT: Focused Content Area */}
        <div className="w-full lg:w-3/4 xl:w-4/5 bg-[#f7f9fb] px-6 lg:px-16 py-12 lg:py-16 min-h-[800px]">
          
          <div className={`transition-all duration-300 ease-in-out ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            
            {/* Clean, Sharp Category Hero Panel */}
            <div className="w-full h-[300px] xl:h-[400px] relative overflow-hidden bg-slate-900 group shadow-lg border border-slate-200/50 mb-12 lg:mb-16">
              {(activeCategory as any).image && (
                <Image 
                  src={`/${(activeCategory as any).image}`} 
                  alt={activeDisplayName}
                  fill
                  priority
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  sizes="(min-width: 1024px) 75vw, 100vw"
                />
              )}
              {/* Subtle architectural gradient for sharp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                <span className="text-[#FF8A4C] font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
                  Category Explorer
                </span>
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-3">
                  {activeDisplayName}
                </h2>
                <p className="text-sm tracking-wide text-slate-300 max-w-xl font-medium uppercase opacity-90 leading-relaxed">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            {/* Sharp Architectural Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {activeProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white border text-left border-slate-200 p-6 flex flex-col group hover:border-[#FF8A4C]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="h-48 w-full bg-[#f8fafc] mb-6 flex items-center justify-center relative overflow-hidden border border-slate-100 group-hover:bg-slate-50 transition-colors duration-500">
                    {/* Clean Geometric Tech Graphic */}
                    <div className="w-16 h-16 border-4 border-slate-200 group-hover:border-[#FF8A4C] transition-all duration-500 ease-out shadow-inner flex items-center justify-center">
                      <div className="w-2 h-2 bg-slate-300 group-hover:bg-[#FF8A4C] transition-colors duration-500 delay-100"></div>
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-black tracking-tight text-slate-900 group-hover:text-[#FF8A4C] transition-colors duration-300">
                        {product.name}
                      </h4>
                    </div>
                    <p className="font-mono text-[11px] uppercase font-bold text-slate-400 mb-6 tracking-widest bg-slate-50 self-start px-2 py-1 rounded-sm">
                      {product.price}
                    </p>
                    
                    <p className="text-xs text-slate-500 mb-8 leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    
                    <button className="w-full py-4 bg-slate-900 hover:bg-[#FF8A4C] text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#FF8A4C] focus:ring-offset-2 overflow-hidden relative">
                      <span className="relative z-10">View Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

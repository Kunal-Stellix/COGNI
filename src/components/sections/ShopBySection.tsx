"use client";

import React from 'react';
import Image from 'next/image';
import { CATEGORIES } from '@/data/categories';
import { useCategoryScroll } from '@/hooks/useCategoryScroll';

export default function ShopBySection() {
  const { scrollRef, scroll } = useCategoryScroll();

  return (
    <section className="bg-[#FCFCFD] py-16 lg:py-24 overflow-hidden">
      <div className="layout-container mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        
        {/* Header Area */}
        <div className="mb-12 flex items-end justify-between sm:mb-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#FF8A4C]"></span>
              <span className="text-[#FF8A4C] uppercase tracking-[0.2em] text-xs font-bold">Collections</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Shop by Category
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden space-x-3 md:flex">
            <NavButton direction="left" onClick={() => scroll('left')} />
            <NavButton direction="right" onClick={() => scroll('right')} />
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8 sm:gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NavButton({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-md active:scale-95"
      aria-label={`Scroll ${direction}`}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {direction === 'left' ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

function CategoryCard({ category }: { category: any }) {
  return (
    <a
      href={`/category/${category.id}`}
      className="group relative flex aspect-[4/5] min-w-[85vw] snap-start flex-col justify-end overflow-hidden rounded-[2.5rem] bg-slate-100 transition-all duration-300 sm:min-w-[calc(50%-0.75rem)] md:min-w-[calc(33.333%-1rem)] lg:min-w-[calc(25%-1.5rem)]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={`/${category.image}`}
          alt={category.id}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 33vw, 25vw"
          className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl font-black text-white capitalize tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
            {category.name || category.id}
          </h3>
          <div className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] transform transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:text-[#FF8A4C]">
            <svg className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

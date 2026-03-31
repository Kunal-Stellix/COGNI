import React from 'react';
import Image from 'next/image';
import { aboutContent } from '../AboutSection';

export default function AboutUsSection() {
  const { badge, titleMain, titleSub, image, features, ctaText } = aboutContent;

  return (
    <section className="min-h-dvh py-24 lg:py-32 bg-gradient-to-br from-white via-white to-orange-100/40 overflow-hidden relative">
      {/* Optional: Add a subtle ambient glow blob for a more premium look */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-200/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="layout-container max-w-7xl px-6 lg:px-12 xl:px-16 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 lg:mb-32 max-w-4xl mx-auto">
          <span className="inline-block rounded-full bg-gradient-to-r from-orange-400 via-[#FF8A4C] to-amber-500 px-8 py-3 text-base font-bold text-white uppercase tracking-wider shadow-xl shadow-orange-500/20 mb-8 backdrop-blur-sm">
            {badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent leading-tight">
            {titleMain}<br className="hidden lg:inline" />
            <span className="bg-gradient-to-r from-[#FF8A4C] to-amber-500 bg-clip-text text-transparent italic ml-2">{titleSub}</span>
          </h2>
        </div>

        {/* ORBITAL LAYOUT */}
        <div className="relative max-w-[52rem] mx-auto -mt-12 lg:-mt-20">
          
          {/* CENTRAL IMAGE */}
          <div className="relative mx-auto w-72 h-72 lg:w-[22rem] lg:h-[22rem] xl:w-96 xl:h-96 rounded-full shadow-2xl ring-4 ring-white z-20 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/30 via-[#FF8A4C]/30 to-amber-500/30 -inset-2 blur-xl animate-spin-slow opacity-70" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-[#FF8A4C] to-amber-500 p-[3px]" />
            <div className="absolute inset-0 bg-white rounded-full shadow-2xl" />
            <Image
              src={image}
              alt="Cogni innovation"
              fill
              className="object-cover rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
            />
          </div>

          {/* SIDE CARDS (Privacy & Control) */}
          <AboutCard 
            data={features[0]} 
            className="absolute left-0 -ml-8 lg:-ml-12 xl:-ml-16 top-1/2 -translate-y-1/2 -rotate-6 hover:-rotate-3" 
            align="left"
          />
          <AboutCard 
            data={features[1]} 
            className="absolute right-0 -mr-8 lg:-mr-12 xl:-mr-16 top-1/2 -translate-y-1/2 rotate-6 hover:rotate-3" 
            align="right"
          />

          {/* BOTTOM CARD (Reliability) */}
          <div className="mt-32 lg:mt-40 text-center">
            <div className="inline-block bg-slate-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-slate-800 max-w-2xl mx-auto hover:scale-105 transition-all duration-500 -rotate-1 hover:rotate-0 group">
              <div className={`w-16 h-16 ${features[2].gradient} rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-orange-500/30 mx-auto group-hover:rotate-12 transition-transform`}>
                 <Icon type={features[2].icon} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-6">{features[2].title}</h3>
              <p className="text-lg text-slate-400 leading-relaxed px-8">{features[2].description}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 lg:mt-32">
          <button className="group relative rounded-2xl bg-slate-900 px-16 py-6 text-xl font-bold text-white shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden active:scale-95">
            <span className="relative z-10">{ctaText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A4C] to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* Helper Components */
function AboutCard({ data, className, align }) {
  return (
    <div className={`w-64 lg:w-80 max-w-xs ${align === 'left' ? 'text-left' : 'text-right'} z-10 ${className}`}>
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white ring-1 ring-orange-100/50 hover:scale-105 transition-all duration-500">
        <div className={`w-14 h-14 bg-gradient-to-br ${data.gradient} rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/20 mx-auto`}>
          <Icon type={data.icon} />
        </div>
        <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3">{data.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{data.description}</p>
      </div>
    </div>
  );
}

function Icon({ type }) {
  if (type === 'check') return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  if (type === 'bolt') return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
  return (
    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}
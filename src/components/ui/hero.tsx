import React from 'react';
import { heroContent } from '../HeroSection';

export default function HeroSection() {
  const { videoSrc, headline, brandName, subheadline, buttons } = heroContent;

  return (
    <section className="relative flex h-[100vh] min-h-[650px] w-full overflow-hidden">
      
      {/* 1. Background Video */}
      <video
        className="absolute inset-0 h-185 w-full object-cover brightness-70"
        src={videoSrc}
        autoPlay
        loop
        priority="true"
        muted
        playsInline
        preload="metadata"
      />

      {/* 2. Left Side Content */}
      <div className="layout-container relative z-20 flex w-full max-w-7xl items-center px-8 py-16 lg:px-12 xl:px-16">
        <div className="w-full max-w-xl space-y-6 lg:max-w-lg lg:space-y-8">
          
          {/* Headline */}
          <h1 className="text-balance font-black leading-[1.08] tracking-tight text-white drop-shadow-2xl">
            <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              {headline}
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl">
              {brandName}
            </span>
          </h1>
          
          {/* Body Text */}
          <p className="max-w-md text-md leading-7 text-white/95 drop-shadow-md lg:text-base xl:text-lg">
            {subheadline}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button className="w-full rounded-full bg-white/95 px-8 py-3.5 text-sm font-bold text-slate-900 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-[1.02] sm:w-auto lg:px-10 lg:py-4 lg:text-base">
              {buttons.primary.text}
            </button>
            
            <button className="w-full rounded-full border border-white/40 bg-black/10 px-8 py-3.5 text-sm font-bold text-white/95 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white hover:shadow-xl sm:w-auto lg:px-10 lg:py-4 lg:text-base">
              {buttons.secondary.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
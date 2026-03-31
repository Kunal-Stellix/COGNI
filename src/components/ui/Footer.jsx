"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerData } from '../FooterSection';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const brandName = "Cogni";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 relative overflow-hidden flex flex-col">
      
      {/* 1. TOP CTA BAR */}
      <div className="bg-slate-900 border-b border-slate-800 relative z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to upgrade your space?</h3>
            <p className="text-slate-400">Get a free consultation with our smart home engineers.</p>
          </div>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-[#FF8A4C] hover:bg-[#FF7A33] text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 whitespace-nowrap active:scale-95"
          >
            Get a Quote →
          </Link>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 pt-16 pb-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            
            {/* SEPARATE LOGO CONTAINER */}
            {/* We use a fixed height container so the logo can be large without pushing text */}
            <div className="relative w-full h-16 mb-4"> 
              <Link href="/" className="absolute center top-1/2 -translate-y-1/2 block">
                <div className="relative h-20 w-48 md:h-34 md:w-56 transition-transform hover:scale-105">
                  <Image 
                    src="/images/cogni-logo.png" 
                    alt="Cogni" 
                    fill
                    className="object-contain object-center"
                    priority
                    sizes="300px"
                  />
                </div>
              </Link>
            </div>

            <p className="text-slate-500 leading-relaxed max-w-xs text-sm font-medium mb-8">
              {footerData?.brandDescription || "Transforming living spaces with intelligent automation and seamless connectivity."}
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex items-center gap-4">
               <SocialIcon type="linkedin" />
               <SocialIcon type="instagram" />
               <SocialIcon type="twitter" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <FooterColumn title="Solutions" links={footerData?.solutions} />
            <FooterColumn title="Company" links={footerData?.company} />
            <div className="space-y-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Contact</h4>
              <ul className="space-y-4">
                <li className="text-sm text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                  {footerData?.contact?.address}
                </li>
                <li><a href={`mailto:${footerData?.contact?.email}`} className="text-sm text-slate-900 font-bold hover:text-[#FF8A4C] transition-colors">{footerData?.contact?.email}</a></li>
                <li><a href={`tel:${footerData?.contact?.phone?.replace(/\s/g, '')}`} className="text-sm text-slate-900 font-bold hover:text-[#FF8A4C] transition-colors">{footerData?.contact?.phone}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 bg-white relative z-20 px-6 lg:px-12">
        <p className="text-sm text-slate-500 font-medium">
          © {currentYear} Cogni Smart Solutions. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors">Terms of Service</Link>
        </div>
      </div>

      {/* 4. MASSIVE BACKGROUND TEXT */}
      <div
        className="bg-gradient-to-b from-slate-200 via-slate-100 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-8 font-black tracking-tighter pointer-events-none select-none text-center px-4 z-0 w-full"
        style={{ fontSize: 'clamp(4rem, 18vw, 15rem)' }}
      >
        {brandName.toUpperCase()}
      </div>

      {/* 5. SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="group absolute hover:border-slate-300 duration-500 shadow-[0_0px_30px_rgba(0,0,0,0.05)] bottom-16 md:bottom-20 backdrop-blur-md rounded-[2rem] bg-white/60 left-1/2 border border-slate-200 flex items-center justify-center p-2.5 -translate-x-1/2 z-30 transition-all hover:-translate-y-2"
      >
        <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[1.5rem] flex items-center justify-center shadow-lg transition-all duration-500 group-hover:from-[#FF8A4C] group-hover:to-[#FF6B1A]">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 group-hover:scale-110 transition-transform">
            <Image
              src="/images/cogni-logo.png"
              alt="Top"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
        </div>
      </button>

      <div className="bg-gradient-to-t from-white via-white/80 to-transparent absolute bottom-0 w-full h-32 z-10 pointer-events-none"></div>
    </footer>
  );
}

/* Helper Components */
function FooterColumn({ title, links }) {
  if (!links) return null;
  return (
    <div className="space-y-6">
      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-sm text-slate-500 hover:text-[#FF8A4C] font-medium transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ type }) {
   const icons = {
    linkedin: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    instagram: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    twitter: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    )
  };

  return (
    <a href="#" className="group w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FF8A4C] hover:text-white transition-all border border-slate-200">
      <span className="sr-only">{type}</span>
      {icons[type] || null}
    </a>
  );
}
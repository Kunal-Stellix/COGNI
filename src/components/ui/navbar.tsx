"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useNavbarLogic } from '../NavbarSection'; 

export default function Navbar() {
  const { 
    isScrolled, 
    isVisible, 
    mobileMenuOpen, 
    navLinks, 
    toggleMobileMenu 
  } = useNavbarLogic();

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[2147483647] transition-all duration-500 ease-in-out bg-transparent ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled ? 'py-2' : 'py-6'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 w-full transition-all duration-500">
        <nav className="flex items-center justify-between w-full">
          
          {/* LEFT: Logo Area */}
          <div className="flex-1 flex justify-start">
            <Link 
              href="/" 
              className="flex items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
              aria-label="Cogni Home"
            >
              <div className="relative h-25 w-32 md:h-25 md:w-36 transition-all duration-300">
                <Image 
                  src="/images/cogni-logo.png" 
                  alt="Cogni Logo" 
                  fill
                  className="object-contain object-left drop-shadow-md" 
                  priority
                  sizes="(max-width: 768px) 128px, 256px"
                />
              </div>
            </Link>
          </div>

          {/* CENTER: Navigation Links (Desktop) */}
          <div className="hidden lg:flex flex-2 justify-center">
            {/* The glassy central pill that transitions smoothly on scroll */}
            <div className={`flex items-center gap-10 px-20 py-4 md:py-5 rounded-full transition-all duration-500 border ${
              isScrolled 
                ? 'bg-slate-50/90 backdrop-blur-xl shadow-xl border-slate-300/50 scale-95' 
                : 'bg-white/20 backdrop-blur-md shadow-lg border-white/20 scale-100'
            }`}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-bold tracking-wide transition-colors hover:text-[#FF8A4C] ${
                    isScrolled ? 'text-slate-900' : 'text-slate-900 drop-shadow-sm'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: CTA (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-6">
            <Link 
              href="/contact" 
              className={`px-6 py-3 bg-[#FF8A4C] hover:bg-[#FF7A33] text-white text-sm font-bold rounded-full transition-all hover:scale-105 ${
                isScrolled ? 'shadow-md' : 'shadow-xl'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE: Hamburger Button */}
          <div className="flex lg:hidden flex-1 justify-end">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-lg transition-all duration-300 border ${
                isScrolled || mobileMenuOpen
                  ? 'bg-slate-50/90 backdrop-blur-xl shadow-md border-slate-300/50 text-slate-900'
                  : 'bg-white/50 backdrop-blur-sm text-slate-900 shadow-sm border-white/20'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE: Dropdown Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-slate-200 transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-lg font-bold text-slate-900 hover:text-[#FF8A4C] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-slate-200 my-2"></div>
          <Link href="/contact" className="w-full text-center px-6 py-4 bg-[#FF8A4C] text-white text-lg font-bold rounded-xl shadow-md hover:bg-[#FF7A33] transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
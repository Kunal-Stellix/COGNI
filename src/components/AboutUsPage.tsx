"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import "./about-us.css";

/* ─────────────────────────────────────────────
   TEAM DATA
   ───────────────────────────────────────────── */
const teamMembers = [
  {
    name: "ABC",
    role: "Co-Founder",
    quote: "Morning Solitude is my favorite scene.",
    image: "/images/team1.jpg",
  },
  {
    name: "DEF",
    role: "Lead Engineer",
    quote: "I love the Movie Night ambiance.",
    image: "/images/team2.jpg",
  },
  {
    name: "GHI",
    role: "UX Architect",
    quote: "Welcome Home brings a smile to my face.",
    image: "/images/team3.jpg",
  },
];

const blueprintItems = [
  {
    time: "7:00 AM",
    label: "Morning",
    desc: "Blinds rise, coffee brews, lights mimic the dawn.",
    icon: "☀️",
  },
  {
    time: "12:00 PM",
    label: "Afternoon",
    desc: "Climate and lighting optimize for focus.",
    icon: "⚡",
  },
  {
    time: "6:00 PM",
    label: "Evening",
    desc: "Ambiance sets as you cross the threshold.",
    icon: "🌆",
  },
  {
    time: "10:00 PM",
    label: "Night",
    desc: "Security arms and lights dim for rest.",
    icon: "🌙",
  },
];

/* ─────────────────────────────────────────────
   SCROLL-REVEAL HOOK
   ───────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   AMBIENT PARTICLES HOOK
   ───────────────────────────────────────────── */
function useAmbientParticles(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const count = 6;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "ambient-particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.bottom = `-10px`;
      p.style.animationDuration = `${8 + Math.random() * 12}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      p.style.width = `${2 + Math.random() * 3}px`;
      p.style.height = p.style.width;
      container.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [containerRef]);
}

/* ─────────────────────────────────────────────
   PARALLAX TILT ON MOUSE MOVE
   ───────────────────────────────────────────── */
function useParallaxTilt(ref: React.RefObject<HTMLElement | null>, intensity = 8) {
  const handleMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg)`;
    },
    [ref, intensity]
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg)`;
    el.style.transition = "transform 0.5s ease";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, handleMove, handleLeave]);
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export default function AboutUs() {
  const mainRef = useRef<HTMLElement>(null);
  const philosophyImgRef = useRef<HTMLDivElement>(null);

  useScrollReveal();
  useAmbientParticles(mainRef);
  useParallaxTilt(philosophyImgRef, 5);

  return (
    <main ref={mainRef} className="bg-[#0B0E14] min-h-screen font-sans text-white relative overflow-hidden">

      {/* ═══════════════════════════════════════
          SECTION 1: SPLIT-REALITY HERO
          ═══════════════════════════════════════ */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] border-b border-slate-800">
        {/* Left — Glass Cutout Text Mask */}
        <div className="relative h-full w-full overflow-hidden border-r border-slate-800 bg-[#0B0E14]">
          {/* Hidden image for Next.js optimization / preloading */}
          <Image
            src="/images/AboutPage-BG.jpg"
            alt="Smart Interior"
            fill
            className="object-cover opacity-0"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Text with image clipped to letterforms */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <h1
              className="hero-cogni-text text-[25vw] lg:text-[14vw] font-black tracking-tighter leading-none select-none"
              style={{
                backgroundImage: "url('/images/AboutPage-BG.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              COGNI
            </h1>
          </div>
        </div>

        {/* Right — Content (auto-staggered entry) */}
        <div className="hero-right-content flex flex-col justify-center p-8 lg:p-20 bg-white text-slate-900">
          <span className="text-[#FF8A4C] font-bold tracking-[0.3em] text-xs mb-4 uppercase">
            About Cogni
          </span>
          <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
            TECHNOLOGY THAT BREATHES WITH YOU.
          </h2>
          <p className="text-slate-500 text-lg max-w-md mb-10 leading-relaxed">
            Experience a home that anticipates your needs, subtly adjusting to
            your life, not the other way around.
          </p>
          <button className="w-fit px-8 py-4 bg-[#FF8A4C] text-white font-bold uppercase tracking-widest text-sm shadow-[6px_6px_0px_0px_#0B0E14] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300">
            Discover Our Story
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2: THE COGNI PHILOSOPHY
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-20 bg-white relative">
        {/* Decorative connection lines */}
        <svg className="connection-lines" aria-hidden="true">
          <line x1="10%" y1="20%" x2="90%" y2="80%" />
          <line x1="85%" y1="10%" x2="15%" y2="90%" />
        </svg>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Floating image with parallax tilt */}
          <div
            ref={philosophyImgRef}
            className="philosophy-image-wrapper reveal-left stagger-1 lg:col-span-5 relative h-[500px] shadow-[20px_20px_0px_0px_#FF8A4C] cursor-default"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/images/philosophy.jpg"
              alt="Family Connection"
              fill
              className="object-cover"
            />
          </div>

          {/* Text content — slides in from right */}
          <div className="lg:col-span-6 lg:col-start-8 text-slate-900">
            <h3 className="reveal-right stagger-1 text-4xl font-black tracking-tighter mb-6 uppercase">
              The Cogni Philosophy
            </h3>
            <p className="reveal-right stagger-2 text-slate-600 text-lg leading-relaxed mb-6">
              A smart home isn&apos;t about more screens or complex interfaces.
              It&apos;s about making technology invisible, so you can focus on
              connection, comfort, and peace of mind.
            </p>
            <p className="reveal-right stagger-3 text-slate-600 text-lg leading-relaxed">
              We design intelligent automation that integrates seamlessly into
              your life, creating a sanctuary that is intuitive, reliable, and
              uniquely yours.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3: ARCHITECTURAL BLUEPRINT DAY
          ═══════════════════════════════════════ */}
      <section className="bg-[#0B0E14] py-24 px-6 lg:px-20 border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto">
          <h3 className="reveal-up text-[#FF8A4C] font-bold tracking-[0.2em] text-xs mb-12 uppercase">
            Architectural Blueprint Day
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-800">
            {blueprintItems.map((item, idx) => (
              <div
                key={idx}
                className={`blueprint-card reveal-up stagger-${idx + 1} p-10 border-r border-b border-slate-800 last:border-r-0 group`}
              >
                {/* 3D rotating icon on hover */}
                <div className="card-icon text-3xl mb-4 inline-block" style={{ transformStyle: "preserve-3d" }}>
                  {item.icon}
                </div>
                <span className="text-[#FF8A4C] font-mono text-sm mb-2 block">
                  {item.time}
                </span>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">
                  {item.label}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4: SOCIAL MOSAIC TEAM
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-20 bg-white text-slate-900 relative">
        <svg className="connection-lines" aria-hidden="true">
          <line x1="5%" y1="50%" x2="95%" y2="50%" />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <h3 className="reveal-up text-5xl font-black tracking-tighter mb-16 uppercase text-center lg:text-left">
            Meet the Intelligence <br />
            Behind the Home.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className={`team-card reveal-scale stagger-${idx + 1} relative group`}
              >
                <div className="relative h-[450px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Floating Quote Card — anti-gravity float-in */}
                  <div className="quote-card absolute top-4 right-4 bg-[#FF8A4C] p-4 max-w-[150px] shadow-[4px_4px_0px_0px_#0B0E14] opacity-0">
                    <p className="text-white text-xs font-bold leading-tight italic">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-extrabold uppercase tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-[#FF8A4C] font-bold text-xs uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════ */}
      <section className="bg-[#FF8A4C] py-20 px-6 text-center relative overflow-hidden">
        {/* Subtle floating orbs in background */}
        <div
          className="float-gentle absolute top-6 left-[10%] w-16 h-16 rounded-full bg-white/10"
          aria-hidden="true"
        />
        <div
          className="float-alt absolute bottom-8 right-[15%] w-10 h-10 rounded-full bg-white/10"
          aria-hidden="true"
        />
        <div
          className="float-slow absolute top-1/2 right-[40%] w-6 h-6 rounded-full bg-white/5"
          aria-hidden="true"
        />

        <h2 className="reveal-up text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-8 relative z-10">
          Ready to build your sanctuary?
        </h2>
        <Link
          href="/contact"
          className="cta-btn reveal-up stagger-2 relative z-10 inline-block px-10 py-5 bg-white text-slate-900 font-bold uppercase tracking-widest shadow-[8px_8px_0px_0px_#0B0E14] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300"
        >
          Get a Quote →
        </Link>
      </section>
    </main>
  );
}
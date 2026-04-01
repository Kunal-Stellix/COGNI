"use client";

import React from 'react';
import { useContactForm } from '../ContactUsSection';

export default function ContactUsSection() {
  const { isSubmitting, isSuccess, handleSubmit, resetForm } = useContactForm();

  const contactInfo = [
    { label: 'Email us', val: 'hello@cogni.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Call us', val: '+91 98765 43210', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
    { label: 'Office', val: 'Jaipur, RJ', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }
  ];

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] bg-blue-100 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
            Ready to <span className="text-[#FF8A4C]">Connect?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Have a project in mind? Our engineers are ready to help you design the ultimate smart environment.
          </p>
        </div>

        {/* Contact Bar */}
        <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden mb-12 shadow-sm">
          {contactInfo.map((item, i) => (
            <div key={i} className="bg-white p-6 flex items-center gap-4 group hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#FF8A4C]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                <p className="text-sm font-bold text-slate-900">{item.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-2xl shadow-slate-200/50 p-8 md:p-16">
          {isSuccess ? (
            <SuccessMessage onReset={resetForm} />
          ) : (
            <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          )}
        </div>
        
        <p className="text-center mt-12 text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
          Trusted by 500+ Luxury Homeowners & Developers
        </p>
      </div>
    </section>
  );
}

/* --- Internal UI Components --- */

interface SuccessMessageProps {
  onReset: () => void;
}

function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-green-200">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
      <p className="text-slate-500 mt-2 font-medium">We'll get back to you shortly.</p>
      <button 
        onClick={onReset} 
        className="mt-8 text-[#FF8A4C] font-bold text-sm underline underline-offset-4"
      >
        Send another
      </button>
    </div>
  );
}

interface ContactFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

function ContactForm({ onSubmit, isSubmitting }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <input required type="text" placeholder="Full Name" className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-[#FF8A4C] outline-none transition-colors placeholder:text-slate-300 font-medium text-slate-900" />
        <input required type="email" placeholder="Email Address" className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-[#FF8A4C] outline-none transition-colors placeholder:text-slate-300 font-medium text-slate-900" />
        <select className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-[#FF8A4C] outline-none transition-colors font-medium text-slate-500">
          <option>Select Project Type</option>
          <option>Residential</option>
          <option>Commercial</option>
        </select>
      </div>

      <div className="space-y-6">
        <textarea required rows={4} placeholder="Your Message" className="w-full bg-slate-50 rounded-2xl p-5 border-2 border-transparent focus:border-[#FF8A4C] focus:bg-white outline-none transition-all placeholder:text-slate-300 font-medium text-slate-900 resize-none" />
        <button 
          disabled={isSubmitting}
          className="w-full py-5 rounded-2xl bg-[#FF8A4C] hover:bg-[#FF7A33] text-white font-black text-lg transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98] disabled:opacity-50 flex justify-center items-center gap-3"
        >
          {isSubmitting ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Send Inquiry'}
        </button>
      </div>
    </form>
  );
}
"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Menu, 
  X, 
  Sparkles,
  Search,
  ExternalLink,
  Laptop
} from 'lucide-react';

interface HeaderProps {
  onOpenVerify: () => void;
  onOpenExam: () => void;
  onOpenAdmission: () => void;
}

export default function Header({ onOpenVerify, onOpenExam, onOpenAdmission }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      {/* Top emergency and info bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Admissions Open 2026-27
            </span>
            <a 
              href="tel:8288843354" 
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 82888 43354</span>
            </a>
            <a 
              href="tel:9780553354" 
              className="hidden sm:inline-flex items-center gap-1 text-slate-200 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 97805 53354</span>
            </a>
            <a 
              href="mailto:ckc020687@gmail.com" 
              className="hidden lg:inline-flex items-center gap-1 text-slate-200 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>ckc020687@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden xl:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Mundian Kalan, 33 Feet Road, Ludhiana (PB)</span>
            </span>
            <div className="flex items-center gap-2">
              <button 
                onClick={onOpenVerify}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium px-2.5 py-0.5 rounded transition text-xs flex items-center gap-1"
              >
                <ShieldCheck className="w-3 h-3" />
                Verify Certificate
              </button>
              <button 
                onClick={onOpenExam}
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-2.5 py-0.5 rounded transition text-xs flex items-center gap-1"
              >
                <Laptop className="w-3 h-3" />
                CCC Mock Test
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo and Institution Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-indigo-700 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 font-black text-xl tracking-wider">
            C
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 uppercase">
                C-NET <span className="text-blue-700 font-extrabold">Multimedia</span>
              </h1>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                NDLM Affiliated
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
              Computer Education Centre • Ludhiana
            </p>
            <p className="text-[11px] text-amber-700 font-medium italic hidden md:block">
              &quot;हुनर है तो कदर है&quot; — Education for Life
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
          <button 
            onClick={() => scrollTo('hero')} 
            className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition"
          >
            Home
          </button>
          <button 
            onClick={() => scrollTo('about')} 
            className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollTo('courses')} 
            className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition"
          >
            Courses
          </button>
          <button 
            onClick={onOpenVerify} 
            className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition flex items-center gap-1 text-blue-700 font-semibold"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Verify Certificate
          </button>
          <button 
            onClick={onOpenExam} 
            className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition flex items-center gap-1"
          >
            <Laptop className="w-4 h-4 text-blue-600" />
            Online Paper
          </button>
          <button 
            onClick={() => scrollTo('itworld')} 
            className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition"
          >
            IT World (IT ज्ञान)
          </button>
          <button 
            onClick={() => scrollTo('gallery')} 
            className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="px-3 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition"
          >
            Contact
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAdmission}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold px-4 py-2 rounded-xl shadow-md shadow-blue-500/25 transition transform hover:-translate-y-0.5 text-sm"
          >
            <GraduationCap className="w-4 h-4" />
            Apply Admission
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="p-2 bg-blue-50 rounded-lg text-xs text-blue-900 font-medium mb-3">
            📍 Ram Nagar Market, 33 Feet Road, Mundian Kalan, Ludhiana
          </div>
          <button 
            onClick={() => scrollTo('hero')} 
            className="block w-full text-left px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollTo('about')} 
            className="block w-full text-left px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollTo('courses')} 
            className="block w-full text-left px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
          >
            Courses & Programs
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenVerify(); }} 
            className="block w-full text-left px-3 py-2 rounded-lg text-emerald-800 bg-emerald-50 font-semibold"
          >
            ✓ Verify Certificate
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenExam(); }} 
            className="block w-full text-left px-3 py-2 rounded-lg text-blue-800 bg-blue-50 font-semibold"
          >
            💻 Online CCC Mock Test
          </button>
          <button 
            onClick={() => scrollTo('itworld')} 
            className="block w-full text-left px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
          >
            IT World (IT ज्ञान और टिप्स)
          </button>
          <button 
            onClick={() => scrollTo('gallery')} 
            className="block w-full text-left px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
          >
            Photo & Video Gallery
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="block w-full text-left px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 font-medium"
          >
            Contact Campus
          </button>
          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }}
              className="w-full text-center bg-blue-700 text-white font-bold py-2.5 rounded-xl shadow"
            >
              Apply Online Admission
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

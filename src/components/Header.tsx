"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  Laptop,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  onOpenAdmission?: () => void;
}

export default function Header({ onOpenAdmission }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/courses', label: 'COURSES' },
    { href: '/student-corner', label: "STUDENT'S CORNER" },
    { href: '/verify-certificate', label: 'VERIFY CERTIFICATE' },
    { href: '/online-paper', label: 'ONLINE PAPER' },
    { href: '/it-world', label: 'IT WORLD (IT ज्ञान)' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/contact', label: 'CONTACT US' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-300 font-sans">
      
      {/* 1. Top Utility Info Strip */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 font-normal">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              ADMISSIONS OPEN (SESSION 2026-27)
            </span>
            <a href="tel:8288843354" className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 82888 43354</span>
            </a>
            <a href="tel:9780553354" className="hidden sm:inline-flex items-center gap-1 text-slate-200 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 97805 53354</span>
            </a>
            <a href="mailto:ckc020687@gmail.com" className="hidden lg:inline-flex items-center gap-1 text-slate-200 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>ckc020687@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-slate-300 text-xs">
            <span className="hidden xl:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Mundian Kalan, 33 Feet Road, Ludhiana (PB)</span>
            </span>
            <span className="bg-blue-800 text-white font-bold px-2 py-0.5 rounded text-[11px]">
              Center Code: CNET-LDH-01
            </span>
          </div>

        </div>
      </div>

      {/* 2. Main Branding Header (Name on Left, Buttons on Right) */}
      <div className="bg-white py-4 px-4 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* LEFT: Logo & Computer Center Name */}
          <Link href="/" className="flex items-center gap-3.5 text-left group">
            {/* Emblem */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-700 via-indigo-700 to-amber-500 flex flex-col items-center justify-center text-white shadow-md border-2 border-blue-900 flex-shrink-0 group-hover:scale-105 transition transform">
              <span className="font-black text-2xl sm:text-3xl leading-none">C</span>
              <span className="text-[9px] font-black tracking-widest uppercase">NET</span>
            </div>

            {/* Name Details */}
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase border border-emerald-300">
                  NDLM India Affiliated
                </span>
                <span className="text-[11px] text-amber-700 font-bold italic hidden sm:inline">
                  &quot;हुनर है तो कदर है&quot;
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-950 uppercase">
                C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE
              </h1>

              <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                Ram Nagar Market, 33 Feet Road, Mundian Kalan, Ludhiana (Punjab) — PIN: 141015
              </p>
            </div>
          </Link>

          {/* RIGHT: Verify Certificate & Apply Admission Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto justify-end">
            <Link
              href="/verify-certificate"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-1.5 border border-amber-600 flex-1 md:flex-none"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Verify Certificate</span>
            </Link>

            <Link
              href="/student-corner?tab=admission"
              className="bg-blue-700 hover:bg-blue-800 text-white font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-1.5 border border-blue-900 flex-1 md:flex-none"
            >
              <GraduationCap className="w-4 h-4 text-white" />
              <span>Apply Admission</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 3. Dedicated Background Navigation Bar - Single Line ("Menu ko ek line mein kijye aur picche background lagaiye") */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 text-white shadow-md border-y-2 border-amber-400">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Desktop Single-Line Menu with Rich Background & Distinct Look */}
            <nav className="hidden lg:flex items-center whitespace-nowrap overflow-x-auto py-1 w-full justify-between">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2.5 rounded-lg text-xs xl:text-sm font-bold tracking-wide transition-all duration-150 flex items-center gap-1 flex-shrink-0 ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                        : 'text-slate-100 hover:bg-blue-800/80 hover:text-amber-300'
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Bar Button */}
            <div className="lg:hidden flex items-center justify-between w-full py-2 px-2">
              <span className="text-xs font-black text-amber-300 tracking-wider">
                NAVIGATION MENU
              </span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1 shadow"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-b-2 border-amber-400 px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="p-2.5 bg-slate-800 rounded-lg text-xs text-amber-300 font-bold mb-3 border border-slate-700">
            📍 C-NET Multimedia Computer Education Centre, Mundian Kalan, Ludhiana
          </div>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full px-4 py-2.5 rounded-lg text-xs font-bold transition ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-black shadow'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-amber-300'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

    </header>
  );
}

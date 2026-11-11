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
  Clock
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
    { href: '/courses', label: 'COURSES & DIPLOMAS' },
    { href: '/student-corner', label: "STUDENT'S CORNER" },
    { href: '/verify-certificate', label: 'VERIFY CERTIFICATE', badge: 'VERIFIED' },
    { href: '/online-paper', label: 'ONLINE PAPER (CCC)', badge: 'TEST' },
    { href: '/it-world', label: 'IT WORLD (IT ज्ञान)' },
    { href: '/gallery', label: 'PHOTO GALLERY' },
    { href: '/contact', label: 'CONTACT US' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-slate-300 font-sans">
      
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

      {/* 2. Spacious Center Branding Header ("Center Name Ko Khula Kijiye") */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white py-5 px-4 sm:px-8 border-b-2 border-amber-400 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
          
          {/* Grand Logo + Full Center Name */}
          <Link href="/" className="flex items-center gap-4 sm:gap-5 text-center lg:text-left group">
            {/* Emblem Badge */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 flex flex-col items-center justify-center text-slate-950 shadow-xl border-2 border-white flex-shrink-0 group-hover:scale-105 transition transform">
              <span className="font-black text-2xl sm:text-3xl leading-none">C</span>
              <span className="text-[10px] font-black tracking-widest uppercase">NET</span>
            </div>

            {/* Expanded Center Name */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="bg-amber-400 text-slate-950 text-[11px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                  NDLM India Affiliated
                </span>
                <span className="bg-emerald-500 text-slate-950 text-[11px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                  Govt. Registered
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-wide text-white uppercase drop-shadow-md">
                C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-200">
                <span className="font-bold text-amber-300 tracking-wider uppercase">
                  LUDHIANA, PUNJAB — PIN: 141015
                </span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="text-amber-200 font-bold italic">
                  &quot;हुनर है तो कदर है&quot; — Education for Life
                </span>
              </div>
            </div>
          </Link>

          {/* Quick Header CTA Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/verify-certificate"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm transition shadow-lg flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Verify Certificate</span>
            </Link>

            <Link
              href="/student-corner?tab=admission"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm transition shadow-lg flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-slate-950" />
              <span>Apply Admission</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 3. Spacious, Full-Width Navigation Menu Bar ("Menu Ko Khula Kijiye") */}
      <div className="bg-slate-100 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Desktop Spacious Menu */}
            <nav className="hidden lg:flex items-center flex-wrap gap-1 py-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wider transition-all duration-150 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-700 text-white shadow-md'
                        : 'text-slate-800 hover:bg-blue-50 hover:text-blue-800'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className={`text-[9px] font-black px-1.5 py-0.2 rounded uppercase ${
                        isActive 
                          ? 'bg-amber-400 text-slate-950' 
                          : 'bg-blue-200 text-blue-900'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center justify-between w-full py-2.5">
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
                NAVIGATION MENU
              </span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-blue-700 text-white font-bold transition flex items-center gap-1.5 text-xs shadow"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                <span>{mobileMenuOpen ? 'CLOSE MENU' : 'OPEN MENU'}</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-blue-700 px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="p-3 bg-blue-50 rounded-xl text-xs text-blue-900 font-bold mb-3 border border-blue-200">
            📍 C-NET Multimedia Computer Education Centre, Mundian Kalan, Ludhiana
          </div>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full px-4 py-3 rounded-xl text-sm font-bold transition ${
                  isActive
                    ? 'bg-blue-700 text-white font-black shadow'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-black">
                      {link.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}

    </header>
  );
}

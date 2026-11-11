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
  Sparkles,
  Search,
  ExternalLink,
  Laptop
} from 'lucide-react';

interface HeaderProps {
  onOpenAdmission?: () => void;
}

export default function Header({ onOpenAdmission }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/courses', label: 'Courses' },
    { href: '/student-corner', label: "Student's Corner" },
    { href: '/verify-certificate', label: 'Verify Certificate', highlight: 'emerald' },
    { href: '/online-paper', label: 'Online Paper (CCC)', highlight: 'blue' },
    { href: '/it-world', label: 'IT World (IT ज्ञान)' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      {/* Top emergency and info bar */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-900 text-white text-xs py-2 px-4 sm:px-8 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 font-medium">
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-bold">
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

          <div className="flex items-center gap-3 text-slate-300">
            <span className="hidden xl:inline-flex items-center gap-1 text-xs">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>33 Feet Road, Mundian Kalan, Ludhiana</span>
            </span>
            <div className="flex items-center gap-2">
              <Link 
                href="/verify-certificate"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded transition text-xs flex items-center gap-1 shadow-sm"
              >
                <ShieldCheck className="w-3 h-3" />
                Verify Certificate
              </Link>
              <Link 
                href="/online-paper"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-2.5 py-0.5 rounded transition text-xs flex items-center gap-1 shadow-sm"
              >
                <Laptop className="w-3 h-3" />
                CCC Mock Test
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo and Institution Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 font-black text-2xl tracking-wider group-hover:scale-105 transition">
            C
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 uppercase">
                C-NET <span className="text-blue-700">Multimedia</span>
              </h1>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                NDLM Affiliated
              </span>
            </div>
            <p className="text-xs font-bold text-slate-600 tracking-wide uppercase">
              Computer Education Centre • Ludhiana
            </p>
            <p className="text-[11px] text-amber-700 font-bold italic hidden md:block font-hind">
              &quot;हुनर है तो कदर है&quot; — Education for Life
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 font-semibold text-xs sm:text-sm text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-xl transition ${
                  isActive
                    ? 'text-blue-700 bg-blue-50 font-bold'
                    : 'hover:text-blue-700 hover:bg-slate-100'
                } ${
                  link.highlight === 'emerald'
                    ? 'text-emerald-700 font-bold'
                    : link.highlight === 'blue'
                    ? 'text-blue-700 font-bold'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/student-corner?tab=admission"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold px-4 py-2 rounded-xl shadow-md shadow-blue-500/25 transition transform hover:-translate-y-0.5 text-xs sm:text-sm"
          >
            <GraduationCap className="w-4 h-4" />
            Apply Admission
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex xl:hidden items-center gap-2">
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
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1.5 animate-in slide-in-from-top duration-200">
          <div className="p-2 bg-blue-50 rounded-lg text-xs text-blue-900 font-semibold mb-3">
            📍 Ram Nagar Market, 33 Feet Road, Mundian Kalan, Ludhiana
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full px-3 py-2 rounded-xl text-sm font-semibold transition ${
                pathname === link.href
                  ? 'bg-blue-50 text-blue-700 font-bold'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/student-corner?tab=admission"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-blue-700 text-white font-bold py-2.5 rounded-xl shadow text-sm"
            >
              Apply Online Admission
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

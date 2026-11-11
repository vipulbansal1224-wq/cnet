"use client";

import React, { useState, useEffect } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Laptop, 
  BookOpen, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  onOpenAdmission?: () => void;
}

export default function HeroSection({ onOpenAdmission }: HeroSectionProps) {
  const slides = [
    {
      image: '/images/slider_1.jpg',
      alt: 'C-NET Computer Practical Training',
      caption: '100% Practical Computer Lab Training'
    },
    {
      image: '/images/slider_2.jpg',
      alt: 'NDLM IT Education Mission',
      caption: 'National Digital Literacy Mission Recognized'
    },
    {
      image: '/images/slider_3.jpg',
      alt: 'Tally Prime & Accounting Classes',
      caption: 'Corporate Accounts & GST Specialization'
    },
    {
      image: '/images/slider_4.jpg',
      alt: 'Annual Certificate Convocation',
      caption: 'Valid Certificates for Govt. & Private Jobs'
    },
    {
      image: '/images/slider_5.jpg',
      alt: 'Software & Coding Classes',
      caption: 'ADCA, DCA & Programming Excellence'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* National Literacy Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>National Digital Literacy Mission (NDLM) Partner</span>
              <span className="text-amber-400 font-bold">•</span>
              <span className="text-amber-300 font-bold">Center Code: CNET-LDH-01</span>
            </div>

            {/* Main Title with Hindi Tagline (Jaise pehle tha, par thoda sa chota) */}
            <div>
              <div className="inline-block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-bold text-lg sm:text-xl tracking-wide mb-1">
                &quot;हुनर है तो कदर है&quot; — Education for Life
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
                C-NET Multimedia <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
                  Computer Education
                </span>
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Ludhiana&apos;s premier institute for advanced computer literacy, diploma courses (ADCA, DCA, &apos;O&apos; Level), corporate accounting with Tally Prime &amp; GST, and NIELIT CCC exam preparation at nominal, affordable fees.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>100% Practical Lab</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Govt. Valid Certificates</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Job Placement Support</span>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/verify-certificate"
                className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold px-5 py-3.5 rounded-xl border border-slate-600 transition shadow text-sm sm:text-base"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Verify Certificate</span>
              </Link>

              <Link
                href="/online-paper"
                className="inline-flex items-center gap-2 bg-blue-700/80 hover:bg-blue-600 text-white font-semibold px-5 py-3.5 rounded-xl border border-blue-500/40 transition shadow text-sm sm:text-base"
              >
                <Laptop className="w-5 h-5 text-amber-300" />
                <span>CCC Mock Test</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Original Image Slider (As on original site) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900 group">
              
              {/* Slider image */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover transition-all duration-700 transform scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              </div>

              {/* Slider Controls */}
              <button
                onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white flex items-center justify-center transition"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white flex items-center justify-center transition"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    Campus Live Glimpse ({currentSlide + 1}/{slides.length})
                  </span>
                  <p className="text-sm font-bold text-white">
                    {slides[currentSlide].caption}
                  </p>
                </div>

                {/* Dots indicator */}
                <div className="flex gap-1.5">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === idx ? 'w-6 bg-amber-400' : 'w-2 bg-slate-600'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar underneath */}
            <div className="grid grid-cols-4 gap-2 mt-4 text-center">
              <div className="bg-slate-800/80 p-2.5 rounded-2xl border border-slate-700">
                <p className="text-lg font-black text-amber-400">2,500+</p>
                <p className="text-[10px] text-slate-400">Students</p>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-2xl border border-slate-700">
                <p className="text-lg font-black text-blue-400">20+</p>
                <p className="text-[10px] text-slate-400">Courses</p>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-2xl border border-slate-700">
                <p className="text-lg font-black text-emerald-400">100%</p>
                <p className="text-[10px] text-slate-400">Practical</p>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-2xl border border-slate-700">
                <p className="text-lg font-black text-purple-400">10+ Yrs</p>
                <p className="text-[10px] text-slate-400">Trust</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

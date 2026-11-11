"use client";

import React from 'react';
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
  GraduationCap
} from 'lucide-react';

interface HeroSectionProps {
  onOpenVerify: () => void;
  onOpenExam: () => void;
  onOpenAdmission: () => void;
  onExploreCourses: () => void;
}

export default function HeroSection({ 
  onOpenVerify, 
  onOpenExam, 
  onOpenAdmission,
  onExploreCourses 
}: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* National Literacy Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/60 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-medium backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>National Digital Literacy Mission (NDLM) Partner</span>
              <span className="text-amber-400 font-bold">•</span>
              <span className="text-amber-300 font-semibold">ISO 9001:2015 Standards</span>
            </div>

            {/* Main Title with Hindi Tagline */}
            <div>
              <div className="inline-block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-2">
                &quot;हुनर है तो कदर है&quot;
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight sm:leading-none text-white">
                Transform Your Career With Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">Computer Skills</span>
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Welcome to <strong className="text-white">C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE, LUDHIANA</strong>. 
              We are committed to providing world-class computer literacy, corporate accounting (Tally & GST), 
              programming, and government-recognized diploma courses at nominal fee structures for students across Punjab and Purvanchal.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-200">
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
              <button
                onClick={onOpenAdmission}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Enroll in Batch 2026</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVerify}
                className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-white font-semibold px-5 py-3.5 rounded-xl border border-slate-600 transition shadow text-sm sm:text-base"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Verify Certificate</span>
              </button>

              <button
                onClick={onOpenExam}
                className="inline-flex items-center gap-2 bg-blue-700/80 hover:bg-blue-600 text-white font-semibold px-5 py-3.5 rounded-xl border border-blue-500/40 transition shadow text-sm sm:text-base"
              >
                <Laptop className="w-5 h-5 text-amber-300" />
                <span>Free CCC Mock Test</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card */}
              <div className="bg-gradient-to-br from-slate-800/90 via-slate-800/70 to-indigo-900/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/70 shadow-2xl space-y-6">
                
                {/* Header card badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center text-blue-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Center Code: CNET-LDH-01</h4>
                      <p className="text-xs text-slate-400">Mundian Kalan, Ludhiana Center</p>
                    </div>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    Active Institute
                  </span>
                </div>

                {/* Quick Interactive Highlights */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                    <p className="text-2xl font-black text-amber-400">2,500+</p>
                    <p className="text-xs font-medium text-slate-300 mt-0.5">Alumni Trained</p>
                    <p className="text-[10px] text-slate-400 mt-1">Working in MNCs & Govt.</p>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                    <p className="text-2xl font-black text-blue-400">20+</p>
                    <p className="text-xs font-medium text-slate-300 mt-0.5">Job-Ready Courses</p>
                    <p className="text-[10px] text-slate-400 mt-1">ADCA, DCA, Tally, CCC</p>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                    <p className="text-2xl font-black text-emerald-400">100%</p>
                    <p className="text-xs font-medium text-slate-300 mt-0.5">Practical Hands-On</p>
                    <p className="text-[10px] text-slate-400 mt-1">Dedicated PC for Each</p>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                    <p className="text-2xl font-black text-purple-400">10+ Yrs</p>
                    <p className="text-xs font-medium text-slate-300 mt-0.5">Education Trust</p>
                    <p className="text-[10px] text-slate-400 mt-1">Purvanchal & Punjab</p>
                  </div>
                </div>

                {/* Director Quick Contact Card */}
                <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-2xl p-4 border border-blue-500/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-blue-200 font-semibold uppercase tracking-wider">Director & Head Instructor</p>
                    <p className="text-base font-bold text-white">Chandan Kumar</p>
                    <p className="text-xs text-amber-300">Helpline: +91 82888 43354</p>
                  </div>
                  <a
                    href="https://wa.me/918288843354?text=Hello%20C-NET%20Ludhiana,%20I%20am%20interested%20in%20taking%20admission."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-3 rounded-xl transition shadow flex items-center justify-center"
                    title="Chat on WhatsApp"
                  >
                    <PhoneCall className="w-5 h-5" />
                  </a>
                </div>

                {/* Mini Quick Action */}
                <button
                  onClick={onExploreCourses}
                  className="w-full text-center py-2.5 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-xs text-slate-200 font-medium transition flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Browse Detailed Syllabus & Course List</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

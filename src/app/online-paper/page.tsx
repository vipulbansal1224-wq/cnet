"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import MarqueeTicker from '../../components/MarqueeTicker';
import Footer from '../../components/Footer';
import MockExamModal from '../../components/MockExamModal';
import Link from 'next/link';
import { Laptop, Clock, CheckCircle, Award, BookOpen, RotateCcw } from 'lucide-react';
import { cccMockQuestions } from '../../data/mockTestData';

export default function OnlinePaperPage() {
  const [examModalOpen, setExamModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <MarqueeTicker />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="text-xs text-blue-300 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-amber-400 font-bold">Online Paper</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Online CCC Test Paper &amp; Examination Portal
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
            Free bilingual online test paper designed on the official NIELIT CCC (Course on Computer Concepts) examination pattern.
          </p>
        </div>
      </div>

      <main className="flex-grow py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Action Card */}
          <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-700/80 text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-xl">
              <Laptop className="w-10 h-10" />
            </div>

            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                NIELIT CCC Exam Pattern
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Start Full Interactive Mock Test
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Test your knowledge across 10 vital topics: LibreOffice Writer/Calc/Impress, Operating Systems, Computer Hardware, IP Addresses, UPI, and Cyber Security laws.
              </p>
            </div>

            {/* Quick Exam Specifications */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-left text-xs">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block">Questions</span>
                <strong className="text-base text-white">10 MCQs</strong>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block">Duration</span>
                <strong className="text-base text-amber-400">15 Minutes</strong>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block">Language</span>
                <strong className="text-base text-emerald-400">Hindi + English</strong>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-400 block">Passing Marks</span>
                <strong className="text-base text-blue-400">50% (Grade D)</strong>
              </div>
            </div>

            <button
              onClick={() => setExamModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black px-10 py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition transform hover:-translate-y-0.5 text-base"
            >
              <Laptop className="w-5 h-5" />
              <span>Launch Online CCC Test Paper</span>
            </button>
          </div>

          {/* Syllabus Topics Tested */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-700" />
              Syllabus Coverage in This Online Paper
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>LibreOffice Suite (Writer, Calc, Impress):</strong>
                  <p className="text-xs text-slate-500 mt-0.5">Shortcuts, formulas, cell widths, presentations, and formatting rules.</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Operating Systems &amp; FOSS:</strong>
                  <p className="text-xs text-slate-500 mt-0.5">Windows, Linux, Ubuntu, Open Source distributions and kernel overview.</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Digital Financial Services:</strong>
                  <p className="text-xs text-slate-500 mt-0.5">UPI (NPCI), QR code origins, AEPS, USSD, and secure online net-banking.</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Networking, Email &amp; Cyber Law:</strong>
                  <p className="text-xs text-slate-500 mt-0.5">IPv4 vs IPv6, CC vs BCC in emails, Information Technology Act 2000.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />

      <MockExamModal
        isOpen={examModalOpen}
        onClose={() => setExamModalOpen(false)}
      />
    </div>
  );
}

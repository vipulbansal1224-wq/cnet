"use client";

import React from 'react';
import Header from '../../components/Header';
import MarqueeTicker from '../../components/MarqueeTicker';
import ITWorldSection from '../../components/ITWorldSection';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ITWorldPage() {
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
            <span className="text-amber-400 font-bold font-hind">IT World (आईटी ज्ञान)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight font-hind">
            IT World — आईटी ज्ञान, टिप्स एवं रोचक तथ्य
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
            Read daily practical computer guides, Windows shortcut secrets, tech history, and motivational knowledge curated by C-NET faculty in easy Hindi &amp; English.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        <ITWorldSection />
      </main>

      <Footer />
    </div>
  );
}

"use client";

import React from 'react';
import { Bell, Flame, Sparkles } from 'lucide-react';

export default function MarqueeTicker() {
  const updates = [
    "🔥 Admissions Open 2026-27 for ADCA, DCA, CCC, Tally Prime with GST & AutoCAD batches!",
    "🎓 Certificates successfully issued for recently graduated batch (ADCA / DCA / CCC). Verify online now!",
    "💡 IT World: सुपर कम्प्यूटर के बारे में जाने एवं Windows गति दोगुनी करने के 5 अचूक तरीके।",
    "🏆 Over 2,500+ successful students trained and placed in reputed companies & government exams across Punjab & UP.",
    "💻 100% Practical Computer Lab training with individual PC for every single student.",
    "⚡ Free CCC Mock Test portal is live for all enrolled students. Practice before your NIELIT exam!"
  ];

  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 py-2 border-y border-amber-300 shadow-inner overflow-hidden flex items-center">
      <div className="flex-shrink-0 z-10 bg-amber-600 text-white font-black text-xs uppercase px-3 py-1 rounded-r-full shadow flex items-center gap-1.5 ml-2">
        <Bell className="w-3.5 h-3.5 animate-bounce" />
        <span>UPDATES</span>
      </div>

      <div className="relative overflow-hidden w-full whitespace-nowrap pl-4">
        <div className="animate-marquee inline-flex space-x-12 text-xs sm:text-sm font-semibold tracking-wide">
          {updates.map((item, idx) => (
            <span key={idx} className="inline-flex items-center space-x-2">
              <span>{item}</span>
              <span className="text-amber-800 font-bold">•</span>
            </span>
          ))}
          {/* Duplicate for infinite loop continuity */}
          {updates.map((item, idx) => (
            <span key={`dup-${idx}`} className="inline-flex items-center space-x-2">
              <span>{item}</span>
              <span className="text-amber-800 font-bold">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

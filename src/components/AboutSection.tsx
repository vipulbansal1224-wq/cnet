"use client";

import React from 'react';
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  Award, 
  Building, 
  ShieldCheck, 
  HeartHandshake, 
  Users
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            About Our Institution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging The Digital Divide With Quality Computer Literacy
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Established with a noble mission to bring advanced, industry-grade IT & vocational computer education 
            within reach of every aspiring student in Ludhiana and Purvanchal.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-blue-700 rounded-sm"></span>
                Who We Are & Our Legacy
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong>C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE, LUDHIANA®</strong> was founded with the prime mission 
                of educating youth in both rural and urban areas. We strongly believe that financial constraints 
                should never hinder a student from mastering technology.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Covering both Ludhiana (Punjab) and rural belts of Eastern Uttar Pradesh (Purvanchal), our institute provides 
                high-impact training in computer applications, corporate accounting (Tally & GST), programming, 
                and official NIELIT CCC certifications on nominal, non-commercial fee structures.
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/70 rounded-r-lg text-slate-800 italic text-sm font-medium">
                &quot;More than 2,000 successful students are living evidence of our commitment and quality education. 
                &apos;Education for Life&apos; is the key philosophy of our institution.&quot;
              </blockquote>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Our Mission</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To make computer and financial accounting education accessible to every young mind at nominal fees, 
                    equipping them to secure respectable corporate jobs or establish their own IT-based micro-enterprises.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Our Vision</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To build a digitally empowered society aligned with the National Digital Literacy Mission (NDLM), 
                    fostering confidence, ethical digital citizenship, and technical independence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights & Verification Stats */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl">
                  ✓
                </div>
                <div>
                  <h4 className="font-black text-lg text-white">Why Students Trust C-NET</h4>
                  <p className="text-xs text-blue-200">Ludhiana&apos;s Preferred IT Learning Hub</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">100% Practical Orientation:</strong>
                    <p className="text-xs text-slate-300 mt-0.5">No theoretical rote learning. Every student spends maximum time on the PC doing live projects.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Govt. Exam Oriented (CCC & O Level):</strong>
                    <p className="text-xs text-slate-300 mt-0.5">Dedicated prep for NIELIT online exams with real mock test simulation software.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Transparent Certificate Verification:</strong>
                    <p className="text-xs text-slate-300 mt-0.5">24x7 online verification system enables employers and government bodies to authenticate credentials in seconds.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Bilingual & Inclusive Pedagogy:</strong>
                    <p className="text-xs text-slate-300 mt-0.5">Comfortable instructions in Hindi, Punjabi, and English so every learner grasps concepts thoroughly.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
                <span>Director: <strong>Chandan Kumar</strong></span>
                <span className="text-amber-400 font-semibold">📞 82888 43354</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

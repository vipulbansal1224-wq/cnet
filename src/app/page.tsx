"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import MarqueeTicker from '../components/MarqueeTicker';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Link from 'next/link';
import { 
  BookOpen, 
  ShieldCheck, 
  Laptop, 
  UserCheck, 
  GraduationCap, 
  Lightbulb, 
  Camera, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle, 
  Award,
  Sparkles
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { itArticles } from '../data/articlesData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Sticky Header */}
      <Header />

      {/* Real-time Ticker */}
      <MarqueeTicker />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section with Authentic Slider & Quotes */}
        <HeroSection />

        {/* Quick Portal Navigation Grid */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              
              <Link 
                href="/courses" 
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200/90 hover:border-blue-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-700">Courses</h3>
                <p className="text-[11px] text-slate-500">ADCA, DCA, Tally</p>
              </Link>

              <Link 
                href="/verify-certificate" 
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/90 hover:border-emerald-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700">Verify Marksheet</h3>
                <p className="text-[11px] text-slate-500">24x7 Digital Check</p>
              </Link>

              <Link 
                href="/online-paper" 
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-indigo-50 border border-slate-200/90 hover:border-indigo-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-indigo-700">Online Paper</h3>
                <p className="text-[11px] text-slate-500">CCC Mock Test CBT</p>
              </Link>

              <Link 
                href="/student-corner" 
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200/90 hover:border-purple-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-purple-700">Student&apos;s Corner</h3>
                <p className="text-[11px] text-slate-500">Login &amp; Attendance</p>
              </Link>

              <Link 
                href="/it-world" 
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200/90 hover:border-amber-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-amber-700 font-hind">IT ज्ञान</h3>
                <p className="text-[11px] text-slate-500">Tips &amp; Facts</p>
              </Link>

              <Link 
                href="/gallery" 
                className="group p-5 rounded-2xl bg-slate-50 hover:bg-rose-50 border border-slate-200/90 hover:border-rose-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-rose-700">Gallery</h3>
                <p className="text-[11px] text-slate-500">Original Lab Photos</p>
              </Link>

            </div>
          </div>
        </section>

        {/* Institutional Mission Snapshot */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                  About Our Institution
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  High-Impact Computer Literacy for Rural &amp; Urban Youth
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  <strong>C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE, LUDHIANA®</strong> was founded with the mission of educating youth in rural parts of eastern U.P. and Punjab. We believe that technology education should be accessible on nominal fee structures.
                </p>
                <blockquote className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 rounded-r-lg text-slate-800 italic text-sm font-medium font-hind">
                  &quot;More than 2000 successful students are living evidence of our commitment and quality education. &apos;Education for Life&apos; is the key of our education.&quot;
                </blockquote>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
                  >
                    <span>Read Full About Us Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow border border-slate-200">
                    <img 
                      src="/images/gallery_1149.jpg" 
                      alt="C-NET Computer Practical Lab" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-3 bg-white text-xs font-bold text-slate-800">
                      100% Practical Computer Lab
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow border border-slate-200">
                    <img 
                      src="/images/gallery_1150.jpg" 
                      alt="Director Chandan Kumar" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-3 bg-white text-xs font-bold text-slate-800">
                      Certificate Convocation
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Courses Showcase */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Career Programs
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                  Popular Job-Oriented Courses
                </h2>
              </div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                <span>View All 10+ Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesData.slice(0, 3).map((course) => (
                <div
                  key={course.id}
                  className="p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition flex flex-col justify-between bg-white"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-extrabold text-xs">
                        {course.code}
                      </span>
                      <span className="text-xs text-amber-600 font-bold">★ {course.badge}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{course.title}</h3>
                    <p className="text-xs text-slate-500 font-medium font-hind">{course.hindiTitle}</p>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{course.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{course.duration}</span>
                    <Link
                      href="/courses"
                      className="text-xs font-bold text-blue-700 hover:underline"
                    >
                      View Syllabus &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured IT World Articles with Original Images */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-hind">
                  ज्ञान एवं शिक्षा
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2 font-hind">
                  IT World — नवीनतम तकनीकी लेख
                </h2>
              </div>
              <Link
                href="/it-world"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                <span>Read All IT Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {itArticles.slice(0, 3).map((art) => (
                <div
                  key={art.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition bg-white flex flex-col justify-between"
                >
                  <div className="h-44 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.titleHindi}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2 flex-grow">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {art.categoryLabel}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 font-hind line-clamp-2">
                      {art.titleHindi}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 font-hind">
                      {art.summary}
                    </p>
                  </div>
                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{art.readTime}</span>
                    <Link
                      href="/it-world"
                      className="font-bold text-blue-700 hover:underline"
                    >
                      पूरा पढ़ें &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification & Online Exam CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black">
              Authenticate Your Certificate or Practice CCC Online
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              Employers can instantly verify credentials issued by C-NET Ludhiana. Students can test their readiness on our online CBT exam platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/verify-certificate"
                className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow flex items-center gap-2 text-sm"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Verify Student Certificate</span>
              </Link>
              <Link
                href="/online-paper"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition shadow flex items-center gap-2 text-sm"
              >
                <Laptop className="w-5 h-5" />
                <span>Launch CCC Mock Exam</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Institutional Footer */}
      <Footer />

    </div>
  );
}

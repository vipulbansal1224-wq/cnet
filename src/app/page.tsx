"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import MarqueeTicker from '../components/MarqueeTicker';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import IssuedCertificatesTable from '../components/IssuedCertificatesTable';
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
  Sparkles,
  FileCheck
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { itArticles } from '../data/articlesData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Sticky Header with Left Logo/Name & Right Action Buttons + Single-Line Background Menu */}
      <Header />

      {/* Real-time Ticker */}
      <MarqueeTicker />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section with Authentic Slider & Quotes */}
        <HeroSection />

        {/* Quick Portal Navigation Grid */}
        <section className="py-10 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              
              <Link 
                href="/courses" 
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-700">COURSES</h3>
                <p className="text-[11px] text-slate-500">ADCA, DCA, Tally</p>
              </Link>

              <Link 
                href="/verify-certificate" 
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700">VERIFY CERTIFICATE</h3>
                <p className="text-[11px] text-slate-500">24x7 Digital Check</p>
              </Link>

              <Link 
                href="/online-paper" 
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-indigo-700">ONLINE PAPER</h3>
                <p className="text-[11px] text-slate-500">CCC Mock Test CBT</p>
              </Link>

              <Link 
                href="/student-corner" 
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-purple-700">STUDENT&apos;S CORNER</h3>
                <p className="text-[11px] text-slate-500">Login &amp; Attendance</p>
              </Link>

              <Link 
                href="/it-world" 
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-amber-700">IT ज्ञान &amp; FACTS</h3>
                <p className="text-[11px] text-slate-500">50 रोचक तथ्य &amp; Tips</p>
              </Link>

              <Link 
                href="/gallery" 
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 transition text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-rose-700">PHOTO GALLERY</h3>
                <p className="text-[11px] text-slate-500">Original Lab Photos</p>
              </Link>

            </div>
          </div>
        </section>

        {/* 1. DEDICATED ISSUED CERTIFICATES DISPLAY SECTION ("Jinko Certificate Issue Hue Hai Vo Bhi Display Kijiye") */}
        <section className="py-16 bg-slate-100 border-b border-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Student Verification
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  Recently Issued Certificates (हाल ही में जारी किए गए प्रमाण पत्र)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Click &apos;Verify&apos; on any student to view their authentic digitized marksheet with QR verification code.
                </p>
              </div>

              <Link
                href="/verify-certificate"
                className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow transition"
              >
                <span>Search Any Roll Number</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Complete Issued Certificates Table Component */}
            <IssuedCertificatesTable />
          </div>
        </section>

        {/* 2. DEDICATED IT FACTS & KNOWLEDGE SHOWCASE ("IT Facts Jo Jankari Di Gayi Hai Vo Sari Poori Dikhaiye") */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  IT World • रोचक तथ्य
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  कंप्यूटर एवं मोबाइल के रोचक तथ्य (Complete IT Facts)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Read complete authentic facts from C-NET IT World: 50 fun facts, mobile history, Sundar Pichai, email facts, Wi-Fi recovery &amp; supercomputers.
                </p>
              </div>

              <Link
                href="/it-world"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                <span>Open Full IT World Portal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {itArticles.slice(0, 3).map((art) => (
                <div
                  key={art.id}
                  className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition bg-white flex flex-col justify-between group"
                >
                  <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                    <img
                      src={art.image}
                      alt={art.titleHindi}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-blue-900/90 text-white font-bold text-xs px-2.5 py-1 rounded-md">
                      {art.categoryLabel}
                    </span>
                  </div>

                  <div className="p-6 space-y-2.5 flex-grow">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{art.readTime}</span>
                      <span>{art.date}</span>
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition line-clamp-2">
                      {art.titleHindi}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-bold">50+ Facts Included</span>
                    <Link
                      href="/it-world"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900"
                    >
                      <span>पूरा लेख पढ़ें &rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick 50 Facts Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded uppercase">
                  Top 50 Random Fun Facts
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  कंप्यूटर के बारे में 50 रोचक तथ्य (Full 50 Points List)
                </h3>
                <p className="text-xs text-slate-300">
                  संगणक, 5MB पहली हार्ड डिस्क, लकड़ी का पहला माउस, इंटरनेट और QWERTY कीबोर्ड के सभी 50 बिंदु पढ़ें।
                </p>
              </div>

              <Link
                href="/it-world"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm transition shadow-lg flex-shrink-0"
              >
                Read All 50 Facts Now &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Courses Showcase */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
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
                    <p className="text-xs text-slate-500 font-medium">{course.hindiTitle}</p>
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

      </main>

      {/* Institutional Footer */}
      <Footer />

    </div>
  );
}

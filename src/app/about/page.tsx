import React from 'react';
import Header from '../../components/Header';
import MarqueeTicker from '../../components/MarqueeTicker';
import AboutSection from '../../components/AboutSection';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, CheckCircle, GraduationCap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE, LUDHIANA',
  description: 'Learn about C-NET Multimedia Computer Education Centre in Mundian Kalan, Ludhiana. Founded with the mission to educate youth in rural & urban Punjab and Purvanchal.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <MarqueeTicker />

      {/* Page Breadcrumb & Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="text-xs text-blue-300 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-amber-400 font-bold">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            About C-NET Multimedia Computer Education Centre
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
            Empowering youth through accessible, job-ready computer and accounting literacy across Ludhiana, Punjab &amp; Eastern Uttar Pradesh.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        {/* Core Mission & Narrative */}
        <AboutSection />

        {/* Director Message & Original Banner Showcase */}
        <div className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl">
                  <img
                    src="/images/gallery_1150.jpg"
                    alt="Director Chandan Kumar awarding student certificate"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-4 bg-slate-900 text-white text-xs">
                    <p className="font-bold text-amber-400">Director Chandan Kumar</p>
                    <p className="text-slate-400">Awarding certified student credentials at Ludhiana center</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Director&apos;s Desk
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  &quot;Education for Life&quot; — Value of Your Time and Money
                </h3>
                <p className="leading-relaxed">
                  Welcome to C-NET Multimedia Computer Education Centre. We started with a humble vision in Mundian Kalan, Ludhiana to break technical barriers for students who often found private computer institutes too expensive.
                </p>
                <p className="leading-relaxed">
                  By offering the latest computer and accounting courses, we train people and help them either get a job in corporate companies or become able to establish IT-based small businesses and start earning for their life.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition shadow"
                  >
                    <span>View Our Courses</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition border border-slate-300"
                  >
                    <span>Contact Director</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

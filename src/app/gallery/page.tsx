import React from 'react';
import Header from '../../components/Header';
import MarqueeTicker from '../../components/MarqueeTicker';
import GallerySection from '../../components/GallerySection';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Photo & Video Gallery | C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE, LUDHIANA',
  description: 'View photos and activities of computer labs, classroom sessions, and annual certificate convocation at C-NET Ludhiana.',
};

export default function GalleryPage() {
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
            <span className="text-amber-400 font-bold">Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Campus Photo &amp; Video Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
            Original glimpses of our high-tech computer lab, student practicals, classroom seminars, and annual certificate award ceremonies.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
}

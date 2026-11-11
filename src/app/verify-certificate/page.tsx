import React from 'react';
import Header from '../../components/Header';
import MarqueeTicker from '../../components/MarqueeTicker';
import CertificateVerifier from '../../components/CertificateVerifier';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verify Certificate | C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE, LUDHIANA',
  description: 'Online student certificate verification portal for C-NET Multimedia Computer Education Centre, Ludhiana. Authenticate ADCA, DCA, CCC, and vocational diplomas.',
};

export default function VerifyCertificatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Header />
      <MarqueeTicker />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-950 to-indigo-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="text-xs text-blue-300 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-bold">Verify Certificate</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Online Certificate Verification Portal
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
            Authenticate diplomas and marksheets issued by C-NET Multimedia Computer Education Centre, Ludhiana (NDLM India Partner).
          </p>
        </div>
      </div>

      <main className="flex-grow">
        <CertificateVerifier />
      </main>

      <Footer />
    </div>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Award, 
  CheckCircle2, 
  Printer, 
  QrCode, 
  Calendar, 
  FileCheck, 
  AlertCircle,
  Building2,
  User,
  GraduationCap
} from 'lucide-react';
import { sampleCertificates, lookupCertificate, CertificateRecord } from '../data/certificatesData';
import IssuedCertificatesTable from './IssuedCertificatesTable';

export default function CertificateVerifier() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<CertificateRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check URL query param on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const certParam = urlParams.get('cert');
      if (certParam) {
        setQuery(certParam);
        handleSearch(certParam);
      }
    }
  }, []);

  const handleSearch = (searchVal?: string) => {
    const term = searchVal !== undefined ? searchVal : query;
    if (!term.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    setTimeout(() => {
      const found = lookupCertificate(term);
      setResult(found);
      setIsLoading(false);
    }, 300);
  };

  const printCertificate = () => {
    window.print();
  };

  return (
    <section id="verify" className="py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Verification Input Box */}
        <div className="bg-slate-800/95 border border-slate-700 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Instant Certificate Authentication
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
              Enter Roll No or Certificate Number
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Verify diplomas, marksheets, and certifications issued by C-NET Multimedia Computer Education Centre, Ludhiana.
            </p>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto"
          >
            <div className="relative flex-grow">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Certificate No., Roll No. or Student Name (e.g. CNET-2024-ADCA-0101)"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-900 border border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base font-medium"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black px-8 py-3.5 rounded-2xl transition shadow-lg shadow-emerald-600/30 text-sm sm:text-base flex items-center justify-center gap-2 flex-shrink-0"
            >
              {isLoading ? (
                <span>Searching...</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>Verify Now</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Test Buttons */}
          <div className="mt-5 pt-5 border-t border-slate-700/80 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-bold text-slate-300">Quick Test Records:</span>
            {sampleCertificates.slice(0, 5).map((c) => (
              <button
                key={c.certificateNo}
                type="button"
                onClick={() => {
                  setQuery(c.certificateNo);
                  handleSearch(c.certificateNo);
                }}
                className="px-2.5 py-1 bg-slate-700/80 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-600 transition"
              >
                {c.studentName} ({c.courseCode})
              </button>
            ))}
          </div>
        </div>

        {/* Verification Result Card */}
        {hasSearched && (
          <div>
            {result ? (
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-emerald-500 relative overflow-hidden animate-in zoom-in-95 duration-200">
                
                {/* Top Certificate Status Ribbon */}
                <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-slate-200 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-600 text-white text-xs font-black uppercase px-2.5 py-0.5 rounded-full">
                          ✓ Verified Authentic Record
                        </span>
                        <span className="text-xs text-slate-500 font-bold font-mono">Record ID: {result.certificateNo}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Government &amp; Industry Recognized Academic Credential</p>
                    </div>
                  </div>

                  <button
                    onClick={printCertificate}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition border border-slate-300"
                  >
                    <Printer className="w-4 h-4" />
                    Print / Download Proof
                  </button>
                </div>

                {/* Institutional Header */}
                <div className="text-center py-6 border-b border-slate-200">
                  <p className="text-xs font-bold text-blue-800 uppercase tracking-widest mb-1">
                    National Digital Literacy Mission (NDLM) Partner
                  </p>
                  <h3 className="text-xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                    C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE
                  </h3>
                  <p className="text-xs text-slate-600 font-semibold uppercase">
                    Mundian Kalan, 33 Feet Road, Ludhiana (Punjab) - 141015 • Center Code: {result.centerCode}
                  </p>
                </div>

                {/* Credential Details Grid with Student Photo */}
                <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 text-sm items-center">
                  
                  {/* Student Photo */}
                  <div className="md:col-span-3 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <img
                      src={result.photoUrl}
                      alt={result.studentName}
                      className="w-28 h-32 object-cover rounded-xl border-2 border-slate-300 shadow-sm"
                    />
                    <span className="mt-2 text-xs font-bold text-slate-800 uppercase text-center">
                      {result.studentName}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold">Status: Active Credential</span>
                  </div>

                  {/* Details Data */}
                  <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-500">Student Name:</span>
                        <strong className="text-slate-950 font-bold uppercase">{result.studentName}</strong>
                      </div>

                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-500">Father&apos;s Name:</span>
                        <strong className="text-slate-800">{result.fatherName}</strong>
                      </div>

                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-500">Roll Number:</span>
                        <strong className="text-blue-700 font-mono">{result.rollNo}</strong>
                      </div>

                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-500">Certificate Number:</span>
                        <strong className="text-slate-900 font-mono">{result.certificateNo}</strong>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-500">Course / Program:</span>
                        <strong className="text-slate-950 text-right">{result.courseName}</strong>
                      </div>

                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-500">Course Duration:</span>
                        <strong className="text-slate-800">{result.duration}</strong>
                      </div>

                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-500">Grade &amp; Score:</span>
                        <span className="bg-amber-100 text-amber-900 font-black px-2 py-0.5 rounded text-xs border border-amber-300">
                          Grade {result.grade} ({result.percentage}%)
                        </span>
                      </div>

                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-500">Date of Issuance:</span>
                        <strong className="text-slate-800">{result.issueDate}</strong>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Validation Stamp */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <div className="p-2 border border-slate-300 rounded-xl bg-slate-50">
                      <QrCode className="w-12 h-12 text-slate-800" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Scan QR Code to verify online</p>
                      <p>Center Superintendent: Chandan Kumar</p>
                      <p className="text-[10px] text-emerald-600 font-semibold">Valid for Employment in Govt. &amp; Corporate Sectors</p>
                    </div>
                  </div>

                  <div className="text-center sm:text-right">
                    <div className="font-serif italic text-blue-900 font-bold text-base mb-1">
                      Chandan Kumar
                    </div>
                    <div className="border-t border-slate-400 pt-1 text-slate-700 font-bold">
                      Director / Authorized Signatory
                    </div>
                    <div className="text-[11px] text-slate-500">
                      C-NET Multimedia Education Centre, Ludhiana
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className="bg-slate-800 border border-red-500/40 p-8 rounded-3xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 mx-auto flex items-center justify-center">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">No Certificate Found</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  We could not find an issued certificate matching &quot;{query}&quot;. Please check the roll number or search by student name in the table below.
                </p>
              </div>
            )}
          </div>
        )}

        {/* 2. Complete Certified Students Directory ("Jinko Certificate Issue Hue Hai Vo Bhi Display Kijiye") */}
        <IssuedCertificatesTable
          onSelectCertificate={(cert) => {
            setQuery(cert.certificateNo);
            handleSearch(cert.certificateNo);
            window.scrollTo({ top: 300, behavior: 'smooth' });
          }}
        />

      </div>
    </section>
  );
}

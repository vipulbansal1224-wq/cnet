"use client";

import React, { useState } from 'react';
import { sampleCertificates, CertificateRecord } from '../data/certificatesData';
import { 
  Award, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  ArrowRight,
  Filter,
  Eye
} from 'lucide-react';
import Link from 'next/link';

interface IssuedCertificatesTableProps {
  onSelectCertificate?: (cert: CertificateRecord) => void;
}

export default function IssuedCertificatesTable({ onSelectCertificate }: IssuedCertificatesTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [courseFilter, setCourseFilter] = useState('ALL');

  const filteredList = sampleCertificates.filter(cert => {
    const matchesSearch = 
      cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.certificateNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCourse = courseFilter === 'ALL' || cert.courseCode === courseFilter;
    return matchesSearch && matchesCourse;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-emerald-700" />
            Official Certification Records
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
            Certified Students Directory (जारी किए गए प्रमाण पत्र)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            List of students successfully issued government &amp; industry valid certificates at C-NET Ludhiana center.
          </p>
        </div>

        {/* Quick Search */}
        <div className="w-full md:w-80 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search student, roll no or course..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 text-xs font-bold">
        {[
          { code: 'ALL', label: 'All Certified Students' },
          { code: 'ADCA', label: 'ADCA (1 Year)' },
          { code: 'DCA', label: 'DCA (6 Months)' },
          { code: 'TALLY-GST', label: 'Tally & Excel' },
          { code: 'BCC-DEO', label: 'Data Entry Operator' },
          { code: 'DTP', label: 'DTP & Graphics' }
        ].map(tab => (
          <button
            key={tab.code}
            onClick={() => setCourseFilter(tab.code)}
            className={`px-3 py-1.5 rounded-lg transition ${
              courseFilter === tab.code
                ? 'bg-blue-700 text-white shadow'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Responsive Table / Cards Grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-700 font-black uppercase text-[11px] tracking-wider border-b border-slate-200">
              <th className="py-3 px-4">Student</th>
              <th className="py-3 px-4">Certificate No. / Roll No.</th>
              <th className="py-3 px-4">Course &amp; Duration</th>
              <th className="py-3 px-4">Issue Date</th>
              <th className="py-3 px-4 text-center">Grade</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredList.map((cert) => (
              <tr key={cert.certificateNo} className="hover:bg-blue-50/60 transition group">
                {/* Student */}
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={cert.photoUrl}
                      alt={cert.studentName}
                      className="w-10 h-10 rounded-full object-cover border border-slate-300 flex-shrink-0"
                    />
                    <div>
                      <strong className="text-slate-900 font-bold uppercase block text-sm group-hover:text-blue-700">
                        {cert.studentName}
                      </strong>
                      <span className="text-xs text-slate-500">S/o, D/o {cert.fatherName}</span>
                    </div>
                  </div>
                </td>

                {/* Numbers */}
                <td className="py-3.5 px-4 font-mono text-xs">
                  <strong className="text-slate-900 block">{cert.certificateNo}</strong>
                  <span className="text-slate-500">{cert.rollNo}</span>
                </td>

                {/* Course */}
                <td className="py-3.5 px-4">
                  <strong className="text-slate-800 block text-xs">{cert.courseName}</strong>
                  <span className="text-slate-500 text-[11px]">{cert.duration}</span>
                </td>

                {/* Issue Date */}
                <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                  <span className="flex items-center gap-1 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    {cert.issueDate}
                  </span>
                </td>

                {/* Grade */}
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-block bg-amber-100 text-amber-900 border border-amber-300 font-black px-2 py-0.5 rounded text-xs">
                    {cert.grade} ({cert.percentage}%)
                  </span>
                </td>

                {/* Action button */}
                <td className="py-3.5 px-4 text-right">
                  <Link
                    href={`/verify-certificate?cert=${encodeURIComponent(cert.certificateNo)}`}
                    className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Verify</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 border-t border-slate-100 gap-2">
        <span>Showing <strong>{filteredList.length}</strong> certified students from C-NET Ludhiana</span>
        <span className="text-emerald-700 font-bold">✓ All certificates are cryptographically verified and active</span>
      </div>

    </div>
  );
}

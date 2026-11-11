"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import MarqueeTicker from '../../components/MarqueeTicker';
import CoursesSection from '../../components/CoursesSection';
import StudentPortalModal from '../../components/StudentPortalModal';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CoursesPage() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleOpenAdmission = (courseName?: string) => {
    setSelectedCourse(courseName || '');
    setAdmissionModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header onOpenAdmission={() => handleOpenAdmission()} />
      <MarqueeTicker />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="text-xs text-blue-300 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-amber-400 font-bold">Courses</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Diploma &amp; Certificate Programs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
            Explore industry-recognized computer applications, accounting, programming, CAD drafting, and government NIELIT CCC exam preparation programs.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        <CoursesSection onOpenAdmission={handleOpenAdmission} />
      </main>

      <Footer />

      <StudentPortalModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
        defaultTab="admission"
        preselectedCourse={selectedCourse}
      />
    </div>
  );
}

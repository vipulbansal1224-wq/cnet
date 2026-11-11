"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import MarqueeTicker from '../components/MarqueeTicker';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CoursesSection from '../components/CoursesSection';
import CertificateVerifier from '../components/CertificateVerifier';
import ITWorldSection from '../components/ITWorldSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import MockExamModal from '../components/MockExamModal';
import StudentPortalModal from '../components/StudentPortalModal';

export default function Home() {
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [studentModalTab, setStudentModalTab] = useState<'admission' | 'login'>('admission');
  const [selectedCourseForAdmission, setSelectedCourseForAdmission] = useState<string>('');

  const handleOpenVerify = () => {
    const el = document.getElementById('verify');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenExam = () => {
    setIsExamModalOpen(true);
  };

  const handleOpenAdmission = (courseName?: string) => {
    setSelectedCourseForAdmission(courseName || '');
    setStudentModalTab('admission');
    setIsStudentModalOpen(true);
  };

  const handleOpenLogin = () => {
    setStudentModalTab('login');
    setIsStudentModalOpen(true);
  };

  const handleExploreCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Sticky Header */}
      <Header
        onOpenVerify={handleOpenVerify}
        onOpenExam={handleOpenExam}
        onOpenAdmission={() => handleOpenAdmission()}
      />

      {/* Real-time Ticker */}
      <MarqueeTicker />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <HeroSection
          onOpenVerify={handleOpenVerify}
          onOpenExam={handleOpenExam}
          onOpenAdmission={() => handleOpenAdmission()}
          onExploreCourses={handleExploreCourses}
        />

        {/* Institutional Mission & Legacy */}
        <AboutSection />

        {/* Complete Diploma & Certification Course Catalog */}
        <CoursesSection
          onOpenAdmission={handleOpenAdmission}
        />

        {/* Live Digital Certificate & Credential Verifier */}
        <CertificateVerifier />

        {/* IT World (IT ज्ञान, Tips & Tricks, Hindi Tech Articles) */}
        <ITWorldSection />

        {/* Photo Gallery & Campus Life */}
        <GallerySection />

        {/* Location, Director Chandan Kumar info & Contact Form */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenVerify={handleOpenVerify}
        onOpenExam={handleOpenExam}
        onOpenAdmission={() => handleOpenAdmission()}
      />

      {/* Interactive Online CCC Mock Exam Modal */}
      <MockExamModal
        isOpen={isExamModalOpen}
        onClose={() => setIsExamModalOpen(false)}
      />

      {/* Student Portal & Online Admission Modal */}
      <StudentPortalModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        defaultTab={studentModalTab}
        preselectedCourse={selectedCourseForAdmission}
      />

    </div>
  );
}

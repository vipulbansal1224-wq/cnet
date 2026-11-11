"use client";

import React, { useState } from 'react';
import { coursesData, Course } from '../data/coursesData';
import { 
  BookOpen, 
  Clock, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  GraduationCap, 
  X, 
  Briefcase, 
  FileText,
  PhoneCall,
  Search,
  Sparkles
} from 'lucide-react';

interface CoursesSectionProps {
  onOpenAdmission: (courseName?: string) => void;
}

export default function CoursesSection({ onOpenAdmission }: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (course.hindiTitle && course.hindiTitle.includes(searchQuery)) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Programs We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industry-Recognized IT & Vocational Courses
          </h2>
          <p className="text-slate-600 text-base">
            From 1-year master diplomas to fast-track 3-month government certifications.
            Each course is packed with live lab practicals and job readiness.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'all', label: 'All Courses' },
              { id: 'diploma', label: 'Diploma Programs (ADCA, DCA, O Level)' },
              { id: 'certificate', label: 'Certificates (CCC, BCC, CAD)' },
              { id: 'accounting', label: 'Tally & Advanced Excel' },
              { id: 'programming', label: 'Coding (C, C++)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  selectedCategory === tab.id
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course or code..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header & Badge */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-extrabold text-xs tracking-wider border border-blue-200">
                    {course.code}
                  </span>
                  {course.badge && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold border border-amber-200">
                      ★ {course.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
                    {course.title}
                  </h3>
                  {course.hindiTitle && (
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {course.hindiTitle}
                    </p>
                  )}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {course.description}
                </p>

                {/* Metadata Pills */}
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span className="truncate">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{course.eligibility}</span>
                  </div>
                </div>

                {/* Highlights Preview */}
                <ul className="space-y-1.5 pt-2">
                  {course.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveCourseModal(course)}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 transition flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  View Syllabus
                </button>

                <button
                  onClick={() => onOpenAdmission(course.title)}
                  className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm transition flex items-center gap-1"
                >
                  Enroll Now
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Course Detailed Modal */}
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
              
              {/* Modal Header */}
              <div className="p-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-start justify-between sticky top-0 z-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded uppercase">
                      {activeCourseModal.code}
                    </span>
                    <span className="text-xs text-blue-200">{activeCourseModal.level}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {activeCourseModal.title}
                  </h3>
                  {activeCourseModal.hindiTitle && (
                    <p className="text-xs text-amber-300 font-medium">{activeCourseModal.hindiTitle}</p>
                  )}
                </div>
                <button
                  onClick={() => setActiveCourseModal(null)}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 text-slate-800 text-sm">
                
                {/* Meta Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase block">Course Duration</span>
                    <strong className="text-slate-900">{activeCourseModal.duration}</strong>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase block">Eligibility</span>
                    <strong className="text-slate-900">{activeCourseModal.eligibility}</strong>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase block">Fee Structure</span>
                    <strong className="text-emerald-700">{activeCourseModal.fees}</strong>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">Program Overview</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {activeCourseModal.description}
                  </p>
                </div>

                {/* Modules Syllabus */}
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-700" />
                    Complete Module Breakdown
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {activeCourseModal.modules.map((m, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs sm:text-sm">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-slate-700 font-medium">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-700" />
                    Job Opportunities After Completion
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCourseModal.careerOpportunities.map((career, i) => (
                      <span key={i} className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium px-3 py-1 rounded-full">
                        ✓ {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0">
                <a
                  href={`https://wa.me/918288843354?text=Hello%20C-NET%20Ludhiana,%20I%20want%20information%20and%20fee%20details%20about%20${encodeURIComponent(activeCourseModal.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition shadow"
                >
                  <PhoneCall className="w-4 h-4" />
                  Chat on WhatsApp for Fees
                </a>

                <button
                  onClick={() => {
                    const title = activeCourseModal.title;
                    setActiveCourseModal(null);
                    onOpenAdmission(title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition shadow"
                >
                  <GraduationCap className="w-4 h-4" />
                  Apply for Admission
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

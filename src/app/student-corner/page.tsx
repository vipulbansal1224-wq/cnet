"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import MarqueeTicker from '../../components/MarqueeTicker';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { 
  User, 
  Lock, 
  GraduationCap, 
  Calendar, 
  Download, 
  Bell, 
  FileText, 
  CheckCircle,
  Phone,
  Send,
  AlertCircle
} from 'lucide-react';
import { coursesData } from '../../data/coursesData';

export default function StudentCornerPage() {
  const [tab, setTab] = useState<'login' | 'admission'>('login');

  // Login form
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Admission form
  const [name, setName] = useState('');
  const [admissionMobile, setAdmissionMobile] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Advance Diploma in Computer Application');
  const [qualification, setQualification] = useState('12th Pass');
  const [city, setCity] = useState('Ludhiana');
  const [comments, setComments] = useState('');
  const [admissionSuccess, setAdmissionSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length < 10) {
      setLoginError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setLoginError('');
    setIsLoggedIn(true);
  };

  const handleAdmission = (e: React.FormEvent) => {
    e.preventDefault();
    setAdmissionSuccess(true);
    const text = `*New Admission Inquiry - C-NET Ludhiana*%0A*Name:* ${name}%0A*Mobile:* ${admissionMobile}%0A*Course:* ${selectedCourse}%0A*Qualification:* ${qualification}%0A*City:* ${city}%0A*Notes:* ${comments}`;
    window.open(`https://wa.me/918288843354?text=${text}`, '_blank');
  };

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
            <span className="text-amber-400 font-bold">Student&apos;s Corner</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Student&apos;s Corner &amp; Admission Portal
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
            Access your attendance records, batch schedules, assignment downloads, or apply for fresh admissions for Batch 2026.
          </p>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Cols: Login / Admission Form */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Tab Selector */}
              <div className="flex border-b border-slate-200 bg-white rounded-2xl p-1.5 shadow-sm">
                <button
                  onClick={() => setTab('login')}
                  className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                    tab === 'login'
                      ? 'bg-blue-700 text-white shadow'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Lock className="w-4 h-4" />
                  Student Portal Login
                </button>
                <button
                  onClick={() => setTab('admission')}
                  className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                    tab === 'admission'
                      ? 'bg-blue-700 text-white shadow'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  New Admission Form (2026-27)
                </button>
              </div>

              {/* Tab 1: Login */}
              {tab === 'login' ? (
                <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
                  {isLoggedIn ? (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-emerald-50 border border-emerald-200 rounded-2xl gap-4">
                        <div className="flex items-center gap-4">
                          <img
                            src="/images/student_1.jpg"
                            alt="Student Avatar"
                            className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400"
                          />
                          <div>
                            <span className="text-xs font-bold text-emerald-800 uppercase">Registered Student</span>
                            <h3 className="text-xl font-black text-slate-900">MOHIT KUMAR</h3>
                            <p className="text-xs text-slate-600">Roll No: <strong className="text-blue-700 font-mono">CNET/LDH/2024/0101</strong></p>
                            <p className="text-xs text-slate-500">Course: Advance Diploma in Computer Application (ADCA)</p>
                          </div>
                        </div>

                        <button
                          onClick={() => setIsLoggedIn(false)}
                          className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
                        >
                          Sign Out
                        </button>
                      </div>

                      {/* Performance & Status Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                          <span className="text-xs text-slate-500 block font-semibold">Class Attendance</span>
                          <p className="text-2xl font-black text-emerald-600 mt-1">92%</p>
                          <p className="text-[11px] text-slate-400">Regular attendance</p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                          <span className="text-xs text-slate-500 block font-semibold">Lab Practical Score</span>
                          <p className="text-2xl font-black text-blue-600 mt-1">88 / 100</p>
                          <p className="text-[11px] text-slate-400">Grade A+ Achieved</p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                          <span className="text-xs text-slate-500 block font-semibold">Fee Installment</span>
                          <p className="text-2xl font-black text-purple-600 mt-1">Cleared</p>
                          <p className="text-[11px] text-slate-400">No pending dues</p>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl space-y-2 text-xs sm:text-sm text-slate-700">
                        <p className="font-bold text-blue-900">Notice for ADCA Batch A:</p>
                        <p>• Final project submission for Tally Prime with GST is scheduled for next Monday.</p>
                        <p>• Students can give online CCC practice exams directly via the Online Paper tab.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto py-4">
                      <div className="text-center space-y-1 mb-6">
                        <h3 className="text-2xl font-black text-slate-900">Student Sign In</h3>
                        <p className="text-xs text-slate-500">
                          Enter your registered mobile number and password assigned at the center.
                        </p>
                      </div>

                      {loginError && (
                        <div className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-xl flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{loginError}</span>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Registered Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="Enter 10-digit mobile number"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your student password"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>

                      <div className="text-[11px] text-slate-500 text-right">
                        <span>Forgot password? Contact center: <strong>8288843354</strong></span>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold transition shadow text-sm"
                      >
                        Sign In to Student Dashboard
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                /* Tab 2: Admission Form */
                <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
                  {admissionSuccess ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-black text-slate-900">Admission Inquiry Logged!</h4>
                      <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Thank you, <strong>{name}</strong>. Your inquiry for <strong>{selectedCourse}</strong> has been received. Our counselor will call you on <strong>{admissionMobile}</strong>.
                      </p>
                      <button
                        onClick={() => setAdmissionSuccess(false)}
                        className="px-6 py-2 rounded-xl bg-blue-700 text-white text-xs font-bold hover:bg-blue-800"
                      >
                        Submit Another Form
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleAdmission} className="space-y-4 text-xs sm:text-sm">
                      <div className="space-y-1 mb-4">
                        <h3 className="text-xl font-bold text-slate-900">Apply for Direct Admission</h3>
                        <p className="text-xs text-slate-500">
                          Fill the online form. Get syllabus counseling and fee concession eligibility.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Full Student Name *</label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Aman Sharma"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Mobile No (WhatsApp) *</label>
                          <input
                            type="tel"
                            required
                            value={admissionMobile}
                            onChange={(e) => setAdmissionMobile(e.target.value)}
                            placeholder="e.g. 9876543210"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Course Choice *</label>
                          <select
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white font-medium"
                          >
                            {coursesData.map(c => (
                              <option key={c.id} value={c.title}>
                                {c.code} - {c.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Highest Qualification</label>
                          <select
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                          >
                            <option>10th Matriculation</option>
                            <option>12th Standard</option>
                            <option>Graduate (BA/B.Com/B.Sc/BCA)</option>
                            <option>Post Graduate / Working Professional</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">City / Residential Area</label>
                          <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Ludhiana / Mundian Kalan / Other"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. aman@gmail.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Comments / Specific Timings</label>
                        <textarea
                          rows={2}
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          placeholder="Preferred morning or evening batch, questions about installments..."
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold transition shadow-md flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Admission Application on WhatsApp</span>
                      </button>
                    </form>
                  )}
                </div>
              )}

            </div>

            {/* Right 4 Cols: Notices & Downloads */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Notice Board */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Bell className="w-5 h-5 text-amber-500 animate-bounce" />
                  <h4 className="font-extrabold text-slate-900 text-base">Campus Notice Board</h4>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl space-y-1">
                    <span className="font-bold text-amber-900 block">Fresh Batches 2026:</span>
                    <p>New batches for ADCA, DCA and Tally Prime commencing on 1st &amp; 15th of every month.</p>
                  </div>

                  <div className="p-3 bg-blue-50/70 border border-blue-200/60 rounded-xl space-y-1">
                    <span className="font-bold text-blue-900 block">NIELIT CCC Exam Cycle:</span>
                    <p>Online CCC mock test papers are open. All enrolled students are requested to complete 5 mock sets.</p>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="font-bold text-slate-900 block">Certificate Distribution:</span>
                    <p>Certificates for the completed winter session have arrived at the Mundian Kalan center.</p>
                  </div>
                </div>
              </div>

              {/* Student Downloads */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-6 rounded-3xl shadow-lg space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-blue-800">
                  <Download className="w-5 h-5 text-amber-400" />
                  <h4 className="font-bold text-base">Student Downloads</h4>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li>
                    <a 
                      href="/courses" 
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between"
                    >
                      <span>Course Syllabus PDF (All Programs)</span>
                      <Download className="w-3.5 h-3.5 text-amber-400" />
                    </a>
                  </li>
                  <li>
                    <Link 
                      href="/online-paper" 
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between"
                    >
                      <span>CCC Model Question Paper &amp; Answers</span>
                      <Download className="w-3.5 h-3.5 text-amber-400" />
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="tel:8288843354" 
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between"
                    >
                      <span>Admission Form &amp; Fee Concession Form</span>
                      <Download className="w-3.5 h-3.5 text-amber-400" />
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

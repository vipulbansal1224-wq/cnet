"use client";

import React, { useState } from 'react';
import { 
  X, 
  User, 
  Lock, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  CheckCircle, 
  Send, 
  FileText, 
  Calendar,
  Download,
  AlertCircle
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

interface StudentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'admission' | 'login';
  preselectedCourse?: string;
}

export default function StudentPortalModal({ 
  isOpen, 
  onClose, 
  defaultTab = 'admission',
  preselectedCourse = ''
}: StudentPortalModalProps) {
  const [tab, setTab] = useState<'admission' | 'login'>(defaultTab);

  // Admission form state
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(preselectedCourse || 'Advance Diploma in Computer Application');
  const [city, setCity] = useState('Ludhiana');
  const [qualification, setQualification] = useState('12th Pass');
  const [message, setMessage] = useState('');
  const [submittedAdmission, setSubmittedAdmission] = useState(false);

  // Student login state
  const [loginMobile, setLoginMobile] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  if (!isOpen) return null;

  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedAdmission(true);

    // Send WhatsApp notification
    const text = `*New Admission Enquiry - C-NET Ludhiana*%0A*Name:* ${fullName}%0A*Mobile:* ${mobile}%0A*Email:* ${email}%0A*Course:* ${selectedCourse}%0A*City:* ${city}%0A*Qualification:* ${qualification}%0A*Comments:* ${message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/918288843354?text=${text}`;
    
    // Open WhatsApp in new tab
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginMobile.length < 10) {
      setLoginError('Please enter a valid 10-digit mobile number.');
      return;
    }
    // Simulate successful login
    setLoginError('');
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shadow">
              C-NET
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                {tab === 'admission' ? 'Online Admission & Enquiry' : 'Student Corner & Portal'}
              </h3>
              <p className="text-xs text-blue-200">
                C-NET Multimedia Computer Education Centre, Ludhiana
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs sm:text-sm font-bold">
          <button
            onClick={() => setTab('admission')}
            className={`flex-1 py-3 text-center transition flex items-center justify-center gap-2 ${
              tab === 'admission'
                ? 'bg-white text-blue-700 border-b-2 border-blue-700'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Apply Online Admission
          </button>
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-3 text-center transition flex items-center justify-center gap-2 ${
              tab === 'login'
                ? 'bg-white text-blue-700 border-b-2 border-blue-700'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Lock className="w-4 h-4" />
            Student Login (Student&apos;s Corner)
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {tab === 'admission' ? (
            submittedAdmission ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Enquiry Submitted Successfully!</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your application for <strong>{selectedCourse}</strong> has been logged. Our academic counselor will call you shortly on <strong>{mobile}</strong>.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmittedAdmission(false)}
                    className="px-5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                  >
                    Submit Another Query
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-2 rounded-xl bg-blue-700 text-white text-xs font-bold hover:bg-blue-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleAdmissionSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Highest Qualification
                    </label>
                    <select
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    >
                      <option value="10th Pass">10th Matriculation</option>
                      <option value="12th Pass">10+2 / 12th Standard</option>
                      <option value="Graduation Underway">Pursuing Graduation (BA / B.Com / B.Sc / BCA)</option>
                      <option value="Graduate">Graduate / Post Graduate</option>
                      <option value="Working Professional">Working Professional / Job Seeker</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Select Desired Course / Program *
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white font-medium"
                  >
                    {coursesData.map(c => (
                      <option key={c.id} value={c.title}>
                        {c.code} - {c.title} ({c.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      City / Area
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ludhiana / Mundian Kalan / Other"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Preferred Batch Timing
                    </label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
                      <option>Morning (08:00 AM - 11:00 AM)</option>
                      <option>Noon (11:00 AM - 02:00 PM)</option>
                      <option>Evening (03:00 PM - 07:00 PM)</option>
                      <option>Sunday Special Batch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Any Questions / Remarks
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about fee concession, batch start dates, or syllabus..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold transition shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Form & Connect on WhatsApp</span>
                </button>
              </form>
            )
          ) : (
            /* Student's Corner Login */
            isLoggedIn ? (
              <div className="space-y-6">
                <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-emerald-800 block">Logged In as Student</span>
                    <strong className="text-slate-900 text-lg">MOHIT KUMAR</strong>
                    <p className="text-xs text-slate-600">Roll No: CNET/LDH/2024/0101 • ADCA (Batch A)</p>
                  </div>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Logout
                  </button>
                </div>

                {/* Dashboard Tabs Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      Class Attendance
                    </span>
                    <p className="text-2xl font-black text-emerald-600">92%</p>
                    <p className="text-slate-500">Regular attendance logged in Ludhiana Lab.</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-amber-600" />
                      Fee Installment Status
                    </span>
                    <p className="text-2xl font-black text-blue-600">Up to Date</p>
                    <p className="text-slate-500">Next installment due on 10th Dec 2026.</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 space-y-2 text-xs text-slate-700">
                  <strong className="text-blue-900 block font-bold">Upcoming Assignment & Exam:</strong>
                  <p>• Practical Lab Exam for Tally Prime with GST scheduled for coming Saturday 10:00 AM.</p>
                  <p>• Free CCC Online Paper practice module enabled.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4 max-w-md mx-auto py-4">
                <div className="text-center space-y-1 mb-4">
                  <h4 className="font-bold text-lg text-slate-900">Student Portal Login</h4>
                  <p className="text-xs text-slate-500">
                    Enter your registered Mobile Number and Password provided by C-NET center.
                  </p>
                </div>

                {loginError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={loginMobile}
                    onChange={(e) => setLoginMobile(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  />
                </div>

                <div className="text-[11px] text-slate-500 text-right">
                  <span>Forgot password? Contact center: <strong>8288843354</strong></span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold transition shadow text-sm"
                >
                  Login to Student Dashboard
                </button>
              </form>
            )
          )}
        </div>

      </div>
    </div>
  );
}

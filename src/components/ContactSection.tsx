"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  Globe, 
  CheckCircle, 
  PhoneCall,
  User,
  MessageSquare
} from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseInterest, setCourseInterest] = useState('ADCA / DCA');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);

    const text = `*New Contact Enquiry - C-NET Ludhiana*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email || 'N/A'}%0A*Course Interest:* ${courseInterest}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/918288843354?text=${text}`;
    
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Contact C-NET Ludhiana Campus
          </h2>
          <p className="text-slate-300 text-base">
            Have questions about course fees, class timings, or certificate verification? Visit our campus or reach out directly to our director.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Campus Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Campus Location</span>
                <h3 className="text-xl font-bold text-white mt-1">
                  C-NET Multimedia Computer Education Centre
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Campus Address:</strong>
                    <p className="leading-relaxed">
                      Ram Nagar Market, Opp- Street No. 1, 33 Feet Road, Mundian Kalan, Ludhiana (Punjab) — PIN: 141015
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Direct Telephone / Mobile:</strong>
                    <p className="space-x-3">
                      <a href="tel:8288843354" className="text-amber-400 font-bold hover:underline">+91 82888 43354</a>
                      <span>•</span>
                      <a href="tel:9780553354" className="text-slate-300 hover:text-white hover:underline">+91 97805 53354</a>
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Contact Person: Chandan Kumar (Director)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Official Email:</strong>
                    <a href="mailto:ckc020687@gmail.com" className="text-blue-300 hover:underline">
                      ckc020687@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-600/30 border border-amber-500/40 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Lab & Office Hours:</strong>
                    <p>Monday – Saturday: 08:00 AM – 07:00 PM</p>
                    <p className="text-[11px] text-slate-400">Sunday: Special Doubt Classes & Exam Batches</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-emerald-900/60 border border-emerald-500/40 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-emerald-400">Instant WhatsApp Chat</p>
                  <p className="text-xs text-slate-300">Fastest response for admissions</p>
                </div>
                <a
                  href="https://wa.me/918288843354?text=Hello%20C-NET%20Ludhiana,%20I%20have%20an%20enquiry%20regarding%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition shadow flex items-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/90 p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send Instant Course Enquiry</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill the quick form below. We will revert with complete syllabus and fee concessions within 2 hours.
              </p>

              {isSent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You, {name}!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your message has been sent to Director Chandan Kumar. We look forward to guiding you in your technical education.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Gurpreet Singh"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. student@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Course of Interest</label>
                      <select
                        value={courseInterest}
                        onChange={(e) => setCourseInterest(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>ADCA (Advance Diploma - 1 Year)</option>
                        <option>DCA (Diploma in Computer App - 6 Months)</option>
                        <option>CCC (Course on Computer Concepts)</option>
                        <option>Tally Prime with GST & E-Way Bill</option>
                        <option>Advanced Excel & MIS Reporting</option>
                        <option>'O' Level Diploma</option>
                        <option>AutoCAD 2D & 3D Drafting</option>
                        <option>BCC / Basic Computer & Typing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Message / Query *</label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your query regarding batch timing, fee discount, or admission..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry & Get Instant Callback</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Heart, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-amber-500 flex items-center justify-center text-white font-black text-lg">
                C
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  C-NET <span className="text-blue-500">Multimedia</span>
                </h3>
                <p className="text-[11px] text-slate-400 uppercase font-semibold">
                  Computer Education Centre • Ludhiana
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Partner of the National Digital Literacy Mission (NDLM). Committed to delivering high-quality, practical computer literacy, financial accounting (Tally & GST), and competitive computer credentials to empower rural and urban youth.
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <p className="text-amber-400 font-bold font-hind">&quot;हुनर है तो कदर है&quot;</p>
              <p className="text-slate-400">Center Code: <span className="text-white font-mono font-bold">CNET-LDH-01</span></p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  href="/verify-certificate" 
                  className="hover:text-emerald-400 transition flex items-center gap-1.5 font-semibold text-emerald-400"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Verify Student Certificate</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/online-paper" 
                  className="hover:text-blue-400 transition flex items-center gap-1.5 font-semibold text-blue-400"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Online CCC Mock Test Paper</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/student-corner" 
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Student&apos;s Corner &amp; Login</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses" 
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Diploma &amp; Certificate Courses</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/it-world" 
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>IT World (आईटी ज्ञान और टिप्स)</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Campus Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>About Our Mission</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-white transition flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Contact Campus</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Courses */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Flagship Courses
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>ADCA (1 Year Master)</li>
              <li>DCA (6 Months)</li>
              <li>CCC (NIELIT Exam)</li>
              <li>Tally Prime + GST</li>
              <li>Advanced Excel & MIS</li>
              <li>AutoCAD 2D & 3D</li>
              <li>DTP Graphic Design</li>
              <li>&apos;O&apos; Level Diploma</li>
            </ul>
          </div>

          {/* Col 4: Campus Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Ludhiana Campus
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Ram Nagar Market, Opp- St. no 1, 33 Feet Road, Mundian Kalan, Ludhiana (PB) - 141015</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:8288843354" className="hover:text-white font-bold text-white">+91 82888 43354</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:9780553354" className="hover:text-white">+91 97805 53354</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:ckc020687@gmail.com" className="hover:text-white">ckc020687@gmail.com</a>
              </p>
              <p className="pt-2 text-[11px] text-slate-500">
                Contact: <strong>Chandan Kumar</strong> (Director)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Copyright © 2026 <strong>C-NET MULTIMEDIA COMPUTER EDUCATION CENTRE, LUDHIANA</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Affiliation: NDLM India</span>
            <span>•</span>
            <span className="font-hind">&quot;हुनर है तो कदर है&quot;</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

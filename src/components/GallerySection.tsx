"use client";

import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Award } from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lab' | 'events' | 'certificates'>('all');

  const galleryItems = [
    {
      id: 1,
      title: 'C-NET Computer Practical Lab Workstation',
      subtitle: 'Students working on practical assignments at C-NET Ludhiana',
      category: 'lab',
      tag: 'Lab Session',
      image: '/images/gallery_1149.jpg'
    },
    {
      id: 2,
      title: 'Annual Certificate Felicitation Ceremony',
      subtitle: 'Director Chandan Kumar awarding diplomas to certified students',
      category: 'certificates',
      tag: 'Convocation',
      image: '/images/gallery_1150.jpg'
    },
    {
      id: 3,
      title: 'Classroom Theory & Interactive Lectures',
      subtitle: 'Audio-visual lectures on software tools & digital concepts',
      category: 'events',
      tag: 'Classroom',
      image: '/images/gallery_1164.jpg'
    },
    {
      id: 4,
      title: 'Hands-on Tally & Accounting Practical Training',
      subtitle: 'Students performing real voucher entry and GST billing exercises',
      category: 'lab',
      tag: 'Practical Lab',
      image: '/images/gallery_1168.jpg'
    },
    {
      id: 5,
      title: 'Successful Batch Convocation & Awards',
      subtitle: 'Students receiving their National Digital Literacy certificates',
      category: 'certificates',
      tag: 'Achievements',
      image: '/images/gallery_1916.jpg'
    },
    {
      id: 6,
      title: 'Campus Facilities & Computer Center',
      subtitle: 'Well-equipped computer lab at Mundian Kalan, Ludhiana',
      category: 'lab',
      tag: 'Campus View',
      image: '/images/gallery_2211.jpg'
    },
    {
      id: 7,
      title: 'Digital Literacy & Computer Awareness Camp',
      subtitle: 'Community digital learning drive for youth and women',
      category: 'events',
      tag: 'Community',
      image: '/images/hero_03.jpg'
    },
    {
      id: 8,
      title: 'Graphic Design & DTP Project Showcase',
      subtitle: 'Flex banner, logo design and publication projects',
      category: 'lab',
      tag: 'DTP Lab',
      image: '/images/hero_04.jpg'
    },
    {
      id: 9,
      title: 'Special NIELIT CCC Training Group',
      subtitle: 'Preparation batch for central & state government exams',
      category: 'certificates',
      tag: 'CCC Training',
      image: '/images/hero_05.jpg'
    }
  ];

  const filtered = galleryItems.filter(item => activeFilter === 'all' || item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4 text-blue-600" />
            Original Campus Life & Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Photo & Activity Gallery
          </h2>
          <p className="text-slate-600 text-base">
            Original photographs of our computer lab, practical training sessions, and certificate award ceremonies at C-NET Ludhiana.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'lab', label: 'Computer Labs & Practicals' },
            { id: 'certificates', label: 'Ceremony & Certificate Events' },
            { id: 'events', label: 'Classrooms & Training' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === f.id
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 bg-slate-900"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white space-y-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500 text-slate-950">
                  {item.tag}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

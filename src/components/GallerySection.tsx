"use client";

import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Award } from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lab' | 'events' | 'certificates'>('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Modern High-Tech Computer Lab',
      subtitle: 'Equipped with Core i5/i7 workstations, dual displays & high-speed fiber internet',
      category: 'lab',
      tag: 'Lab Facility',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Annual Certificate Distribution Ceremony',
      subtitle: 'Awarding government recognized diplomas to ADCA and CCC toppers',
      category: 'certificates',
      tag: 'Convocation',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Interactive Theory & Project Session',
      subtitle: 'Audio-visual lectures on computer architecture & programming',
      category: 'events',
      tag: 'Classroom',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Hands-on Tally Prime & GST Workshop',
      subtitle: 'Corporate billing voucher entry practice with live company accounts',
      category: 'lab',
      tag: 'Practical Training',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Speed Typing & Competition Winners',
      subtitle: 'Felicitation of students achieving 45+ WPM in English & Punjabi typing',
      category: 'certificates',
      tag: 'Student Awards',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Graphic Design & AutoCAD Drafting Lab',
      subtitle: 'Students creating 3D CAD models and DTP vector artwork',
      category: 'lab',
      tag: 'Creative Lab',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
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
            Campus Life & Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Photo & Activity Gallery
          </h2>
          <p className="text-slate-600 text-base">
            Glimpses of our state-of-the-art computer labs, classroom sessions, annual ceremonies, and student achievements at C-NET Ludhiana.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'lab', label: 'Computer Labs & Practicals' },
            { id: 'certificates', label: 'Ceremony & Certificate Events' },
            { id: 'events', label: 'Classrooms & Seminars' }
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
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white space-y-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500 text-slate-950">
                  {item.tag}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition">
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

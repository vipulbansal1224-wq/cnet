"use client";

import React, { useState } from 'react';
import { itArticles, ITArticle } from '../data/articlesData';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Tag, 
  ArrowRight, 
  X, 
  Share2, 
  ThumbsUp, 
  Sparkles,
  Lightbulb,
  Search
} from 'lucide-react';

export default function ITWorldSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<ITArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'it-gyan', label: 'IT ज्ञान (Technology)' },
    { id: 'tips-tricks', label: 'टिप्स & ट्रिक्स (Tips)' },
    { id: 'software', label: 'सॉफ्टवेयर जगत (Software)' },
    { id: 'quiz-facts', label: 'रोचक तथ्य (Fun Facts)' },
  ];

  const filteredArticles = itArticles.filter(art => {
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.titleHindi.includes(searchQuery) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="itworld" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            Knowledge & Tech Articles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            IT World (आईटी ज्ञान और रोचक तकनीकी जानकारियां)
          </h2>
          <p className="text-slate-600 text-base">
            Read daily practical computer guides, Windows shortcut secrets, tech history, and motivational knowledge curated by C-NET faculty in easy Hindi & English.
          </p>
        </div>

        {/* Categories Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  selectedCategory === c.id
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech article..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition flex flex-col justify-between overflow-hidden group"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={art.image}
                  alt={art.titleHindi}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 font-bold text-xs bg-blue-900/90 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {art.categoryLabel}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition leading-snug font-hind">
                    {art.titleHindi}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium italic mt-1">
                    {art.title}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mt-2 font-hind">
                    {art.summary}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {art.tags.map((t, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Article Trigger */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">{art.date}</span>
                <button
                  onClick={() => setActiveArticle(art)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 transition"
                >
                  <span>पूरा लेख पढ़ें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article Full Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
              
              {/* Modal Top */}
              <div className="p-6 bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 text-white flex items-start justify-between sticky top-0 z-10">
                <div className="space-y-1">
                  <span className="bg-amber-400 text-slate-950 text-[11px] font-black uppercase px-2 py-0.5 rounded">
                    {activeArticle.categoryLabel}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                    {activeArticle.titleHindi}
                  </h3>
                  <p className="text-xs text-blue-200 italic">{activeArticle.title}</p>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8 space-y-6 text-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">By {activeArticle.author}</span>
                  <div className="flex items-center gap-4">
                    <span>{activeArticle.date}</span>
                    <span>• {activeArticle.readTime}</span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-slate-800 text-sm font-medium leading-relaxed">
                  {activeArticle.summary}
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
                  {activeArticle.content.map((para, idx) => (
                    <p key={idx} className="whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Tags & Feedback */}
                <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activeArticle.tags.map((t, idx) => (
                      <span key={idx} className="text-xs font-semibold bg-blue-50 text-blue-800 px-3 py-1 rounded-full border border-blue-200">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyLink}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end sticky bottom-0">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition shadow"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

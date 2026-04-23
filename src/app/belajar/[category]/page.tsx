"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DATA_VIDEO } from '@/data/materi';
import { Play, Clock, GraduationCap } from 'lucide-react';

// Next.js 15+ mengharuskan kita meng-unwrap params menggunakan React.use()
import { use } from 'react';

export default function KatalogPage({ params: paramsPromise }: { params: Promise<{ category: string }> }) {
  // 1. Unwrap params agar category tidak undefined
  const params = use(paramsPromise);
  const category = params.category;

  const [filterLevel, setFilterLevel] = useState('Semua');

  useEffect(() => {
    setFilterLevel('Semua');
  }, [category]);

  const filteredData = DATA_VIDEO.filter(item => {
    const matchCategory = item.category === category;
    const matchLevel = filterLevel === 'Semua' || item.level === filterLevel;
    return matchCategory && matchLevel;
  });

  // Level dinamis
  const levels = category === 'arabic' ? ['Semua', 'Dasar', 'Menengah'] : ['Semua', 'SD', 'SMP', 'SMA'];

  // Helper Judul yang aman (mencegah undefined di UI)
  const getCategoryTitle = () => {
    const map: Record<string, string> = {
      math: 'Matematika',
      coding: 'Coding',
      arabic: 'Bahasa Arab'
    };
    return map[category] || category;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Halaman */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-bold text-slate-900 flex items-center gap-3 justify-center md:justify-start">
          Katalog <span className="text-sky-500">{getCategoryTitle()}</span>
          <span className="text-2xl text-slate-300 font-light hidden md:block">|</span>
          <span className="text-xl text-sky-600/50 font-medium hidden md:block">رُمَاةٌ</span>
        </h1>
        <p className="text-slate-500 mt-2">
          {category === 'arabic' 
            ? 'Pelajari Nahwu & Shorof untuk memahami bahasa Al-Qur\'an dengan tepat.' 
            : `Materi ${getCategoryTitle()} pilihan untuk mengasah ketepatan berpikirmu.`}
        </p>
      </div>

      {/* Filter UI */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide justify-center md:justify-start">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setFilterLevel(level)}
            className={`px-6 py-2 rounded-full border-2 transition-all whitespace-nowrap ${
              filterLevel === level
                ? 'border-sky-500 bg-sky-50 text-sky-600 font-bold shadow-sm'
                : 'border-slate-100 bg-white text-slate-500 hover:border-sky-200'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Grid Video */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredData.map((video) => (
          <Link href={`/belajar/${category}/${video.slug}`} key={video.id}>
            <div className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-300 h-full flex flex-col">
              <div className="relative aspect-video bg-slate-50 flex items-center justify-center overflow-hidden">
                <Image 
                  src={video.thumbnail} 
                  alt={video.title}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-500 z-10"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                  <div className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Play size={24} className="text-sky-500 fill-sky-500" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-sky-600 shadow-sm z-30">
                  {video.level}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-800 line-clamp-2 h-12 mb-4 group-hover:text-sky-600 transition-colors">
                  {video.title}
                </h3>
                <div className="mt-auto flex items-center justify-between text-sm text-slate-400 border-t pt-4 border-slate-50">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-sky-500/70">
                    <GraduationCap size={14} />
                    <span className="capitalize">{video.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="text-center py-24 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
          <p className="text-slate-500 font-medium italic">
            Belum ada materi {getCategoryTitle()} untuk level {filterLevel}, Kak Alif.
          </p>
        </div>
      )}
    </div>
  );
}

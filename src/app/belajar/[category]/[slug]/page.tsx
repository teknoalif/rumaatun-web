// src/app/belajar/[category]/[slug]/page.tsx
"use client";

import React, { use } from 'react';
import { DATA_VIDEO } from '@/data/materi';
import { ChevronLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import VideoDescription from '@/components/shared/VideoDescription';

export default function DetailVideoPage({ params: paramsPromise }: { params: Promise<{ category: string, slug: string }> }) {
  // Unwrap params menggunakan use() untuk Next.js 15+
  const params = use(paramsPromise);
  
  // Cari data video berdasarkan slug
  const video = DATA_VIDEO.find(v => v.slug === params.slug);

  if (!video) return <div className="text-center py-20 font-medium">Materi tidak ditemukan.</div>;

  // Helper untuk mengubah URL YouTube menjadi Embed URL
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    // Menangani format youtu.be dan youtube.com/watch?v=
    const videoId = url.split('youtu.be/')[1] || url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Label kategori bahasa Indonesia
  const categoryLabel = {
    math: 'Matematika',
    coding: 'Coding',
    arabic: 'Bahasa Arab'
  }[params.category] || params.category;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tombol Kembali */}
      <Link 
        href={`/belajar/${params.category}`} 
        className="flex items-center gap-2 text-slate-500 hover:text-sky-600 mb-6 transition-colors w-fit font-medium"
      >
        <ChevronLeft size={20} /> Kembali ke Katalog {categoryLabel}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: Video & Deskripsi */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Iframe YouTube Real */}
          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <iframe
              src={getEmbedUrl(video.videoUrl || 'https://youtu.be/Sg5YKhKfweg')}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Menggunakan Komponen VideoDescription untuk support LaTeX/Markdown */}
          <VideoDescription 
            title={video.title} 
            content={`Selamat datang di sesi belajar **Rumaatun**. Pada video ini, kita akan membahas secara mendalam mengenai **${video.title}**.
            
Pastikan siapkan catatan dan fokus pada inti materi agar pemahamanmu tepat sasaran! Jika ini materi matematika, perhatikan setiap langkah rumusnya dengan teliti.`} 
          />

          {/* Tombol Konsultasi WhatsApp */}
          <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-emerald-900 font-bold">Belum paham materi ini?</h4>
              <p className="text-emerald-700 text-sm">Tanyakan langsung ke Kak Alif via WhatsApp untuk penjelasan lebih detail.</p>
            </div>
            <a 
              href={`https://wa.me/6285256162879?text=Assalamu'alaikum%20Kak%20Alif,%20saya%20mau%20tanya%20materi%20di%20Rumaatun:%20${video.title}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shrink-0"
            >
              Tanya via WhatsApp
            </a>
          </div>
          
          {/* Badge Info Tambahan */}
          <div className="flex flex-wrap gap-3">
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl text-slate-700 text-sm font-semibold">
                <BookOpen size={16} className="text-sky-500" />
                {categoryLabel}
             </div>
             <div className="px-4 py-2 bg-sky-50 rounded-xl text-sky-600 text-sm font-bold">
                Level: {video.level}
             </div>
          </div>
        </div>

        {/* Kolom Kanan: Materi Lainnya */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 px-2 flex items-center justify-between">
            Materi {categoryLabel} Lainnya
            <span className="text-xs bg-slate-100 px-2 py-1 rounded-md text-slate-500">رُمَاةٌ</span>
          </h3>
          <div className="space-y-3">
            {DATA_VIDEO
              .filter(v => v.category === params.category && v.slug !== params.slug)
              .map((item) => (
              <Link key={item.id} href={`/belajar/${item.category}/${item.slug}`}>
                <div className="flex gap-3 p-3 bg-white hover:bg-sky-50 rounded-2xl transition-all border border-slate-100 hover:border-sky-200 group">
                  <div className="relative w-24 aspect-video bg-slate-50 rounded-xl overflow-hidden flex-shrink-0 border border-slate-50">
                    <img src={item.thumbnail} alt={item.title} className="object-contain p-2" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-sky-600 leading-tight">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                       <span className="text-[10px] text-sky-500 font-bold tracking-wider uppercase">{item.level}</span>
                       <span className="text-[10px] text-slate-300">•</span>
                       <span className="text-[10px] text-slate-400 font-medium">{item.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {DATA_VIDEO.filter(v => v.category === params.category && v.slug !== params.slug).length === 0 && (
              <p className="text-sm text-slate-400 italic px-2">Belum ada materi serupa lainnya.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

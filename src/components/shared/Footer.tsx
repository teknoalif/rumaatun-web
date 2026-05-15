"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              RU<span className="text-sky-400">MAATUN</span> <span className="text-xl ml-2">رُمَاةٌ</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Platform belajar Matematika, Coding, Arabic, dan Bisnis tepat sasaran. Membimbing siswa SD, SMP, hingga SMA untuk membidik masa depan dengan ilmu.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/belajar/math" className="hover:text-sky-400 transition-colors">Matematika</Link></li>
              <li><Link href="/belajar/coding" className="hover:text-sky-400 transition-colors">Coding</Link></li>
              <li><Link href="/tentang" className="hover:text-sky-400 transition-colors">Tentang Kami</Link></li>
            </ul>
          </div>

          {/* Contact/Social Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Kontak</h3>
            <p className="text-sm text-slate-400">Punya pertanyaan? Hubungi kami di:</p>
            <p className="text-sky-400 font-medium mt-1">kontak@rumaatun.my.id</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Rumaatun.my.id - Dibuat dengan semangat oleh Alif, Azhar, Radivan, dan Banyak Orang.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  // Fungsi untuk mengecek apakah link sedang aktif
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> {/* Tinggi h-20 diubah ke h-24 agar lebih lega karena ada 2 baris teks */}
          
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-sky-100 group-hover:border-sky-400 transition-all">
              <Image 
                src="/logo.png" 
                alt="Rumaatun Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-none tracking-tight text-slate-900">
                RU<span className="text-sky-500">MAATUN</span>
              </span>
              <span className="text-lg font-medium text-sky-600 leading-none mt-1">
                رُمَاةٌ
              </span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* Matematika */}
            <Link 
              href="/belajar/math" 
              className="flex flex-col items-center group"
            >
              <span className={`font-semibold transition-colors ${isActive('/belajar/math') ? 'text-sky-600' : 'text-slate-600 group-hover:text-sky-600'}`}>
                Matematika
              </span>
              <span className={`text-[11px] font-medium transition-colors ${isActive('/belajar/math') ? 'text-sky-400' : 'text-slate-400 group-hover:text-sky-400'}`}>
                الرِّيَاضِيَّات
              </span>
            </Link>

            {/* Coding */}
            <Link 
              href="/belajar/coding" 
              className="flex flex-col items-center group"
            >
              <span className={`font-semibold transition-colors ${isActive('/belajar/coding') ? 'text-sky-600' : 'text-slate-600 group-hover:text-sky-600'}`}>
                Coding
              </span>
              <span className={`text-[11px] font-medium transition-colors ${isActive('/belajar/coding') ? 'text-emerald-500/70' : 'text-slate-400 group-hover:text-emerald-500/70'}`}>
                الْبَرْمَجَة
              </span>
            </Link>

            {/* Arabic */}
            <Link 
              href="/belajar/arabic" 
              className="flex flex-col items-center group"
            >
              <span className={`font-semibold transition-colors ${isActive('/belajar/arabic') ? 'text-sky-600' : 'text-slate-600 group-hover:text-sky-600'}`}>
                Arabic
              </span>
              <span className={`text-[11px] font-medium transition-colors ${isActive('/belajar/arabic') ? 'text-amber-500/70' : 'text-slate-400 group-hover:text-amber-500/70'}`}>
                للُّغَة الْعَرَبِيَّة
              </span>
            </Link>
            
            {/* Bisnis */}
            <Link 
              href="/belajar/bisnis" 
              className="flex flex-col items-center group"
            >
              <span className={`font-semibold transition-colors ${isActive('/belajar/bisnis') ? 'text-sky-600' : 'text-slate-600 group-hover:text-sky-600'}`}>
                Bisnis
              </span>
              <span className={`text-[11px] font-medium transition-colors ${isActive('/belajar/bisnis') ? 'text-violet-500/70' : 'text-slate-400 group-hover:text-violet-500/70'}`}>
                التِّجَارَة
              </span>
            </Link>
            
            {/* Button Mulai Belajar */}
            <Link 
              href="/belajar/math" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-2xl font-semibold transition-all shadow-md shadow-sky-100 flex flex-col items-center group"
            >
              <span className="leading-tight">Mulai Belajar</span>
              <span className="text-[10px] font-light opacity-80">تَعَلُّم</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-slate-600 p-2 hover:bg-sky-50 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

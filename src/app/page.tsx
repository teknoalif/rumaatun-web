import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Target, BookOpen, Code, ArrowRight, Languages, User, ShieldCheck, ExternalLink, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-semibold">
                <Target size={16} /> 
                <span>Belajar Tepat Sasaran</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
                Membidik Masa Depan dengan <span className="text-sky-500 italic">Ilmu</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Platform video pembelajaran Matematika, Coding, Arabic, dan Bisnis. Sederhanakan konsep rumit bersama Kak Alif, Kak Azhar, dan Kak Radivan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/belajar/math" 
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-sky-100 flex items-center gap-2"
                >
                  Mulai Belajar <ArrowRight size={20} />
                </Link>
                <Link 
                  href="/tentang" 
                  className="bg-white border border-slate-200 hover:border-sky-500 text-slate-700 px-8 py-4 rounded-full font-bold transition-all"
                >
                  Tentang Rumaatun
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-sky-400/10 rounded-full animate-pulse" />
                <Image 
                  src="/logo.png" 
                  alt="Rumaatun Branding" 
                  fill 
                  className="object-contain p-4 drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY HIGHLIGHT */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Pilih Fokus Belajarmu</h2>
            <p className="text-slate-500 mt-2 italic font-medium">رُمَاةٌ - Jadilah Pemanah yang Mahir dalam Ilmu</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Math Card */}
            <Link href="/belajar/math" className="group">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-sky-500 transition-all hover:shadow-2xl hover:shadow-sky-100 h-full flex flex-col">
                <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Matematika</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-sm">
                  Fokus Dasar SD-SMA, Persiapan OSN 2027, TKA 2026, hingga Strategi UTBK 2027.
                </p>
                <div className="flex items-center gap-2 text-sky-600 font-bold text-sm">
                  Lihat Katalog <ArrowRight size={18} />
                </div>
              </div>
            </Link>

            {/* Coding Card */}
            <Link href="/belajar/coding" className="group">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-500 transition-all hover:shadow-2xl hover:shadow-emerald-100 h-full flex flex-col">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Coding</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-sm">
                  Belajar Python, JavaScript, dan logika pemrograman untuk membangun masa depan digital.
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  Lihat Katalog <ArrowRight size={18} />
                </div>
              </div>
            </Link>

            {/* Arabic Card */}
            <Link href="/belajar/arabic" className="group">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-amber-500 transition-all hover:shadow-2xl hover:shadow-amber-100 h-full flex flex-col">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Languages size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Arabic</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-sm">
                  Kuasai Nahwu dan Shorof. Fondasi utama memahami teks Arab secara mendalam dan tepat.
                </p>
                <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                  Lihat Katalog <ArrowRight size={18} />
                </div>
              </div>
            </Link>

            {/* Business Card */}
            <Link href="/belajar/bisnis" className="group">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-violet-500 transition-all hover:shadow-2xl hover:shadow-violet-100 h-full flex flex-col">
                <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-500 mb-6 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Bisnis</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-sm">
                  Strategi bisnis online dan manajemen produk fisik. Siapkan kemandirian finansialmu.
                </p>
                <div className="flex items-center gap-2 text-violet-600 font-bold text-sm">
                  Lihat Katalog <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FOUNDERS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 italic">Founder Rumaatun</h2>
            <p className="text-slate-500 mt-2 font-medium">Sinergi Ahli untuk Pendidikan Masa Depan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Alif Rezky */}
            <div className="group bg-slate-50 rounded-[2.5rem] p-8 border border-transparent hover:border-sky-200 hover:bg-white hover:shadow-xl transition-all duration-500 text-center flex flex-col">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full bg-sky-100 rounded-full flex items-center justify-center text-sky-600 border-4 border-white shadow-sm font-bold">
                  AR
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Alif Rezky</h3>
              <p className="text-sky-600 font-semibold mb-4 text-xs tracking-widest uppercase">Math & Business Mentor</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                Pendidik Matematika dan praktisi Bisnis Online. Fokus membantu siswa menguasai logika angka dan strategi kemandirian bisnis.
              </p>
              <a href="https://kakalif.my.id" target="_blank" className="text-xs text-slate-400 hover:text-sky-600 inline-flex items-center gap-1 justify-center transition-colors">
                kakalif.my.id <ExternalLink size={12} />
              </a>
            </div>

            {/* Azhar Faturohman Ahidin */}
            <div className="group bg-slate-50 rounded-[2.5rem] p-8 border border-transparent hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-500 text-center flex flex-col">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 border-4 border-white shadow-sm">
                  <ShieldCheck size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Azhar Faturohman</h3>
              <p className="text-emerald-600 font-semibold mb-4 text-xs tracking-widest uppercase">Coding & Cyber Security</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                Pakar infrastruktur cloud dan keamanan siber. Memastikan setiap baris kode Rumaatun aman dan berstandar industri.
              </p>
              <a href="https://azharfa.cloud" target="_blank" className="text-xs text-slate-400 hover:text-emerald-600 inline-flex items-center gap-1 justify-center transition-colors">
                azharfa.cloud <ExternalLink size={12} />
              </a>
            </div>

            {/* Radivan */}
            <div className="group bg-slate-50 rounded-[2.5rem] p-8 border border-transparent hover:border-amber-200 hover:bg-white hover:shadow-xl transition-all duration-500 text-center flex flex-col">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full bg-amber-100 rounded-full flex items-center justify-center text-amber-600 border-4 border-white shadow-sm">
                  <Languages size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Radivan</h3>
              <p className="text-amber-600 font-semibold mb-4 text-xs tracking-widest uppercase">Linguistic Expert</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                Ahli bahasa (Arabic). Membimbing siswa memahami literatur asing secara sistematis untuk membuka jendela dunia.
              </p>
              <a href="https://www.instagram.com/radivantiravi" target="_blank" className="text-xs text-slate-400 hover:text-amber-600 inline-flex items-center gap-1 justify-center transition-colors">
                @radivantiravi <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Membidik Masa Depan?</h2>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                Dapatkan akses ke materi pilihan Matematika, Coding, Arabic, dan Bisnis. Ada pertanyaan? Langsung diskusikan dengan kami.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/belajar/math" 
                  className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-sky-50 transition-colors inline-flex items-center gap-2"
                >
                  Mulai Belajar Sekarang
                </Link>
                
                <a 
                  href="https://wa.me/6285256162879?text=Assalamu'alaikum%20Kak%20Alif,%20saya%20mau%20tanya%20tentang%20materi%20di%20Rumaatun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2"
                >
                  Tanya Admin (WA)
                </a>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Target size={200} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

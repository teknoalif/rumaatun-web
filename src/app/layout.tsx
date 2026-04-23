// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer"; // Import Footer yang baru dibuat

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rumaatun - Belajar Matematika & Coding Tepat Sasaran",
  description: "Platform belajar video matematika dan coding untuk SD, SMP, dan SMA oleh Kak Alif.",
  icons: {
    icon: "/logo.png", // Supaya favicon website pakai logo Rumaatun
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-white flex flex-col min-h-screen`}>
        {/* Navbar tetap di atas */}
        <Navbar />
        
        {/* Main content akan mengambil sisa ruang yang ada agar footer tetap di bawah jika konten sedikit */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer otomatis muncul di semua halaman */}
        <Footer />
      </body>
    </html>
  );
}

import React from 'react';
import { WalletIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200/50 py-12 mt-auto">
      <div className="container-1280 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/FinTrace-Logo.png"
                alt="FinTrace Logo"
                className="w-10 h-10 object-contain" />
            </div>
            <p className="text-slate-500 text-sm">
              Mulai kelola keuanganmu menjadi lebih baik bersama FinTrace. Solusi cerdas untuk masa depan finansialmu.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Fitur</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Track Transaksi</li>
              <li>Analitik Keuangan</li>
              <li>Artikel Keuangan</li>
              <li>Video Pembelajaran</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Tentang Kami</li>
              <li>Karir</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Bantuan & Dukungan</li>
              <li>Syarat & Ketentuan</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200/50 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} FinTrace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
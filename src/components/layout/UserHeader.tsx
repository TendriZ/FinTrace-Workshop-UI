import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, WalletIcon, DollarSign, ClipboardList, Target, BarChart2, BookOpen, Store } from 'lucide-react';

const NavIcon = ({ icon: Icon, to, title }: { icon: LucideIcon; to: string; title: string }) => (
  <Link to={to} className="flex flex-col items-center group" title={title} aria-label={title}>
    <Icon className="w-5 h-5 text-slate-500 group-hover:text-purple-600 transition-colors" />
  </Link>
);

export function UserHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50">
      <Link to="/" className="flex items-center gap-2 group">
        <img
          src="/images/FinTrace-Logo.png"
          alt="FinTrace Logo"
          className="w-10 h-10 object-contain transform group-hover:scale-105 transition-transform" />
      </Link>

      <nav className="hidden md:flex items-center gap-6 px-8 py-3 border-2 border-purple-400 rounded-full">
        <NavIcon icon={DollarSign} to="/dashboard" title="Financial" />
        <NavIcon icon={ClipboardList} to="/dashboard/budget" title="Budget" />
        <NavIcon icon={Target} to="/dashboard/goals" title="Goals" />
        <NavIcon icon={BarChart2} to="/dashboard/analytics" title="Analytics" />
        <NavIcon icon={BookOpen} to="/articles" title="Articles" />
        <NavIcon icon={Store} to="/courses" title="Marketplace" />
      </nav>
      
      <div className="flex items-center gap-3 bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200">
        <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold">N</div>
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-slate-700">Naysana</p>
          <p className="text-xs text-slate-500">naysana1907@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
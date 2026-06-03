import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WalletIcon, LayoutGrid, Search, Bell, LogOut } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';
  

export function AdminHeader() {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
      
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50">
      <div className="flex items-center gap-4">
        <Link to="/admin/dashboard" className="flex items-center gap-3 group">
          <img
            src="/images/FinTrace-Logo.png"
            alt="FinTrace Logo"
            className="w-14 h-14 object-contain transform group-hover:scale-105 transition-transform" />
        </Link>
        <button className="text-slate-500 hover:text-purple-600 transition-colors">
          <LayoutGrid />
        </button>
      </div>

      <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-full w-96">
        <Search className="text-slate-400 w-4 h-4" />
        <input placeholder="Search any ..." className="flex-1 outline-none text-sm bg-transparent" />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-slate-500 hover:text-purple-600 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
        </button>
        <Link to="/admin/profile" className="flex items-center gap-3 bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-200/80 transition-colors">
          <div className="w-8 h-8 rounded-full bg-cyan-200 flex items-center justify-center text-cyan-700 font-bold">A</div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-700">{user?.fullName}</p>
            <p className="text-xs text-slate-500">{user?.email}</p>
          </div>
        </Link>
        <button
          onClick={handleLogout}
          className="p-2 rounded-full bg-slate-100 hover:bg-red-100 text-slate-600 hover:text-red-600 transition-all duration-300 ease-in-out"
          title="Logout">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
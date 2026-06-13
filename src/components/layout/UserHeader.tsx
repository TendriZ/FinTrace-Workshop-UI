import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LucideIcon, WalletIcon, DollarSign, ClipboardList, Target, BarChart2, BookOpen, Store, LogOut, Package } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';

const NavIcon = ({ icon: Icon, to, title }: { icon: LucideIcon; to: string; title: string }) => (
  <Link to={to} className="flex flex-col items-center group" title={title} aria-label={title}>
    <Icon className="w-5 h-5 text-slate-500 group-hover:text-purple-600 transition-colors" />
  </Link>
);

export function UserHeader() {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50">
      <Link to="/dashboard" className="flex items-center gap-3 group">
        <img
          src="/images/FinTrace-Logo.png"
          alt="FinTrace Logo"
          className="w-14 h-14 object-contain transform group-hover:scale-105 transition-transform" />
      </Link>

      <nav className="hidden md:flex items-center gap-6 px-8 py-3 border-2 border-purple-400 rounded-full">
        <NavIcon icon={DollarSign} to="/transactions" title="Financial" />
        <NavIcon icon={ClipboardList} to="/budget" title="Budget" />
        <NavIcon icon={Target} to="/goal" title="Goals" />
        <NavIcon icon={BarChart2} to="/analytics" title="Analytics" />
        <NavIcon icon={BookOpen} to="/user/articles" title="Articles" />
        <NavIcon icon={Package} to="/user/courses" title="My Courses" />
      </nav>

      <div className="flex items-center gap-3">
        <Link to="/profile" className="flex items-center gap-3 group bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200 transition-all duration-300 ease-in-out hover:bg-slate-200">
          <img
            src={user?.avatar || 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop'}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-700">{user?.fullName || 'User'}</p>
            <p className="text-xs text-slate-500">{user?.email || 'user@example.com'}</p>
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
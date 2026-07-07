import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LucideIcon, WalletIcon, DollarSign, ClipboardList, Target, BarChart2, BookOpen, Store, LogOut, Package, Menu, X } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';

const NavIcon = ({ icon: Icon, to, title }: { icon: LucideIcon; to: string; title: string }) => (
  <Link to={to} className="flex flex-col items-center group" title={title} aria-label={title}>
    <Icon className="w-5 h-5 text-slate-500 group-hover:text-purple-600 transition-colors" />
  </Link>
);

const mobileNavItems = [
  { icon: DollarSign, to: '/transactions', label: 'Financial' },
  { icon: ClipboardList, to: '/budget', label: 'Budget' },
  { icon: Target, to: '/goal', label: 'Goals' },
  { icon: BarChart2, to: '/analytics', label: 'Analytics' },
  { icon: BookOpen, to: '/user/articles', label: 'Articles' },
  { icon: Package, to: '/user/courses', label: 'My Courses' },
];

export function UserHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuthContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="relative flex items-center justify-between px-4 sm:px-6 py-3 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50 w-full">
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

        <div className="flex items-center gap-1 sm:gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
          </button>
          <Link to="/profile" className="flex items-center gap-3 group bg-slate-100/80 px-2 sm:px-4 py-2 rounded-full border border-slate-200 transition-all duration-300 ease-in-out hover:bg-slate-200">
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

      {/* Floating Hamburger + Mobile Menu */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`md:hidden fixed top-4 right-4 z-[100] p-3 bg-white rounded-full shadow-lg border border-slate-200 transition-all duration-300 ${
          showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'
        }`}>
        {mobileMenuOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
      </button>

      {mobileMenuOpen && (
        <>
          <div className="md:hidden fixed inset-0 z-[90]" onClick={() => setMobileMenuOpen(false)} />
          <div className="md:hidden fixed top-20 right-4 z-[100] bg-white rounded-2xl shadow-xl border border-slate-200 p-2 min-w-[200px]">
            <nav className="space-y-1">
              {mobileNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.to)
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}>
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
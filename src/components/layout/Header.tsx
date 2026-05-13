import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WalletIcon } from 'lucide-react';
export function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
      <div className="container-1280 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <WalletIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              FinTrace
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>
              
              Home
            </Link>
            <Link
              to="/articles"
              className={`text-sm font-medium transition-colors ${isActive('/articles') ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>
              
              Articles
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors ${isActive('/products') ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>
              
              Courses
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors ${isActive('/dashboard') ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>
              
              Dashboard
            </Link>
          </nav>

          {/* CTA Button */}
          <Link to="/dashboard">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-all">
              Get Started
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round" />
                
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>);

}
  import React, { useState } from 'react';
  import { Link, useLocation } from 'react-router-dom';
  import { Wallet, Menu, X } from 'lucide-react';

  export function Header() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isActive = (path: string) => location.pathname === path;

    return (
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="container-1280 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo - Left */}
            <div className="w-20 flex-shrink-0">
              <a href="https://cautious-encounter-857447.framer.app/" className="flex items-center gap-3 group">
                <img
                  src="/images/FinTrace-Logo.png"
                  alt="FinTrace Logo"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain transform group-hover:scale-105 transition-transform" />
              </a>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex-1 md:flex md:justify-center md:items-center md:gap-8">
              <a
                href="https://cautious-encounter-857447.framer.app/"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </a>
              <Link
                to="/articles"
                className={`text-sm font-medium transition-colors ${isActive('/articles') ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>
                Articles
              </Link>
              <Link
                to="/courses"
                className={`text-sm font-medium transition-colors ${isActive('/courses') ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}>
                Courses
              </Link>
            </nav>

            {/* Desktop CTA Button - Right */}
            <div className="hidden md:flex md:justify-end md:flex-shrink-0">
              <Link to="/login">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-all whitespace-nowrap">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-auto p-2 rounded-lg hover:bg-slate-100 transition-colors">
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-2 border-t border-slate-200 mt-4">
              <a
                href="https://cautious-encounter-857447.framer.app/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors">
                Home
              </a>
              <Link
                to="/articles"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/articles') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-600 hover:bg-slate-100'}`}>
                Articles
              </Link>
              <Link
                to="/courses"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/courses') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-600 hover:bg-slate-100'}`}>
                Courses
              </Link>
              <div className="pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm font-medium text-center shadow-lg shadow-cyan-500/30">
                  Get Started
              </Link>
            </div>
            </nav>
          )}
        </div>
      </header>
    );
  }
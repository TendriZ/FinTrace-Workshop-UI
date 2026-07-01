import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { PageTransition } from '../../components/ui/PageTransition';
import { useAuthContext } from '../../context/AuthContext';
import { GoogleLogo } from '../../components/icons/GoogleLogo';
import { AppleLogo } from '../../components/icons/AppleLogo';

const REDIRECT_TARGET_KEY = 'fintrace_redirect';

export function RegisterPage() {
  const navigate = useNavigate();
  const { loginByRole, isAuthenticated } = useAuthContext();
  const [redirectTarget, setRedirectTarget] = React.useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check for redirect target in localStorage on mount
    const target = localStorage.getItem(REDIRECT_TARGET_KEY);
    if (target) {
      setRedirectTarget(target);
    }
  }, []);

  useEffect(() => {
    // If already authenticated, redirect to target or dashboard
    if (isAuthenticated) {
      const target = redirectTarget || localStorage.getItem(REDIRECT_TARGET_KEY) || '/dashboard';
      navigate(target);
    }
  }, [isAuthenticated, redirectTarget, navigate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginByRole('user');
    // Clear redirect target after successful registration
    localStorage.removeItem(REDIRECT_TARGET_KEY);
    // Navigate will be handled by useEffect above
  };

  return (
    <PageTransition type="slide">
      <div className="min-h-screen flex flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-[52%] bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center p-12 text-center overflow-hidden"
             style={{ backgroundImage: 'url(/images/Background-Login-Register-Behind-FinTraceLogo-and-Motto.png)' }}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <img
              src="/images/FinTrace-Logo.png"
              alt="FinTrace Logo"
              className="w-64 h-64 object-contain mb-8" />
          </div>
        </div>

        <div className="w-full lg:w-[48%] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 flex flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-center py-8 px-12">
            <h1 className="text-4xl font-bold text-indigo-500 text-center mb-1">Register Here</h1>
            <p className="text-slate-400 text-center text-sm mb-8">Create your account to start tracking your finance</p>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <label className="text-purple-600 font-semibold text-sm">Full Name</label>
            <div className="relative mt-1 mb-4">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors duration-300" />
              <input className="w-full pl-11 pr-4 py-3 bg-white border-2 border-purple-300 rounded-xl focus:border-purple-500 outline-none transition-all duration-300 ease-in-out hover:border-purple-400 focus:ring-2 focus:ring-purple-200" placeholder="Enter Your Full Name" />
            </div>

            <label className="text-purple-600 font-semibold text-sm">Telepon/Email :</label>
            <div className="relative mt-1 mb-4">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors duration-300" />
              <input className="w-full pl-11 pr-4 py-3 bg-white border-2 border-purple-300 rounded-xl focus:border-purple-500 outline-none transition-all duration-300 ease-in-out hover:border-purple-400 focus:ring-2 focus:ring-purple-200" placeholder="Enter Your Email" type="email" />
            </div>

            <label className="text-purple-600 font-semibold text-sm">Password</label>
            <div className="relative mt-1 mb-4">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors duration-300" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-11 py-3 bg-white border-2 border-purple-300 rounded-xl pr-12 outline-none transition-all duration-300 ease-in-out hover:border-purple-400 focus:ring-2 focus:ring-purple-200"
                placeholder="Create a Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-purple-600 transition-colors duration-300 ease-in-out"
              >
                {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="w-4 h-4 rounded accent-purple-500" /> I agree to terms
              </label>
            </div>

            <Button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-100 to-blue-100 text-purple-600 font-semibold rounded-xl hover:from-cyan-200 hover:to-blue-200 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-cyan-200/50 mb-6">
              Register
            </Button>

            <div className="flex items-center gap-3 mb-6">
              <hr className="flex-1 border-slate-300" />
              <span className="text-slate-400 text-sm">or register with</span>
              <hr className="flex-1 border-slate-300" />
            </div>

            <div className="flex gap-3 mb-6">
              <button type="button" className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md">
                <GoogleLogo className="w-5 h-5" />
                Google
              </button>
              <button type="button" className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md">
                <AppleLogo className="w-5 h-5" />
                Apple
              </button>
            </div>

            <p className="text-center text-slate-500 text-sm">
              Already have an account?
              <Link
                to="/login"
                className="text-indigo-600 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:text-purple-700 hover:underline decoration-2 underline-offset-4">
                Login
              </Link>
            </p>
          </form>

          <div className="px-6 py-3 flex justify-between text-slate-400 text-xs pt-10">
            <span>Copyright c 2025 FinTrace</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

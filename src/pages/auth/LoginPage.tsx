import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../hooks/useAuth';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login('user');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-[52%] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative flex flex-col items-center justify-center p-12 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] bg-[size:24px_24px]" />
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-pink-400 flex items-center justify-center shadow-2xl shadow-cyan-500/20 z-10 mb-8">
          <span className="text-white text-6xl font-black tracking-tight">FT</span>
        </div>
        <h2 className="text-4xl font-bold text-white z-10 leading-tight max-w-md">
          Effortlessly and Easily<br />track your financial
        </h2>
      </div>

      <div className="w-full lg:w-[48%] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 flex flex-col justify-between p-6 sm:p-10 lg:p-12">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto w-full pt-8 lg:pt-16">
          <h1 className="text-4xl font-bold text-indigo-500 text-center mb-1">Welcome Back</h1>
          <p className="text-slate-400 text-center text-sm mb-8">Enter your email and password to access your account</p>

          <label className="text-purple-600 font-semibold text-sm">Telepon/Email :</label>
          <div className="relative mt-1 mb-4">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input className="w-full pl-11 pr-4 py-3 bg-white border-2 border-purple-300 rounded-xl focus:border-purple-500 outline-none" placeholder="Enter Your Email" />
          </div>

          <label className="text-purple-600 font-semibold text-sm">Password</label>
          <div className="relative mt-1 mb-4">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input type="password" className="w-full px-11 py-3 bg-white border-2 border-purple-300 rounded-xl pr-12 outline-none" placeholder="Enter Your Password" />
            <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 cursor-pointer" />
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" className="w-4 h-4 rounded accent-purple-500" /> Ingat Saya
            </label>
            <a href="#" className="text-sm text-slate-500 hover:text-purple-600">Lupa kata sandi?</a>
          </div>

          <Button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-100 to-blue-100 text-purple-600 font-semibold rounded-xl hover:from-cyan-200 hover:to-blue-200 mb-6">
            Login
          </Button>

          <div className="flex items-center gap-3 mb-6">
            <hr className="flex-1 border-slate-300" />
            <span className="text-slate-400 text-sm">or continue with</span>
            <hr className="flex-1 border-slate-300" />
          </div>

          <div className="flex gap-3 mb-6">
            <button type="button" className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 text-sm font-medium">
              Google
            </button>
            <button type="button" className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 text-sm font-medium">
              Apple
            </button>
          </div>

          <p className="text-center text-slate-500 text-sm">
            Don't have an account? <Link to="/register" className="text-indigo-600 font-semibold hover:underline">Sign up</Link>
          </p>
        </form>

        <div className="flex justify-between text-slate-400 text-xs pt-10">
          <span>Copyright c 2025 FinTrace</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
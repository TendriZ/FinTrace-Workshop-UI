import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { WalletIcon, User } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';

export function GuestLoginInterstitialPage() {
  const navigate = useNavigate();
  const { guestLoginTarget, isAuthenticated, checkIfLoggedIn, onGuestLoginAttempt } = useAuthContext();

  React.useEffect(() => {
    // Check if user just logged in and redirect them to original target
    if (isAuthenticated && guestLoginTarget) {
      // Clear the redirect target
      navigate(guestLoginTarget);
    }
  }, [isAuthenticated, guestLoginTarget, navigate]);

  const handleLogin = () => {
    onGuestLoginAttempt(guestLoginTarget || '/dashboard');
    navigate('/login');
  };

  const handleSignUp = () => {
    onGuestLoginAttempt(guestLoginTarget || '/dashboard');
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Left Side - Info */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex items-center justify-center">
        <div className="max-w-md">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <WalletIcon className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Login to Continue
          </h1>

          <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
            You need to be logged in to access this feature. Please log in or create an account to continue.
          </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Why Login?
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <p className="text-sm">
                  Access premium courses and content
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-600 font-bold">2</span>
                </div>
                <p className="text-sm">
                  Track your financial goals and progress
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-pink-600 font-bold">3</span>
                </div>
                <p className="text-sm">
                  Get personalized financial insights
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button onClick={handleLogin} className="flex-1 py-4">
              <User className="w-5 h-5 mr-2" />
              Login
            </Button>
            <Button variant="outline" onClick={handleSignUp} className="flex-1 py-4">
              Create Account
            </Button>
          </div>

          <p className="text-center text-sm text-slate-500 mt-4">
            <Link to="/" className="hover:text-purple-600">
              Back to Home
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Hero */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 items-center justify-center p-16">
        <div className="max-w-md text-center">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <WalletIcon className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            Join FinTrace Today
          </h2>

          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Start your journey to financial freedom
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-left">
              <p className="text-white font-semibold text-lg">10K+</p>
              <p className="text-indigo-200 text-sm">Active Users</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-left">
              <p className="text-white font-semibold text-lg">500+</p>
              <p className="text-indigo-200 text-sm">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

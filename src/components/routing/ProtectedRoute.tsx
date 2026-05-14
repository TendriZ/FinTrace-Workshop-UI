import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  fallback?: React.ReactNode;
  showInterstitial?: boolean;
}

export function ProtectedRoute({
  children,
  redirectTo,
  fallback,
  showInterstitial = false
}: ProtectedRouteProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, onGuestLoginAttempt, guestLoginTarget } = useAuthContext();

  const currentRedirectTarget = redirectTo || guestLoginTarget;

  useEffect(() => {
    if (!isAuthenticated) {
      if (showInterstitial) {
        onGuestLoginAttempt(location.pathname);
      } else {
        navigate('/login');
      }
    }
  }, [isAuthenticated, navigate, location, showInterstitial, onGuestLoginAttempt, redirectTo, guestLoginTarget]);

  if (!isAuthenticated) {
    if (fallback) {
      return <>{fallback}</>;
    }

    if (showInterstitial) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800">
          <div className="p-8 max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 0h-2v2H6a2 2 0 00-2-2v-2h10a2 2 0 00-2 2v2H6a2 2 0 00-2-2v-2h10a2 2 0 00-2 2V7a2 2 0 00-2 2H4a2 2 0 00-2-2v4h10a2 2 0 00-2 2V9a2 2 0 00-2 2h8a2 2 0 00-2 2v2a2 2 0 00-2 2v2H4a2 2 0 00-2 2v2a2 2 0 00-2 2zM12 15v2a2 2 0 01-2 2v-10a2 2 0 01-2 2v-10a2 2 0 01-2 2V7a2 2 0 00-2 2H4a2 2 0 00-2 2v2a2 2 0 00-2 2v2a2 2 0 00-2 2v2h8a2 2 0 00-2 2V9a2 2 0 00-2 2h8a2 2 0 00-2 2v2a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Login Required
            </h1>
            <p className="text-blue-100 mb-6">
              You need to be logged in to access this page.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate('/login')}
                className="w-full py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Login
              </button>
              {currentRedirectTarget && (
                <button
                  onClick={() => navigate('/register')}
                  className="w-full py-3 bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-600 rounded-xl font-semibold hover:from-cyan-200 hover:to-blue-200 transition-colors"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    // For immediate redirect without interstitial
    return null;
  }

  return <>{children}</>;
}

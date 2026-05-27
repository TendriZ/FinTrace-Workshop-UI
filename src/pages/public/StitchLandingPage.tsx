import React from 'react';
import { useStitchComponents, useStitchAnimations } from '../../hooks/useStitchComponents';
import { Footer } from '../../components/layout/Footer';
import { Button } from '../../components/ui/Button';
import { RefreshCw, AlertCircle, Play, ArrowRight, Star, Users, TrendingUp, Zap } from 'lucide-react';

export function StitchLandingPage() {
  const {
    hero,
    stats,
    features,
    testimonials,
    cta,
    platformLogos,
    isLoading,
    error,
    regenerate,
  } = useStitchComponents();

  const animationsEnabled = useStitchAnimations();

  const handleRegenerate = async (section: 'hero' | 'stats' | 'features' | 'testimonials' | 'cta' | 'platformLogos') => {
    try {
      await regenerate(section);
    } catch (err) {
      console.error('Failed to regenerate section:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-lg font-semibold text-purple-600">Generating AI-powered landing page...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="fixed top-4 right-4 z-50 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 animate-slide-in">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <div>
            <p className="font-semibold text-red-700">Error</p>
            <p className="text-sm text-red-600">{error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700">
            Retry
          </button>
        </div>
      )}

      {/* AI Regeneration Controls */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="bg-white/90 backdrop-blur-sm border border-purple-200 rounded-lg shadow-lg p-2 flex items-center gap-2">
          <span className="text-xs font-semibold text-purple-600 px-2">AI Controls</span>
          <RefreshCw className="w-4 h-4 text-purple-600 cursor-pointer hover:rotate-180 transition-transform" />
        </div>
      </div>

      {/* Hero Section */}
      {hero}

      {/* Platform Logos */}
      <div className="relative">
        {platformLogos}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Stats Section */}
      {stats}

      {/* Features Section */}
      <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        {features}
      </div>

      {/* Testimonials Section */}
      {testimonials}

      {/* Interactive Demo Section */}
      <div className="bg-white">
        <div className="container-1280 px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={animationsEnabled ? 'animate-fade-up' : ''}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                See How <span className="gradient-text">FinTrace</span> Works
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Watch our interactive demo to see how easy it is to track your finances with our AI-powered platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Real-time Tracking</h4>
                    <p className="text-slate-600 text-sm">Instant updates from all your connected accounts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Smart Analytics</h4>
                    <p className="text-slate-600 text-sm">AI-powered insights for better financial decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">User-Friendly</h4>
                    <p className="text-slate-600 text-sm">Simple interface designed for everyone</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className={`relative ${animationsEnabled ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-500">This Month</span>
                    <span className="text-sm font-medium text-emerald-600">+Rp 2.5M</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-sm text-slate-700">Gopay</span>
                      </div>
                      <span className="text-sm font-medium text-slate-900">Rp 1.2M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-sm text-slate-700">DANA</span>
                      </div>
                      <span className="text-sm font-medium text-slate-900">Rp 800K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                        <span className="text-sm text-slate-700">OVO</span>
                      </div>
                      <span className="text-sm font-medium text-slate-900">Rp 500K</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Users className="w-4 h-4" />
                      <span>Automatically synced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {cta}

      {/* Footer */}
      <Footer />
    </div>
  );
}
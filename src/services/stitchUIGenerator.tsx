import React from 'react';
import type { StitchUIRequest, DesignSystemConfig, ContentConfig, AnimationConfig } from '../types/stitch';
import { getStitchService } from './stitchMCP';

// FinTrace Design System
export const finTraceDesignSystem: DesignSystemConfig = {
  colors: {
    primary: { light: '#818cf8', main: '#6366f1', dark: '#4f46e5' },
    secondary: { light: '#a78bfa', main: '#8b5cf6', dark: '#7c3aed' },
    accent: { light: '#22d3ee', main: '#06b6d4', dark: '#0891b2' },
  },
  gradients: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
    hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
  },
  typography: {
    hero: 'text-5xl md:text-6xl font-bold text-slate-900',
    heading: 'text-3xl md:text-4xl font-bold text-slate-900',
    body: 'text-lg text-slate-600',
  },
  animations: {
    fadeUp: 'animate-fade-up',
    slideIn: 'animate-slide-in',
    scale: 'animate-scale',
  },
};

export class StitchUIGenerator {
  private cache: Map<string, any> = new Map();
  private cacheKey = 'stitch-components-cache';

  constructor() {
    this.loadCache();
  }

  async generateHero(content: ContentConfig): Promise<React.ReactNode> {
    const request: StitchUIRequest = {
      componentType: 'hero',
      designSystem: finTraceDesignSystem,
      content: {
        ...content,
        headline: content.headline || 'Track Every Transaction, Master Your Finance',
        subheadline: content.subheadline || 'Automatically track all your e-wallet and banking transactions in one place',
        cta: content.cta || { text: 'Start Tracking Free', link: '/login' },
      },
    };

    const cacheKey = `hero-${JSON.stringify(content)}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const result = await getStitchService().generateUIComponent(request);
      const component = this.parseHeroComponent(result);
      this.cache.set(cacheKey, component);
      this.saveCache();
      return component;
    } catch (error) {
      console.error('Error generating hero:', error);
      return this.getFallbackHero(content);
    }
  }

  async generateStats(content: ContentConfig): Promise<React.ReactNode> {
    const stats = content.stats || [
      { label: 'Active Users', value: '100K+', description: 'Trusted by thousands' },
      { label: 'Transactions', value: '1M+', description: 'Tracked daily' },
      { label: 'Platforms', value: '15+', description: 'Integrated services' },
      { label: 'Rating', value: '5.0', description: 'User satisfaction' },
    ];

    return this.renderStats(stats);
  }

  async generateFeatures(content: ContentConfig): Promise<React.ReactNode> {
    const features = content.features || [
      'Multi Platform Integration',
      'Smart Analytics',
      'Budget Planning',
      'Manual Cash Entry',
      'Smart Notifications',
      'Financial Goals',
    ];

    return this.renderFeatures(features);
  }

  async generateTestimonials(content: ContentConfig): Promise<React.ReactNode> {
    const testimonials = content.testimonials || [
      {
        name: 'Sarah Wijaya',
        quote: 'FinTrace has completely transformed how I manage my money. The platform integrations are seamless!',
        role: 'Entrepreneur',
      },
      {
        name: 'Budi Santoso',
        quote: 'Best financial tracking app I have ever used. The analytics are incredibly helpful.',
        role: 'Freelancer',
      },
      {
        name: 'Dewi Sari',
        quote: 'Finally, an app that actually works with all Indonesian e-wallets. Highly recommended!',
        role: 'Marketing Manager',
      },
    ];

    return this.renderTestimonials(testimonials);
  }

  async generateCTA(content: ContentConfig): Promise<React.ReactNode> {
    const cta = content.cta || { text: 'Start Your Free Trial Today', link: '/login' };
    return this.renderCTA(cta);
  }

  async generatePlatformLogos(content: ContentConfig): Promise<React.ReactNode> {
    const platforms = content.platforms || ['Gopay', 'OVO', 'DANA', 'ShopeePay', 'LinkAja', 'Doku', 'Brimo', "Livin'", 'BCA', 'BNI'];
    return this.renderPlatformLogos(platforms);
  }

  private parseHeroComponent(result: any): React.ReactNode {
    // Parse Stitch generated HTML into React component
    // For now, use a fallback that matches the design system
    return this.getFallbackHero({});
  }

  private getFallbackHero(content: ContentConfig): React.ReactNode {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20" />
        <div className="container-1280 px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-up">
              <span className="gradient-text">{content.headline || 'Track Every Transaction, Master Your Finance'}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {content.subheadline || 'Automatically track all your e-wallet and banking transactions in one place'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <a
                href={content.cta?.link || '/login'}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                {content.cta?.text || 'Start Tracking Free'}
              </a>
              <a
                href="#demo"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 transition-all">
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private renderStats(stats: Array<{ label: string; value: string; description?: string }>): React.ReactNode {
    return (
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</p>
              {stat.description && <p className="text-sm text-slate-500">{stat.description}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  private renderFeatures(features: string[]): React.ReactNode {
    const featureIcons = ['LinkIcon', 'BarChart3Icon', 'TargetIcon', 'WalletIcon', 'BellIcon', 'TrendingUpIcon'];

    return (
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Why Choose <span className="gradient-text">FinTrace</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature}</h3>
              <p className="text-slate-600">
                Experience seamless {feature.toLowerCase()} with our advanced financial tracking system.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  private renderTestimonials(testimonials: Array<{ name: string; quote: string; role: string; avatar?: string }>): React.ReactNode {
    return (
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          What Our <span className="gradient-text">Users Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  private renderCTA(cta: { text: string; link: string }): React.ReactNode {
    return (
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container-1280 px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of users who have already transformed their financial management with FinTrace.
            </p>
            <a
              href={cta.link}
              className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              {cta.text}
            </a>
          </div>
        </div>
      </div>
    );
  }

  private renderPlatformLogos(platforms: string[]): React.ReactNode {
    return (
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-slate-500 mb-8">Trusted by major platforms</p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-slate-400 hover:text-purple-600 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {platform}
            </div>
          ))}
        </div>
      </div>
    );
  }

  private loadCache(): void {
    try {
      const cached = localStorage.getItem(this.cacheKey);
      if (cached) {
        this.cache = new Map(JSON.parse(cached));
      }
    } catch (error) {
      console.error('Error loading cache:', error);
    }
  }

  private saveCache(): void {
    try {
      const cacheData = Array.from(this.cache.entries());
      localStorage.setItem(this.cacheKey, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error saving cache:', error);
    }
  }

  clearCache(): void {
    this.cache.clear();
    localStorage.removeItem(this.cacheKey);
  }
}

// Singleton instance
let uiGeneratorInstance: StitchUIGenerator | null = null;

export const getUIGenerator = (): StitchUIGenerator => {
  if (!uiGeneratorInstance) {
    uiGeneratorInstance = new StitchUIGenerator();
  }
  return uiGeneratorInstance;
};
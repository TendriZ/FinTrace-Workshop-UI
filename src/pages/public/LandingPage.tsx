import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { mockArticlesForLP } from '../../data/mockArticlesForLandingPage';
import {
  WalletIcon,
  TrendingUpIcon,
  BellIcon,
  TargetIcon,
  LinkIcon,
  BarChart3Icon,
  UsersIcon,
  StarIcon } from
'lucide-react';
import { router } from '../../router';
export function LandingPage() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  
  const stats = [
  {
    imageUrl : 'images/Active-User-Icon.png',
    value: '100K+',
    label: 'Active Users'
  },
  {
    imageUrl : '/images/Transaction-Tracked-Icon.png',
    value: '1M+',
    label: 'Transaction Tracked'
  },
  {
    imageUrl : '/images/card.png',
    value: '15+',
    label: 'Supported Platforms'
  },
  {
    imageUrl : '/images/Stars-Icon.png',
    value: '5.0',
    label: 'Users Rating'
  }];

  const features = [
  {
    icon: LinkIcon,
    title: 'Multi Platform Integration',
    description:
    'Connect all your e-wallet and banking accounts automatically. No more manual input for digital transactions.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: BarChart3Icon,
    title: 'Smart Analytics',
    description:
    'Track your income and spending patterns with beautiful charts and comprehensive reports.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: TargetIcon,
    title: 'Budget Planning',
    description:
    "Set spending limits for different expense categories and get notifications when you're close to your limit.",
    color: 'from-rose-500 to-orange-500'
  },
  {
    icon: WalletIcon,
    title: 'Manual Cash Entry',
    description:
    'Easily log your cash transactions manually to get a complete picture of your finances.',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: BellIcon,
    title: 'Smart Notifications',
    description:
    'Get real-time alerts for every transaction, unusual spending, and budget reminders.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUpIcon,
    title: 'Financial Goals',
    description:
    'Set and track your savings goals with intelligent notifications and achievement tracking.',
    color: 'from-indigo-500 to-purple-500'
  }];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = [
  'Semua',
  'Personal Finance',
  'Investasi',
  'Digital Finance',
  'Saving',
  'Debt Management',
  'Business'];

  const filteredArticles = mockArticlesForLP.filter((article) => {
    const matchesSearch =
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
    selectedCategory === 'Semua' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container-1280 px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Track Every Transaction
              <br />
              <span className="gradient-text">Master Your Finance</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Automatically track all your e-wallet and banking transactions in
              one place. Get insights, learn financial literacy, and take
              control of your money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to='/login' className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">Start Tracking Free</Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500">
              Integrated with leading financial platforms
            </p>
          </div>

          {/* Platform Logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="/images/Gopay-Logo.png"
                alt="Gopay"
                className="w-15 h-15 object-contain" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="/images/OVO-Logo.png"
                alt="OVO"
                className="w-15 h-15 object-contain" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="/images/Dana-Logo.png"
                alt="DANA"
                className="w-15 h-15 object-contain" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="/images/Shoopepay-Logo.png"
                alt="ShoopePay"
                className="w-15 h-15 object-contain" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="/images/LinkAja-Logo.png"
                alt="LinkAja"
                className="w-15 h-15 object-contain" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="/images/Doku-Logo.png"
                alt="Doku"
                className="object-cover" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="/images/brimo-logo.png"
                alt="Brimo"
                className="w-15 h-15 object-contain" />
              
            </div>
            <div className="w-20 h-20 backdrop-blur-sm  shadow-lg flex items-center justify-center">
              <img
                src="/images/livin-mandiri-logo.png"
                alt="Livin'"
                className="object-cover" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="/images/bca-mobile-logo.png"
                alt="BCA"
                className="w-15 h-15 object-contain" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="/images/bni-logo.png"
                alt="BNI"
                className="w-15 h-15 object-contain" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) =>
          <Card key={index} className="p-6 text-center">
              <div className="text-4xl mb-2 justify-center align-center flex">
                <img src={stat.imageUrl} alt={stat.label} className="w-10 h-10 object-contain" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </Card>
          )}
        </div>
      </section>

      {/* Articles Section */}
      <section className="container-1280 px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Financial Tips & Insights
          </h2>
          <p className="text-lg text-slate-600">
            Learn from expert advice and improve your financial literacy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) =>
          <Link key={article.id} to={`/articles/${article.slug}`}>
              <Card hover className="overflow-hidden h-full">
                <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-48 object-cover" />
              
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{article.excerpt}</p>
                  <span className="text-indigo-600 font-medium text-sm flex items-center gap-1">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="container-1280 px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful Features to Manage Your Money
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to take control of your finances
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 group">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>);

          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="relative py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Everything you need to take control of your finances
          </p>
          <Link to="/login">
            <Button variant="white" size="lg">
              Start Your Free Trial Today
            </Button>
          </Link>
        </div>
      </section>
    </div>);

}

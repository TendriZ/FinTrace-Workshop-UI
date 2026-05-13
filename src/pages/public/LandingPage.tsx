import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
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
export function LandingPage() {
  const stats = [
  {
    icon: '👥',
    value: '100K+',
    label: 'Active Users'
  },
  {
    icon: '💰',
    value: '1M+',
    label: 'Transaction Tracked'
  },
  {
    icon: '🏦',
    value: '15+',
    label: 'Supported Platforms'
  },
  {
    icon: '⭐',
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

  const articles = [
  {
    image:
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop',
    title: '5 Simple Way to Save Money Every Month',
    description:
    'Discover practical strategies to cut expenses and increase your savings without sacrificing your lifestyle.',
    link: '/articles/1'
  },
  {
    image:
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    title: 'Understanding E-Wallet Security',
    description:
    'Essential tips to keep your digital money safe from fraud and unauthorized access.',
    link: '/articles/2'
  },
  {
    image:
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
    title: 'Investment Basics for Young Professionals',
    description:
    'Start your investment journey with these beginner-friendly tips and strategies.',
    link: '/articles/3'
  }];

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
              <Link to="/dashboard">
                <Button size="lg">Start Tracking Free</Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-slate-500">
              Integrated with leading financial platforms
            </p>
          </div>

          {/* Platform Logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg"
                alt="GoPay"
                className="w-12 h-12 object-contain" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg"
                alt="OVO"
                className="w-12 h-12 object-contain" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg"
                alt="DANA"
                className="w-12 h-12 object-contain" />
              
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-500">S Pay</span>
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-xl font-bold text-red-600">LinkAja</span>
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-xl font-bold text-blue-700">BRI</span>
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-xl font-bold text-yellow-600">Livin'</span>
            </div>
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-xl font-bold text-blue-600">BCA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) =>
          <Card key={index} className="p-6 text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
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
          {articles.map((article, index) =>
          <Link key={index} to={article.link}>
              <Card hover className="overflow-hidden h-full">
                <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover" />
              
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{article.description}</p>
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
        <div className="relative container-1280 px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Everything you need to take control of your finances
          </p>
          <Link to="/dashboard">
            <Button variant="white" size="lg">
              Start Your Free Trial Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-slate-200/50 py-12">
        <div className="container-1280 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <WalletIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold gradient-text">
                  FinTrace
                </span>
              </div>
              <p className="text-sm text-slate-600">
                Platform manajemen keuangan digital untuk masa depan finansial
                yang lebih cerah.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link to="/dashboard" className="hover:text-indigo-600">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/articles" className="hover:text-indigo-600">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-indigo-600">
                    Courses
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            © 2025 FinTrace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>);

}

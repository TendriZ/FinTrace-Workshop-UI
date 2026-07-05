import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StatCard } from '../../components/ui/StatCard';
import { SpendingChart } from '../../components/features/SpendingChart';
import { Card } from '../../components/ui/Card';
import { useAuthContext } from '../../context/AuthContext';
import {
  UsersIcon,
  ShoppingCartIcon,
  CheckCircleIcon,
  FileTextIcon,
  TrendingUpIcon,
  ClockIcon,
  TrendingDownIcon
} from 'lucide-react';

export function AdminDashboardPage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  const { user } = useAuthContext();
  const growthData = [
    { name: '2021', Users: 91, Advisors: 47.55 },
    { name: '2022', Users: 23.36, Advisors: 15.79 },
    { name: '2023', Users: 90.42, Advisors: 97.07 },
    { name: '2024', Users: 29.67, Advisors: 98.24 },
    { name: '2025', Users: 81.34, Advisors: 29.22 }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'article',
      title: 'New Article Published',
      description: 'Cara Mengelola Keuangan untuk Mahasiswa',
      author: 'Sarah Wijaya',
      time: '2 hours ago',
      icon: FileTextIcon,
      color: 'blue'
    },
    {
      id: 2,
      type: 'product',
      title: 'Product Added',
      description: 'Investment Masterclass 2024',
      author: 'Budi Santoso',
      time: '5 hours ago',
      icon: ShoppingCartIcon,
      color: 'purple'
    },
    {
      id: 3,
      type: 'user',
      title: 'New User Registered',
      description: 'Premium Member',
      author: 'Rina Kusuma',
      time: '1 day ago',
      icon: UsersIcon,
      color: 'emerald'
    },
    {
      id: 4,
      type: 'course',
      title: 'Course Completed',
      description: 'Personal Finance Mastery',
      author: 'Ahmad Rizki',
      time: '1 day ago',
      icon: CheckCircleIcon,
      color: 'cyan'
    },
    {
      id: 5,
      type: 'article',
      title: 'New Article Published',
      description: 'Strategi Investasi Jangka Panjang',
      author: 'Dewi Lestari',
      time: '2 days ago',
      icon: FileTextIcon,
      color: 'blue'
    }
  ];

  const todaySales = [
    {
      id: 1,
      name: 'Personal Finance Mastery',
      type: 'Course',
      price: 299000,
      thumbnail: '/images/How-to-Pay-Off-Credit-Card-Debt-Faster-Image.png'
    },
    {
      id: 2,
      name: 'Investasi Saham untuk Pemula',
      type: 'Course',
      price: 399000,
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Financial Planning Workbook',
      type: 'E-Book',
      price: 149000,
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop'
    }
  ];

  const topContent = [
    { rank: 1, name: 'Investasi Saham untuk Pemula', type: 'Article', views: '45.2K', trend: 92, direction: 'up' },
    { rank: 2, name: 'Personal Finance Mastery', type: 'Course', views: '38.7K', trend: 88, direction: 'up' },
    { rank: 3, name: 'Crypto Investment Guide', type: 'E-Book', views: '32.1K', trend: 85, direction: 'up' },
    { rank: 4, name: 'Mengelola Keuangan Keluarga', type: 'Article', views: '28.5K', trend: 79, direction: 'down' },
    { rank: 5, name: 'Passive Income Strategies', type: 'Course', views: '25.3K', trend: 76, direction: 'up' }
  ];

  return (
    <div className="min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={user?.avatar || '/images/cowboy-patrick.png'}
              alt="Profile"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-200" />
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
                Admin <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600">Selamat datang kembali, {user?.fullName || 'User'}!</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <StatCard
            title="Total Users"
            value="1.000.000"
            change="+15.3%"
            icon={UsersIcon}
            iconColor="emerald"
          />
          <StatCard
            title="Saled Product"
            value="500.000"
            change="+8.7%"
            icon={ShoppingCartIcon}
            iconColor="orange"
          />
          <StatCard
            title="Transaction Track"
            value="1.500.000"
            change="+12.1%"
            icon={CheckCircleIcon}
            iconColor="blue"
          />
          <StatCard
            title="Article Posted"
            value="150.000"
            change="+5.4%"
            icon={FileTextIcon}
            iconColor="red"
          />
        </div>

        {/* Growth Chart & Today's Sales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
          <div className="lg:col-span-2">
            <Card className="p-4 lg:p-6 h-full">
              <SpendingChart
                title="Users & Advisors Growth (%)"
                type="bar"
                data={growthData}
                dataKeys={['Users', 'Advisors']}
                colors={['#A855F7', '#FCA5A5']}
                height={250}
                mobileHeight={200}
              />
            </Card>
          </div>

          <div>
            <Card className="p-4 lg:p-6 h-full">
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <h2 className="text-base lg:text-lg font-bold text-slate-900">
                  Penjualan Hari ini
                </h2>
                <Link to="/admin/transactions">
                  <span className="text-xs lg:text-sm text-purple-600 hover:text-purple-700 cursor-pointer">
                    Lihat Semua
                  </span>
                </Link>
              </div>

              <div className="space-y-2 lg:space-y-3">
                {todaySales.map((sale) => (
                  <div key={sale.id} className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <img
                      src={sale.thumbnail}
                      alt={sale.name}
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 text-xs lg:text-sm truncate">
                        {sale.name}
                      </p>
                      <p className="text-xs text-slate-600">{sale.type}</p>
                    </div>
                    <p className="text-pink-500 font-semibold text-xs lg:text-sm whitespace-nowrap">
                      Rp {sale.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Activities & Top Performing Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <Card className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <h2 className="text-lg lg:text-xl font-bold text-slate-900">
                Recent Activities
              </h2>
              <ClockIcon className="w-5 h-5 text-slate-400" />
            </div>

            <div className="space-y-3 lg:space-y-4">
              {recentActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-slate-50 rounded-2xl"
                  >
                    <div
                      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.color === 'blue'
                          ? 'bg-blue-100 text-blue-600'
                          : activity.color === 'purple'
                          ? 'bg-purple-100 text-purple-600'
                          : activity.color === 'emerald'
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'bg-cyan-100 text-cyan-600'
                      }`}
                    >
                      <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 text-sm lg:text-base">
                        {activity.title} → {activity.description}
                      </p>
                      <p className="text-xs lg:text-sm text-slate-600">
                        {activity.author} · {activity.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <h2 className="text-base lg:text-lg font-bold text-slate-900">
                Top Performing Content
              </h2>
              <TrendingUpIcon className="w-5 h-5 text-emerald-500" />
            </div>

            <div className="space-y-2 lg:space-y-3">
              {topContent.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-slate-50 rounded-xl"
                >
                  <span className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {item.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 text-xs lg:text-sm truncate">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <span>{item.type}</span>
                      <span>•</span>
                      <span>{item.views} views</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {item.direction === 'up' ? (
                      <TrendingUpIcon className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-500" />
                    ) : (
                      <TrendingDownIcon className="w-3 h-3 lg:w-4 lg:h-4 text-rose-500" />
                    )}
                    <span
                      className={`text-xs lg:text-sm font-medium ${
                        item.direction === 'up'
                          ? 'text-emerald-600'
                          : 'text-rose-600'
                      }`}
                    >
                      {item.trend}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

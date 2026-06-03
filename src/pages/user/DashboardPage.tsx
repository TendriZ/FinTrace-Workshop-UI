import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useAuthContext } from '../../context/AuthContext';
import {
  TrendingUpIcon,
  TrendingDownIcon,
  WalletIcon,
  CreditCardIcon,
  PiggyBankIcon,
  TargetIcon,
  BookOpenIcon,
  SettingsIcon } from
'lucide-react';
export function DashboardPage() {
  const { user } = useAuthContext(); 
  const stats = [
  {
    label: 'Total Saldo',
    value: 'Rp 12.450.000',
    change: '+12.5%',
    trend: 'up',
    icon: WalletIcon,
    color: 'emerald'
  },
  {
    label: 'Pengeluaran Bulan Ini',
    value: 'Rp 3.250.000',
    change: '-8.2%',
    trend: 'down',
    icon: CreditCardIcon,
    color: 'red'
  },
  {
    label: 'Tabungan',
    value: 'Rp 8.500.000',
    change: '+15.3%',
    trend: 'up',
    icon: PiggyBankIcon,
    color: 'blue'
  },
  {
    label: 'Target Tercapai',
    value: '3 dari 5',
    change: '60%',
    trend: 'up',
    icon: TargetIcon,
    color: 'purple'
  }];

  const recentTransactions = [
  {
    id: 1,
    title: 'Gojek - Transport',
    amount: -25000,
    category: 'Transportasi',
    date: '15 Jan 2024',
    type: 'expense'
  },
  {
    id: 2,
    title: 'Salary Transfer',
    amount: 8000000,
    category: 'Pemasukan',
    date: '15 Jan 2024',
    type: 'income'
  },
  {
    id: 3,
    title: 'Indomaret',
    amount: -150000,
    category: 'Belanja',
    date: '14 Jan 2024',
    type: 'expense'
  },
  {
    id: 4,
    title: 'Spotify Premium',
    amount: -54000,
    category: 'Hiburan',
    date: '14 Jan 2024',
    type: 'expense'
  },
  {
    id: 5,
    title: 'Freelance Project',
    amount: 2500000,
    category: 'Pemasukan',
    date: '13 Jan 2024',
    type: 'income'
  }];

  const budgetCategories = [
  {
    name: 'Makanan & Minuman',
    spent: 1200000,
    budget: 2000000,
    percentage: 60
  },
  {
    name: 'Transportasi',
    spent: 450000,
    budget: 500000,
    percentage: 90
  },
  {
    name: 'Hiburan',
    spent: 300000,
    budget: 800000,
    percentage: 37.5
  },
  {
    name: 'Belanja',
    spent: 800000,
    budget: 1000000,
    percentage: 80
  }];

  const goals = [
  {
    name: 'Dana Darurat',
    current: 8500000,
    target: 15000000,
    percentage: 56.7
  },
  {
    name: 'Liburan Bali',
    current: 3200000,
    target: 5000000,
    percentage: 64
  },
  {
    name: 'Laptop Baru',
    current: 7500000,
    target: 12000000,
    percentage: 62.5
  }];

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src={user?.avatar || '/images/default-avatar.png'}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-200" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Financial <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-slate-600">Selamat datang kembali, {user?.fullName || 'User'}!</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <SettingsIcon className="w-5 h-5 mr-2" />
            Settings
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              emerald: 'from-emerald-500 to-teal-500',
              red: 'from-rose-500 to-pink-500',
              blue: 'from-blue-500 to-cyan-500',
              purple: 'from-purple-500 to-indigo-500'
            };
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center shadow-lg`}>
                    
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    
                    {stat.trend === 'up' ?
                    <TrendingUpIcon className="w-4 h-4" /> :

                    <TrendingDownIcon className="w-4 h-4" />
                    }
                    {stat.change}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </Card>);

          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Transaksi Terbaru
                </h2>
                <Link to="/transaction-history">
                  <Button variant="outline" size="sm">
                    Lihat Semua
                  </Button>
                </Link>
              </div>

              <div className="space-y-3">
                {recentTransactions.map((transaction) =>
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  
                    <div className="flex items-center gap-4">
                      <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'income' ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                      
                        {transaction.type === 'income' ?
                      <TrendingUpIcon className="w-5 h-5 text-emerald-600" /> :

                      <TrendingDownIcon className="w-5 h-5 text-rose-600" />
                      }
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">
                          {transaction.title}
                        </p>
                        <p className="text-sm text-slate-600">
                          {transaction.category} • {transaction.date}
                        </p>
                      </div>
                    </div>
                    <p
                    className={`text-lg font-semibold ${transaction.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    
                      {transaction.type === 'income' ? '+' : ''}Rp{' '}
                      {Math.abs(transaction.amount).toLocaleString('id-ID')}
                    </p>
                  </div>
                )}
              </div>
            </Card>

            {/* Budget Tracking */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Budget Tracking
              </h2>
              <div className="space-y-4">
                {budgetCategories.map((category, index) =>
                <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-900">
                        {category.name}
                      </span>
                      <span className="text-sm text-slate-600">
                        Rp {category.spent.toLocaleString('id-ID')} / Rp{' '}
                        {category.budget.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                      className={`h-2 rounded-full transition-all ${category.percentage > 80 ? 'bg-gradient-to-r from-rose-500 to-pink-500' : category.percentage > 60 ? 'bg-gradient-to-r from-amber-500 to-yellow-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'}`}
                      style={{
                        width: `${category.percentage}%`
                      }} />
                    
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {category.percentage}% terpakai
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Financial Goals */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Target Keuangan
              </h2>
              <div className="space-y-4">
                {goals.map((goal, index) =>
                <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-900">
                        {goal.name}
                      </span>
                      <span className="text-sm text-emerald-600 font-medium">
                        {goal.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
                      <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all"
                      style={{
                        width: `${goal.percentage}%`
                      }} />
                    
                    </div>
                    <p className="text-xs text-slate-600">
                      Rp {goal.current.toLocaleString('id-ID')} / Rp{' '}
                      {goal.target.toLocaleString('id-ID')}
                    </p>
                  </div>
                )}
              </div>
              <Button className="w-full mt-4" variant="outline">
                <TargetIcon className="w-4 h-4 mr-2" />
                Tambah Target Baru
              </Button>
            </Card>

            {/* Learning Resources */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Rekomendasi Belajar
              </h2>
              <div className="space-y-3">
                <Link
                  to="/articles/1"
                  className="block p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl hover:from-purple-100 hover:to-indigo-100 transition-colors">
                  
                  <div className="flex items-start gap-3">
                    <BookOpenIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900 text-sm">
                        Cara Mengelola Keuangan untuk Mahasiswa
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        5 menit baca
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/products/2"
                  className="block p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:from-blue-100 hover:to-cyan-100 transition-colors">
                  
                  <div className="flex items-start gap-3">
                    <BookOpenIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900 text-sm">
                        Investasi Saham untuk Pemula
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        Kursus Online
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link to="/articles">
                <Button className="w-full mt-4" variant="outline">
                  Lihat Semua Artikel
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>);

}

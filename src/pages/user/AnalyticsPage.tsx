import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StatCard } from '../../components/ui/StatCard';
import { SpendingChart } from '../../components/features/SpendingChart';
import {
  WalletIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  PieChartIcon,
  CalendarIcon
} from 'lucide-react';

export function AnalyticsPage() {
  const [timeFilter, setTimeFilter] = useState<'week' | 'month' | 'year'>('month');

  const spendingData = [
    { name: 'Jan', Income: 8000000, Expense: 3500000 },
    { name: 'Feb', Income: 8500000, Expense: 4200000 },
    { name: 'Mar', Income: 9200000, Expense: 3800000 },
    { name: 'Apr', Income: 7800000, Expense: 4500000 },
    { name: 'May', Income: 9000000, Expense: 4100000 },
    { name: 'Jun', Income: 8800000, Expense: 3900000 }
  ];

  const categoryData = [
    { name: 'Makanan', value: 2500000, color: '#8b5cf6' },
    { name: 'Transportasi', value: 1500000, color: '#06b6d4' },
    { name: 'Hiburan', value: 800000, color: '#ec4899' },
    { name: 'Belanja', value: 1200000, color: '#f59e0b' },
    { name: 'Tagihan', value: 900000, color: '#10b981' }
  ];

  const stats = [
    {
      title: 'Total Pemasukan',
      value: 'Rp 51.300.000',
      change: '+15.3%',
      icon: WalletIcon
    },
    {
      title: 'Total Pengeluaran',
      value: 'Rp 24.000.000',
      change: '-8.2%',
      icon: TrendingDownIcon
    },
    {
      title: 'Rasio Tabungan',
      value: '53.2%',
      change: '+5.1%',
      icon: TrendingUpIcon
    },
    {
      title: 'Kategori Terbesar',
      value: 'Makanan',
      icon: PieChartIcon
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Financial <span className="gradient-text">Analytics</span>
            </h1>
            <p className="text-slate-600">
              Analisis lengkap keuangan Anda
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full border border-slate-200 p-1">
            {(['week', 'month', 'year'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  timeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {filter === 'week' ? 'Minggu' : filter === 'month' ? 'Bulan' : 'Tahun'}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={Icon}
              />
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <SpendingChart
              title="Trend Pengeluaran vs Pemasukan"
              type="bar"
              data={spendingData}
              dataKeys={['Income', 'Expense']}
              colors={['#10b981', '#ef4444']}
              height={350}
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Pembagian Kategori Pengeluaran
            </h3>
            <div className="space-y-4">
              {categoryData.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="font-medium text-slate-900">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-sm text-slate-600">
                      Rp {category.value.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${(category.value / 2500000) * 100}%`,
                        backgroundColor: category.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Monthly Breakdown */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              Rincian Bulanan
            </h3>
            <Button variant="outline" size="sm">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Lihat Semua
            </Button>
          </div>

          <div className="space-y-4">
            {spendingData.map((month, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                    {month.name.substring(0, 3)}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{month.name}</p>
                    <p className="text-sm text-slate-600">
                      Tabungan: Rp{' '}
                      {((month.Income as number) - (month.Expense as number)).toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-emerald-600 font-medium">
                    +Rp {(month.Income as number).toLocaleString('id-ID')}
                  </p>
                  <p className="text-sm text-rose-600 font-medium">
                    -Rp {(month.Expense as number).toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ResponsiveTable } from '../../components/ui/ResponsiveTable';
import {
  SearchIcon,
  DownloadIcon,
  TrendingUpIcon,
  DollarSignIcon,
  ShoppingBagIcon,
  UsersIcon } from
'lucide-react';

export function ManageTransactionsPage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const transactions = [
  {
    id: 'TRX-2024-001',
    user: 'John Doe',
    email: 'john.doe@example.com',
    date: '15 Jan 2024',
    items: ['Personal Finance Mastery', 'Investasi Saham untuk Pemula'],
    total: 774780,
    status: 'completed',
    paymentMethod: 'Kartu Kredit'
  },
  {
    id: 'TRX-2024-002',
    user: 'Jane Smith',
    email: 'jane.smith@example.com',
    date: '10 Jan 2024',
    items: ['Konsultasi Financial Planning'],
    total: 550000,
    status: 'completed',
    paymentMethod: 'GoPay'
  },
  {
    id: 'TRX-2024-003',
    user: 'Ahmad Fauzi',
    email: 'ahmad.fauzi@example.com',
    date: '5 Jan 2024',
    items: ['Debt Management Bootcamp'],
    total: 276390,
    status: 'pending',
    paymentMethod: 'Transfer Bank'
  }];

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
    tx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.user.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || tx.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const totalRevenue = transactions.
  filter((tx) => tx.status === 'completed').
  reduce((sum, tx) => sum + tx.total, 0);
  const pendingRevenue = transactions.
  filter((tx) => tx.status === 'pending').
  reduce((sum, tx) => sum + tx.total, 0);

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
              Kelola <span className="gradient-text">Transaksi</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600">Monitor dan kelola semua transaksi</p>
          </div>
          <Button variant="outline" className="w-full sm:w-auto">
            <DownloadIcon className="w-5 h-5 mr-2" />
            Export Data
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <Card className="p-4 lg:p-6">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <DollarSignIcon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <p className="text-xs lg:text-sm text-slate-600">Total Revenue</p>
                <p className="text-base lg:text-xl font-bold text-slate-900">
                  Rp {totalRevenue.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 lg:p-6">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <TrendingUpIcon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <p className="text-xs lg:text-sm text-slate-600">Pending</p>
                <p className="text-base lg:text-xl font-bold text-slate-900">
                  Rp {pendingRevenue.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <ShoppingBagIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total Transaksi</p>
                <p className="text-2xl font-bold text-slate-900">
                  {transactions.length}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Customers</p>
                <p className="text-2xl font-bold text-slate-900">
                  {new Set(transactions.map((tx) => tx.user)).size}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari transaksi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500" />

            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterStatus === 'all' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>

                Semua
              </button>
              <button
                onClick={() => setFilterStatus('completed')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterStatus === 'completed' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>

                Selesai
              </button>
              <button
                onClick={() => setFilterStatus('pending')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterStatus === 'pending' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>

                Pending
              </button>
            </div>
          </div>
        </Card>

        {/* Transactions Table */}
        <Card className="overflow-hidden p-4">
          <ResponsiveTable
            columns={[
              { key: 'id', label: 'ID Transaksi' },
              {
                key: 'user',
                label: 'Customer',
                render: (_, transaction) => (
                  <div>
                    <p className="font-medium text-slate-900">{transaction.user}</p>
                    <p className="text-sm text-slate-600">{transaction.email}</p>
                  </div>
                )
              },
              {
                key: 'items',
                label: 'Produk',
                render: (items) => (
                  <div className="text-sm text-slate-600">
                    {items.map((item, idx) => <div key={idx}>• {item}</div>)}
                  </div>
                )
              },
              { key: 'date', label: 'Tanggal' },
              { key: 'paymentMethod', label: 'Metode' },
              {
                key: 'total',
                label: 'Total',
                render: (total) => (
                  <span className="text-slate-900 font-semibold">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                )
              },
              {
                key: 'status',
                label: 'Status',
                render: (status) => (
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    status === 'completed' ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700' :
                    'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700'
                  }`}>
                    {status === 'completed' ? 'Selesai' : 'Pending'}
                  </span>
                )
              }
            ]}
            data={filteredTransactions}
          />
        </Card>
      </div>
    </div>);
}
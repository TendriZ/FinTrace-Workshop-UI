import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import {
  DownloadIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon } from
'lucide-react';
export function TransactionsPage() {
  const [filter, setFilter] = useState('all');
  const transactions = [
  {
    id: 'TRX-2024-001',
    date: '15 Januari 2024',
    items: ['Personal Finance Mastery', 'Investasi Saham untuk Pemula'],
    total: 774780,
    status: 'completed',
    paymentMethod: 'Kartu Kredit'
  },
  {
    id: 'TRX-2024-002',
    date: '10 Januari 2024',
    items: ['Konsultasi Financial Planning'],
    total: 550000,
    status: 'completed',
    paymentMethod: 'GoPay'
  },
  {
    id: 'TRX-2024-003',
    date: '5 Januari 2024',
    items: ['Debt Management Bootcamp'],
    total: 276390,
    status: 'pending',
    paymentMethod: 'Transfer Bank'
  },
  {
    id: 'TRX-2023-045',
    date: '28 Desember 2023',
    items: ['UMKM Financial Management'],
    total: 387390,
    status: 'completed',
    paymentMethod: 'OVO'
  },
  {
    id: 'TRX-2023-044',
    date: '20 Desember 2023',
    items: ['Cryptocurrency & Blockchain'],
    total: 498390,
    status: 'failed',
    paymentMethod: 'Kartu Kredit'
  }];

  const filteredTransactions = transactions.filter((tx) => {
    if (filter === 'all') return true;
    return tx.status === filter;
  });
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="w-5 h-5 text-emerald-500" />;
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-amber-500" />;
      case 'failed':
        return <XCircleIcon className="w-5 h-5 text-rose-500" />;
      default:
        return null;
    }
  };
  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Selesai';
      case 'pending':
        return 'Menunggu';
      case 'failed':
        return 'Gagal';
      default:
        return status;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700';
      case 'pending':
        return 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700';
      case 'failed':
        return 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };
  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Transaction <span className="gradient-text">History</span>
          </h1>
          <p className="text-slate-600">Lihat semua transaksi pembelian Anda</p>
        </div>

        {/* Filter */}
        <div className="mb-6 flex flex-wrap gap-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === 'all' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/50'}`}>
            
            Semua
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === 'completed' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/50'}`}>
            
            Selesai
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === 'pending' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/50'}`}>
            
            Menunggu
          </button>
          <button
            onClick={() => setFilter('failed')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === 'failed' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/50'}`}>
            
            Gagal
          </button>
        </div>

        {/* Transactions */}
        <div className="space-y-4">
          {filteredTransactions.map((transaction) =>
          <Card key={transaction.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {transaction.id}
                    </h3>
                    <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                    
                      {getStatusIcon(transaction.status)}
                      {getStatusText(transaction.status)}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                    Rp {transaction.total.toLocaleString('id-ID')}
                  </div>
                  <p className="text-sm text-slate-600">
                    {transaction.paymentMethod}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mb-4">
                <h4 className="text-sm font-medium text-slate-700 mb-2">
                  Produk:
                </h4>
                <ul className="space-y-1">
                  {transaction.items.map((item, index) =>
                <li key={index} className="text-sm text-slate-600">
                      • {item}
                    </li>
                )}
                </ul>
              </div>

              {transaction.status === 'completed' &&
            <Button variant="outline" size="sm">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Download Invoice
                </Button>
            }

              {transaction.status === 'pending' &&
            <Button size="sm">Selesaikan Pembayaran</Button>
            }
            </Card>
          )}
        </div>
      </div>
    </div>);

}

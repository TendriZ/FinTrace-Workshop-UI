import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { DownloadIcon, EyeIcon, RefreshCwIcon, CreditCardIcon } from 'lucide-react';

interface Purchase {
  id: string;
  orderId: string;
  status: 'completed' | 'pending' | 'failed' | 'unpaid';
  amount: number;
  paymentMethod: string;
  date: string;
  products: Array<{
    name: string;
    type: string;
  }>;
}

export function PurchaseHistoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const purchases: Purchase[] = [
    {
      id: 'TRX-2024-001',
      orderId: 'ORD-001',
      status: 'completed',
      amount: 774780,
      paymentMethod: 'Kartu Kredit',
      date: '15 Jan 2024',
      products: [
        { name: 'Personal Finance Mastery', type: 'Course' },
        { name: 'Investasi Saham untuk Pemula', type: 'Course' }
      ]
    },
    {
      id: 'TRX-2024-002',
      orderId: 'ORD-002',
      status: 'completed',
      amount: 550000,
      paymentMethod: 'GoPay',
      date: '12 Jan 2024',
      products: [
        { name: 'Financial Planning Workbook', type: 'E-Book' }
      ]
    },
    {
      id: 'TRX-2024-003',
      orderId: 'ORD-003',
      status: 'pending',
      amount: 276390,
      paymentMethod: 'Transfer Bank',
      date: '10 Jan 2024',
      products: [
        { name: 'Konsultasi Financial', type: 'Consultation' }
      ]
    },
    {
      id: 'TRX-2023-045',
      orderId: 'ORD-045',
      status: 'completed',
      amount: 387390,
      paymentMethod: 'OVO',
      date: '28 Dec 2023',
      products: [
        { name: 'Debt Management Course', type: 'Course' }
      ]
    },
    {
      id: 'TRX-2023-044',
      orderId: 'ORD-044',
      status: 'failed',
      amount: 498390,
      paymentMethod: 'Kartu Kredit',
      date: '25 Dec 2023',
      products: [
        { name: 'Crypto Investment Guide', type: 'Course' }
      ]
    },
    {
      id: 'TRX-2024-004',
      orderId: 'ORD-004',
      status: 'unpaid',
      amount: 299000,
      paymentMethod: 'Virtual Account',
      date: '16 Jan 2024',
      products: [
        { name: 'UMKM Financial Guide', type: 'Course' }
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'completed', label: 'Selesai' },
    { id: 'unpaid', label: 'Belum Dibayar' },
    { id: 'pending', label: 'Menunggu' },
    { id: 'failed', label: 'Gagal' }
  ];

  const filteredPurchases =
    activeFilter === 'all'
      ? purchases
      : purchases.filter((p) => p.status === activeFilter);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
            Selesai
          </span>
        );
      case 'pending':
        return (
          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
            Menunggu
          </span>
        );
      case 'unpaid':
        return (
          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
            Belum Dibayar
          </span>
        );
      case 'failed':
        return (
          <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full">
            Gagal
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Transaction <span className="gradient-text">History</span>
          </h1>
          <p className="text-slate-600">
            Lihat semua transaksi pembelian Anda
          </p>
        </div>

        {/* Filter Tabs */}
        <Card className="p-2 mb-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Card>

        {/* Transaction List */}
        <div className="space-y-4">
          {filteredPurchases.map((purchase) => (
            <Card key={purchase.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-semibold text-slate-900">
                      ID: {purchase.id}
                    </p>
                    {getStatusBadge(purchase.status)}
                  </div>
                  <p className="text-sm text-slate-600">{purchase.date}</p>
                </div>
                <div className="text-right md:text-left">
                  <p className="text-lg font-bold text-purple-600">
                    Rp {purchase.amount.toLocaleString('id-ID')}
                  </p>
                  <p className="text-sm text-slate-600">
                    {purchase.paymentMethod}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mb-4">
                <p className="text-sm font-medium text-slate-700 mb-2">
                  Produk:
                </p>
                <ul className="space-y-1">
                  {purchase.products.map((product, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {product.name} - {product.type}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {purchase.status === 'completed' && (
                  <>
                    <Button variant="outline" size="sm">
                      <DownloadIcon className="w-4 h-4 mr-2" />
                      Download Invoice
                    </Button>
                    <Link to={`/courses/${purchase.orderId}`}>
                      <Button variant="outline" size="sm">
                        <EyeIcon className="w-4 h-4 mr-2" />
                        Lihat Detail
                      </Button>
                    </Link>
                  </>
                )}
                {purchase.status === 'unpaid' && (
                  <Button size="sm">
                    <RefreshCwIcon className="w-4 h-4 mr-2" />
                    Selesaikan Pembayaran
                  </Button>
                )}
                {purchase.status === 'pending' && (
                  <Button variant="outline" size="sm">
                    <EyeIcon className="w-4 h-4 mr-2" />
                    Lihat Detail
                  </Button>
                )}
                {purchase.status === 'failed' && (
                  <Card className="p-3 bg-rose-50 border-rose-200">
                    <p className="text-sm text-rose-700 flex items-center gap-2">
                      <CreditCardIcon className="w-4 h-4" />
                      Pembayaran gagal. Silakan coba lagi.
                    </p>
                  </Card>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredPurchases.length === 0 && (
          <Card className="p-12 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CreditCardIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Tidak ada transaksi
            </h3>
            <p className="text-slate-600 mb-6">
              {activeFilter === 'all'
                ? 'Anda belum memiliki transaksi.'
                : `Tidak ada transaksi dengan status ${filters.find((f) => f.id === activeFilter)?.label}`}
            </p>
            {activeFilter !== 'all' && (
              <Button variant="outline" onClick={() => setActiveFilter('all')}>
                Lihat Semua Transaksi
              </Button>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}

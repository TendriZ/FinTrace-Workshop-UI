import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { mockProducts } from '../../data/mockProducts';
import { formatCurrency } from '../../utils/formatCurrency';
import { useAuthContext } from '../../context/AuthContext';
import {
  ArrowLeftIcon,
  StarIcon,
  ClockIcon,
  VideoIcon,
  CheckCircleIcon,
  UsersIcon,
  ShoppingCartIcon,
  AlertTriangleIcon } from
'lucide-react';

export function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const [addedToCart, setAddedToCart] = useState(false);
  const product = mockProducts.find((items) => items.slug === slug);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/courses">
          <Button variant="outline" size="sm" className="mb-6">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Kembali ke Katalog
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero */}
            <Card className="overflow-hidden">
              <img
                src={product.featuredImage}
                alt={product.name}
                className="w-full h-80 object-cover" />

              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                  {product.category}
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-slate-600 mb-6">
                  {product.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-slate-600">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                    <span>({product.reviewCount} ulasan)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UsersIcon className="w-5 h-5" />
                    <span>{product.salesCount} pembelian</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VideoIcon className="w-5 h-5" />
                    <span>{product.modules} modul</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>{product.duration}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* What You'll Learn */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Yang Akan Anda Pelajari
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {product.whatYouLearn?.map((item, index) =>
                <div key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Curriculum */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Kurikulum Kursus
              </h2>
              <div className="space-y-4">
                {(product.curriculum ?? []).map((section, index) =>
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl p-4 hover:border-purple-300 transition-colors">

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {section.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span>{section.description}</span>
                          <span>•</span>
                          <span>{section.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Instructor */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Instruktur
              </h2>
              <div className="flex items-start gap-4">
                <img
                  src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'}
                  alt={product.instructor}
                  className="w-20 h-20 rounded-full object-cover" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {product.instructor}
                  </h3>
                  <p className="text-purple-600 font-medium mb-2">
                    Certified Financial Planner
                  </p>
                  <p className="text-slate-600">Instruktur berpengalaman yang membantu banyak peserta memahami keuangan pribadi dan investasi.</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              {product.badge && (
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-4">
                  {product.badge}
                </div>
              )}

              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                {formatCurrency(product.salePrice ?? product.price)}
              </div>

              {product.salePrice && product.salePrice < product.price && (
                <div className="mb-4 flex items-center gap-2 text-sm">
                  <span className="text-slate-400 line-through">{formatCurrency(product.price)}</span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 font-medium">Save {Math.round(((product.price - product.salePrice) / product.price) * 100)}%</span>
                </div>
              )}

              <div className="space-y-3 mb-6">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    if (!isAuthenticated) {
                      navigate('/login');
                    } else {
                      navigate('/cart');
                    }
                  }}>

                  Beli Sekarang
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={handleAddToCart}>

                  <ShoppingCartIcon className="w-5 h-5 mr-2" />
                  {addedToCart ? 'Ditambahkan!' : 'Tambah ke Keranjang'}
                </Button>
              </div>

              <div className="border-t border-slate-200 pt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Durasi</span>
                  <span className="font-medium text-slate-900">
                    {product.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Jumlah Pelajaran</span>
                  <span className="font-medium text-slate-900">
                    {product.modules} modul
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Akses</span>
                  <span className="font-medium text-slate-900">Selamanya</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Sertifikat</span>
                  <span className="font-medium text-slate-900">Ya</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Guest Warning Banner */}
        {!isAuthenticated && (
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <div className="container-1280 mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl px-6 py-4 flex items-center justify-center gap-3 shadow-lg">
                <AlertTriangleIcon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-sm md:text-base text-amber-800 font-medium">
                  Anda akan diarahkan ke halaman login jika ingin membeli produk
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);
}

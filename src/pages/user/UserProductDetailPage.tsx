import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { formatCurrency } from '../../utils/formatCurrency';
import { useProductsContext } from '../../context/ProductsContext';
import {
  ArrowLeftIcon,
  StarIcon,
  ClockIcon,
  VideoIcon,
  CheckCircleIcon,
  UsersIcon,
  ShoppingCartIcon
} from 'lucide-react';

export function UserProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);
  const { getProductBySlug } = useProductsContext();
  const product = getProductBySlug(slug || '');

  // Debug: Log product data
  console.log('User Product data:', product);
  console.log('User Curriculum data:', product?.curriculum);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // Handle case when product is not found
  if (!product) {
    return (
      <div className="min-h-screen">
        <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
          <Card className="p-12 text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Produk Tidak Ditemukan</h1>
            <p className="text-slate-600 mb-6">Produk yang Anda cari tidak tersedia.</p>
            <Link to="/user/courses">
              <Button>Kembali ke Katalog</Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/user/courses">
          <Button variant="outline" size="sm" className="mb-6 whitespace-nowrap">
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
                className="w-full h-80 object-cover"
              />

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
              {product.curriculum && product.curriculum.length > 0 ? (
                <div className="space-y-4">
                  {product.curriculum.map((section, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-2xl p-4 hover:border-purple-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {section.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <span>{section.lessons} pelajaran</span>
                            <span>•</span>
                            <span>{section.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <p>Belum ada informasi kurikulum untuk produk ini.</p>
                </div>
              )}
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
                  className="w-20 h-20 rounded-full object-cover"
                />

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
                  onClick={() => navigate('/cart')}
                >
                  Beli Sekarang
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={handleAddToCart}
                >
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
      </div>
    </div>
  );
}

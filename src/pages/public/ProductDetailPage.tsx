import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import {
  ArrowLeftIcon,
  StarIcon,
  ClockIcon,
  VideoIcon,
  CheckCircleIcon,
  UsersIcon,
  ShoppingCartIcon } from
'lucide-react';
export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);
  const product = {
    id: 1,
    title: 'Personal Finance Mastery',
    type: 'Kursus Online',
    price: 299000,
    rating: 4.8,
    reviews: 342,
    students: 1234,
    duration: '8 jam',
    lessons: 24,
    instructor: {
      name: 'Sarah Wijaya, CFP',
      title: 'Certified Financial Planner',
      image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      bio: 'Financial advisor dengan 10+ tahun pengalaman membantu ribuan klien mencapai tujuan finansial mereka.'
    },
    image:
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop',
    description:
    'Kuasai dasar-dasar manajemen keuangan pribadi dari perencanaan hingga investasi. Kursus komprehensif ini akan membekali Anda dengan pengetahuan dan keterampilan praktis untuk mengelola keuangan dengan lebih baik.',
    whatYouLearn: [
    'Membuat budget dan tracking pengeluaran yang efektif',
    'Strategi menabung dan membangun dana darurat',
    'Dasar-dasar investasi dan diversifikasi portofolio',
    'Manajemen hutang dan kredit yang sehat',
    'Perencanaan keuangan jangka pendek dan panjang',
    'Tips mengoptimalkan pajak dan asuransi'],

    curriculum: [
    {
      title: 'Pengenalan Personal Finance',
      lessons: 3,
      duration: '45 menit'
    },
    {
      title: 'Budgeting & Expense Tracking',
      lessons: 4,
      duration: '1 jam'
    },
    {
      title: 'Saving Strategies',
      lessons: 3,
      duration: '45 menit'
    },
    {
      title: 'Debt Management',
      lessons: 4,
      duration: '1 jam'
    },
    {
      title: 'Investment Basics',
      lessons: 5,
      duration: '1.5 jam'
    },
    {
      title: 'Financial Planning',
      lessons: 5,
      duration: '1.5 jam'
    }]

  };
  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/products">
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
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover" />
              
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                  {product.type}
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">
                  {product.title}
                </h1>
                <p className="text-lg text-slate-600 mb-6">
                  {product.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-slate-600">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                    <span>({product.reviews} ulasan)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UsersIcon className="w-5 h-5" />
                    <span>{product.students} siswa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VideoIcon className="w-5 h-5" />
                    <span>{product.lessons} pelajaran</span>
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
                {product.whatYouLearn.map((item, index) =>
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
                {product.curriculum.map((section, index) =>
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl p-4 hover:border-purple-300 transition-colors">
                  
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
                  src={product.instructor.image}
                  alt={product.instructor.name}
                  className="w-20 h-20 rounded-full object-cover" />
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {product.instructor.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-2">
                    {product.instructor.title}
                  </p>
                  <p className="text-slate-600">{product.instructor.bio}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Rp {product.price.toLocaleString('id-ID')}
              </div>

              <div className="space-y-3 mb-6">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => navigate('/cart')}>
                  
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
                    {product.lessons} video
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
    </div>);

}

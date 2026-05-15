import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StarIcon, ClockIcon, UsersIcon, VideoIcon } from 'lucide-react';
const products = [
{
  id: 1,
  title: 'Personal Finance Mastery',
  type: 'Kursus Online',
  price: 299000,
  rating: 4.8,
  students: 1234,
  duration: '8 jam',
  lessons: 24,
  instructor: 'Sarah Wijaya, CFP',
  image:
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop',
  description:
  'Kuasai dasar-dasar manajemen keuangan pribadi dari perencanaan hingga investasi.'
},
{
  id: 2,
  title: 'Investasi Saham untuk Pemula',
  type: 'Kursus Online',
  price: 399000,
  rating: 4.9,
  students: 856,
  duration: '10 jam',
  lessons: 30,
  instructor: 'Budi Santoso, CFA',
  image:
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
  description:
  'Pelajari strategi investasi saham yang tepat untuk membangun portofolio jangka panjang.'
},
{
  id: 3,
  title: 'Konsultasi Financial Planning',
  type: 'Konsultasi 1-on-1',
  price: 500000,
  rating: 5.0,
  students: 234,
  duration: '1 jam',
  lessons: 1,
  instructor: 'Tim Financial Advisor',
  image:
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
  description:
  'Sesi konsultasi pribadi dengan financial advisor profesional untuk perencanaan keuangan Anda.'
},
{
  id: 4,
  title: 'Debt Management Bootcamp',
  type: 'Kursus Online',
  price: 249000,
  rating: 4.7,
  students: 567,
  duration: '6 jam',
  lessons: 18,
  instructor: 'Linda Pratiwi, MBA',
  image:
  'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=400&fit=crop',
  description:
  'Strategi efektif untuk keluar dari jerat hutang dan membangun kembali kesehatan finansial.'
},
{
  id: 5,
  title: 'Cryptocurrency & Blockchain',
  type: 'Kursus Online',
  price: 449000,
  rating: 4.6,
  students: 423,
  duration: '12 jam',
  lessons: 36,
  instructor: 'Ahmad Fauzi, CTO',
  image:
  'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop',
  description:
  'Memahami dunia cryptocurrency dan teknologi blockchain untuk investasi masa depan.'
},
{
  id: 6,
  title: 'UMKM Financial Management',
  type: 'Kursus Online',
  price: 349000,
  rating: 4.8,
  students: 789,
  duration: '9 jam',
  lessons: 27,
  instructor: 'Dedi Kurniawan, MBA',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
  description:
  'Kelola keuangan bisnis kecil Anda dengan profesional dan efisien.'
}];

export function ProductsPage() {
  const [selectedType, setSelectedType] = useState('Semua');
  const types = ['Semua', 'Kursus Online', 'Konsultasi 1-on-1'];
  const filteredProducts = products.filter(
    (product) => selectedType === 'Semua' || product.type === selectedType
  );
  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Education <span className="gradient-text">Marketplace</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tingkatkan literasi keuangan dengan kursus berkualitas dan
            konsultasi profesional
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {types.map((type) =>
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${selectedType === type ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/50'}`}>
            
              {type}
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) =>
          <Card
            key={product.id}
            hover
            className="overflow-hidden flex flex-col">
            
              <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover" />
            
              <div className="p-6 flex-1 flex flex-col">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-medium rounded-full mb-3 self-start">
                  {product.type}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-4 flex-1">
                  {product.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                      <span>({product.students} siswa)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    {product.type === 'Kursus Online' ?
                  <>
                        <div className="flex items-center gap-1">
                          <VideoIcon className="w-4 h-4" />
                          <span>{product.lessons} pelajaran</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          <span>{product.duration}</span>
                        </div>
                      </> :

                  <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{product.duration} sesi</span>
                      </div>
                  }
                  </div>

                  <div className="text-sm text-slate-600">
                    <UsersIcon className="w-4 h-4 inline mr-1" />
                    {product.instructor}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Rp {product.price.toLocaleString('id-ID')}
                    </div>
                  </div>
                  <Link to={`/courses/${product.id}`}>
                    <Button size="sm">Detail</Button>
                  </Link>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>);

}

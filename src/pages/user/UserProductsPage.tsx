import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockProducts } from '../../data/mockProducts';
import { StarIcon, ClockIcon, UsersIcon, VideoIcon } from 'lucide-react';

export function UserProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const categories = ['Semua', 'course', 'consultation', 'premium', 'ebook'];

  const categoryLabels = {
    'Semua': 'Semua',
    'course': 'Kursus',
    'consultation': 'Konsultasi',
    'premium': 'Premium',
    'ebook': 'E-Book'
  };

  const filteredProducts = mockProducts.filter(
    (product) => selectedCategory === 'Semua' || product.category === selectedCategory
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
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/50'
            }`}>
            {categoryLabels[category as keyof typeof categoryLabels]}
          </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) =>
          <Card
            key={product.id}
            hover
            className="overflow-hidden flex flex-col"
          >
            <img
              src={product.featuredImage}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex-1 flex flex-col">
              {product.badge && (
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3 self-start">
                  {product.badge}
                </div>
              )}

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {product.name}
              </h3>
              <p className="text-slate-600 mb-4 flex-1">
                {product.shortDescription}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span>({product.reviewCount} ulasan)</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-600">
                  {product.category === 'course' ? (
                    <>
                      <div className="flex items-center gap-1">
                        <VideoIcon className="w-4 h-4" />
                        <span>{product.modules} modul</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{product.duration}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{product.duration}</span>
                    </div>
                  )}
                </div>

                <div className="text-sm text-slate-600">
                  {product.instructor && (
                    <div className="flex items-center gap-1">
                      <UsersIcon className="w-4 h-4 inline mr-1" />
                      {product.instructor}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Rp {product.salePrice ? product.salePrice.toLocaleString('id-ID') : product.price.toLocaleString('id-ID')}
                  </div>
                  {product.salePrice && (
                    <div className="text-sm text-slate-400 line-through">
                      Rp {product.price.toLocaleString('id-ID')}
                    </div>
                  )}
                </div>
                <Link to={`/user/courses/${product.slug}`}>
                  <Button size="sm">Detail</Button>
                </Link>
              </div>
            </div>
          </Card>
          )}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">Tidak ada produk yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}

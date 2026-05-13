import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { SearchIcon, ClockIcon, UserIcon } from 'lucide-react';
const articles = [
{
  id: 1,
  title: 'Cara Mengelola Keuangan untuk Mahasiswa',
  excerpt:
  'Tips praktis mengelola uang saku dan membangun kebiasaan finansial yang sehat sejak dini.',
  author: 'Sarah Wijaya',
  date: '15 Januari 2024',
  readTime: '5 menit',
  category: 'Personal Finance',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop'
},
{
  id: 2,
  title: 'Investasi untuk Pemula: Panduan Lengkap',
  excerpt:
  'Memulai perjalanan investasi Anda dengan strategi yang tepat dan risiko yang terukur.',
  author: 'Budi Santoso',
  date: '12 Januari 2024',
  readTime: '8 menit',
  category: 'Investasi',
  image:
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop'
},
{
  id: 3,
  title: 'Mengenal E-Wallet dan Keamanannya',
  excerpt:
  'Panduan lengkap menggunakan e-wallet dengan aman dan maksimal untuk transaksi sehari-hari.',
  author: 'Rina Kusuma',
  date: '10 Januari 2024',
  readTime: '6 menit',
  category: 'Digital Finance',
  image:
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop'
},
{
  id: 4,
  title: 'Strategi Menabung untuk Dana Darurat',
  excerpt:
  'Membangun dana darurat yang kuat untuk menghadapi situasi finansial yang tidak terduga.',
  author: 'Ahmad Fauzi',
  date: '8 Januari 2024',
  readTime: '7 menit',
  category: 'Saving',
  image:
  'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop'
},
{
  id: 5,
  title: 'Cara Keluar dari Jerat Hutang',
  excerpt:
  'Strategi efektif untuk melunasi hutang dan membangun kembali kesehatan finansial Anda.',
  author: 'Linda Pratiwi',
  date: '5 Januari 2024',
  readTime: '10 menit',
  category: 'Debt Management',
  image:
  'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=400&fit=crop'
},
{
  id: 6,
  title: 'Perencanaan Keuangan untuk UMKM',
  excerpt:
  'Tips mengelola keuangan bisnis kecil dan memisahkan keuangan pribadi dengan bisnis.',
  author: 'Dedi Kurniawan',
  date: '3 Januari 2024',
  readTime: '9 menit',
  category: 'Business',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
}];

export function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const categories = [
  'Semua',
  'Personal Finance',
  'Investasi',
  'Digital Finance',
  'Saving',
  'Debt Management',
  'Business'];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
    selectedCategory === 'Semua' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Financial <span className="gradient-text">Tips & Insights</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tingkatkan literasi keuangan Anda dengan artikel-artikel berkualitas
            dari para ahli
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm" />
            
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) =>
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/50'}`}>
              
                {category}
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) =>
          <Link key={article.id} to={`/articles/${article.id}`}>
              <Card hover className="h-full overflow-hidden">
                <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover" />
              
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-xs font-medium rounded-full mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )}
        </div>
      </div>
    </div>);

}

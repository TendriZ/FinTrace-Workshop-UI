import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockArticles } from '../../data/mockArticles';
import { SearchIcon, ClockIcon, UserIcon } from 'lucide-react';

export function UserArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = [
    'Semua',
    'Personal Finance',
    'Investasi',
    'Digital Finance',
    'Saving',
    'Debt Management',
    'Business'
  ];

  const filteredArticles = mockArticles.filter((article) => {
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
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            <span className="gradient-text">Artikel Keuangan</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Temukan artikel keuangan yang sesuai untuk membantu Anda mengelola keuangan dengan lebih baik
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari artikel..."
              className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/user/articles/${article.slug}`}
              className="block"
            >
              <Card
                hover
                className="overflow-hidden flex flex-col h-full"
              >
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-medium rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-1">
                    {article.shortDescription || article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{article.readTime} menit</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      <span>{article.author.name}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">Tidak ada artikel yang ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useArticlesContext } from '../../context/ArticlesContext';
import { SearchIcon, ClockIcon, UserIcon } from 'lucide-react';

export function ArticlesPage() {
  const { articles } = useArticlesContext();
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
          <Link key={article.id} to={`/articles/${article.slug}`}>
              <Card hover className="h-full overflow-hidden">
                <img
                src={article.featuredImage}
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
                      <span>{article.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>{article.readTime} menit</span>
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

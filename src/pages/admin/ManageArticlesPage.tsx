import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { ResponsiveTable } from '../../components/ui/ResponsiveTable';
import { PlusIcon, EditIcon, TrashIcon, SearchIcon, EyeIcon } from 'lucide-react';
import { useArticlesContext } from '../../context/ArticlesContext';
import type { Article } from '../../types';

interface FormData {
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: Article['category'];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string;
}

export function ManageArticlesPage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  const { articles, addArticle, updateArticle, deleteArticle } = useArticlesContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    category: 'Saving Tips',
    author: {
      name: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      role: 'Admin'
    },
    tags: ''
  });

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      featuredImage: '',
      category: 'Saving Tips',
      author: {
        name: 'Admin',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        role: 'Admin'
      },
      tags: ''
    });
    setEditingArticle(null);
  };

  // Open modal for add
  const handleAdd = () => {
    resetForm();
    setShowModal(true);
  };

  // Open modal for edit
  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      featuredImage: article.featuredImage,
      category: article.category,
      author: article.author,
      tags: article.tags.join(', ')
    });
    setShowModal(true);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tags = formData.tags.split(',').map(t => t.trim()).filter(t => t.length > 0);

    if (editingArticle) {
      // Update existing article
      updateArticle(editingArticle.id, {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        featuredImage: formData.featuredImage,
        category: formData.category,
        author: formData.author,
        tags
      });
    } else {
      // Add new article
      addArticle({
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        featuredImage: formData.featuredImage,
        category: formData.category,
        author: formData.author,
        tags
      });
    }

    setShowModal(false);
    resetForm();
  };

  // Handle delete
  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      deleteArticle(id);
    }
  };

  // Handle input change
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Filter articles
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
              Kelola <span className="gradient-text">Artikel</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Manajemen konten artikel edukasi finansial ({articles.length} artikel)
            </p>
          </div>
          <Button onClick={handleAdd} className="w-full sm:w-auto">
            <PlusIcon className="w-5 h-5 mr-2" />
            Tambah Artikel
          </Button>
        </div>

        {/* Search */}
        <Card className="p-4 mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </Card>

        {/* Articles Table */}
        <Card className="overflow-hidden p-4">
          <ResponsiveTable
            columns={[
              {
                key: 'title',
                label: 'Judul',
                render: (_, article) => (
                  <div>
                    <p className="font-medium text-slate-900">{article.title}</p>
                    <p className="text-sm text-slate-500 truncate max-w-xs">{article.excerpt}</p>
                  </div>
                )
              },
              { key: 'author', label: 'Penulis', render: (_, article) => article.author.name },
              {
                key: 'category',
                label: 'Kategori',
                render: (category) => (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-xs font-medium rounded-full">
                    {category}
                  </span>
                )
              },
              {
                key: 'views',
                label: 'Views',
                render: (views) => (
                  <div className="flex items-center gap-1">
                    <EyeIcon className="w-4 h-4" />
                    {views.toLocaleString()}
                  </div>
                )
              },
              { key: 'publishedAt', label: 'Tanggal' }
            ]}
            data={filteredArticles}
            emptyMessage="Tidak ada artikel yang ditemukan"
            actionButtons={(article) => (
              <>
                <button
                  onClick={() => handleEdit(article)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Edit"
                >
                  <EditIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Hapus"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </>
            )}
          />
        </Card>

        {/* Add/Edit Article Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {editingArticle ? 'Edit Artikel' : 'Tambah Artikel Baru'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Judul Artikel"
                    placeholder="Masukkan judul artikel"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    required
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Kategori</label>
                      <select
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.category}
                        onChange={(e) => handleChange('category', e.target.value as Article['category'])}
                        required
                      >
                        <option value="Budgeting">Budgeting</option>
                        <option value="Investment">Investment</option>
                        <option value="Saving Tips">Saving Tips</option>
                        <option value="E-Wallet Guide">E-Wallet Guide</option>
                        <option value="Debt Management">Debt Management</option>
                      </select>
                    </div>
                    <Input
                      label="Nama Penulis"
                      placeholder="Nama penulis"
                      value={formData.author.name}
                      onChange={(e) => handleChange('author', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Excerpt (Ringkasan)</label>
                    <textarea
                      rows={2}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Ringkasan singkat artikel..."
                      value={formData.excerpt}
                      onChange={(e) => handleChange('excerpt', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Konten</label>
                    <textarea
                      rows={8}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tulis konten artikel..."
                      value={formData.content}
                      onChange={(e) => handleChange('content', e.target.value)}
                      required
                    />
                  </div>

                  <Input
                    label="URL Gambar (Featured Image)"
                    placeholder="https://example.com/image.jpg"
                    value={formData.featuredImage}
                    onChange={(e) => handleChange('featuredImage', e.target.value)}
                    required
                  />

                  <Input
                    label="Tags (pisahkan dengan koma)"
                    placeholder="investasi, pemula, saham"
                    value={formData.tags}
                    onChange={(e) => handleChange('tags', e.target.value)}
                  />

                  <div className="flex gap-3 mt-6">
                    <Button type="submit" className="flex-1">
                      {editingArticle ? 'Update' : 'Simpan'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setShowModal(false);
                        resetForm();
                      }}
                    >
                      Batal
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

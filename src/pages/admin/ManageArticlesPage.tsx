import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { PlusIcon, EditIcon, TrashIcon, SearchIcon } from 'lucide-react';
export function ManageArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const articles = [
  {
    id: 1,
    title: 'Cara Mengelola Keuangan untuk Mahasiswa',
    author: 'Sarah Wijaya',
    category: 'Personal Finance',
    status: 'Published',
    date: '15 Jan 2024',
    views: 1234
  },
  {
    id: 2,
    title: 'Investasi untuk Pemula: Panduan Lengkap',
    author: 'Budi Santoso',
    category: 'Investasi',
    status: 'Published',
    date: '12 Jan 2024',
    views: 856
  },
  {
    id: 3,
    title: 'Mengenal E-Wallet dan Keamanannya',
    author: 'Rina Kusuma',
    category: 'Digital Finance',
    status: 'Draft',
    date: '10 Jan 2024',
    views: 0
  }];

  const filteredArticles = articles.filter(
    (article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Kelola <span className="gradient-text">Artikel</span>
            </h1>
            <p className="text-slate-600">
              Manajemen konten artikel edukasi finansial
            </p>
          </div>
          <Button onClick={() => setShowModal(true)}>
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
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500" />
            
          </div>
        </Card>

        {/* Articles Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Judul
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Penulis
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Kategori
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Tanggal
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Views
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredArticles.map((article) =>
                <tr
                  key={article.id}
                  className="hover:bg-slate-50 transition-colors">
                  
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">
                        {article.title}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {article.author}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${article.status === 'Published' ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700' : 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700'}`}>
                      
                        {article.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{article.date}</td>
                    <td className="px-6 py-4 text-slate-600">
                      {article.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <EditIcon className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Add Article Modal */}
        {showModal &&
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Tambah Artikel Baru
                </h2>
                <div className="space-y-4">
                  <Input
                  label="Judul Artikel"
                  placeholder="Masukkan judul artikel"
                  required />
                
                  <Input label="Penulis" placeholder="Nama penulis" required />
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Kategori
                    </label>
                    <select className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option>Personal Finance</option>
                      <option>Investasi</option>
                      <option>Digital Finance</option>
                      <option>Saving</option>
                      <option>Debt Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Konten
                    </label>
                    <textarea
                    rows={8}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tulis konten artikel..." />
                  
                  </div>
                  <Input
                  label="URL Gambar"
                  placeholder="https://example.com/image.jpg" />
                
                </div>
                <div className="flex gap-3 mt-6">
                  <Button className="flex-1">Simpan</Button>
                  <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowModal(false)}>
                  
                    Batal
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        }
      </div>
    </div>);

}

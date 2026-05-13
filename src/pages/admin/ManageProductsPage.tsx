import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { PlusIcon, EditIcon, TrashIcon, SearchIcon } from 'lucide-react';
export function ManageProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const products = [
  {
    id: 1,
    title: 'Personal Finance Mastery',
    type: 'Kursus Online',
    price: 299000,
    instructor: 'Sarah Wijaya, CFP',
    students: 1234,
    status: 'Active',
    rating: 4.8
  },
  {
    id: 2,
    title: 'Investasi Saham untuk Pemula',
    type: 'Kursus Online',
    price: 399000,
    instructor: 'Budi Santoso, CFA',
    students: 856,
    status: 'Active',
    rating: 4.9
  },
  {
    id: 3,
    title: 'Konsultasi Financial Planning',
    type: 'Konsultasi 1-on-1',
    price: 500000,
    instructor: 'Tim Financial Advisor',
    students: 234,
    status: 'Active',
    rating: 5.0
  }];

  const filteredProducts = products.filter(
    (product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Kelola <span className="gradient-text">Produk</span>
            </h1>
            <p className="text-slate-600">
              Manajemen kursus dan layanan konsultasi
            </p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <PlusIcon className="w-5 h-5 mr-2" />
            Tambah Produk
          </Button>
        </div>

        {/* Search */}
        <Card className="p-4 mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500" />
            
          </div>
        </Card>

        {/* Products Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Produk
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Tipe
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Instruktur
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Harga
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Siswa
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Rating
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredProducts.map((product) =>
                <tr
                  key={product.id}
                  className="hover:bg-slate-50 transition-colors">
                  
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-900">
                        {product.title}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-medium rounded-full">
                        {product.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {product.instructor}
                    </td>
                    <td className="px-6 py-4 text-slate-900 font-medium">
                      Rp {product.price.toLocaleString('id-ID')}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {product.students.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      ⭐ {product.rating}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs font-medium rounded-full">
                        {product.status}
                      </span>
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

        {/* Add Product Modal */}
        {showModal &&
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Tambah Produk Baru
                </h2>
                <div className="space-y-4">
                  <Input
                  label="Nama Produk"
                  placeholder="Masukkan nama produk"
                  required />
                
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Tipe Produk
                    </label>
                    <select className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option>Kursus Online</option>
                      <option>Konsultasi 1-on-1</option>
                    </select>
                  </div>
                  <Input
                  label="Instruktur"
                  placeholder="Nama instruktur"
                  required />
                
                  <Input
                  label="Harga"
                  type="number"
                  placeholder="299000"
                  required />
                
                  <Input label="Durasi" placeholder="8 jam" />
                  <Input
                  label="Jumlah Pelajaran"
                  type="number"
                  placeholder="24" />
                
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Deskripsi
                    </label>
                    <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Deskripsi produk..." />
                  
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

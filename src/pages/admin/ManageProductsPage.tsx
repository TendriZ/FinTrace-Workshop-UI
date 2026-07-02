import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { PlusIcon, EditIcon, TrashIcon, SearchIcon, StarIcon } from 'lucide-react';
import { useProductsContext } from '../../context/ProductsContext';
import type { Product, CurriculumModule } from '../../types';

interface FormData {
  name: string;
  description: string;
  shortDescription: string;
  category: Product['category'];
  price: number;
  salePrice?: number;
  featuredImage: string;
  duration: string;
  modules: number;
  level?: Product['level'];
  instructor?: string;
  badge?: Product['badge'];
  whatYouLearn?: string[];
  curriculum?: CurriculumModule[];
}

export function ManageProductsPage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  const { products, addProduct, updateProduct, deleteProduct } = useProductsContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    shortDescription: '',
    category: 'course',
    price: 0,
    featuredImage: '',
    duration: '',
    modules: 0,
    level: 'Beginner',
    instructor: '',
    badge: undefined,
    whatYouLearn: [],
    curriculum: []
  });

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      shortDescription: '',
      category: 'course',
      price: 0,
      featuredImage: '',
      duration: '',
      modules: 0,
      level: 'Beginner',
      instructor: '',
      badge: undefined,
      whatYouLearn: [],
      curriculum: []
    });
    setEditingProduct(null);
  };

  // Open modal for add
  const handleAdd = () => {
    resetForm();
    setShowModal(true);
  };

  // Open modal for edit
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      shortDescription: product.shortDescription,
      category: product.category,
      price: product.price,
      salePrice: product.salePrice,
      featuredImage: product.featuredImage,
      duration: product.duration || '',
      modules: product.modules || 0,
      level: product.level,
      instructor: product.instructor,
      badge: product.badge,
      whatYouLearn: product.whatYouLearn,
      curriculum: product.curriculum
    });
    setShowModal(true);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingProduct) {
      // Update existing product
      updateProduct(editingProduct.id, formData);
    } else {
      // Add new product
      addProduct(formData);
    }

    setShowModal(false);
    resetForm();
  };

  // Handle delete
  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      deleteProduct(id);
    }
  };

  // Handle input change
  const handleChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Filter products
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.instructor && product.instructor.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Category labels
  const categoryLabels: Record<Product['category'], string> = {
    course: 'Kursus',
    consultation: 'Konsultasi',
    premium: 'Premium',
    ebook: 'E-Book'
  };

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
              Kelola <span className="gradient-text">Produk</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Manajemen kursus dan layanan konsultasi ({products.length} produk)
            </p>
          </div>
          <Button onClick={handleAdd} className="w-full sm:w-auto">
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
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </Card>

        {/* Products Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Produk</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Kategori</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Instruktur</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Harga</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Sales</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                      Tidak ada produk yang ditemukan
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.featuredImage}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-slate-900">{product.name}</p>
                            {product.badge && (
                              <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                                {product.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-medium rounded-full">
                          {categoryLabels[product.category]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{product.instructor || '-'}</td>
                      <td className="px-6 py-4 text-slate-900 font-medium">
                        Rp {product.salePrice ? product.salePrice.toLocaleString('id-ID') : product.price.toLocaleString('id-ID')}
                        {product.salePrice && (
                          <span className="ml-2 text-sm text-slate-400 line-through">
                            Rp {product.price.toLocaleString('id-ID')}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {product.rating}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{product.salesCount}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <EditIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                            title="Hapus"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Add/Edit Product Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Nama Produk"
                      placeholder="Masukkan nama produk"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Kategori</label>
                      <select
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.category}
                        onChange={(e) => handleChange('category', e.target.value as Product['category'])}
                        required
                      >
                        <option value="course">Kursus</option>
                        <option value="consultation">Konsultasi</option>
                        <option value="premium">Premium</option>
                        <option value="ebook">E-Book</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Deskripsi Singkat</label>
                    <textarea
                      rows={2}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Deskripsi singkat produk..."
                      value={formData.shortDescription}
                      onChange={(e) => handleChange('shortDescription', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Deskripsi Lengkap</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Deskripsi lengkap produk..."
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Input
                      label="Harga"
                      type="number"
                      placeholder="299000"
                      value={formData.price}
                      onChange={(e) => handleChange('price', parseInt(e.target.value))}
                      required
                    />
                    <Input
                      label="Harga Promo (Opsional)"
                      type="number"
                      placeholder="199000"
                      value={formData.salePrice || ''}
                      onChange={(e) => handleChange('salePrice', e.target.value ? parseInt(e.target.value) : undefined)}
                    />
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Badge</label>
                      <select
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.badge || ''}
                        onChange={(e) => handleChange('badge', e.target.value || undefined)}
                      >
                        <option value="">Tanpa Badge</option>
                        <option value="Bestseller">Bestseller</option>
                        <option value="New">New</option>
                        <option value="Hot">Hot</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Input
                      label="Durasi"
                      placeholder="8 jam"
                      value={formData.duration}
                      onChange={(e) => handleChange('duration', e.target.value)}
                      required
                    />
                    <Input
                      label="Jumlah Modul"
                      type="number"
                      placeholder="24"
                      value={formData.modules}
                      onChange={(e) => handleChange('modules', parseInt(e.target.value))}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Level</label>
                      <select
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.level}
                        onChange={(e) => handleChange('level', e.target.value as Product['level'])}
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  <Input
                    label="Instruktur"
                    placeholder="Nama instruktur"
                    value={formData.instructor || ''}
                    onChange={(e) => handleChange('instructor', e.target.value)}
                  />

                  <Input
                    label="URL Gambar (Featured Image)"
                    placeholder="https://example.com/image.jpg"
                    value={formData.featuredImage}
                    onChange={(e) => handleChange('featuredImage', e.target.value)}
                    required
                  />

                  <div className="flex gap-3 mt-6">
                    <Button type="submit" className="flex-1">
                      {editingProduct ? 'Update' : 'Simpan'}
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

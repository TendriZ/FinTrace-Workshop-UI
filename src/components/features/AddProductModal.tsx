import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: {
    name: string;
    category: string;
    price: number;
    instructor: string;
    level: string;
    description: string;
  }) => void;
}

export function AddProductModal({ isOpen, onClose, onSubmit }: AddProductModalProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('course');
  const [price, setPrice] = useState('');
  const [instructor, setInstructor] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      category,
      price: Number(price),
      instructor,
      level,
      description
    });
    handleClose();
  };

  const handleClose = () => {
    setName('');
    setCategory('course');
    setPrice('');
    setInstructor('');
    setLevel('Beginner');
    setDescription('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Tambah Produk Baru">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nama Produk"
          placeholder="Masukkan nama produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Kategori
          </label>
          <select
            className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="course">Course</option>
            <option value="consultation">Consultation</option>
            <option value="premium">Premium</option>
            <option value="ebook">E-Book</option>
          </select>
        </div>

        <Input
          label="Harga (Rp)"
          type="number"
          placeholder="Masukkan harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <Input
          label="Instruktur"
          placeholder="Nama instruktur"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          required
        />

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Level
          </label>
          <select
            className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Deskripsi
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Deskripsi produk..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" className="flex-1">
            Simpan
          </Button>
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={handleClose}
          >
            Batal
          </Button>
        </div>
      </form>
    </Modal>
  );
}

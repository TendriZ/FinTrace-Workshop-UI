import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface AddArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (article: {
    title: string;
    author: string;
    category: string;
    content: string;
    imageUrl: string;
  }) => void;
}

export function AddArticleModal({ isOpen, onClose, onSubmit }: AddArticleModalProps) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Personal Finance');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, author, category, content, imageUrl });
    handleClose();
  };

  const handleClose = () => {
    setTitle('');
    setAuthor('');
    setCategory('Personal Finance');
    setContent('');
    setImageUrl('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Tambah Artikel Baru">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Judul Artikel"
          placeholder="Masukkan judul artikel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Input
          label="Penulis"
          placeholder="Nama penulis"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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
            <option value="Personal Finance">Personal Finance</option>
            <option value="Investasi">Investasi</option>
            <option value="Digital Finance">Digital Finance</option>
            <option value="Saving">Saving</option>
            <option value="Debt Management">Debt Management</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Konten
          </label>
          <textarea
            rows={8}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Tulis konten artikel..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <Input
          label="URL Gambar"
          placeholder="https://example.com/image.jpg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

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

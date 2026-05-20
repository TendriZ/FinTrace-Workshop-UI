import type { Article } from '../types';

export const mockArticlesForLP: Article[] = [
  {
    id: 'article-1',
    slug: '5-cara-hemat-bulanan',
    title: '5 Cara Hemat Bulanan yang Realistis',
    excerpt: 'Strategi sederhana yang bisa diterapkan tanpa mengubah gaya hidup secara ekstrem.',
    content: 'Panduan lengkap untuk menghemat uang setiap bulan secara konsisten dan realistis.',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop',
    category: 'Saving Tips',
    tags: ['hemat', 'budgeting', 'saving'],
    author: {
      name: 'Nadia Putri',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      role: 'Financial Coach',
    },
    views: 12450,
    readTime: 6,
    publishedAt: '2025-05-01',
  },
  {
    id: 'article-2',
    slug: 'keamanan-ewallet',
    title: 'Panduan Keamanan E-Wallet',
    excerpt: 'Pastikan dompet digital Anda tetap aman dari pencurian dan penipuan.',
    content: 'Pelajari cara menjaga keamanan akun e-wallet dengan kebiasaan yang benar.',
    featuredImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
    category: 'E-Wallet Guide',
    tags: ['ewallet', 'security', 'digital money'],
    author: {
      name: 'Bayu Santoso',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      role: 'Security Analyst',
    },
    views: 20840,
    readTime: 8,
    publishedAt: '2025-05-03',
  },
  {
    id: 'article-3',
    slug: 'investasi-pemula',
    title: 'Investasi Dasar untuk Pemula',
    excerpt: 'Mulai langkah awal investasi dengan pemahaman yang mudah dan aman.',
    content: 'Artikel ini membantu pembaca memahami dasar investasi jangka panjang.',
    featuredImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop',
    category: 'Investment',
    tags: ['investasi', 'pemula', 'saham'],
    author: {
      name: 'Maya Lestari',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      role: 'Investment Writer',
    },
    views: 31452,
    readTime: 7,
    publishedAt: '2025-05-05',
  }
];
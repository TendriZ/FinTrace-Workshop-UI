import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import {
  ArrowLeftIcon,
  ClockIcon,
  UserIcon,
  CalendarIcon,
  ShareIcon } from
'lucide-react';
export function ArticleDetailPage() {
  const { id } = useParams();
  // Mock article data
  const article = {
    id: 1,
    title: 'Cara Mengelola Keuangan untuk Mahasiswa',
    author: 'Sarah Wijaya',
    date: '15 Januari 2024',
    readTime: '5 menit',
    category: 'Personal Finance',
    image:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    content: `
      <p>Mengelola keuangan sebagai mahasiswa adalah keterampilan penting yang akan bermanfaat sepanjang hidup. Berikut adalah panduan lengkap untuk membantu Anda memulai perjalanan finansial yang sehat.</p>
      
      <h2>1. Buat Budget Bulanan</h2>
      <p>Langkah pertama dalam mengelola keuangan adalah membuat budget bulanan. Catat semua pemasukan Anda, termasuk uang saku dari orang tua, beasiswa, atau penghasilan part-time. Kemudian, kategorikan pengeluaran Anda:</p>
      <ul>
        <li>Kebutuhan pokok (makan, transportasi, kos)</li>
        <li>Pendidikan (buku, alat tulis, kursus)</li>
        <li>Hiburan dan sosial</li>
        <li>Tabungan</li>
      </ul>
      
      <h2>2. Gunakan Aplikasi Tracking Keuangan</h2>
      <p>Manfaatkan teknologi untuk memudahkan tracking pengeluaran. FinTrace dapat membantu Anda melacak transaksi e-wallet secara otomatis dan memberikan visualisasi pengeluaran yang jelas.</p>
      
      <h2>3. Terapkan Prinsip 50/30/20</h2>
      <p>Alokasikan pendapatan Anda dengan formula:</p>
      <ul>
        <li>50% untuk kebutuhan pokok</li>
        <li>30% untuk keinginan dan hiburan</li>
        <li>20% untuk tabungan dan investasi</li>
      </ul>
      
      <h2>4. Hindari Hutang Konsumtif</h2>
      <p>Sebisa mungkin hindari berhutang untuk hal-hal konsumtif. Jika terpaksa menggunakan paylater atau kartu kredit, pastikan Anda bisa melunasinya tepat waktu untuk menghindari bunga yang membengkak.</p>
      
      <h2>5. Mulai Menabung Sejak Dini</h2>
      <p>Tidak ada kata terlalu dini untuk mulai menabung. Bahkan jika hanya Rp 50.000 per bulan, kebiasaan menabung akan membentuk disiplin finansial yang kuat.</p>
      
      <h2>Kesimpulan</h2>
      <p>Mengelola keuangan sebagai mahasiswa memang menantang, tetapi dengan disiplin dan tools yang tepat, Anda bisa membangun fondasi finansial yang kuat untuk masa depan. Mulai dari sekarang, dan rasakan manfaatnya di kemudian hari.</p>
    `
  };
  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-96 bg-slate-900 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-60" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
      </div>

      <div className="container-1280 px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        {/* Back Button */}
        <Link to="/articles">
          <Button variant="secondary" size="sm" className="mb-6">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Kembali ke Artikel
          </Button>
        </Link>

        {/* Article Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-medium rounded-full mb-4">
            {article.category}
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5" />
              <span>{article.readTime} baca</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <ShareIcon className="w-4 h-4 mr-2" />
              Bagikan
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12">
          <div
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-a:text-purple-600 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4"
            dangerouslySetInnerHTML={{
              __html: article.content
            }} />
          
        </div>

        {/* Related Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Artikel Terkait
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) =>
            <Link key={i} to={`/articles/${i + 1}`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
                  <img
                  src={`https://images.unsplash.com/photo-${1554224155 + i}000-6726b3ff858f?w=400&h=200&fit=crop`}
                  alt="Related article"
                  className="w-full h-40 object-cover" />
                
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
                      Artikel Terkait {i}
                    </h3>
                    <p className="text-sm text-slate-600">5 menit baca</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>);

}

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { mockArticles } from '../../data/mockArticles';
import {
  ArrowLeftIcon,
  ClockIcon,
  UserIcon,
  CalendarIcon,
  ShareIcon } from
'lucide-react';

export function ArticleDetailPage() {
  const { slug } = useParams();
  const article = mockArticles.find((item) => item.slug === slug);

  // Helper function to get random related articles excluding current article
  const getRelatedArticles = () => {
    const filteredArticles = mockArticles.filter(item => item.id !== article?.id);
    const shuffled = [...filteredArticles].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  const relatedArticles = article ? getRelatedArticles() : [];

  // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    // Handle case when article is not found
    if (!article) {
      return (
        <div className="min-h-screen">
          <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
            <Card className="p-12 text-center">
              <h1 className="text-2xl font-bold text-slate-900 mb-4">Artikel Tidak Ditemukan</h1>
              <p className="text-slate-600 mb-6">Artikel yang Anda cari tidak tersedia.</p>
              <Link to="/articles">
                <Button>Kembali ke Artikel</Button>
              </Link>
            </Card>
          </div>
        </div>
      );
    }

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-96 bg-slate-900 overflow-hidden">
        <img
          src={article.featuredImage}
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
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5" />
              <span>{article.readTime} menit</span>
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
            {relatedArticles.map((relatedArticle) =>
            <Link key={relatedArticle.id} to={`/articles/${relatedArticle.slug}`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
                  <img
                  src={relatedArticle.featuredImage}
                  alt={relatedArticle.title}
                  className="w-full h-40 object-cover" />
                
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-slate-600">{relatedArticle.readTime} menit baca</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>);

}

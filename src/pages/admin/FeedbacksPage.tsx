import React, { useState } from 'react';
import { useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { StatCard } from '../../components/ui/StatCard';
import { Modal } from '../../components/ui/Modal';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import {
  StarIcon,
  MessageSquareIcon,
  SearchIcon,
  ReplyIcon,
  TrashIcon,
  CheckIcon,
  ClockIcon
} from 'lucide-react';

interface Feedback {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  product: string;
  rating: number;
  comment: string;
  date: string;
  status: 'unread' | 'replied';
  reply?: string;
}

export function FeedbacksPage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [replyText, setReplyText] = useState('');

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: '1',
      user: { name: 'Muhammad Rizki Ibrahim', avatar: '/images/feedback-pfp1.jpg' },
      product: 'Personal Finance Mastery',
      rating: 5,
      comment: 'Kursus ini sangat membantu saya memahami keuangan pribadi dengan lebih baik!',
      date: '15 Jan 2024',
      status: 'unread'
    },
    {
      id: '2',
      user: { name: 'Nabila Risha Juliana', avatar: '/images/feedback-pfp2.jpg' },
      product: 'Investasi Saham untuk Pemula',
      rating: 4,
      comment: 'Materinya bagus, tapi mungkin bisa ditambahkan lebih banyak contoh praktis.',
      date: '14 Jan 2024',
      status: 'replied',
      reply: 'Terima kasih atas feedbacknya! Kami akan menambahkan lebih banyak studi kasus pada update berikutnya.'
    },
    {
      id: '3',
      user: { name: 'Habib Anwash', avatar: '/images/feedback-pfp3.jpg' },
      product: 'Financial Planning Workbook',
      rating: 5,
      comment: 'Workbook yang sangat lengkap dan mudah diikuti. Sangat recommended!',
      date: '13 Jan 2024',
      status: 'unread'
    },
    {
      id: '4',
      user: { name: 'Sukma Dewi', avatar: '/images/feedback-pfp4.jpg' },
      product: 'Debt Management Course',
      rating: 4,
      comment: 'Kursus ini membantu saya keluar dari hutang. Terima kasih banyak!',
      date: '12 Jan 2024',
      status: 'replied',
      reply: 'Senang mendengarnya! Semoga keuangan Anda semakin baik ke depan.'
    },
    {
      id: '5',
      user: { name: 'Muhammad Raka Razzani', avatar: '/images/feedback-pfp5.jpg' },
      product: 'Crypto Investment Guide',
      rating: 3,
      comment: 'Kurang mendalam untuk crypto, tapi bagus untuk pemula.',
      date: '11 Jan 2024',
      status: 'unread'
    }
  ]);

  const stats = {
    total: feedbacks.length,
    avgRating: (
      feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length
    ).toFixed(1),
    unread: feedbacks.filter((f) => f.status === 'unread').length,
    replied: feedbacks.filter((f) => f.status === 'replied').length
  };

  const filteredFeedbacks = feedbacks.filter(
    (feedback) =>
      feedback.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.comment.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter((feedback) =>
    ratingFilter === null ? true : feedback.rating === ratingFilter
  );

  const handleReply = () => {
    if (selectedFeedback && replyText.trim()) {
      const updated = feedbacks.map((f) =>
        f.id === selectedFeedback.id
          ? { ...f, status: 'replied' as const, reply: replyText }
          : f
      );
      setFeedbacks(updated);
      setShowReplyModal(false);
      setReplyText('');
      setSelectedFeedback(null);
    }
  };

  const handleDelete = (id: string) => {
    setFeedbacks(feedbacks.filter((f) => f.id !== id));
  };

  const handleReplyClick = (feedback: Feedback) => {
    setSelectedFeedback(feedback);
    setReplyText(feedback.reply || '');
    setShowReplyModal(true);
  };

  return (
    <div className="min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
            Feedbacks
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Kelola feedback dari pengguna
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <StatCard
            title="Total Feedback"
            value={stats.total.toString()}
            icon={MessageSquareIcon}
            iconColor="blue"
          />
          <StatCard
            title="Avg Rating"
            value={`${stats.avgRating} ⭐`}
            icon={StarIcon}
            iconColor="orange"
          />
          <StatCard
            title="Unread"
            value={stats.unread.toString()}
            change={stats.unread > 0 ? 'Needs attention' : undefined}
            icon={ClockIcon}
            iconColor="red"
          />
          <StatCard
            title="Replied"
            value={stats.replied.toString()}
            icon={CheckIcon}
            iconColor="emerald"
          />
        </div>

        {/* Search & Filter */}
        <Card className="p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Cari feedback..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>
            <div className="flex gap-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setRatingFilter(ratingFilter === rating ? null : rating)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    ratingFilter === rating
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {rating}⭐
                </button>
              ))}
              {ratingFilter !== null && (
                <button
                  onClick={() => setRatingFilter(null)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </Card>

        {/* Feedback List */}
        <div className="space-y-4">
          {filteredFeedbacks.map((feedback) => (
            <Card
              key={feedback.id}
              className={`p-6 ${
                feedback.status === 'unread' ? 'border-l-4 border-l-purple-500' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                {/* User Avatar */}
                <img
                  src={feedback.user.avatar}
                  alt={feedback.user.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {feedback.user.name}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {feedback.product}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className={`w-4 h-4 ${
                              star <= feedback.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-slate-200 text-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                      {feedback.status === 'unread' && (
                        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                          Baru
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-900 mb-4">{feedback.comment}</p>

                  {feedback.reply && (
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl mb-4 border border-purple-100">
                      <p className="text-xs text-purple-600 font-medium mb-1">
                        Balasan Anda:
                      </p>
                      <p className="text-slate-900 text-sm">
                        {feedback.reply}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-600">{feedback.date}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleReplyClick(feedback)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Reply"
                      >
                        <ReplyIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(feedback.id)}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredFeedbacks.length === 0 && (
          <Card className="p-12 text-center">
            <MessageSquareIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Tidak ada feedback
            </h3>
            <p className="text-slate-600">
              Tidak ada feedback yang sesuai dengan filter Anda.
            </p>
          </Card>
        )}
      </div>

      {/* Reply Modal */}
      <Modal
        isOpen={showReplyModal}
        onClose={() => {
          setShowReplyModal(false);
          setReplyText('');
          setSelectedFeedback(null);
        }}
        title="Balas Feedback"
      >
        <div className="space-y-4">
          {selectedFeedback && (
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-sm text-slate-600 mb-1">
                Dari {selectedFeedback.user.name}:
              </p>
              <p className="text-slate-900">{selectedFeedback.comment}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Balasan Anda
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              placeholder="Tulis balasan..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={handleReply} className="flex-1">
              <ReplyIcon className="w-4 h-4 mr-2" />
              Kirim Balasan
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                setShowReplyModal(false);
                setReplyText('');
                setSelectedFeedback(null);
              }}
            >
              Batal
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

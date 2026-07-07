import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StarIcon, SendIcon, ClockIcon, CheckIcon } from 'lucide-react';

interface Feedback {
  id: string;
  type: string;
  rating: number;
  comment: string;
  status: 'pending' | 'replied';
  date: string;
  response?: string;
}

export function FeedbackPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('general');
  const [comment, setComment] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: '1',
      type: 'Bug Report',
      rating: 4,
      comment: 'Tombol download sertifikat tidak berfungsi pada halaman My Courses.',
      status: 'replied',
      date: '10 Jan 2024',
      response: 'Terima kasih atas laporannya. Masalah ini sudah kami perbaiki. Silakan coba kembali.'
    },
    {
      id: '2',
      type: 'Feature Request',
      rating: 5,
      comment: 'Mohon tambahkan fitur reminder untuk pembayaran tagihan.',
      status: 'pending',
      date: '12 Jan 2024'
    },
    {
      id: '3',
      type: 'General',
      rating: 5,
      comment: 'Platform ini sangat membantu untuk mengelola keuangan!',
      status: 'replied',
      date: '08 Jan 2024',
      response: 'Terima kasih! Kami senang membantu Anda.'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFeedback: Feedback = {
      id: Date.now().toString(),
      type: category,
      rating,
      comment,
      status: 'pending',
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };
    setFeedbacks([newFeedback, ...feedbacks]);
    setRating(0);
    setCategory('general');
    setComment('');
  };

  const getStatusBadge = (status: string) => {
    if (status === 'replied') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
          <CheckIcon className="w-3 h-3" />
          Replied
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
        <ClockIcon className="w-3 h-3" />
        Pending
      </span>
    );
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Bug Report':
        return 'bg-rose-100 text-rose-700';
      case 'Feature Request':
        return 'bg-blue-100 text-blue-700';
      case 'Complaint':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Feedback & <span className="gradient-text">Suggestions</span>
          </h1>
          <p className="text-slate-600">
            Berikan feedback dan saran untuk meningkatkan pengalaman Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Submit Feedback Form */}
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Submit Feedback
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <StarIcon
                          className={`w-8 h-8 ${
                            star <= (hoveredRating || rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-slate-200 text-slate-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    {rating > 0 && `${rating} dari 5 bintang`}
                  </p>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Kategori
                  </label>
                  <select
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="general">General</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Feedback
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Tulis feedback Anda di sini..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                  <p className="text-sm text-slate-600 mt-1">
                    {comment.length} / 500 karakter
                  </p>
                </div>

                {/* Image Upload (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Screenshot (Opsional)
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="feedback-image"
                    />
                    <label htmlFor="feedback-image" className="cursor-pointer">
                      <div className="text-slate-400 mb-2">
                        <svg
                          className="w-12 h-12 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600">
                        Klik untuk upload atau drag & drop
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        PNG, JPG hingga 5MB
                      </p>
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  <SendIcon className="w-5 h-5 mr-2" />
                  Kirim Feedback
                </Button>
              </form>
            </Card>
          </div>

          {/* Right: Feedback History */}
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Feedback History
              </h2>

              <div className="space-y-4">
                {feedbacks.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                            feedback.type
                          )}`}
                        >
                          {feedback.type}
                        </span>
                        {getStatusBadge(feedback.status)}
                      </div>
                      <div className="flex items-center gap-1">
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
                    </div>

                    <p className="text-sm text-slate-900 mb-3">
                      {feedback.comment}
                    </p>

                    {feedback.response ? (
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <p className="text-xs text-slate-600 mb-1">
                          Response from team:
                        </p>
                        <p className="text-sm text-slate-900">
                          {feedback.response}
                        </p>
                      </div>
                    ) : null}

                    <p className="text-xs text-slate-400 mt-2">{feedback.date}</p>
                  </div>
                ))}
              </div>

              {feedbacks.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-slate-600">
                    Belum ada feedback yang dikirim
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

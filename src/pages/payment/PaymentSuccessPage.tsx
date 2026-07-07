import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useCartContext } from '../../context/CartContext';
import { CheckCircleIcon, ShoppingBagIcon, HomeIcon, DownloadIcon } from 'lucide-react';

export function PaymentSuccessPage() {
  const { clearCart } = useCartContext();
  const [orderDetails] = React.useState({
    orderId: `ORD-${Date.now()}`,
    date: new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    time: new Date().toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    }),
    amount: 403000,
    products: [
      { name: 'Personal Finance Mastery', price: 299000 },
      { name: 'Investasi Saham untuk Pemula', price: 99480 }
    ]
  });

  React.useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircleIcon className="w-12 h-12 text-emerald-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Pembayaran <span className="gradient-text">Berhasil!</span>
            </h1>
            <p className="text-slate-600">
              Terima kasih telah melakukan pembayaran. Pesanan Anda sedang diproses.
            </p>
          </div>

          {/* Order Summary */}
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Ringkasan Pesanan
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600">Nomor Pesanan</span>
                <span className="font-semibold text-slate-900">{orderDetails.orderId}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600">Tanggal</span>
                <span className="font-medium text-slate-900">{orderDetails.date}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600">Waktu</span>
                <span className="font-medium text-slate-900">{orderDetails.time}</span>
              </div>

              <div className="pt-4">
                <p className="text-sm font-medium text-slate-700 mb-3">
                  Produk yang Dibeli:
                </p>
                {orderDetails.products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-4 bg-slate-50 rounded-xl mb-2"
                  >
                    <span className="font-medium text-slate-900">
                      {product.name}
                    </span>
                    <span className="text-purple-600 font-semibold">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between py-4 px-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl mb-4">
              <span className="text-lg font-semibold text-slate-900">
                Total Pembayaran
              </span>
              <span className="text-2xl font-bold text-purple-600">
                Rp {orderDetails.amount.toLocaleString('id-ID')}
              </span>
            </div>

            <p className="text-sm text-slate-600 text-center">
              Email konfirmasi telah dikirim ke alamat email Anda.
              Simpan email ini untuk referensi di masa depan.
            </p>
          </Card>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Button variant="outline" className="w-full">
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download Invoice
            </Button>
            <Link to="/purchases">
              <Button className="w-full">
                Lihat Riwayat Pembelian
              </Button>
            </Link>
          </div>

          {/* Next Steps */}
          <Card className="p-6 mb-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Apa Selanjutnya?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/dashboard/my-courses"
                className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl hover:from-purple-100 hover:to-indigo-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                    <ShoppingBagIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Mulai Belajar
                    </p>
                    <p className="text-sm text-slate-600">
                      Akses kursus Anda
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/courses"
                className="p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl hover:from-cyan-100 hover:to-teal-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center text-white">
                    <ShoppingBagIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Belanja Lagi
                    </p>
                    <p className="text-sm text-slate-600">
                      Jelajahi kursus lain
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </Card>

          {/* Help Section */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Butuh Bantuan?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Jika Anda memiliki pertanyaan tentang pesanan Anda, jangan ragu untuk menghubungi tim support kami.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/dashboard/feedback">
                <Button variant="outline" size="sm">
                  Hubungi Support
                </Button>
              </Link>
              <Link to="/dashboard/feedback">
                <Button variant="outline" size="sm">
                  Kirim Feedback
                </Button>
              </Link>
            </div>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                <HomeIcon className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

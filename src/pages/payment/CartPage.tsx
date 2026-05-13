import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { TrashIcon, ShoppingBagIcon } from 'lucide-react';
export function CartPage() {
  const navigate = useNavigate();
  const cartItems = [
  {
    id: 1,
    title: 'Personal Finance Mastery',
    type: 'Kursus Online',
    price: 299000,
    image:
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=200&fit=crop',
    instructor: 'Sarah Wijaya, CFP'
  },
  {
    id: 2,
    title: 'Investasi Saham untuk Pemula',
    type: 'Kursus Online',
    price: 399000,
    image:
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=200&fit=crop',
    instructor: 'Budi Santoso, CFA'
  }];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.11; // PPN 11%
  const total = subtotal + tax;
  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Shopping <span className="gradient-text">Cart</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ?
            <Card className="p-12 text-center">
                <ShoppingBagIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Keranjang Kosong
                </h3>
                <p className="text-slate-600 mb-6">
                  Belum ada produk di keranjang Anda
                </p>
                <Link to="/products">
                  <Button>Mulai Belanja</Button>
                </Link>
              </Card> :

            cartItems.map((item) =>
            <Card key={item.id} className="p-6">
                  <div className="flex gap-4">
                    <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded-2xl object-cover" />
                
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {item.instructor}
                          </p>
                          <span className="inline-block px-2 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-medium rounded-full mt-2">
                            {item.type}
                          </span>
                        </div>
                        <button className="text-rose-500 hover:text-rose-600 transition-colors p-2 hover:bg-rose-50 rounded-lg">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mt-3">
                        Rp {item.price.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>
                </Card>
            )
            }
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>PPN (11%)</span>
                  <span>Rp {tax.toLocaleString('id-ID')}</span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">
                    Total
                  </span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Rp {total.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <Button
                className="w-full mb-3"
                size="lg"
                onClick={() => navigate('/payment')}
                disabled={cartItems.length === 0}>
                
                Lanjut ke Pembayaran
              </Button>

              <Link to="/products">
                <Button variant="outline" className="w-full">
                  Lanjut Belanja
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>);

}

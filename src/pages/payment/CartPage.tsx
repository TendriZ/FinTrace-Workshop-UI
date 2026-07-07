import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { TrashIcon, ShoppingBagIcon, AlertTriangleIcon, PlusIcon, MinusIcon } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';
import { useCartContext } from '../../context/CartContext';

export function CartPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { isAuthenticated, onGuestLoginAttempt } = useAuthContext();
  const { items, removeItem, updateQuantity } = useCartContext();

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.11; // PPN 11%
  const total = subtotal + tax;

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Shopping <span className="gradient-text">Cart</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.length === 0 ?
            <Card className="p-12 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShoppingBagIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Keranjang Kosong
                </h3>
                <p className="text-slate-600 mb-6">
                  Belum ada produk di keranjang Anda
                </p>
                <Link to="/courses">
                  <Button>Mulai Belanja</Button>
                </Link>
              </Card> :

            items.map((item) =>
            <Card key={item.product.id} className="p-6">
                  <div className="flex gap-4">
                    <img
                  src={item.product.featuredImage}
                  alt={item.product.name}
                  className="w-24 h-24 rounded-2xl object-cover" />

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {item.product.instructor}
                          </p>
                          <span className="inline-block px-2 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-medium rounded-full mt-2">
                            {item.product.category}
                          </span>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-rose-500 hover:text-rose-600 transition-colors p-2 hover:bg-rose-50 rounded-lg">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-300 hover:border-purple-500 hover:bg-purple-50 transition-all text-slate-600 hover:text-purple-600">
                            <MinusIcon className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-semibold text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-300 hover:border-purple-500 hover:bg-purple-50 transition-all text-slate-600 hover:text-purple-600">
                            <PlusIcon className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                        </div>
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
                onClick={() => {
                  if (!isAuthenticated) {
                    onGuestLoginAttempt('/checkout');
                    navigate('/login');
                  } else {
                    navigate('/checkout');
                  }
                }}
                disabled={items.length === 0}>

                Lanjut ke Pembayaran
              </Button>

              <Link to="/courses">
                <Button variant="outline" className="w-full">
                  Lanjut Belanja
                </Button>
              </Link>
            </Card>
          </div>
        </div>

        {/* Guest Warning Banner */}
        {!isAuthenticated && (
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <div className="container-1280 mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl px-6 py-4 flex items-center justify-center gap-3 shadow-lg">
                <AlertTriangleIcon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-sm md:text-base text-amber-800 font-medium">
                  Anda akan diarahkan ke halaman login jika ingin melanjutkan pembayaran
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);
}

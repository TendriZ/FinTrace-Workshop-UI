import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import {
  CreditCardIcon,
  WalletIcon,
  BuildingIcon,
  CheckCircleIcon } from
'lucide-react';
import { useCartContext } from '../../context/CartContext';
import { useAuthContext } from '../../context/AuthContext';

export function CheckoutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const { items, totalPrice, clearCart } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [processing, setProcessing] = useState(false);

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="container-1280 px-4 sm:px-6 lg:px-8">
          <Card className="p-12 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircleIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Keranjang Kosong
            </h3>
            <p className="text-slate-600 mb-6">
              Silakan tambahkan produk ke keranjang terlebih dahulu
            </p>
            <Button onClick={() => navigate('/courses')}>
              Mulai Belanja
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.11; // PPN 11%
  const total = subtotal + tax;
  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      clearCart();
      navigate('/checkout/success');
    }, 2000);
  };
  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          <span className="gradient-text">Payment</span> Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method Selection */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Metode Pembayaran
              </h2>

              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod('credit-card')}
                  className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${paymentMethod === 'credit-card' ? 'border-purple-500 bg-purple-50' : 'border-slate-200 hover:border-slate-300'}`}>
                  
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                    <CreditCardIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">
                      Kartu Kredit/Debit
                    </div>
                    <div className="text-sm text-slate-600">
                      Visa, Mastercard, JCB
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('e-wallet')}
                  className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${paymentMethod === 'e-wallet' ? 'border-purple-500 bg-purple-50' : 'border-slate-200 hover:border-slate-300'}`}>
                  
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <WalletIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">E-Wallet</div>
                    <div className="text-sm text-slate-600">
                      GoPay, OVO, DANA, ShopeePay
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('bank-transfer')}
                  className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${paymentMethod === 'bank-transfer' ? 'border-purple-500 bg-purple-50' : 'border-slate-200 hover:border-slate-300'}`}>
                  
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <BuildingIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">
                      Transfer Bank
                    </div>
                    <div className="text-sm text-slate-600">
                      BCA, Mandiri, BNI, BRI
                    </div>
                  </div>
                </button>
              </div>
            </Card>

            {/* Payment Details */}
            {paymentMethod === 'credit-card' &&
            <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Detail Kartu
                </h2>
                <div className="space-y-4">
                  <Input
                  label="Nomor Kartu"
                  placeholder="1234 5678 9012 3456"
                  required />
                
                  <Input
                  label="Nama Pemegang Kartu"
                  placeholder="JOHN DOE"
                  required />
                
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                    label="Tanggal Kadaluarsa"
                    placeholder="MM/YY"
                    required />
                  
                    <Input label="CVV" placeholder="123" required />
                  </div>
                </div>
              </Card>
            }

            {paymentMethod === 'e-wallet' &&
            <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Pilih E-Wallet
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {['GoPay', 'OVO', 'DANA', 'ShopeePay'].map((wallet) =>
                <button
                  key={wallet}
                  className="p-4 border-2 border-slate-200 rounded-2xl hover:border-purple-500 hover:bg-purple-50 transition-all">
                  
                      <div className="font-semibold text-slate-900">
                        {wallet}
                      </div>
                    </button>
                )}
                </div>
              </Card>
            }

            {paymentMethod === 'bank-transfer' &&
            <Card className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Pilih Bank
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {['BCA', 'Mandiri', 'BNI', 'BRI'].map((bank) =>
                <button
                  key={bank}
                  className="p-4 border-2 border-slate-200 rounded-2xl hover:border-purple-500 hover:bg-purple-50 transition-all">
                  
                      <div className="font-semibold text-slate-900">{bank}</div>
                    </button>
                )}
                </div>
              </Card>
            }
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-3 mb-6">
                {items.map((item) =>
                <div
                  key={item.product.id}
                  className="flex items-start justify-between text-sm">

                    <div className="flex-1">
                      <span className="text-slate-600">{item.product.title}</span>
                      <span className="text-slate-500 ml-2">x{item.quantity}</span>
                    </div>
                    <span className="font-medium text-slate-900 ml-2">
                      Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                )}

                <div className="border-t border-slate-200 pt-3 space-y-2">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>
                      Rp {subtotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>PPN (11%)</span>
                    <span>Rp {tax.toLocaleString('id-ID')}</span>
                  </div>
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
                className="w-full"
                size="lg"
                onClick={handlePayment}
                disabled={processing}>
                
                {processing ?
                <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Memproses...
                  </span> :

                'Bayar Sekarang'
                }
              </Button>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                <span>Pembayaran aman dan terenkripsi</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>);

}

import type { Budget, ConnectedAccount, Purchase, Transaction } from '../types';
import { mockProducts } from './mockProducts';

export const mockTransactions: Transaction[] = [
  {
    id: 'trx-1',
    type: 'expense',
    amount: 25000,
    category: 'Transportasi',
    description: 'GoRide - kantor',
    paymentMethod: 'GoPay',
    status: 'success',
    date: '2025-05-12',
  },
  {
    id: 'trx-2',
    type: 'income',
    amount: 8000000,
    category: 'Gaji',
    description: 'Transfer gaji bulanan',
    paymentMethod: 'Bank BCA',
    status: 'success',
    date: '2025-05-10',
  },
];

export const mockBudgets: Budget[] = [
  { id: 'budget-1', category: 'Makanan', amount: 2000000, spent: 1200000, month: 5, year: 2026 },
  { id: 'budget-2', category: 'Transportasi', amount: 700000, spent: 540000, month: 5, year: 2026 },
];

export const mockPurchases: Purchase[] = [
  {
    id: 'purchase-1',
    orderId: 'ORD-2025-001',
    product: mockProducts[0],
    amount: 299000,
    paymentMethod: 'Kartu Kredit',
    status: 'success',
    paidAt: '2025-05-11T09:30:00Z',
    createdAt: '2025-05-11T09:25:00Z',
  },
];

export const mockConnectedAccounts: ConnectedAccount[] = [
  { id: 'acc-1', accountName: 'GoPay', accountType: 'e_wallet', balance: 1500000, isActive: true },
  { id: 'acc-2', accountName: 'BCA Tahapan', accountType: 'bank', balance: 12500000, isActive: true },
];
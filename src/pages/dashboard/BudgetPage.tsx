import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StatCard } from '../../components/ui/StatCard';
import { Modal } from '../../components/ui/Modal';
import { Input } from '../../components/ui/Input';
import {
  PiggyBankIcon,
  PlusIcon,
  EditIcon,
  TrashIcon,
  TrendingUpIcon
} from 'lucide-react';

interface Budget {
  id: string;
  category: string;
  budget: number;
  spent: number;
  percentage: number;
}

export function BudgetPage() {
  const [budgets, setBudgets] = useState<Budget[]>([
    {
      id: '1',
      category: 'Makanan & Minuman',
      budget: 2000000,
      spent: 1200000,
      percentage: 60
    },
    {
      id: '2',
      category: 'Transportasi',
      budget: 500000,
      spent: 450000,
      percentage: 90
    },
    {
      id: '3',
      category: 'Hiburan',
      budget: 800000,
      spent: 300000,
      percentage: 37.5
    },
    {
      id: '4',
      category: 'Belanja',
      budget: 1000000,
      spent: 800000,
      percentage: 80
    },
    {
      id: '5',
      category: 'Tagihan',
      budget: 1500000,
      spent: 1200000,
      percentage: 80
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingBudget, setEditingBudget] = useState<Budget | null>(null);

  const totalBudget = budgets.reduce((sum, b) => sum + b.budget, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const remainingBudget = totalBudget - totalSpent;

  const handleAddBudget = (budget: { category: string; budget: string }) => {
    const newBudget: Budget = {
      id: Date.now().toString(),
      category: budget.category,
      budget: Number(budget.budget),
      spent: 0,
      percentage: 0
    };
    setBudgets([...budgets, newBudget]);
    setShowModal(false);
  };

  const handleEditBudget = (budget: Budget) => {
    setEditingBudget(budget);
    setShowModal(true);
  };

  const handleUpdateBudget = (budget: { category: string; budget: string }) => {
    if (editingBudget) {
      const updated = budgets.map((b) =>
        b.id === editingBudget.id
          ? {
              ...b,
              category: budget.category,
              budget: Number(budget.budget),
              percentage: (b.spent / Number(budget.budget)) * 100
            }
          : b
      );
      setBudgets(updated);
      setEditingBudget(null);
      setShowModal(false);
    }
  };

  const handleDeleteBudget = (id: string) => {
    setBudgets(budgets.filter((b) => b.id !== id));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingBudget(null);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage > 80) return 'from-rose-500 to-pink-500';
    if (percentage > 60) return 'from-amber-500 to-yellow-500';
    return 'from-emerald-500 to-teal-500';
  };

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Budget <span className="gradient-text">Tracking</span>
            </h1>
            <p className="text-slate-600">
              Kelola dan pantau budget bulanan Anda
            </p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <PlusIcon className="w-5 h-5 mr-2" />
            Tambah Budget
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Budget"
            value={`Rp ${totalBudget.toLocaleString('id-ID')}`}
            icon={PiggyBankIcon}
          />
          <StatCard
            title="Total Terpakai"
            value={`Rp ${totalSpent.toLocaleString('id-ID')}`}
            change={`${((totalSpent / totalBudget) * 100).toFixed(1)}%`}
            icon={TrendingUpIcon}
          />
          <StatCard
            title="Sisa Budget"
            value={`Rp ${remainingBudget.toLocaleString('id-ID')}`}
            change={`${((remainingBudget / totalBudget) * 100).toFixed(1)}%`}
            icon={TrendingUpIcon}
          />
        </div>

        {/* Budget Categories */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Kategori Budget
          </h2>

          <div className="space-y-6">
            {budgets.map((budget) => (
              <div key={budget.id}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-900">
                      {budget.category}
                    </span>
                    <button
                      onClick={() => handleEditBudget(budget)}
                      className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      <EditIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteBudget(budget.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-slate-600">
                      Rp {budget.spent.toLocaleString('id-ID')} / Rp{' '}
                      {budget.budget.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all bg-gradient-to-r ${getProgressColor(
                      budget.percentage
                    )}`}
                    style={{ width: `${Math.min(budget.percentage, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  {budget.percentage.toFixed(1)}% terpakai
                </p>
              </div>
            ))}
          </div>

          {budgets.length === 0 && (
            <div className="text-center py-12">
              <PiggyBankIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 mb-4">
                Belum ada kategori budget
              </p>
              <Button onClick={() => setShowModal(true)}>
                <PlusIcon className="w-5 h-5 mr-2" />
                Tambah Budget Pertama
              </Button>
            </div>
          )}
        </Card>

        {/* Add/Edit Budget Modal */}
        <Modal
          isOpen={showModal}
          onClose={handleCloseModal}
          title={editingBudget ? 'Edit Budget' : 'Tambah Budget Baru'}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const budget = {
                category: formData.get('category') as string,
                budget: formData.get('budget') as string
              };
              editingBudget ? handleUpdateBudget(budget) : handleAddBudget(budget);
            }}
            className="space-y-4"
          >
            <Input
              label="Kategori"
              placeholder="Contoh: Makanan & Minuman"
              name="category"
              defaultValue={editingBudget?.category}
              required
            />
            <Input
              label="Jumlah Budget (Rp)"
              type="number"
              placeholder="Masukkan jumlah budget"
              name="budget"
              defaultValue={editingBudget?.budget}
              required
            />
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                {editingBudget ? 'Update' : 'Simpan'}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleCloseModal}
              >
                Batal
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { StatCard } from '../../components/ui/StatCard';
import { Modal } from '../../components/ui/Modal';
import { Input } from '../../components/ui/Input';
import {
  Target,
  Plus,
  Edit,
  Trash2,
  TrendingUp,
  Calendar,
  DollarSign,
  Award
} from 'lucide-react';

interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: 'saving' | 'investment' | 'purchase' | 'emergency';
  icon: string;
}

const categoryIcons: Record<Goal['category'], string> = {
  saving: '💰',
  investment: '📈',
  purchase: '🛒',
  emergency: '🆘'
};

const categoryColors: Record<Goal['category'], string> = {
  saving: 'from-emerald-500 to-teal-500',
  investment: 'from-blue-500 to-indigo-500',
  purchase: 'from-purple-500 to-pink-500',
  emergency: 'from-rose-500 to-orange-500'
};

export function GoalPage() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      name: 'Dana Darurat',
      targetAmount: 50000000,
      currentAmount: 25000000,
      deadline: '2025-12-31',
      category: 'emergency',
      icon: '🆘'
    },
    {
      id: '2',
      name: 'Liburan ke Bali',
      targetAmount: 15000000,
      currentAmount: 9000000,
      deadline: '2025-08-01',
      category: 'purchase',
      icon: '🛒'
    },
    {
      id: '3',
      name: 'Investasi Reksadana',
      targetAmount: 100000000,
      currentAmount: 35000000,
      deadline: '2026-12-31',
      category: 'investment',
      icon: '📈'
    },
    {
      id: '4',
      name: 'Down Payment Rumah',
      targetAmount: 200000000,
      currentAmount: 80000000,
      deadline: '2027-06-30',
      category: 'saving',
      icon: '💰'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);

  const totalTarget = goals.reduce((sum, g) => sum + g.targetAmount, 0);
  const totalSaved = goals.reduce((sum, g) => sum + g.currentAmount, 0);
  const remainingNeeded = totalTarget - totalSaved;
  const overallProgress = totalTarget > 0 ? (totalSaved / totalTarget) * 100 : 0;

  const handleAddGoal = (goal: {
    name: string;
    targetAmount: string;
    currentAmount: string;
    deadline: string;
    category: Goal['category'];
  }) => {
    const newGoal: Goal = {
      id: Date.now().toString(),
      name: goal.name,
      targetAmount: Number(goal.targetAmount),
      currentAmount: Number(goal.currentAmount),
      deadline: goal.deadline,
      category: goal.category,
      icon: categoryIcons[goal.category]
    };
    setGoals([...goals, newGoal]);
    setShowModal(false);
  };

  const handleEditGoal = (goal: Goal) => {
    setEditingGoal(goal);
    setShowModal(true);
  };

  const handleUpdateGoal = (goal: {
    name: string;
    targetAmount: string;
    currentAmount: string;
    deadline: string;
    category: Goal['category'];
  }) => {
    if (editingGoal) {
      const updated = goals.map((g) =>
        g.id === editingGoal.id
          ? {
              ...g,
              name: goal.name,
              targetAmount: Number(goal.targetAmount),
              currentAmount: Number(goal.currentAmount),
              deadline: goal.deadline,
              category: goal.category,
              icon: categoryIcons[goal.category]
            }
          : g
      );
      setGoals(updated);
      setEditingGoal(null);
      setShowModal(false);
    }
  };

  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingGoal(null);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return 'from-emerald-500 to-green-500';
    if (percentage >= 75) return 'from-cyan-500 to-teal-500';
    if (percentage >= 50) return 'from-blue-500 to-indigo-500';
    if (percentage >= 25) return 'from-amber-500 to-yellow-500';
    return 'from-rose-500 to-pink-500';
  };

  const calculateDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Financial <span className="gradient-text">Goals</span>
            </h1>
            <p className="text-slate-600">
              Atur dan capai tujuan finansial Anda
            </p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="w-5 h-5 mr-2" />
            Tambah Goal
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Target"
            value={`Rp ${totalTarget.toLocaleString('id-ID')}`}
            icon={Target}
          />
          <StatCard
            title="Total Tercapai"
            value={`Rp ${totalSaved.toLocaleString('id-ID')}`}
            change={`${overallProgress.toFixed(1)}%`}
            icon={DollarSign}
          />
          <StatCard
            title="Sisa Dibutuhkan"
            value={`Rp ${remainingNeeded.toLocaleString('id-ID')}`}
            change={`${(100 - overallProgress).toFixed(1)}%`}
            icon={TrendingUp}
          />
          <StatCard
            title="Active Goals"
            value={goals.length.toString()}
            icon={Award}
          />
        </div>

        {/* Goals List */}
        <div className="grid md:grid-cols-2 gap-6">
          {goals.map((goal) => {
            const progress = (goal.currentAmount / goal.targetAmount) * 100;
            const daysRemaining = calculateDaysRemaining(goal.deadline);

            return (
              <Card key={goal.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{goal.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{goal.name}</h3>
                      <span className="text-xs text-slate-500 capitalize bg-slate-100 px-2 py-1 rounded-full">
                        {goal.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleEditGoal(goal)}
                      className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteGoal(goal.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Progress</span>
                    <span className="text-sm font-semibold text-slate-900">
                      {progress.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all bg-gradient-to-r ${getProgressColor(progress)}`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-500 mb-1">Terkumpul</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Rp {goal.currentAmount.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-500 mb-1">Target</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Rp {goal.targetAmount.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>Deadline: {formatDate(goal.deadline)}</span>
                  <span className={`font-semibold ${daysRemaining < 30 ? 'text-rose-600' : daysRemaining < 90 ? 'text-amber-600' : 'text-emerald-600'}`}>
                    ({daysRemaining > 0 ? `${daysRemaining} hari left` : 'Expired'})
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {goals.length === 0 && (
          <Card className="p-12 text-center">
            <Target className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Belum Ada Goal
            </h3>
            <p className="text-slate-600 mb-6">
              Mulai buat tujuan finansial Anda pertama hari ini
            </p>
            <Button onClick={() => setShowModal(true)}>
              <Plus className="w-5 h-5 mr-2" />
              Buat Goal Pertama
            </Button>
          </Card>
        )}
      </div>

      {/* Add/Edit Goal Modal */}
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        title={editingGoal ? 'Edit Goal' : 'Tambah Goal Baru'}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const goal = {
              name: formData.get('name') as string,
              targetAmount: formData.get('targetAmount') as string,
              currentAmount: formData.get('currentAmount') as string,
              deadline: formData.get('deadline') as string,
              category: formData.get('category') as Goal['category']
            };
            editingGoal ? handleUpdateGoal(goal) : handleAddGoal(goal);
          }}
          className="space-y-4"
        >
          <Input
            label="Nama Goal"
            placeholder="Contoh: Dana Darurat"
            name="name"
            defaultValue={editingGoal?.name}
            required
          />
          <Input
            label="Jumlah Target (Rp)"
            type="number"
            placeholder="Masukkan jumlah target"
            name="targetAmount"
            defaultValue={editingGoal?.targetAmount}
            required
          />
          <Input
            label="Jumlah Terkumpul (Rp)"
            type="number"
            placeholder="Masukkan jumlah yang sudah terkumpul"
            name="currentAmount"
            defaultValue={editingGoal?.currentAmount}
            required
          />
          <Input
            label="Deadline"
            type="date"
            name="deadline"
            defaultValue={editingGoal?.deadline}
            required
          />
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Kategori</label>
            <select
              name="category"
              defaultValue={editingGoal?.category || 'saving'}
              className="w-full px-4 py-2 border-2 border-slate-300 rounded-xl focus:border-purple-500 outline-none transition-all"
              required
            >
              <option value="saving">💰 Tabungan</option>
              <option value="investment">📈 Investasi</option>
              <option value="purchase">🛒 Pembelian</option>
              <option value="emergency">🆘 Dana Darurat</option>
            </select>
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              {editingGoal ? 'Update' : 'Simpan'}
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
  );
}

import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  className?: string;
}

export function StatCard({ title, value, change, icon: Icon, className = '' }: StatCardProps) {
  return (
    <div className={`rounded-2xl border border-slate-200/50 bg-white/90 backdrop-blur-sm p-6 shadow-sm ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
          {change && <p className="mt-1 text-sm text-emerald-600">{change}</p>}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/20">
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
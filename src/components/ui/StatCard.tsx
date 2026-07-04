import React from 'react';
import type { LucideIcon } from 'lucide-react';

type IconColor = 'emerald' | 'red' | 'blue' | 'purple' | 'orange' | 'cyan';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  iconColor?: IconColor;
  className?: string;
}

const colorClasses: Record<IconColor, string> = {
  emerald: 'from-emerald-500 to-teal-500 shadow-emerald-500/20',
  red: 'from-rose-500 to-pink-500 shadow-rose-500/20',
  blue: 'from-blue-500 to-cyan-500 shadow-blue-500/20',
  purple: 'from-purple-500 to-indigo-600 shadow-purple-500/20',
  orange: 'from-orange-500 to-amber-500 shadow-orange-500/20',
  cyan: 'from-cyan-500 to-sky-500 shadow-cyan-500/20'
};

export function StatCard({ title, value, change, icon: Icon, iconColor = 'purple', className = '' }: StatCardProps) {
  return (
    <div className={`rounded-2xl border border-slate-200/50 bg-white/90 backdrop-blur-sm p-4 sm:p-6 shadow-sm ${className}`}>
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-1 sm:mt-2 text-xl sm:text-2xl font-bold text-slate-900">{value}</p>
          {change && <p className="mt-1 text-xs sm:text-sm text-emerald-600">{change}</p>}
        </div>
        <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg flex-shrink-0 ${colorClasses[iconColor]}`}>
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </div>
    </div>
  );
}
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

const badgeVariants = {
  default: 'bg-slate-100 text-slate-700 border border-slate-200/60',
  success: 'bg-emerald-100 text-emerald-700 border border-emerald-200/70',
  warning: 'bg-amber-100 text-amber-700 border border-amber-200/70',
  danger: 'bg-rose-100 text-rose-700 border border-rose-200/70',
  info: 'bg-sky-100 text-sky-700 border border-sky-200/70',
};

export function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
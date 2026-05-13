import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}
export function Card({
  children,
  className = '',
  hover = false,
  onClick
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm ${hover ? 'hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer' : ''} ${className}`}>
      
      {children}
    </div>);

}
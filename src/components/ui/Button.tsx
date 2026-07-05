import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center font-medium rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';
  const variants = {
    primary:
    'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40',
    secondary:
    'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-500/40',
    outline: 'border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50',
    white: 'bg-white text-purple-600 shadow-lg hover:shadow-xl'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      
      {children}
    </button>);

}
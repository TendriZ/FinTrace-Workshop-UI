import React from 'react';
interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}
export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = ''
}: InputProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label &&
      <label className="text-sm font-medium text-slate-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      }
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/90 backdrop-blur-sm" />
      
    </div>);

}
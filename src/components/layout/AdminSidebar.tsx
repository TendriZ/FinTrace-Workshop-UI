import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Package, Users, Receipt } from 'lucide-react';

export function AdminSidebar() {
  const { pathname } = useLocation();

  const menu = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Articles', path: '/admin/articles', icon: FileText },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Users', path: '/admin/users', icon: Users },
    { name: 'Transactions', path: '/admin/transactions', icon: Receipt },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200/50 fixed h-full z-40">
      <div className="p-4 space-y-2 mt-4">
        {menu.map((item) => {
          const isActive = pathname === item.path || (pathname.startsWith(item.path) && item.path !== '/admin/dashboard');
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </aside>
  );
}
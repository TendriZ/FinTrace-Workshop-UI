import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import {
  SearchIcon,
  MoreVerticalIcon,
  ShieldCheckIcon,
  UserIcon } from
'lucide-react';
export function ManageUsersPage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '15 Jan 2024',
    transactions: 5,
    totalSpent: 1500000
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    email: 'sarah.wijaya@example.com',
    role: 'Advisor',
    status: 'Active',
    joinDate: '10 Jan 2024',
    transactions: 0,
    totalSpent: 0
  },
  {
    id: 3,
    name: 'Budi Santoso',
    email: 'budi.santoso@example.com',
    role: 'Advisor',
    status: 'Active',
    joinDate: '8 Jan 2024',
    transactions: 0,
    totalSpent: 0
  },
  {
    id: 4,
    name: 'Admin User',
    email: 'admin@fintrace.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '1 Jan 2024',
    transactions: 0,
    totalSpent: 0
  },
  {
    id: 5,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'Inactive',
    joinDate: '5 Jan 2024',
    transactions: 2,
    totalSpent: 500000
  }];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });
  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Kelola <span className="gradient-text">Pengguna</span>
          </h1>
          <p className="text-slate-600">Manajemen pengguna dan hak akses</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <UserIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total Users</p>
                <p className="text-2xl font-bold text-slate-900">2</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Advisors</p>
                <p className="text-2xl font-bold text-slate-900">2</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Active Users</p>
                <p className="text-2xl font-bold text-slate-900">4</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <UserIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Inactive</p>
                <p className="text-2xl font-bold text-slate-900">1</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari pengguna..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500" />
              
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterRole('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterRole === 'all' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
                
                Semua
              </button>
              <button
                onClick={() => setFilterRole('User')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterRole === 'User' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
                
                Users
              </button>
              <button
                onClick={() => setFilterRole('Advisor')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterRole === 'Advisor' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
                
                Advisors
              </button>
              <button
                onClick={() => setFilterRole('Admin')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterRole === 'Admin' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'}`}>
                
                Admins
              </button>
            </div>
          </div>
        </Card>

        {/* Users Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Pengguna
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Bergabung
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Transaksi
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Total Belanja
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredUsers.map((user) =>
                <tr
                  key={user.id}
                  className="hover:bg-slate-50 transition-colors">
                  
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                          <UserIcon className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">
                            {user.name}
                          </p>
                          <p className="text-sm text-slate-600">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${user.role === 'Admin' ? 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700' : user.role === 'Advisor' ? 'bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700' : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700'}`}>
                      
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${user.status === 'Active' ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                      
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {user.joinDate}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {user.transactions}
                    </td>
                    <td className="px-6 py-4 text-slate-900 font-medium">
                      {user.totalSpent > 0 ?
                    `Rp ${user.totalSpent.toLocaleString('id-ID')}` :
                    '-'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end">
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                          <MoreVerticalIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>);

}

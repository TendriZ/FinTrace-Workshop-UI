import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { UserHeader } from './UserHeader';
import { Footer } from './Footer';
import { AdminHeader } from './AdminHeader';
import { AdminSidebar } from './AdminSidebar';
import { useAuthContext } from '../../context/AuthContext';

export const AppLayout = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuthContext();

  const isAuth = pathname === '/login' || pathname === '/register' || pathname === '/guest-redirect';
  const isAdmin = pathname.startsWith('/admin');
  const isUserPrivate = pathname.startsWith('/dashboard') ||
    ['/checkout', '/purchases', '/checkout/success'].includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuth && !isAdmin && !isUserPrivate && <Header />}

      {isUserPrivate && <UserHeader />}
      {isAdmin && <AdminHeader />}

      <div className="flex flex-1">
        {isAdmin && <AdminSidebar />}
        <main className={`flex-1 ${isAdmin ? 'ml-64 p-6' : ''}`}>
          <Outlet />
        </main>
      </div>

      {!isAuth && !isAdmin && !isUserPrivate && <Footer />}
    </div>
  );
};

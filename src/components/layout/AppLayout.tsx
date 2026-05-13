import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { UserHeader } from './UserHeader';
import { AdminHeader } from './AdminHeader';
import { Footer } from './Footer';
import { AdminSidebar } from './AdminSidebar';

export const AppLayout = () => {
  const { pathname } = useLocation();

  const isAuth = pathname === '/login' || pathname === '/register';
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
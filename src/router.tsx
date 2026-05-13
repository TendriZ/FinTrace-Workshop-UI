import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';

import { LandingPage } from './pages/public/LandingPage';
import { ArticlesPage } from './pages/public/ArticlesPage';
import { ArticleDetailPage } from './pages/public/ArticleDetailPage';
import { ProductsPage } from './pages/public/ProductsPage';
import { ProductDetailPage } from './pages/public/ProductDetailPage';

import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';

import { CartPage } from './pages/payment/CartPage';
import { CheckoutPage } from './pages/payment/CheckoutPage';

import { DashboardPage } from './pages/dashboard/DashboardPage';
import { TransactionsPage } from './pages/dashboard/TransactionsPage';

import { ManageArticlesPage } from './pages/admin/ManageArticlesPage';
import { ManageProductsPage } from './pages/admin/ManageProductsPage';
import { ManageUsersPage } from './pages/admin/ManageUsersPage';
import { ManageTransactionsPage } from './pages/admin/ManageTransactionsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // Public Routes
      { path: '/', element: <LandingPage /> },
      { path: '/articles', element: <ArticlesPage /> },
      { path: '/articles/:slug', element: <ArticleDetailPage /> },
      { path: '/courses', element: <ProductsPage /> },
      { path: '/courses/:slug', element: <ProductDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      
      // Payment
      { path: '/checkout', element: <CheckoutPage /> },

      // Dashboard
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/dashboard/transactions', element: <TransactionsPage /> },

      // Admin
      { path: '/admin/articles', element: <ManageArticlesPage /> },
      { path: '/admin/products', element: <ManageProductsPage /> },
      { path: '/admin/users', element: <ManageUsersPage /> },
      { path: '/admin/transactions', element: <ManageTransactionsPage /> },
    ],
  },
]);
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
import { PaymentSuccessPage } from './pages/payment/PaymentSuccessPage';
import { PurchaseHistoryPage } from './pages/payment/PurchaseHistoryPage';

import { DashboardPage } from './pages/dashboard/DashboardPage';
import { TransactionsPage } from './pages/dashboard/TransactionsPage';
import { AnalyticsPage } from './pages/dashboard/AnalyticsPage';
import { BudgetPage } from './pages/dashboard/BudgetPage';
import { MyCoursesPage } from './pages/dashboard/MyCoursesPage';
import { ProfilePage } from './pages/dashboard/ProfilePage';
import { FeedbackPage } from './pages/dashboard/FeedbackPage';

import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { ManageArticlesPage } from './pages/admin/ManageArticlesPage';
import { ManageProductsPage } from './pages/admin/ManageProductsPage';
import { ManageUsersPage } from './pages/admin/ManageUsersPage';
import { ManageTransactionsPage } from './pages/admin/ManageTransactionsPage';
import { FeedbacksPage } from './pages/admin/FeedbacksPage';
import { AdminProfilePage } from './pages/admin/AdminProfilePage';

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

      // Auth Routes (no header)
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },

      // Payment Routes
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/checkout/success', element: <PaymentSuccessPage /> },
      { path: '/purchases', element: <PurchaseHistoryPage /> },

      // Dashboard Routes
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/dashboard/transactions', element: <TransactionsPage /> },
      { path: '/dashboard/analytics', element: <AnalyticsPage /> },
      { path: '/dashboard/budget', element: <BudgetPage /> },
      { path: '/dashboard/my-courses', element: <MyCoursesPage /> },
      { path: '/dashboard/profile', element: <ProfilePage /> },
      { path: '/dashboard/feedback', element: <FeedbackPage /> },

      // Admin Routes
      { path: '/admin', element: <AdminDashboardPage /> },
      { path: '/admin/articles', element: <ManageArticlesPage /> },
      { path: '/admin/products', element: <ManageProductsPage /> },
      { path: '/admin/users', element: <ManageUsersPage /> },
      { path: '/admin/transactions', element: <ManageTransactionsPage /> },
      { path: '/admin/feedbacks', element: <FeedbacksPage /> },
      { path: '/admin/profile', element: <AdminProfilePage /> },
    ],
  },
]);
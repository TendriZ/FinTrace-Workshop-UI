import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';

import { LandingPage } from './pages/public/LandingPage';
import { ArticlesPage } from './pages/public/ArticlesPage';
import { ArticleDetailPage } from './pages/public/ArticleDetailPage';
import { ProductsPage } from './pages/public/ProductsPage';
import { ProductDetailPage } from './pages/public/ProductDetailPage';
import { UserArticlesPage } from './pages/user/UserArticlesPage';
import { UserArticleDetailPage } from './pages/user/UserArticleDetailPage';
import { UserProductsPage } from './pages/user/UserProductsPage';
import { UserProductDetailPage } from './pages/user/UserProductDetailPage';

import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';

import { CartPage } from './pages/payment/CartPage';
import { CheckoutPage } from './pages/payment/CheckoutPage';
import { PaymentSuccessPage } from './pages/payment/PaymentSuccessPage';
import { PurchaseHistoryPage } from './pages/payment/PurchaseHistoryPage';

import { DashboardPage } from './pages/user/DashboardPage';
import { TransactionsPage } from './pages/user/TransactionsPage';
import { AnalyticsPage } from './pages/user/AnalyticsPage';
import { BudgetPage } from './pages/user/BudgetPage';
import { GoalPage } from './pages/user/GoalPage';
import { MyCoursesPage } from './pages/user/MyCoursesPage';
import { ProfilePage } from './pages/user/ProfilePage';
import { FeedbackPage } from './pages/user/FeedbackPage';

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

      // User Routes
      { path: '/user/articles', element: <UserArticlesPage /> },
      { path: '/user/articles/:slug', element: <UserArticleDetailPage /> },
      { path: '/user/courses', element: <UserProductsPage /> },
      { path: '/user/courses/:slug', element: <UserProductDetailPage /> },

      // Auth Routes (no header)
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },

      // Payment Routes
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/checkout/success', element: <PaymentSuccessPage /> },
      { path: '/purchases', element: <PurchaseHistoryPage /> },

      // User Routes
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/transactions', element: <TransactionsPage /> },
      { path: '/budget', element: <BudgetPage /> },
      { path: '/goal', element: <GoalPage /> },
      { path: '/analytics', element: <AnalyticsPage /> },
      { path: '/user/articles', element: <UserArticlesPage /> },
      { path: '/user/articles/:slug', element: <UserArticleDetailPage /> },
      { path: '/my-courses', element: <MyCoursesPage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/feedback', element: <FeedbackPage /> },

      // Admin Routes
      { path: '/admin/dashboard', element: <AdminDashboardPage /> },
      { path: '/admin/articles', element: <ManageArticlesPage /> },
      { path: '/admin/products', element: <ManageProductsPage /> },
      { path: '/admin/users', element: <ManageUsersPage /> },
      { path: '/admin/transactions', element: <ManageTransactionsPage /> },
      { path: '/admin/feedbacks', element: <FeedbacksPage /> },
      { path: '/admin/profile', element: <AdminProfilePage /> },
    ],
  },
]);
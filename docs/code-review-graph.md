# FinTrace - Code Review Graph

## Project Overview

**FinTrace** is a Financial Tracking & Education Platform built with React, Vite, and Tailwind CSS.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     FinTrace Codebase Architecture                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/           # Layout wrappers for different user states
│   │   ├── AppLayout.tsx     # Main layout orchestrator
│   │   ├── Header.tsx          # Public/guest header
│   │   ├── UserHeader.tsx       # Authenticated user header
│   │   ├── AdminHeader.tsx       # Admin panel header
│   │   ├── AdminSidebar.tsx     # Admin navigation sidebar
│   │   └── Footer.tsx          # Site footer
│   ├── ui/                # Base UI components
│   │   ├── Button.tsx          # Button component with variants
│   │   ├── Card.tsx            # Card container component
│   │   ├── Input.tsx           # Form input component
│   │   ├── Badge.tsx           # Status/label badges
│   │   ├── Modal.tsx           # Dialog/overlay component
│   │   └── StatCard.tsx        # Metric display cards
│   ├── features/           # Feature-specific components
│   │   ├── AddArticleModal.tsx  # Article creation modal
│   │   ├── AddProductModal.tsx  # Product creation modal
│   │   └── SpendingChart.tsx    # Analytics chart component
│   └── routing/           # Route protection
│       └── ProtectedRoute.tsx   # Auth guard component
├── context/             # State management
│   ├── AuthContext.tsx      # Authentication state
│   └── CartContext.tsx      # Shopping cart state
├── data/                # Mock data sources
│   ├── mockArticles.ts      # Article data
│   ├── mockProducts.ts      # Product/course data
│   ├── mockUsers.ts        # User account data
│   └── mockTransactions.ts  # Transaction records
├── pages/               # Route components
│   ├── public/            # Public-facing pages
│   │   ├── LandingPage.tsx    # Home/landing page
│   │   ├── ArticlesPage.tsx    # Article listing
│   │   ├── ArticleDetailPage.tsx
│   │   ├── ProductsPage.tsx     # Course listing
│   │   └── ProductDetailPage.tsx
│   ├── auth/              # Authentication pages
│   │   ├── LoginPage.tsx       # Login form
│   │   ├── RegisterPage.tsx    # Registration form
│   │   └── GuestLoginInterstitialPage.tsx
│   ├── payment/           # E-commerce pages
│   │   ├── CartPage.tsx        # Shopping cart
│   │   ├── CheckoutPage.tsx     # Payment flow
│   │   ├── PaymentSuccessPage.tsx
│   │   └── PurchaseHistoryPage.tsx
│   ├── dashboard/         # User dashboard pages
│   │   ├── DashboardPage.tsx   # Main dashboard
│   │   ├── TransactionsPage.tsx
│   │   ├── AnalyticsPage.tsx    # Charts/analytics
│   │   ├── BudgetPage.tsx       # Budget management
│   │   ├── MyCoursesPage.tsx    # Enrolled courses
│   │   ├── ProfilePage.tsx      # User profile
│   │   └── FeedbackPage.tsx     # User feedback
│   └── admin/             # Admin panel pages
│       ├── AdminDashboardPage.tsx
│       ├── ManageArticlesPage.tsx
│       ├── ManageProductsPage.tsx
│       ├── ManageUsersPage.tsx
│       ├── ManageTransactionsPage.tsx
│       ├── FeedbacksPage.tsx      # Feedback management
│       └── AdminProfilePage.tsx
├── hooks/               # Custom React hooks
│   ├── useAuth.ts         # Auth hook (legacy)
│   ├── useCart.ts         # Cart hook (legacy)
│   └── useLocalStorage.ts  # LocalStorage helper
├── utils/               # Helper utilities
│   ├── formatCurrency.ts    # Number formatting (IDR)
│   ├── formatDate.ts        # Date formatting
│   └── helpers.ts          # Utility functions
├── types/               # TypeScript interfaces
│   └── index.ts           # All type definitions
├── styles/              # Global styles
│   └── globals.css         # Tailwind + custom CSS variables
├── App.tsx              # Root component
├── main.tsx             # React entry point
└── router.tsx            # Route configuration
```

---

## Component Dependency Graph

```
                    ┌─────────────────────────────────────────────┐
                    │           App.tsx               │
                    │                                      │
                    └──────────────┬────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    │                           │
         ┌──────────┴──────────┐         │         ┌────────────┴───────────┐
         │                     │         │         │                         │
  ┌────┴──────┐   ┌──────┴─────┐   │         │                  │
  │             │   │             │   │         │  ┌─────────────┴────────────┐
  │             │   │             │   │         │  │                         │
┌─┴─────┐   │  ┌──────┴─────┐   │  ┌──────┴─────┐      │     ┌──────────┴─────────────┐
│         │   │  │             │   │  │         │      │     │                     │
│  Header  │  │  UserHeader   │   │  AdminHeader│     │     │                     │
│         │  │             │   │  │         │     │                     │
└────┬────┘   └──────┬─────┘   └────┬─────┘     └─────┬─────────────────┘     │
     │                 │                  │                  │                  │         │
     │                 │                  │                  │                  │         │
  ┌────┴────┐         │    ┌──────────┴─────┐      │                  │     ┌─────────┴─────────┐
  │           │         │    │               │      │                  │     │                 │
  │  Footer   │         │  │               │      │                  │     │                 │
  │           │         │    │               │      │                  │     │                 │
  └───────────┘         │    └───────────────┘      │                  │     └─────────────────┘
                          │                       │                  │
                          └───────────────┐              └─────────────────────┐
                                         │                                  │                    │
                          │                                  │                    │
                          │                                  │                    │
                          └──────────┬────────────────────────────┴──────────────────┘
                                     │
                                     │
                   ┌────────────────┴──────────────────┐
                   │                                 │
                   │            Layouts            │
                   │    AppLayout orchestrates:             │
                   │    - Public: Header + Footer         │
                   │    - User Private: UserHeader          │
                   │    - Admin: AdminHeader + Sidebar      │
                   │                                 │
                   └───────────────────────────────────┘
```

---

## Context Flow Diagram

```
                    ┌──────────────────────────────────────────────────────┐
                    │             App.tsx                        │
                    │                                              │
                    │     ┌────────────────┬────────────────┐    │
                    │     │                │                │    │
                    │  AuthProvider       │   CartProvider   │    │
                    │     │                │                │    │
                    │     │                │                │    │
┌───────────┴──┐  │  ┌───────────┴────┐        │    │
│                 │  │  │                 │        │    │
│   useAuthContext │  │  │   useCartContext │        │    │
│                 │  │  │                 │        │    │
│                 │  │  │                 │        │    │
│  isAuthenticated  │  │  │  addItem/removeItem  │        │    │
│  isAdmin        │  │  │  totalItems/totalPrice       │    │
│  login/logout    │  │  │                 │        │    │
│  guestLoginTarget│  │  │                 │        │    │
│  onGuestLogin... │  │  │                 │        │    │
│                 │  │  │                 │        │    │
└─────────┬────────┘  └──────────┬────────────────┘    │
          │                         │                 │
          │                         │                 │
          │                ┌──────────────────┴─────────┐
          │                │                              │
          │                │         Protected Routes       │
          │                │                              │
          │                │                              │
          │                │                              │
          │                │                              │
          │                │                              │
          └────────────────┴──────────────────────────────┘
```

---

## Route Configuration

```
                    ┌───────────────────────────────────────────────────┐
                    │              router.tsx                   │
                    │                                              │
                    │     ┌──────────┬─────────────────┐    │
                    │     │          │                │    │
                    │     │  AppLayout │                │    │
                    │     │          │                │    │
┌────────┴───────┐  │  ┌──────────┴──────┐          │    │
│                │  │  │                 │          │    │
│    Public Routes │  │  │  Protected Routes          │    │
│                │  │  │  (via ProtectedRoute)     │    │
│                │  │  │                 │          │    │
│  ┌───────────┐  │  ┌───────────────┐          │    │
│  │             │  │  │             │          │    │
│  │ Public Pages│  │  │  Dashboard  │  │    │    │
│  │             │  │  │  Pages     │  │    │
│  │             │  │  │             │          │    │
│  │ LandingPage│  │  │  DashboardPage│  │    │
│  │ ArticlesPage│  │  │  TransactionsPage│  │    │
│  │ Product...  │  │  │  AnalyticsPage│  │    │
│  │ CartPage    │  │  │  BudgetPage     │  │    │
│  │             │  │  │  MyCoursesPage  │  │    │
│  └─────────────┘  │  │  ProfilePage   │  │    │
│                  │  │  │             │  │    │
│                  │  │  └─────────────┘          │    │
│                  │  │                            │    │
│                  │  │         Admin Pages           │    │
│                  │  │                            │    │
│                  │  │         AdminDashboardPage      │    │
│                  │  │         ManageArticlesPage    │    │
│                  │  │         ManageProductsPage     │    │
│                  │  │         ManageUsersPage       │    │
│                  │  │         ManageTransactionsPage  │    │
│                  │  │         FeedbacksPage        │    │
│                  │  └─────────────────────────────┘    │
│                  │                                      │    │
└──────────────────┴────────────────────────────────────┘    │
                                                     │
                                                     │
                                                     │
                                          Pages Render Through Outlet in AppLayout
```

---

## Type System

### User Interface
```typescript
interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  avatar?: string;
  role: 'user' | 'admin';
  status: 'active' | 'banned';
}
```

### Article Interface
```typescript
interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: 'Budgeting' | 'Investment' | 'Saving Tips' | 'E-Wallet Guide' | 'Debt Management';
  tags: string[];
  author: { name: string; avatar: string; role: string; };
  views: number;
  readTime: number;
  publishedAt: string;
}
```

### Product Interface
```typescript
interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: 'course' | 'consultation' | 'premium' | 'ebook';
  price: number;
  salePrice?: number;
  featuredImage: string;
  rating: number;
  reviewCount: number;
  salesCount: number;
  badge?: 'Bestseller' | 'New' | 'Hot';
  duration?: string;
  modules?: number;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor?: string;
  curriculum?: CurriculumModule[];
  whatYouLearn?: string[];
  requirements?: string[];
}
```

---

## State Management

### AuthContext
```typescript
interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isGuest: boolean;
  guestLoginTarget: string | null;
  login: (role: AuthRole) => void;
  logout: () => void;
  checkIfLoggedIn: (targetPath: string) => boolean;
  onGuestLoginAttempt: (targetPath: string) => void;
}
```

**Storage Keys:**
- `fintrace_user` - User session
- `fintrace_redirect` - Redirect target for post-login

### CartContext
```typescript
interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
```

**Storage Keys:**
- `fintrace_cart` - Cart items

---

## Component Patterns

### Layout Strategy (AppLayout.tsx)

```
pathname analysis:
┌──────────────────────────────────────────────────┐
│                                           │
│  isAuth = ['/login', '/register',          │
│           '/guest-redirect'].includes(pathname) │
│                                           │
│  isAdmin = pathname.startsWith('/admin')      │
│                                           │
│  isUserPrivate = pathname.startsWith('/dashboard')│
│      || ['/checkout', '/purchases',          │
│         '/checkout/success'].includes(pathname) │
└──────────────────────────────────────────────────┘

Conditional Rendering:
├── !isAuth && !isAdmin && !isUserPrivate → Header + Footer
├── isUserPrivate → UserHeader
├── isAdmin → AdminHeader + AdminSidebar
└── Main content via Outlet
```

### Protected Routes

All dashboard and admin routes wrapped with `ProtectedRoute`:

```
<ProtectedRoute><DashboardPage /></ProtectedRoute>
<ProtectedRoute><ManageProductsPage /></ProtectedRoute>
```

Guest Redirect Flow:
1. Unauthenticated user accesses protected route
2. `ProtectedRoute` detects non-auth state
3. Calls `onGuestLoginAttempt(targetPath)`
4. Stores target in localStorage (`fintrace_redirect`)
5. Redirects to `/login`
6. After successful login → redirect to stored target

---

## Mock Data Structure

### mockArticles.ts
```typescript
export const mockArticles: Article[] = [
  {
    id: 'article-1',
    slug: '5-cara-hemat-bulanan',
    title: '5 Cara Hemat Bulanan yang Realistis',
    excerpt: 'Strategi sederhana...',
    content: 'Panduan lengkap...',
    featuredImage: 'https://images.unsplash.com/...',
    category: 'Saving Tips',
    tags: ['hemat', 'budgeting', 'saving'],
    author: { name: 'Nadia Putri', avatar: '...', role: 'Financial Coach' },
    views: 12450,
    readTime: 6,
    publishedAt: '2025-05-01',
  },
  // ... more articles
];
```

### mockProducts.ts
```typescript
export const mockProducts: Product[] = [
  {
    id: 'product-1',
    slug: 'personal-finance-mastery',
    name: 'Personal Finance Mastery',
    description: 'Pelajari cara mengelola uang...',
    shortDescription: 'Course lengkap...',
    category: 'course',
    price: 499000,
    salePrice: 299000,
    featuredImage: 'https://images.unsplash.com/...',
    rating: 5,
    reviewCount: 128,
    salesCount: 1820,
    badge: 'Bestseller',
    duration: '8 Hours',
    modules: 12,
    level: 'Beginner',
    instructor: 'Sarah Wijaya, CFP',
    whatYouLearn: ['Buat budget bulanan', ...],
    requirements: ['Tidak perlu pengalaman sebelumnya'],
  },
  // ... more products
];
```

### mockUsers.ts
```typescript
export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'user@fintrace.com',
    fullName: 'Naysana',
    phoneNumber: '+628123456789',
    avatar: 'https://images.unsplash.com/...',
    role: 'user',
    status: 'active',
  },
  {
    id: 'admin-1',
    email: 'admin@fintrace.com',
    fullName: 'Nayla',
    phoneNumber: '+628123456789',
    avatar: 'https://images.unsplash.com/...',
    role: 'admin',
    status: 'active',
  },
];
```

---

## UI Component Hierarchy

```
                        ┌─────────────────────────────────────────────┐
                        │         App.tsx (Root)              │
                        │                                     │
                        └──────────────┬────────────────────┘
                                       │
                    ┌───────────────────┴───────────────────┐
                    │            AppLayout              │
                    │                                     │
                    └──────────────┬────────────────────┘
                                   │
               ┌─────────────┴────────────────┬─────────────┐
               │                            │            │
      ┌────────┴─────┐    ┌────────────┴──────┐    │
      │               │    │                  │    │
      │  Header        │    │  Footer           │    │
      │               │    │                  │    │
      └──────┬────────┘    └───────────────────┘    │
             │                                     │
    ┌─────┴────────┐                          │
    │              │                          │
    │  UserHeader    │                          │
    │              │                          │
    │  ┌───────────┬─────────┐           │
    │  │          │         │           │
    │  │ NavIcon   │  User Info │           │
    │  │          │         │           │
    │  └───────────┴─────────┘           │
    │                                     │
    └───────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|----------|
| Framework | React | 18.3 | UI library |
| Build Tool | Vite | 5.2 | Build/dev server |
| Styling | Tailwind CSS | 3.4 | CSS framework |
| Routing | React Router | v6 | Client routing |
| State | React Context | - | State management |
| UI Components | Radix UI | - | Headless UI primitives |
| Icons | Lucide React | - | Icon library |
| Charts | Recharts | - | Data visualization |
| Forms | React Hook Form | - | Form handling |
| Validation | Zod | - | Schema validation |
| Notifications | React Hot Toast | - | Toast notifications |

---

## Key Design Patterns

### 1. Component Composition
```
export function AppLayout() {
  // Single responsibility - routing logic only
  // Actual UI delegated to children
  return (
    <AppLayout>
      <Header />  {/* Separated component */}
      <Outlet />    {/* Nested routes render here */}
    </AppLayout>
  );
}
```

### 2. Context Pattern
```
export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(...);
  const value = useMemo(() => ({
    user,
    isAuthenticated: Boolean(user),
    isAdmin: user?.role === 'admin',
    // ... other computed values
  }), [user]);  // Memoized for performance

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
```

### 3. Protected Route Pattern
```
export function ProtectedRoute({ children }) {
  const { isAuthenticated, onGuestLoginAttempt } = useAuthContext();

  useEffect(() => {
    if (!isAuthenticated) {
      onGuestLoginAttempt(location.pathname);
      navigate('/login');
    }
  }, [isAuthenticated, location.pathname]);

  if (!isAuthenticated) {
    return <LoginInterstitial />;  // Fallback UI
  }

  return <>{children}</>;
}
```

### 4. Conditional Layout Rendering
```
// AppLayout determines which header to show based on route
const isAuth = ['/login', '/register'].includes(pathname);
const isAdmin = pathname.startsWith('/admin');
const isUserPrivate = pathname.startsWith('/dashboard') ||
  ['/checkout', '/purchases'].includes(pathname);

// Result: Header, UserHeader, or AdminHeader is conditionally rendered
```

---

## Authentication Flow

```
                    ┌─────────────────────────────────────────────┐
                    │         Guest User Workflow               │
                    │                                        │
                    │  1. Browse articles/courses           │
                    │     ┌────────────────┐              │
                    │     │  Store redirect │              │
                    │     │              │              │
                    │     └──┬───────────┘              │
                    │        │                          │
                    │  2. Click "Get Started"            │
                    │     ┌────────────────┐              │
                    │     │  Navigate to │              │
                    │     │  /login      │              │
                    │     └────┬─────────┘              │
                    │        │                          │
                    │  3. Enter credentials             │
                    │     ┌────────────────┐              │
                    │     │  login() sets│              │
                    │     │  user + localStorage           │
                    │     └────┬─────────┘              │
                    │        │                          │
                    │  4. Redirected to               │
                    │     ┌────────────────┐              │
                    │     │  /dashboard  │              │
                    │     │              │              │
                    │     │              │              │
                    │     │  UserHeader shown│              │
                    │     └────────────────┘              │
                    │                          │
                    │                                        │
                    └───────────────────────────────────────────┘
```

---

## Guest Redirect Flow (Recently Implemented)

```
                    ┌─────────────────────────────────────────────┐
                    │         Guest Attempting Protected Page   │
                    │                                        │
                    │  1. Access dashboard/checkout/purchase   │
                    │     ┌────────────────┐              │
                    │     │  ProtectedRoute│              │
                    │     │  detects auth  │              │
                    │     │  = false       │              │
                    │     └────┬─────────┘              │
                    │        │                          │
                    │  2. Store target                    │
                    │     ┌────────────────┐              │
                    │     │  localStorage │              │
                    │     │  fintrace_   │              │
                    │     │  redirect    │              │
                    │     └────┬─────────┘              │
                    │        │                          │
                    │  3. Redirect to login               │
                    │     ┌────────────────┐              │
                    │     │  /login      │              │
                    │     │              │              │
                    │     │              │              │
                    │  ┌──────────────┴─────────┐              │
                    │  │                   │       │
                    │  │  4. User logs in                │
                    │  │  ┌──────────────┐  │       │
                    │  │  login() sets │  │       │
                    │  │  user + clears │  │       │
                    │  │  redirect     │  │       │
                    │  │  └────┬─────────┘  │       │
                    │     │        │           │       │
                    │  5. Redirect to target              │
                    │     ┌────────────────┐       │       │
                    │     │  use existing │  │       │
                    │  │  redirect     │  │       │
                    │  │  or /dashboard │       │
                    │  │              │       │       │
                    │  └──────────────┴─────────┘       │
                    │                          │
                    └──────────────────────────────────┘
```

---

## File Dependency Map

```
AuthContext.tsx ← mockUsers.ts (User type)
CartContext.tsx ← mockProducts.ts (Product type)
ProtectedRoute.tsx ← AuthContext.tsx
LoginPage.tsx ← AuthContext.tsx + router navigation
RegisterPage.tsx ← AuthContext.tsx + router navigation
CartPage.tsx ← CartContext.tsx + AuthContext.tsx
ProductDetailPage.tsx ← mockProducts.ts + AuthContext.tsx
CheckoutPage.tsx ← CartContext.tsx + ProtectedRoute.tsx
DashboardPage.tsx ← ProtectedRoute.tsx
AdminDashboardPage.tsx ← ProtectedRoute.tsx
ManageArticlesPage.tsx ← mockArticles.ts
ManageProductsPage.tsx ← mockProducts.ts
AnalyticsPage.tsx ← SpendingChart.tsx + mockTransactions.ts
```

---

## Recent Changes (Session)

### Guest Redirect Implementation
Files modified to support guest redirect flow:

1. **AuthContext.tsx**
   - Added `isGuest`, `guestLoginTarget`, `checkIfLoggedIn`, `onGuestLoginAttempt`
   - Added `REDIRECT_TARGET_KEY` storage key
   - Updated `logout()` to clear redirect target

2. **LoginPage.tsx**
   - Switched from `useAuth` hook to `useAuthContext`
   - Added redirect target checking from localStorage
   - Auto-redirect to target after login
   - Clear redirect target after successful login

3. **RegisterPage.tsx**
   - Same redirect handling as LoginPage
   - Guests redirected to intended page after registration

4. **CartPage.tsx**
   - Added `useAuthContext` for auth check
   - "Lanjut ke Pembayaran" redirects to `/login` for guests
   - Redirects to `/checkout` for authenticated users
   - Fixed warning banner at bottom for guests

5. **ProductDetailPage.tsx**
   - Added `useAuthContext` for auth check
   - "Beli Sekarang" redirects to `/login` for guests
   - Redirects to `/cart` for authenticated users
   - Fixed warning banner at bottom for guests

6. **AppLayout.tsx**
   - Added `useAuthContext` import
   - Uses `isAuthenticated` for conditional rendering
   - Added `/guest-redirect` to `isAuth` check

7. **ProtectedRoute.tsx**
   - Fixed import path to `../../context/AuthContext`
   - Provides interstitial fallback for unauthenticated users

---

## Architecture Summary

### Strengths
- ✅ Clean separation of concerns (layouts, UI, features)
- ✅ Type-safe with comprehensive interfaces
- ✅ Context-based state management (lightweight alternative to Redux)
- ✅ Component composition and reusability
- ✅ Protected routes with guest redirect support
- ✅ LocalStorage persistence for auth and cart

### Areas for Improvement
- ⚠️  Duplicate auth approaches (useAuth hook vs useAuthContext)
- ⚠️  Some pages use hardcoded data instead of mock imports
- ⚠️  No error boundary implementation
- ⚠️  Missing loading states in async operations
- ⚠️  Inconsistent use of mock data vs context data

### Dependencies to Watch
- `react-router-dom` v7 - Major version change potential
- Tailwind CSS updates may break custom styles
- Recharts v3+ has breaking changes

---

## Key Files Quick Reference

| File | Lines | Purpose | Dependencies |
|------|--------|----------|---------------|
| App.tsx | ~15 | Root provider wrapper |
| main.tsx | ~15 | React entry point |
| router.tsx | ~55 | Route configuration |
| AuthContext.tsx | ~90 | Authentication state |
| CartContext.tsx | ~90 | Cart state management |
| AppLayout.tsx | ~35 | Layout orchestration |
| ProtectedRoute.tsx | ~80 | Route protection |
| types/index.ts | ~115 | Type definitions |
| mockArticles.ts | ~60 | Article data |
| mockProducts.ts | ~70 | Product data |
| mockUsers.ts | ~25 | User data |

---

## Testing Checklist

- [ ] All public routes render without authentication
- [ ] Login/Register forms submit correctly
- [ ] Protected routes redirect guests to login
- [ ] Post-login redirects work correctly
- [ ] Guest warning banners display on cart/product pages
- [ ] Admin panel accessible with admin role
- [ ] Cart state persists across sessions
- [ ] All navigation links work correctly
- [ ] Responsive design on all breakpoints
- [ ] No console errors in production build

---

*Generated: 2026-05-14*
*Total Files: ~60 components/pages*
*Total Lines: ~4,000 lines of code*
*Architecture: React 18 + Vite 5 + Context State + React Router v6*

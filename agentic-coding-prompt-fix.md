# 🚀 FINTRACE - AGENTIC CODING PROMPT
> Read this ENTIRE file before writing any code.
> This is the single source of truth for building FinTrace.
> Source: MagicPatterns code (2 sets) + 28 Figma exports + CLAUDE.md.

---

## 📌 PROJECT OVERVIEW

**Name:** FinTrace — Financial Tracking & Education Platform
**Stack:** React 19 + Vite 8 + Tailwind CSS v4 + React Router v7
**Repo:** UAS-Workshop-UI-Fintrace
**Live:** https://workshop-ui-fintrace.vercel.app/
**Max Width:** 1280px (matches Figma exports)

---

## ⚡ CURRENT STATE

```
UAS-Workshop-UI-Fintrace/
├── node_modules/    ← installed
├── public/
├── src/             ← WORK HERE
├── index.html
├── package.json
└── vite.config.js
```

---

## 📦 INSTALL COMMANDS

```bash
npm install react-router-dom
npm install -D tailwindcss @tailwindcss/postcss postcss
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tabs @radix-ui/react-progress
npm install @radix-ui/react-select @radix-ui/react-checkbox
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react recharts
npm install react-hook-form @hookform/resolvers zod
npm install date-fns axios react-hot-toast
```

---

## 📁 TARGET STRUCTURE

```
src/
├── components/
│   ├── layout/
│   │   ├── AppLayout.tsx          ← Route-based header switcher
│   │   ├── Header.tsx             ← Public navbar
│   │   ├── UserHeader.tsx         ← Logged-in icon navbar
│   │   ├── AdminHeader.tsx        ← Admin top bar
│   │   ├── AdminSidebar.tsx       ← Admin left sidebar (240px fixed)
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── StatCard.tsx
│   │   └── Badge.tsx
│   └── features/
│       ├── AddArticleModal.tsx
│       ├── AddProductModal.tsx
│       └── SpendingChart.tsx
├── pages/
│   ├── public/
│   │   ├── LandingPage.tsx
│   │   ├── ArticlesPage.tsx
│   │   ├── ArticleDetailPage.tsx
│   │   ├── ProductsPage.tsx
│   │   └── ProductDetailPage.tsx
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   └── RegisterPage.tsx
│   ├── dashboard/
│   │   ├── DashboardPage.tsx
│   │   ├── TransactionsPage.tsx
│   │   ├── AnalyticsPage.tsx
│   │   ├── BudgetPage.tsx
│   │   ├── MyCoursesPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── FeedbackPage.tsx
│   ├── payment/
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── PaymentSuccessPage.tsx
│   │   └── PurchaseHistoryPage.tsx
│   └── admin/
│       ├── AdminDashboardPage.tsx
│       ├── AdminProfilePage.tsx
│       ├── ManageArticlesPage.tsx
│       ├── ManageProductsPage.tsx
│       ├── ManageUsersPage.tsx
│       ├── ManageTransactionsPage.tsx
│       └── FeedbacksPage.tsx
├── context/
│   ├── AuthContext.tsx
│   └── CartContext.tsx
├── data/
│   ├── mockArticles.ts
│   ├── mockProducts.ts
│   ├── mockTransactions.ts
│   └── mockUsers.ts
├── types/
│   └── index.ts
├── utils/
│   ├── formatCurrency.ts
│   └── formatDate.ts
├── styles/
│   └── globals.css
├── router.tsx
├── App.tsx
└── main.tsx
```

---

## 🎨 DESIGN SYSTEM

### globals.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@import 'tailwindcss';

:root {
  --color-primary: #667eea;
  --color-primary-dark: #764ba2;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;
  --gradient-bg: linear-gradient(135deg, #E8E0FF 0%, #FFE8F5 50%, #E0F4FF 100%);
  --max-width: 1280px;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--gradient-bg);
  min-height: 100vh;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.container-1280 {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

* {
  box-sizing: border-box;
  transition-property: background-color, border-color, color, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
```

### tailwind.config.js
```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: { DEFAULT: '#6366f1', dark: '#4f46e5' } },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      borderRadius: { card: '16px', btn: '9999px' },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0,0,0,0.1)',
        'card-hover': '0 20px 25px -5px rgba(139,92,246,0.1)',
        btn: '0 10px 25px rgba(99,102,241,0.4)',
      },
    },
  },
  plugins: [],
}
```

### Design Tokens (Apply these consistently)
| Element | Tailwind Classes |
|---------|-----------------|
| Card | `bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm` |
| Card hover | `hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300` |
| Button primary | `bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium` |
| Button secondary | `bg-cyan-500 hover:bg-cyan-600 text-white rounded-full` |
| Button outline | `border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded-full` |
| Active pill | `bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30` |
| Inactive pill | `bg-white/90 text-slate-600 border border-slate-200/50 rounded-full` |
| Input | `px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500` |
| Badge | `rounded-full px-3 py-1 text-xs font-medium` |

---

## 📐 TYPESCRIPT INTERFACES

```typescript
// src/types/index.ts

export interface User {
  id: string; email: string; fullName: string;
  phoneNumber?: string; avatar?: string;
  role: 'user' | 'admin'; status: 'active' | 'banned';
}

export interface Article {
  id: string; slug: string; title: string; excerpt: string;
  content: string; featuredImage: string;
  category: 'Budgeting' | 'Investment' | 'Saving Tips' | 'E-Wallet Guide' | 'Debt Management';
  tags: string[];
  author: { name: string; avatar: string; role: string; };
  views: number; readTime: number; publishedAt: string;
}

export interface Product {
  id: string; slug: string; name: string;
  description: string; shortDescription: string;
  category: 'course' | 'consultation' | 'premium' | 'ebook';
  price: number; salePrice?: number; featuredImage: string;
  rating: number; reviewCount: number; salesCount: number;
  badge?: 'Bestseller' | 'New' | 'Hot';
  duration?: string; modules?: number;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor?: string; curriculum?: CurriculumModule[];
  whatYouLearn?: string[]; requirements?: string[];
}

export interface CurriculumModule {
  id: string; title: string; description: string;
  duration: string; isPreview: boolean;
}

export interface Transaction {
  id: string; type: 'income' | 'expense'; amount: number;
  category: string; description: string; paymentMethod: string;
  status: 'success' | 'pending' | 'failed'; date: string;
}

export interface Purchase {
  id: string; orderId: string; product: Product; amount: number;
  paymentMethod: string;
  status: 'pending' | 'success' | 'failed' | 'refunded' | 'unpaid';
  paidAt?: string; createdAt: string;
}

export interface Budget {
  id: string; category: string; amount: number;
  spent: number; month: number; year: number;
}

export interface CartItem { product: Product; quantity: number; }
```

---

## 🛣️ ROUTING (router.tsx + AppLayout.tsx)

### router.tsx
```tsx
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'
// import all pages...

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      // PUBLIC
      { path: '/', element: <LandingPage /> },
      { path: '/articles', element: <ArticlesPage /> },
      { path: '/articles/:slug', element: <ArticleDetailPage /> },
      { path: '/courses', element: <ProductsPage /> },
      { path: '/courses/:slug', element: <ProductDetailPage /> },
      { path: '/cart', element: <CartPage /> },
      // AUTH (no header)
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      // USER PRIVATE (UserHeader)
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/dashboard/transactions', element: <TransactionsPage /> },
      { path: '/dashboard/analytics', element: <AnalyticsPage /> },
      { path: '/dashboard/budget', element: <BudgetPage /> },
      { path: '/dashboard/my-courses', element: <MyCoursesPage /> },
      { path: '/dashboard/profile', element: <ProfilePage /> },
      { path: '/dashboard/feedback', element: <FeedbackPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/checkout/success', element: <PaymentSuccessPage /> },
      { path: '/purchases', element: <PurchaseHistoryPage /> },
      // ADMIN (AdminHeader + AdminSidebar)
      { path: '/admin', element: <AdminDashboardPage /> },
      { path: '/admin/articles', element: <ManageArticlesPage /> },
      { path: '/admin/products', element: <ManageProductsPage /> },
      { path: '/admin/users', element: <ManageUsersPage /> },
      { path: '/admin/transactions', element: <ManageTransactionsPage /> },
      { path: '/admin/feedbacks', element: <FeedbacksPage /> },
      { path: '/admin/profile', element: <AdminProfilePage /> },
    ],
  },
])
```

### AppLayout.tsx
```tsx
// src/components/layout/AppLayout.tsx
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import UserHeader from './UserHeader'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

export default function AppLayout() {
  const { pathname } = useLocation()

  const isAuth = ['/login', '/register'].includes(pathname)
  const isAdmin = pathname.startsWith('/admin')
  const isUserPrivate =
    pathname.startsWith('/dashboard') ||
    ['/checkout', '/checkout/success', '/purchases'].includes(pathname)

  if (isAuth) return <Outlet />

  if (isAdmin) {
    return (
      <div className="min-h-screen flex" style={{ background: 'var(--gradient-bg)' }}>
        <AdminSidebar />
        <div className="ml-60 flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1"><Outlet /></main>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-bg)' }}>
      {isUserPrivate ? <UserHeader /> : <Header />}
      <Outlet />
    </div>
  )
}
```

---

## 🧩 COMPONENT IMPLEMENTATIONS

### Button.tsx — FROM MAGICPATTERNS SET 1 (keep as is)
```tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void; type?: 'button' | 'submit' | 'reset'
  disabled?: boolean; className?: string; icon?: React.ReactNode
}

// Variants:
// primary → bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full
// secondary → bg-cyan-500 text-white rounded-full (used in public Header CTA)
// outline → border-2 border-indigo-500 text-indigo-600 rounded-full
// white → bg-white text-purple-600 rounded-full
// ghost → text-gray-600 hover:bg-gray-100 rounded-lg (admin pages)
// danger → text-red-500 hover:bg-red-50 rounded-lg (delete actions)
```

### Card.tsx — FROM MAGICPATTERNS SET 1 (keep as is)
```tsx
// bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm
// hover prop adds: hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1
```

### Modal.tsx — FROM MAGICPATTERNS SET 2 (migrate framer-motion → CSS)
```tsx
// IMPORTANT: Remove framer-motion dependency (not in package.json)
// Replace with CSS transition: opacity + scale + translate
// Keep same API: isOpen, onClose, title, children
// Backdrop: fixed inset-0 bg-black/50 backdrop-blur-sm z-40
// Panel: bg-white rounded-2xl shadow-2xl max-w-2xl max-h-[90vh]
```

### StatCard.tsx — FROM MAGICPATTERNS SET 2
```tsx
interface StatCardProps {
  title: string; value: string
  icon: LucideIcon; iconColor: string; iconBgColor: string
}
// Used in: AdminDashboard, ManageUsers, ManageTransactions
```

### Logo (inline everywhere)
```tsx
<div className="flex items-center gap-2">
  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
    <WalletIcon className="w-6 h-6 text-white" />
  </div>
  <span className="text-xl font-bold gradient-text">FinTrace</span>
</div>
```

---

## 🏗️ LAYOUT COMPONENTS

### Header.tsx — FROM MAGICPATTERNS SET 1
```tsx
// Sticky top-0, bg-white/80 backdrop-blur-md, border-b border-slate-200/50
// Left: Logo | Center: Home Articles Courses Dashboard | Right: "Get Started" cyan btn
// Get Started links to /login
```

### UserHeader.tsx — BUILD FROM FIGMA
```tsx
// Sticky top-0, bg-white/80 backdrop-blur-md
// Left: Logo
// Center: Icon nav in purple-bordered pill (border-2 border-purple-400 rounded-full px-8 py-3)
//   Icons: DollarSign→/dashboard | ClipboardList→/dashboard/budget |
//          Target→/dashboard/analytics | BarChart2→/dashboard/analytics |
//          BookOpen→/articles | Store→/courses
// Right: Profile pill (border-2 border-purple-400 rounded-full)
//   Avatar (40px circle) + Name + Email
```

### AdminHeader.tsx — MERGE SET 1 + SET 2 + FIGMA
```tsx
// FROM FIGMA: Logo + sidebar-toggle icon | Search bar (rounded-full, 96px) | Notifs + Profile
// FROM SET 2: has onNavigate prop for profile click
// MERGE: use React Router Link for navigation instead of state-based onNavigate
// Sticky top-0, bg-white border-b border-gray-200 z-40
```

### AdminSidebar.tsx — FROM MAGICPATTERNS SET 2 (restructured)
```tsx
// fixed left-0 top-0 h-screen w-60 bg-white border-r border-gray-200 z-50
// Logo top (FT gradient icon + "FinTrace" text)
// Nav items (use React Router NavLink instead of onNavigate state):
//   Dashboard → /admin
//   Kelola Pengguna → /admin/users
//   Kelola Transaksi → /admin/transactions
//   Kelola Artikel → /admin/articles
//   Kelola Produk → /admin/products
//   Feedbacks → /admin/feedbacks
//   Logout (calls logout() from AuthContext)
// Active: bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl
// Bottom: profile avatar + name + "Admin" role text → Link to /admin/profile
```

---

## 📄 PAGE SPECIFICATIONS

---

### PUBLIC PAGES (use Header)

#### LandingPage (`/`) — FROM MAGICPATTERNS SET 1
Complete. Keep exactly as is. Sections:
1. Hero: H1 + gradient text "Master Your Finance" + 2 CTA buttons + e-wallet logos
2. Stats: 4 cards (100K+ Users, 1M+ Transactions, 15+ Platforms, 5.0 Rating)
3. Articles preview (3 cards) → Link to /articles
4. Features (6 cards with gradient icons)
5. CTA banner (purple gradient full width)
6. Footer (5-column layout)

#### ArticlesPage (`/articles`) — FROM MAGICPATTERNS SET 1
Complete. Keep as is. Layout: article grid + no sidebar (SET 1 has no sidebar).
- Search bar + category pill filters
- 6 article cards grid (3 cols)
- Each card: image + category badge + title + excerpt + author/readtime

**UPDATE from Figma**: Add right sidebar (320px):
- Popular Article (3 items with thumbnail)
- Categories list with counts
- Newsletter form

#### ArticleDetailPage (`/articles/:id`) — FROM MAGICPATTERNS SET 1
Complete. Keep as is. Update:
- Add sticky right sidebar: TOC + Related Articles + CTA box "Start Tracking"
- Add "You Might Also Like" grid at bottom

#### ProductsPage (`/courses`) — FROM MAGICPATTERNS SET 1
Update with Figma layout:
- Add left filter sidebar (280px):
  - Categories checkboxes (All, Courses, Consultation, Premium)
  - Rating checkboxes (⭐⭐⭐⭐⭐ 5.0 | ⭐⭐⭐⭐ 4.0+)
  - Level checkboxes (Beginner, Intermediate, Advance)
- Product grid: 2 columns (from Figma)
- Each card: real image + category badge + stars + title + desc + meta + price + cart icon button
- Pagination: ← Previous | 1 2 3 4 | Next →

#### ProductDetailPage (`/courses/:id`) — FROM MAGICPATTERNS SET 1
Update right purchase box from Figma:
- "Bestseller" badge
- Price Rp 299K + strikethrough Rp 499K + "Save 40%" badge
- Meta grid: 12 Modules | 8 Hours | Beginner Level | Certificate
- "What's Included" bullet list
- [Cart icon button] + [Buy Now outline button]

#### CartPage (`/cart`) — FROM MAGICPATTERNS SET 1
Update from Figma:
- Title: "Keranjang Belanja Anda"
- Breadcrumb: Home › Financial Courses › Product Name › Cart
- Item row: thumbnail + name + instructor/type + price (purple) + "Hapus" (red text link)
- Summary: Subtotal + "Diskon Promo: -Rp 0" (green) + "Biaya Layanan/Admin: Rp 5.000"
- Promo code input + "Terapkan" green button
- "Total Pembayaran" (purple bold) + [LANJUTKAN KE PEMBAYARAN] dark purple full-width
- Security note: "🔒 Pembayaran Aman | 💰 Jaminan Uang Kembali 30 Hari"
- Show login prompt banner if not authenticated
- Footer: About US | Features | Pricing | Blog | Support | Privacy | Terms

---

### AUTH PAGES (no header/footer)

#### LoginPage (`/login`) — BUILD FROM FIGMA
```
Layout: 2-column split screen (no AppLayout header)

LEFT 52%:
  bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800
  Circuit board SVG grid pattern (absolute, opacity-20)
  Large FT logo (gradient blue→pink, 192px)
  "Effortlessly and Easily track your financial" (white, 4xl bold)

RIGHT 48%:
  bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100
  "Welcome Back" (indigo-500, 4xl bold, center)
  Subtitle (slate-400, center)
  Form:
    Label: "Telepon/Email :" (purple-600, semibold)
    Input: white bg, border-2 border-purple-300, rounded-xl
    Label: "Password" (purple-600, semibold)
    Input with EyeOff icon toggle (right side)
    Row: checkbox "Ingat Saya" + link "Lupa kata sandi?"
    Button: "Login" (bg-gradient-to-r from-cyan-100 to-blue-100,
                      text-purple-600, rounded-xl, full-width)
    Divider: "or continue with"
    Google + Apple buttons (outline, side by side)
    "Don't have an account? Sign up" → /register
  Footer row: "Copyright c 2025 FinTrace" | "Privacy Policy"
```

#### RegisterPage (`/register`) — BUILD FROM FIGMA
Mirrored layout of Login: form LEFT, hero RIGHT.
Form title: "Register Here" / subtitle: "Sign up yourself through anything you want"
Bottom: "Already have an account? Login" → /login

---

### USER PRIVATE PAGES (use UserHeader)

#### DashboardPage (`/dashboard`) — FROM MAGICPATTERNS SET 1
Complete. Keep as is.
- Stats: Total Saldo | Pengeluaran Bulan Ini | Tabungan | Target Tercapai
- Transaksi Terbaru list + "Lihat Semua" → /dashboard/transactions
- Budget Tracking progress bars (green <60%, yellow 60-80%, red >80%)
- Target Keuangan (goals) progress bars
- Rekomendasi Belajar → /articles

#### CheckoutPage (`/checkout`) — BUILD FROM FIGMA
```
UserHeader
Breadcrumb: Home › Financial Courses › Personal Finance Mastery › Cart › Checkout
Title: "Langkah Terakhir Pembayaran"
Subtitle: "Selesaikan pembayaran Anda dalam waktu 24 jam."

Layout: Left (60%) + Right (40%)

LEFT white card:
  "1. Pilih Metode Pembayaran"
  Text: "Kami mendukung pembayaran via E-Wallet, Virtual Account, dan Transfer Bank."
  
  Section "E-Wallet" (purple text):
    GoPay row (radio + icon + name + desc)
    OVO row (radio + icon + name + desc)
  
  Section "Virtual Account / Transfer Bank" (purple text):
    BCA Virtual Account row
    Mandiri Virtual Account row
  
  "2. Kontak & Informasi":
    Gray info box: Email + Nomor HP + note text
  
  Footer: "Semua transaksi diamankan dengan enkripsi 256-bit."

RIGHT white card:
  "Ringkasan Pesanan"
  Items: [thumb] name + type + price (purple)
  ---
  Subtotal Harga         Rp 398.000
  Diskon (Kode: FINTRA)  -Rp 25.000  (green)
  Biaya Layanan/Admin    Rp 5.000
  ---
  Total Tagihan Akhir    Rp 403.000  (purple bold large)
  *note text (small, gray)
  
  [KONFIRMASI PEMBAYARAN] (dark purple, full-width, rounded-xl)
  "Dengan mengklik konfirmasi, Anda menyetujui Syarat dan Ketentuan FinTrace."

Footer: © 2025 FinTrace. All Rights Reserved.
```

#### PurchaseHistoryPage (`/purchases`) — BUILD FROM FIGMA
```
UserHeader
Title: "Transaction History"
Subtitle: "Lihat semua transaksi pembelian Anda"

Filter tabs (pill): [Semua] [Selesai] [Belum Dibayar] [Menunggu] [Gagal]

Transaction card (white rounded-2xl each):
  Top row: ID | Badge status | Amount (purple) + method (right)
  Date below ID
  "Produk:" → bullet list of items
  Action buttons:
    Selesai → [↓ Download Invoice] [Lihat Detail]
    Belum Dibayar → [Selesaikan Pembayaran]
    Menunggu → [Lihat Detail]
    Gagal → (none)

Status badge colors:
  Selesai → emerald-100 text-emerald-700
  Menunggu → amber-100 text-amber-700
  Belum Dibayar → orange-100 text-orange-700
  Gagal → rose-100 text-rose-700
```

#### ProfilePage (`/dashboard/profile`) — BUILD FROM FIGMA
```
AdminHeader style (search + notif + avatar)
"My Profile" + subtitle
[Back] button top right

Profile Hero card (gradient teal→indigo, white text):
  100px avatar + Name + @username
  Badges: [Royal Buyer] [Verified] [Pro Member]
  📅 Joined January 2023 | 🏢 FinTrace Platform
  [Edit Profile] outline button

Stats row (4 cards):
  Articles Bought: 30 | Courses Read: 8 | Total Spending: Rp 1M | Avg Rating: 4.9

3-column grid:

MAIN (left-center):
  Personal Information card + Edit button:
    First Name / Last Name inputs
    Job Title / Department inputs
    Bio textarea
  
  Achievements card:
    [🏆 Top Contributor - Most articles Q1 2024] orange gradient
    [⭐ Student Favorite - Highest rated instructor] pink/purple gradient
    [🚀 Early Adopter - Member since Jan 2023] teal gradient (×2)
  
  Preferences & Security card:
    🔔 Email Notifications (toggle ON purple)
    🛡️ Two-Factor Auth (toggle OFF gray)
    🌐 Language & Region + "Change" link

RIGHT NARROW:
  Contact Information card:
    Username | Email | Phone | Location
  
  Recent Activity card:
    🔵 Published article - Investment Strategies 2024 - 2 hours ago
    🔵 Updated course - Personal Finance Mastery - 1 day ago
    🟢 Received feedback - 5-star review from student - 2 days ago
    🔴 Created product - Financial Planning Workbook - 3 days ago
```

#### FeedbackPage (`/dashboard/feedback`) — FROM MAGICPATTERNS SET 2 (adapted)
Adapt the Feedbacks.tsx from admin to user context:
- Star rating selector (1-5)
- Category dropdown (Bug Report, Feature Request, General, Complaint)
- Textarea for feedback
- Optional image upload
- Submit button
- History table of submitted feedbacks

#### AnalyticsPage, BudgetPage, MyCoursesPage — BUILD
Build based on Dashboard patterns. Use recharts for charts.

---

### ADMIN PAGES (use AdminHeader + AdminSidebar)

#### AdminDashboardPage (`/admin`) — FROM MAGICPATTERNS SET 2 (migrate)
Migrate `pages/Dashboard.tsx` from SET 2 to clean page component.
```
"Hello, Nayla." (purple-500, 4xl bold)

Stats row (StatCard ×4):
  👤 Total Users 1.000.000 (blue)
  🛡️ Saled Product 500.000 (purple)
  ✅ Transaction Track 1.500.000 (green)
  👤 Article Posted 150.000 (pink)

Two-column layout:

LEFT (lg:col-span-2):
  BarChart "Users & Advisors Growth (%)" — recharts:
    data = [
      { name:'2021', Users:91, Advisors:47.55 },
      { name:'2022', Users:23.36, Advisors:15.79 },
      { name:'2023', Users:90.42, Advisors:97.07 },
      { name:'2024', Users:29.67, Advisors:98.24 },
      { name:'2025', Users:81.34, Advisors:29.22 },
    ]
    Users bar: fill #A855F7 (purple)
    Advisors bar: fill #FCA5A5 (pink/salmon)
    barSize:20, radius:[4,4,0,0], barGap:0
    CartesianGrid vertical:false, strokeDasharray:"3 3"
  
  "Recent Activities" (clock icon):
    📄 New Article Published → Cara Mengelola... | Sarah Wijaya · 2 hours ago
    📦 Product Added → Investment Masterclass 2024 | Budi Santoso · 5 hours ago
    👥 New User Registered → Premium Member | Rina Kusuma · 1 day ago
    🏆 Course Completed → Personal Finance Mastery | Ahmad Rizki · 1 day ago

RIGHT:
  "Penjualan Hari ini" + [Lihat Semua] button
  Product list (3 items): thumbnail + name + type + price (pink-500 text)
  
  "Top Performing Content" (TrendingUp icon green)
  Ranked list 1-5:
    1 Investasi Saham untuk Pemula  Article 45.2K views  92% ↗
    2 Personal Finance Mastery      Course  38.7K views  88% ↗
    3 Crypto Investment Guide       E-Book  32.1K views  85% ↗
    4 Mengelola Keuangan Keluarga   Article 28.5K views  79% ↘ (red)
    5 Passive Income Strategies     Course  25.3K views  76% ↗
```

#### ManageArticlesPage (`/admin/articles`) — FROM SET 2 KelolaArtikel.tsx
Migrate from state-based page to routed page. Keep all functionality:
- "+ Tambah Artikel" purple button → opens Modal with AddArticleModal
- Full-width search bar in white card
- Table: Judul | Penulis | Kategori badge | Status badge | Tanggal | Views | Edit/Delete icons

#### ManageProductsPage (`/admin/products`) — FROM SET 2 KelolaProduk.tsx
Migrate from state-based page to routed page:
- "+ Tambah Produk" purple button → opens Modal with AddProductModal
- Search bar
- Table: Produk | Tipe badge | Instruktur | Harga | Siswa | ⭐Rating | Status badge | Edit/Delete

#### ManageUsersPage (`/admin/users`) — FROM SET 1 ManageUsers.tsx
Keep as is. Already routed. Update:
- Remove container-1280 wrapper (admin uses full width inside sidebar)
- Stats cards row (4): Total Users | Advisors | Active Users | Inactive
- Search + filter pills (Semua | Users | Advisors | Admins)
- Table: avatar+name+email | Role badge | Status badge | Bergabung | Transaksi | Total Belanja | ⋮

#### ManageTransactionsPage (`/admin/transactions`) — MERGE SET 1 + SET 2
Use SET 2's KelolaTransaksi.tsx (more complete) as base.
Migrate to routed page:
- Stats cards: Total Transaksi | Completed | Pending | Failed
- Search + filter pills
- Table: TRX ID | User+email | Product | Type badge | Amount | Payment | Status | Date | 👁️ Action

#### FeedbacksPage (`/admin/feedbacks`) — FROM SET 2 Feedbacks.tsx
Migrate as routed page:
- Stats: Total Feedback | Avg Rating | Unread | Replied
- Search + star rating filter pills
- Feedback cards: avatar + user + product + stars + comment + date + Reply/Delete buttons
- Reply modal

#### AdminProfilePage (`/admin/profile`) — FROM SET 2 Profile.tsx
Migrate as routed page (already complete component).
Stats: Articles Written: 127 | Courses Created: 8 | Total Students: 2,456 | Avg: 4.9
Badges: [Administrator] [Verified] [Pro Member]

---

## 🗃️ MOCK DATA

```typescript
// src/data/mockArticles.ts
// 6 articles (from SET 1 ArticleArchive data):
// Cara Mengelola Keuangan untuk Mahasiswa, Investasi untuk Pemula,
// Mengenal E-Wallet, Strategi Menabung, Cara Keluar dari Hutang, Keuangan UMKM

// src/data/mockProducts.ts
// 6 products (from SET 1 ProductCatalog data):
// Personal Finance Mastery (299K), Investasi Saham (399K),
// Konsultasi Financial (500K), Debt Management (249K),
// Cryptocurrency (449K), UMKM Financial (349K)

// src/data/mockTransactions.ts
// Financial transactions (income/expense) from SET 1 Dashboard:
// Gojek -25K, Salary +8M, Indomaret -150K, Spotify -54K, Freelance +2.5M

// src/data/mockPurchases.ts
// Purchase history from SET 1 TransactionHistory:
// TRX-2024-001 completed 774780 Kartu Kredit
// TRX-2024-002 completed 550000 GoPay
// TRX-2024-003 pending 276390 Transfer Bank
// TRX-2023-045 completed 387390 OVO
// TRX-2023-044 failed 498390 Kartu Kredit
// Add one 'unpaid/belum_dibayar' status for filter completeness
```

---

## 🔐 AUTH CONTEXT

```typescript
// src/context/AuthContext.tsx
// Mock auth using localStorage 'fintrace_user'
// login(role: 'user' | 'admin') → sets user object
// Two accounts:
//   user → { email: 'user@fintrace.com', role: 'user', fullName: 'Nayla Sasha Meliana' }
//   admin → { email: 'admin@fintrace.com', role: 'admin', fullName: 'Nayla Sasha Meliana' }
// Provide: user, login(), logout(), isAuthenticated, isAdmin
```

---

## 🛒 CART CONTEXT

```typescript
// src/context/CartContext.tsx
// localStorage key: 'fintrace_cart'
// Provide: items[], addItem(product), removeItem(id), clearCart(), totalItems, totalPrice
```

---

## ⚠️ MIGRATION NOTES

### SET 2 uses framer-motion — REMOVE IT
```tsx
// Modal.tsx - Replace AnimatePresence + motion.div with:
const [visible, setVisible] = useState(false)
useEffect(() => { if (isOpen) setVisible(true) }, [isOpen])
// Use CSS: transition-opacity duration-200, transition-transform duration-300
// class={isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
```

### SET 2 uses state-based navigation — CONVERT TO ROUTER
```tsx
// BEFORE (SET 2):
const [currentPage, setCurrentPage] = useState('dashboard')
<Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

// AFTER (clean architecture):
// Use <NavLink to="/admin/articles"> in AdminSidebar
// useLocation() to determine active state
```

### SET 2 Button has different variant API — UNIFY
```tsx
// SET 1 variants: 'primary' | 'secondary' | 'outline' | 'white'
// SET 2 variants: 'primary' | 'secondary' | 'ghost' | 'danger'
// UNIFIED: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost' | 'danger'
// SET 2 uses rounded-lg instead of rounded-full for admin buttons — keep both
// Admin pages: icon buttons use rounded-lg (ghost/danger variant)
// Public/User pages: CTA buttons use rounded-full (primary/outline variant)
```

### SET 2 StatCard — KEEP AS IS
```tsx
// Used only in admin pages, already clean component
// Just migrate to src/components/ui/StatCard.tsx
```

---

## 📋 IMPLEMENTATION ORDER

### Phase 1: Foundation (Priority: CRITICAL)
1. `src/styles/globals.css` — design system CSS
2. `tailwind.config.js` — extend with design tokens
3. `src/types/index.ts` — all TypeScript interfaces
4. `src/context/AuthContext.tsx` — mock auth
5. `src/context/CartContext.tsx` — cart state
6. `src/utils/formatCurrency.ts` + `formatDate.ts`
7. `src/data/*.ts` — all mock data files

### Phase 2: Components (Priority: CRITICAL)
8. `src/components/ui/Button.tsx` — unified variant API
9. `src/components/ui/Card.tsx` — from SET 1
10. `src/components/ui/Input.tsx` — from SET 1
11. `src/components/ui/Modal.tsx` — from SET 2, remove framer-motion
12. `src/components/ui/StatCard.tsx` — from SET 2
13. `src/components/features/AddArticleModal.tsx` — from SET 2
14. `src/components/features/AddProductModal.tsx` — from SET 2

### Phase 3: Layouts (Priority: CRITICAL)
15. `src/components/layout/Header.tsx` — from SET 1
16. `src/components/layout/UserHeader.tsx` — build from Figma
17. `src/components/layout/AdminHeader.tsx` — merge SET 2 + Figma
18. `src/components/layout/AdminSidebar.tsx` — from SET 2, convert to NavLink
19. `src/components/layout/AppLayout.tsx` — route-based header switcher
20. `src/router.tsx` — all routes
21. `src/App.tsx` — RouterProvider

### Phase 4: Public Pages (Priority: HIGH)
22. `LandingPage.tsx` — SET 1 (complete, just migrate)
23. `ArticlesPage.tsx` — SET 1 + add sidebar from Figma
24. `ArticleDetailPage.tsx` — SET 1 + add TOC sidebar
25. `ProductsPage.tsx` — SET 1 + add filter sidebar from Figma
26. `ProductDetailPage.tsx` — SET 1 + update purchase box from Figma
27. `CartPage.tsx` — SET 1 + update design from Figma

### Phase 5: Auth Pages (Priority: HIGH)
28. `LoginPage.tsx` — build from Figma
29. `RegisterPage.tsx` — build from Figma

### Phase 6: User Dashboard Pages (Priority: HIGH)
30. `DashboardPage.tsx` — SET 1 (complete)
31. `CheckoutPage.tsx` — build from Figma
32. `PurchaseHistoryPage.tsx` — build from Figma
33. `ProfilePage.tsx` — build from Figma

### Phase 7: Admin Pages (Priority: HIGH)
34. `AdminDashboardPage.tsx` — migrate SET 2 Dashboard.tsx
35. `ManageArticlesPage.tsx` — migrate SET 2 KelolaArtikel.tsx
36. `ManageProductsPage.tsx` — migrate SET 2 KelolaProduk.tsx
37. `ManageUsersPage.tsx` — migrate SET 1 ManageUsers.tsx
38. `ManageTransactionsPage.tsx` — migrate SET 2 KelolaTransaksi.tsx
39. `FeedbacksPage.tsx` — migrate SET 2 Feedbacks.tsx
40. `AdminProfilePage.tsx` — migrate SET 2 Profile.tsx

### Phase 8: Remaining Dashboard Pages (Priority: MEDIUM)
41. `TransactionsPage.tsx` — build
42. `AnalyticsPage.tsx` — build with recharts
43. `BudgetPage.tsx` — build
44. `MyCoursesPage.tsx` — build
45. `FeedbackPage.tsx` — build (user version)
46. `PaymentSuccessPage.tsx` — build

### Phase 9: Polish (Priority: LOW)
47. Loading skeletons
48. Empty states
49. Mobile responsive fixes
50. Final review + deploy

---

## ✅ QUALITY CHECKLIST

Per page before marking complete:
- [ ] `container-1280` class wraps page content (public/user pages)
- [ ] Admin pages use full width (no container, inside 240px sidebar)
- [ ] Cards: `bg-white/90 backdrop-blur-sm rounded-2xl`
- [ ] Buttons: `rounded-full` (public) or `rounded-lg` (admin icon buttons)
- [ ] `gradient-text` on highlighted headings
- [ ] Hover effects on all interactive elements
- [ ] Empty state handled in lists/tables
- [ ] TypeScript — zero `any` types
- [ ] Navigation links work (no broken routes)

---

## 🚫 STRICT RULES

1. **NEVER** use inline styles — Tailwind only
2. **NEVER** use `any` TypeScript type
3. **NEVER** import framer-motion — replace with CSS transitions
4. **ALWAYS** use `lucide-react` for icons (not emoji in components)
5. **ALWAYS** use React Router `<Link>` or `<NavLink>` — not `onClick` for navigation
6. **ALWAYS** add mock data — every page renders real-looking content
7. **ALWAYS** extract to component if used 2+ times
8. **KEEP** SET 2 admin styling (rounded-lg buttons, white bg sidebar) separate from SET 1 public styling (rounded-full buttons, glassmorphism cards)

---

## 📦 DEPLOYMENT

```bash
npm run build
# Push to GitHub → Vercel auto-deploys
```
**Live:** `https://workshop-ui-fintrace.vercel.app/`

---

*FinTrace — UAS Workshop UI*
*D4 Teknik Informatika, Universitas Airlangga*
*NIM: 434241056 | Muhammad Raka Razzani | 2025*
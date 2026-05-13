# 🚀 FINTRACE - COMPLETE AGENTIC CODING PROMPT
> **Read this ENTIRE file before writing any code.**
> This is the complete blueprint for FinTrace web application.
> Source of truth: MagicPatterns React code + 28 Figma exports.

---

## 📌 PROJECT CONTEXT

**Project Name:** FinTrace
**Type:** Financial Tracking & Education Platform (Web App)
**Stack:** React + Vite (already installed)
**Repository:** UAS-Workshop-UI-Fintrace
**Max Width:** 1280px (Figma export width)

FinTrace adalah platform manajemen keuangan digital yang memungkinkan pengguna melacak transaksi e-wallet/bank secara otomatis, merencanakan budget, sekaligus belajar literasi keuangan melalui artikel dan marketplace kursus.

---

## ⚡ CURRENT PROJECT STATE

```
UAS-Workshop-UI-Fintrace/
├── node_modules/       ← already installed
├── public/
├── src/                ← WORK HERE
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🛠️ REQUIRED INSTALLATIONS

Run these commands first before writing any code:

```bash
# Routing
npm install react-router-dom

# Styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# UI Components
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tabs @radix-ui/react-progress
npm install @radix-ui/react-select @radix-ui/react-checkbox
npm install class-variance-authority clsx tailwind-merge

# Icons
npm install lucide-react

# Charts
npm install recharts

# Forms & Validation
npm install react-hook-form @hookform/resolvers zod

# Date utilities
npm install date-fns

# HTTP Client
npm install axios

# Notifications
npm install react-hot-toast
```

---

## 📁 TARGET FOLDER STRUCTURE

```
src/
├── assets/
│   └── images/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   ├── Table.tsx
│   │   ├── Tabs.tsx
│   │   ├── Progress.tsx
│   │   └── Toast.tsx
│   ├── layout/
│   │   ├── Header.tsx          ← Public navbar
│   │   ├── UserHeader.tsx      ← Logged-in user icon navbar
│   │   ├── AdminHeader.tsx     ← Admin top bar
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── DashboardLayout.tsx
│   │   └── AdminLayout.tsx
│   └── features/
│       ├── TransactionCard.tsx
│       ├── ProductCard.tsx
│       ├── ArticleCard.tsx
│       ├── BudgetProgress.tsx
│       ├── SpendingChart.tsx
│       └── StatsCard.tsx
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
│       └── ManageTransactionsPage.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useCart.ts
│   └── useLocalStorage.ts
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
│   ├── formatDate.ts
│   └── helpers.ts
├── styles/
│   └── globals.css
├── App.tsx
├── main.tsx
└── router.tsx
```

---

## 🎨 DESIGN SYSTEM

### CSS Variables + Tailwind (index.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  /* Primary - from MagicPatterns code */
  --color-primary: #6366f1;
  --color-primary-dark: #4f46e5;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;

  /* Pastel Icon Backgrounds */
  --icon-bg-blue: #E0F4FF;
  --icon-bg-pink: #FFE8F5;
  --icon-bg-yellow: #FFF8DC;
  --icon-bg-purple: #E8E0FF;
  --icon-bg-orange: #FFE8DC;
  --icon-bg-green: #E0FFE8;

  /* Text */
  --text-primary: #2D3748;
  --text-secondary: #4A5568;
  --text-muted: #718096;
  --text-light: #A0AEC0;

  /* Status */
  --color-success: #48BB78;
  --color-warning: #F6AD55;
  --color-danger: #F56565;
  --color-info: #63B3ED;

  --max-width: 1280px;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #e0f2fe 0%, #fae8ff 50%, #fce7f3 100%);
  min-height: 100vh;
}

/* Gradient text utility */
.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Max width container */
.container-1280 {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

* {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
```

### Tailwind Config

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-bg': 'linear-gradient(135deg, #e0f2fe 0%, #fae8ff 50%, #fce7f3 100%)',
      },
      borderRadius: {
        'card': '16px',
        'btn': '9999px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0,0,0,0.1)',
        'card-hover': '0 20px 25px -5px rgba(139,92,246,0.1)',
        'btn': '0 10px 25px rgba(99,102,241,0.4)',
      }
    },
  },
  plugins: [],
}
```

### Component Rules
- **Cards:** `bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm`
- **Card hover:** `hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300`
- **Buttons Primary:** `bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full px-6 py-2.5 font-medium`
- **Buttons Secondary (cyan):** `bg-cyan-500 hover:bg-cyan-600 text-white rounded-full`
- **Buttons Outline:** `border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded-full`
- **Badges:** `rounded-full px-3 py-1 text-xs font-medium`
- **Inputs:** `px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500`
- **Active pill:** `bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30`
- **Inactive pill:** `bg-white/90 backdrop-blur-sm text-slate-600 border border-slate-200/50`

### Logo (Use Everywhere)
```tsx
<div className="flex items-center gap-2">
  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
    <WalletIcon className="w-6 h-6 text-white" />
  </div>
  <span className="text-xl font-bold gradient-text">FinTrace</span>
</div>
```

---

## 📐 TYPESCRIPT INTERFACES

```typescript
// src/types/index.ts

export interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  avatar?: string;
  role: 'user' | 'admin';
  status: 'active' | 'banned';
}

export interface Article {
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

export interface Product {
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

export interface CurriculumModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  isPreview: boolean;
}

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  paymentMethod: string;
  status: 'success' | 'pending' | 'failed';
  date: string;
}

export interface Budget {
  id: string;
  category: string;
  amount: number;
  spent: number;
  month: number;
  year: number;
}

export interface Purchase {
  id: string;
  orderId: string;
  product: Product;
  amount: number;
  paymentMethod: string;
  status: 'pending' | 'success' | 'failed' | 'refunded' | 'unpaid';
  paidAt?: string;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  user: { name: string; avatar: string; };
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ConnectedAccount {
  id: string;
  accountName: string;
  accountType: 'e_wallet' | 'bank' | 'cash';
  balance: number;
  isActive: boolean;
}
```

---

## 🛣️ ROUTING STRUCTURE

```typescript
// src/router.tsx

// Public Routes (Header.tsx - no auth required)
// /                         → LandingPage
// /articles                 → ArticlesPage
// /articles/:slug           → ArticleDetailPage
// /courses                  → ProductsPage
// /courses/:slug            → ProductDetailPage
// /cart                     → CartPage (public - shows login prompt if not auth)
// /login                    → LoginPage (NO header)
// /register                 → RegisterPage (NO header)

// User Routes (UserHeader.tsx - auth required)
// /dashboard                → DashboardPage
// /dashboard/transactions   → TransactionsPage
// /dashboard/analytics      → AnalyticsPage
// /dashboard/budget         → BudgetPage
// /dashboard/my-courses     → MyCoursesPage
// /dashboard/profile        → ProfilePage
// /dashboard/feedback       → FeedbackPage
// /checkout                 → CheckoutPage
// /checkout/success         → PaymentSuccessPage
// /purchases                → PurchaseHistoryPage

// Admin Routes (AdminHeader.tsx + sidebar - admin role required)
// /admin                    → AdminDashboardPage
// /admin/articles           → ManageArticlesPage
// /admin/products           → ManageProductsPage
// /admin/users              → ManageUsersPage
// /admin/transactions       → ManageTransactionsPage
// /admin/profile            → AdminProfilePage
```

### Header Logic in App.tsx

```tsx
function AppLayout() {
  const { pathname } = useLocation()

  const isAuth = pathname === '/login' || pathname === '/register'
  const isAdmin = pathname.startsWith('/admin')
  const isUserPrivate = pathname.startsWith('/dashboard') ||
    ['/checkout', '/purchases', '/checkout/success'].includes(pathname)

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #fae8ff 50%, #fce7f3 100%)' }}>
      {!isAuth && !isAdmin && !isUserPrivate && <Header />}
      {isUserPrivate && <UserHeader />}
      {isAdmin && <AdminHeader />}
      <Outlet />
    </div>
  )
}
```

---

## 🖼️ PAGE SPECIFICATIONS

---

### HEADER VARIANTS

#### 1. Public Header (`Header.tsx`) — FROM MAGICPATTERNS
```tsx
// Logo left | Nav center (Home, Articles, Courses, About) | "Get Started" cyan btn right
// bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50
```

#### 2. User Header (`UserHeader.tsx`) — BUILD FROM FIGMA
```tsx
// Layout: Logo | Icon Nav (pill) | Profile pill
<header className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md sticky top-0 z-50">
  <Logo />

  {/* Icon nav in purple-bordered pill */}
  <nav className="flex items-center gap-6 px-8 py-3 border-2 border-purple-400 rounded-full">
    <NavIcon icon={DollarSign} to="/dashboard" title="Financial" />
    <NavIcon icon={ClipboardList} to="/dashboard/budget" title="Budget" />
    <NavIcon icon={Target} to="/dashboard/goals" title="Goals" />
    <NavIcon icon={BarChart2} to="/dashboard/analytics" title="Analytics" />
    <NavIcon icon={BookOpen} to="/articles" title="Articles" />
    <NavIcon icon={Store} to="/courses" title="Marketplace" />
  </nav>

  {/* Profile pill with purple border */}
  <div className="flex items-center gap-3 px-4 py-2 border-2 border-purple-400 rounded-full cursor-pointer">
    <img src={avatar} className="w-10 h-10 rounded-full object-cover" />
    <div>
      <p className="font-semibold text-sm text-slate-900">Nayla Sasha Meliana</p>
      <p className="text-xs text-slate-500">naysana1907@gmail.com</p>
    </div>
  </div>
</header>
```

#### 3. Admin Header (`AdminHeader.tsx`) — BUILD FROM FIGMA
```tsx
// Layout: Logo+toggle | Search bar | Notif icons + Profile pill
<header className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md sticky top-0 z-50">
  <div className="flex items-center gap-4">
    <Logo />
    <button className="text-slate-500"><LayoutGrid /></button> {/* sidebar toggle */}
  </div>

  {/* Search bar */}
  <div className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-full w-96">
    <Search className="text-slate-400 w-4 h-4" />
    <input placeholder="Search any ..." className="flex-1 outline-none text-sm" />
  </div>

  {/* Right: icons + profile */}
  <div className="flex items-center gap-3">
    <button className="p-2 hover:bg-slate-100 rounded-full"><MessageSquare /></button>
    <button className="p-2 hover:bg-slate-100 rounded-full"><Bell /></button>
    <div className="flex items-center gap-3 px-4 py-2 border-2 border-purple-400 rounded-full">
      <img src={avatar} className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-semibold text-sm">Nayla Sasha Meliana</p>
        <p className="text-xs text-slate-500">naysana1907@gmail.com</p>
      </div>
    </div>
  </div>
</header>
```

---

### LOGIN PAGE (`/login`) — BUILD FROM FIGMA

**Layout:** Split screen, no header, no footer nav

```tsx
<div className="min-h-screen flex">
  {/* LEFT - Dark hero panel (52%) */}
  <div className="w-[52%] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 relative flex flex-col items-center justify-center p-12">
    {/* Circuit board SVG pattern overlay */}
    <div className="absolute inset-0 opacity-20">{/* grid/circuit lines */}</div>
    {/* Large FT gradient logo */}
    <div className="w-48 h-48 mb-8 z-10">
      {/* FT logo - gradient blue to pink, large */}
    </div>
    <h2 className="text-4xl font-bold text-white text-center z-10 leading-tight">
      Effortlessly and Easily<br />track your financial
    </h2>
  </div>

  {/* RIGHT - Login form (48%) */}
  <div className="w-[48%] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 flex flex-col justify-between p-12">
    <div className="max-w-sm mx-auto w-full pt-16">
      <h1 className="text-4xl font-bold text-indigo-500 text-center mb-1">Welcome Back</h1>
      <p className="text-slate-400 text-center text-sm mb-8">Enter your email and password to access your account</p>

      <label className="text-purple-600 font-semibold text-sm">Telepon/Email :</label>
      <input className="w-full mt-1 mb-4 px-4 py-3 bg-white border-2 border-purple-300 rounded-xl focus:border-purple-500 outline-none" placeholder="Enter Your Email" />

      <label className="text-purple-600 font-semibold text-sm">Password</label>
      <div className="relative mt-1 mb-4">
        <input type="password" className="w-full px-4 py-3 bg-white border-2 border-purple-300 rounded-xl pr-12 outline-none" placeholder="Enter Your Password" />
        <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 cursor-pointer" />
      </div>

      <div className="flex justify-between items-center mb-6">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" className="w-4 h-4 rounded accent-purple-500" /> Ingat Saya
        </label>
        <a href="#" className="text-sm text-slate-500 hover:text-purple-600">Lupa kata sandi?</a>
      </div>

      <button className="w-full py-3 bg-gradient-to-r from-cyan-100 to-blue-100 text-purple-600 font-semibold rounded-xl hover:from-cyan-200 hover:to-blue-200 mb-6">
        Login
      </button>

      <div className="flex items-center gap-3 mb-6">
        <hr className="flex-1 border-slate-300" />
        <span className="text-slate-400 text-sm">or continue with</span>
        <hr className="flex-1 border-slate-300" />
      </div>

      <div className="flex gap-3 mb-6">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 text-sm font-medium">
          🇬 Google
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-300 rounded-xl bg-white hover:bg-slate-50 text-sm font-medium">
          🍎 Apple
        </button>
      </div>

      <p className="text-center text-slate-500 text-sm">
        Don't have an account? <a href="/register" className="text-indigo-600 font-semibold hover:underline">Sign up</a>
      </p>
    </div>

    <div className="flex justify-between text-slate-400 text-xs">
      <span>Copyright c 2025 FinTrace</span>
      <span>Privacy Policy</span>
    </div>
  </div>
</div>
```

---

### REGISTER PAGE (`/register`) — BUILD FROM FIGMA

**Layout:** MIRRORED Login — form LEFT, hero RIGHT

```
Left (48%) → same gradient bg → "Register Here" title → same form fields → "or register with" → "Already have an account? Login"
Right (52%) → same dark navy hero → large FT logo → same tagline
```

---

### LANDING PAGE (`/`) — FROM MAGICPATTERNS (complete)

Keep existing MagicPatterns code. Sections:
1. Hero: "Track Every Transaction / Master Your Finance" + e-wallet logos (GoPay, OVO, DANA, ShopeePay, LinkAja, BRI, Livin', BCA, BNI)
2. Stats: 100K+ Users | 1M+ Transactions | 15+ Platforms | 5.0 Rating
3. Articles preview (3 cards) + "View All" → `/articles`
4. Features (6 cards)
5. CTA banner
6. Footer

---

### ARTICLES PAGE (`/articles`) — FROM MAGICPATTERNS (complete)

Layout: article grid (left) + sidebar (right)
- Search + sort + category tabs (pill buttons)
- Article cards: image + category badge + title + excerpt + author/date/readtime
- Sidebar: Popular Articles + Categories with count + Newsletter signup
- Pagination

---

### ARTICLE DETAIL (`/articles/:id`) — FROM MAGICPATTERNS (complete)

- Hero image (full width, darkened)
- Breadcrumb: Home › Articles › Category › Title
- Article content with rich formatting (h2, h3, ul, blockquote)
- Social share buttons (Facebook/Twitter/LinkedIn/WhatsApp)
- Sticky sidebar: Table of Contents + Related Articles + CTA box
- "You Might Also Like" grid at bottom

---

### PRODUCT CATALOG (`/courses`) — FROM MAGICPATTERNS + FIGMA UPDATE

Layout: Filter sidebar (280px) + Products grid (2 columns from Figma)

Filter sidebar cards:
- Categories (checkboxes: All Categories, Courses, Consultation, Premium)
- Rating (⭐⭐⭐⭐⭐ 5.0 | ⭐⭐⭐⭐ 4.0+ | ⭐⭐⭐ 3.0+)
- Level (Beginner, Intermediate, Advance)

Product card (from Figma):
- Full image top (no icon placeholder)
- Category badge + star rating + review count
- Title + description
- Meta: modules + duration + level icons
- Price (purple) + cart icon button (dark, rounded)
- Pagination: ← Previous | 1 2 3 4 | Next →

---

### PRODUCT DETAIL (`/courses/:id`) — FROM MAGICPATTERNS + FIGMA

Layout: Left content + Right sticky purchase box

Right purchase box (from Figma):
- "Bestseller" badge (top)
- Title (large)
- ⭐⭐⭐⭐⭐ rating + review count
- Price: Rp 299K (large) + Rp 499K strikethrough + "Save 40%" green badge
- Short description
- Meta grid: 12 Modules | 8 Hours | Beginner Level | Certificate
- "What's Included" bullet list
- [Cart icon button] + [Buy Now outline button]

Tabs below: Description | Curriculum | Reviews | FAQ
- Description: "About This Course" + "What You'll Learn" bullets + "Who This Course Is For" + Instructor card
- Bottom: "You Might Also Like" (3 product cards)
- Footer: © 2025 FinTrace. All Rights Reserved.

---

### CART PAGE (`/cart`) — FROM MAGICPATTERNS + FIGMA UPDATE

**Public version (not logged in):** Show info banner "Anda akan diarahkan ke login page jika ingin melanjutkan pembayaran"

**Logged in version:**
Left: cart items list
  - [thumbnail] Product name + instructor/type
  - Price (purple) + "Hapus" (red text, no icon)

Right sidebar: "Ringkasan Belanja"
  - Subtotal Harga (N Item): Rp X
  - Diskon Promo: -Rp 0 (green)
  - Biaya Layanan/Admin: Rp 5.000
  - "Punya Kode Promo?" → input + "Terapkan" green button
  - Total Pembayaran: Rp X (purple, large, bold)
  - [LANJUTKAN KE PEMBAYARAN] dark purple gradient full width button
  - "🔒 Pembayaran Aman | 💰 Jaminan Uang Kembali 30 Hari"

Footer: About US | Features | Pricing | Blog | Support | Privacy Policy | Terms of Service

---

### CHECKOUT/PAYMENT PAGE (`/checkout`) — BUILD FROM FIGMA

**Header:** UserHeader
**Breadcrumb:** Home › Financial Courses › Personal Finance Mastery › Cart › Checkout

```
Title: "Langkah Terakhir Pembayaran"
Subtitle: "Selesaikan pembayaran Anda dalam waktu 24 jam."

Layout: Left form (60%) + Right summary (40%)

LEFT - White card:
  "1. Pilih Metode Pembayaran"
  "Kami mendukung pembayaran via E-Wallet, Virtual Account, dan Transfer Bank."

  "E-Wallet" (purple label)
  Radio rows (bordered, rounded-xl each):
    ▣ GoPay - "Pembayaran instan, cepat & mudah."
    ▣ OVO - "Bayar via nomor telepon terdaftar OVO."

  "Virtual Account / Transfer Bank" (purple label)
  Radio rows:
    🏦 BCA Virtual Account - "Kode VA akan dikirim via email."
    🏦 Mandiri Virtual Account - "Pembayaran via Livin' by Mandiri."

  "2. Kontak & Informasi"
  Info box (gray bg):
    Email: user.example@mail.com
    Nomor HP: +62 812-3456-7890
    Note text

  "Semua transaksi diamankan dengan enkripsi 256-bit."

RIGHT - White card:
  "Ringkasan Pesanan"
  [thumb] Personal Finance Mastery - Kursus (Lifetime Access) - Rp 299.000 (purple)
  [thumb] Investment for Beginners - E-book (Digital Download) - Rp 99.000 (purple)
  ---
  Subtotal Harga              Rp 398.000
  Diskon (Kode: FINTRA)       -Rp 25.000 (green)
  Biaya Layanan/Admin         Rp 5.000
  ---
  Total Tagihan Akhir         Rp 403.000 (purple bold large)
  *Note about admin fee

  [KONFIRMASI PEMBAYARAN] dark purple full width rounded-xl button
  "Dengan mengklik konfirmasi, Anda menyetujui Syarat dan Ketentuan FinTrace."

Footer: © 2025 FinTrace. All Rights Reserved.
```

---

### TRANSACTION/PURCHASE HISTORY (`/purchases`) — BUILD FROM FIGMA

**Header:** UserHeader
```
Title: "Transaction History"
Subtitle: "Lihat semua transaksi pembelian Anda"

Filter tabs: [Semua] [Selesai] [Belum Dibayar] [Menunggu] [Gagal]

Each transaction card (white, rounded-2xl):
  Top row: TRX-2024-001 | [✅ Selesai badge] | Rp 774.780 (purple, right) | Kartu Kredit (right below)
  Date: 15 Januari 2024
  "Produk:"
  • Personal Finance Mastery
  • Investasi Saham untuk Pemula
  Action buttons (by status):
    Selesai → [↓ Download Invoice] + [Lihat Detail]
    Belum Dibayar → [Selesaikan Pembayaran]
    Menunggu → [Lihat Detail]
    Gagal → no buttons

Status badge colors:
  ✅ Selesai → emerald green
  ⏰ Menunggu → amber yellow
  📋 Belum Dibayar → orange
  ❌ Gagal → red
```

---

### USER FINANCIAL DASHBOARD (`/dashboard`) — FROM MAGICPATTERNS (complete)

**Header:** UserHeader
Keep existing Dashboard.tsx. Layout:
- Stats cards: Total Saldo | Pengeluaran Bulan Ini | Tabungan | Target Tercapai
- Transaksi Terbaru table + "Lihat Semua" button
- Budget Tracking with color-coded progress bars (green/yellow/red)
- Target Keuangan (Dana Darurat, Liburan Bali, Laptop Baru) with progress bars
- Rekomendasi Belajar articles + "Lihat Semua Artikel"

---

### ADMIN DASHBOARD (`/admin`) — BUILD FROM FIGMA

**Header:** AdminHeader
**Left sidebar (fixed 240px):**
```
Sidebar toggle icon (□□)
[Dashboard] ← active (purple bg)
Kelola Pengguna
Kelola Transaksi
Kelola Artikel
Kelola Produk
Feedbacks
Logout
```

**Main content:**
```
"Hello, Nayla." (gradient-text, 3xl bold)

Stats row (4 cards with colored icons):
  👤 Total Users       1.000.000
  🛡️ Saled Product    500.000
  🛡️ Transaction Track 1.500.000
  👤 Article Posted    150.000

Two column layout:

LEFT (60%):
  "Users & Advisors Growth (%)" - BarChart (recharts)
  X-axis: 2021 2022 2023 2024 2025
  Two bars per year: Users (indigo) + Advisors (pink/salmon)
  Data:
    2021: users=91, advisors=47.55
    2022: users=23.36, advisors=15.79
    2023: users=97.07, advisors=90.47
    2024: users=98.24, advisors=29.61
    2025: users=81.34, advisors=29.22

  "Recent Activities" (with clock icon)
  Timeline list:
    📄 New Article Published
       Cara Mengelola Keuangan untuk Mahasiswa
       Sarah Wijaya · 2 hours ago
    📦 Product Added
       Investment Masterclass 2024
       Budi Santoso · 5 hours ago
    👥 New User Registered
       Premium Member
       Rina Kusuma · 1 day ago
    🏆 Course Completed
       Personal Finance Mastery
       Ahmad Rizki · 1 day ago

RIGHT (40%):
  "Penjualan Hari ini" + [Lihat Semua] button
  Sales list:
    [thumb] Invesment For Beginners  E-Book   2.000 (red text)
    [thumb] Personal Finance Mastery Course   2.000 (red text)
    [thumb] Invesment For Beginners  E-Book   2.000 (red text)

  "Top Performing Content" + trending icon
  Ranked list:
    1  Investasi Saham untuk Pemula   Article · 45.2K views  92% ↗ (green)
    2  Personal Finance Mastery       Course · 38.7K views   88% ↗
    3  Crypto Investment Guide        E-Book · 32.1K views   85% ↗
    4  Mengelola Keuangan Keluarga   Article · 28.5K views  79% ↘ (red)
    5  Passive Income Strategies      Course · 25.3K views   76% ↗
```

**Recharts bar chart code:**
```tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { year: '2021', users: 91, advisors: 47.55 },
  { year: '2022', users: 23.36, advisors: 15.79 },
  { year: '2023', users: 97.07, advisors: 90.47 },
  { year: '2024', users: 98.24, advisors: 29.61 },
  { year: '2025', users: 81.34, advisors: 29.22 },
]

<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data} barGap={4}>
    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
    <XAxis dataKey="year" axisLine={false} tickLine={false} />
    <YAxis domain={[0, 100]} axisLine={false} tickLine={false} />
    <Tooltip />
    <Legend />
    <Bar dataKey="users" name="Users" fill="#818cf8" radius={[4,4,0,0]} />
    <Bar dataKey="advisors" name="Advisors" fill="#f9a8d4" radius={[4,4,0,0]} />
  </BarChart>
</ResponsiveContainer>
```

---

### MANAGE ARTICLES (`/admin/articles`) — FROM MAGICPATTERNS (complete)

**Header:** AdminHeader + Sidebar
Table: Judul | Penulis | Kategori (badge) | Status (Published/Draft badge) | Tanggal | Views | Aksi (edit/delete icons)
"+ Tambah Artikel" purple button (top right)
Search bar full width

---

### MANAGE PRODUCTS (`/admin/products`) — FROM MAGICPATTERNS (complete)

**Header:** AdminHeader + Sidebar
Table: Produk | Tipe (badge) | Instruktur | Harga | Siswa | Rating | Status | Aksi
"+ Tambah Produk" purple button (top right)

---

### MANAGE USERS (`/admin/users`) — FROM MAGICPATTERNS (complete)

**Header:** AdminHeader + Sidebar
Stats cards: Total Users | Advisors | Active Users | Inactive
Filter tabs: Semua | Users | Advisors | Admins
Table: Pengguna (avatar+name+email) | Role badge | Status badge | Bergabung | Transaksi | Total Belanja | Aksi (⋮)

---

### MANAGE TRANSACTIONS (`/admin/transactions`) — FROM MAGICPATTERNS (complete)

**Header:** AdminHeader + Sidebar
Stats cards: Total Revenue | Pending | Total Transaksi | Customers
Filter tabs: Semua | Selesai | Pending
Table: ID Transaksi | Customer (name+email) | Produk (bullet list) | Tanggal | Metode | Total | Status badge

---

### PROFILE - USER (`/dashboard/profile`) — BUILD FROM FIGMA

**Header:** AdminHeader (search + notif + profile)

```
"My Profile" + "Manage your account settings and preferences"

[Back] button top right

Profile Hero card (gradient teal to indigo, white text):
  [100px avatar] Name: Nayla Sasha Meliana
                 @naysana1907 (username)
  Badges: [Royal Buyer] [Verified] [Pro Member]
  📅 Joined January 2023  🏢 FinTrace Platform
  [Edit Profile] button (outline, top right of card)

Stats row (4 cards):
  📄 Articles Bought: 30
  📚 Courses Read: 8
  👥 Total Spending: Rp 1M
  ⭐ Avg. Rating: 4.9

Main 3-column layout:

LEFT (wide):
  Personal Information card + Edit button (top right)
    First Name: [Nayla Sasha] Last Name: [Meliana]
    Job Title: [Admin & Content Manager] Department: [Content & Community]
    Bio: [textarea - "Passionate about financial education..."]

  Achievements card:
    [🏆 Top Contributor - Most articles in Q1 2024] (orange)
    [⭐ Student Favorite - Highest rated instructor] (pink/purple)
    [🚀 Early Adopter - Member since Jan 2023] (teal)
    [🚀 Early Adopter - Member since Jan 2023] (teal)

  Preferences & Security card:
    🔔 Email Notifications [toggle ON - purple]
       "Receive updates about your content"
    🛡️ Two-Factor Authentication [toggle OFF]
       "Add an extra layer of security"
    🌐 Language & Region [Change link - purple]
       "English (US) · Jakarta, Indonesia"

RIGHT (narrow):
  Contact Information card:
    👤 Username: Jakarta, Indonesia
    ✉️ Email: naysana1907@gmail.com
    📱 Phone: +62 812 3456 7890
    📍 Location: Jakarta, Indonesia

  Recent Activity card:
    🔵 Published article - Investment Strategies 2024 - right
    🔵 Updated course - Personal Finance Mastery - right
    🟢 Received feedback - 5-star review from student - right
    🔴 Created product - Financial Planning Workbook - right
```

---

### PROFILE - ADMIN (`/admin/profile`) — BUILD FROM FIGMA

**Header:** AdminHeader + Sidebar

Same as user profile but:
- Badges: [Administrator] [Verified] [Pro Member]
- Stats: Articles Written: 127 | Courses Created: 8 | Total Students: 2,456 | Avg Rating: 4.9
- Contact Info and Personal Info in separate cards side by side
- Recent Activity and Preferences on right

---

### ANALYTICS PAGE (`/dashboard/analytics`) — BUILD

- Date range: 7D | 30D | 3M | Custom
- 4 summary cards
- LineChart: Income vs Expense
- PieChart: Spending by Category
- AreaChart: Daily Spending Trend
- BarChart horizontal: Top 5 Categories
- Export PDF button

---

### BUDGET PAGE (`/dashboard/budget`) — BUILD

- Circular progress overall budget
- Category budget cards grid with progress bars
- Color coding: green (safe) / yellow (warning >60%) / red (danger >80%)
- 50/30/20 and 60/30/10 preset buttons
- Monthly history chart

---

### FEEDBACK PAGE (`/dashboard/feedback`) — BUILD

- Star rating 1-5
- Category dropdown
- Textarea
- Optional image upload
- Submit button
- Feedback history table

---

## 🗃️ MOCK DATA

```typescript
// src/data/mockArticles.ts — 10+ articles with all fields
// src/data/mockProducts.ts — 8+ products (courses, consultation, premium, ebook)
// src/data/mockTransactions.ts — 20+ financial transactions
// src/data/mockPurchases.ts — 6 purchase records with different statuses

// Purchase statuses needed: success, pending, failed, 'belum_dibayar'
// Transaction categories: Makanan & Minuman, Transportasi, Hiburan, Belanja, Pemasukan
```

---

## 🔐 AUTH CONTEXT

```typescript
// src/context/AuthContext.tsx
// Mock auth using localStorage key 'fintrace_user'
// Two mock accounts:
//   user: { email: 'user@fintrace.com', role: 'user', fullName: 'Nayla Sasha Meliana' }
//   admin: { email: 'admin@fintrace.com', role: 'admin', fullName: 'Nayla Sasha Meliana' }
// Provide: user, login(), logout(), isAuthenticated, isAdmin
```

---

## 🛒 CART CONTEXT

```typescript
// src/context/CartContext.tsx
// Store in localStorage key 'fintrace_cart'
// Provide: items[], addItem(), removeItem(), clearCart(), totalItems, totalPrice
```

---

## 📋 IMPLEMENTATION ORDER

### Phase 1: Foundation
1. Replace `index.css` with design system above
2. Update `tailwind.config.js`
3. Create `src/types/index.ts`
4. Create mock data files
5. Create utility functions (formatCurrency, formatDate)
6. Create AuthContext + CartContext
7. Setup React Router + App.tsx with header logic

### Phase 2: Shared Components
8. Button, Card, Input, Badge (from MagicPatterns — already done)
9. Build UserHeader
10. Build AdminHeader
11. Build Admin Sidebar

### Phase 3: Already Done (Copy from MagicPatterns)
12. LandingPage ✅
13. ArticlesPage ✅
14. ArticleDetailPage ✅
15. ProductCatalog ✅
16. ProductDetail ✅
17. Dashboard ✅
18. ManageArticles ✅
19. ManageProducts ✅
20. ManageUsers ✅
21. ManageTransactions ✅

### Phase 4: Build New Pages
22. LoginPage (from Figma)
23. RegisterPage (from Figma)
24. CartPage (update existing)
25. CheckoutPage (from Figma)
26. PurchaseHistoryPage (from Figma)
27. AdminDashboardPage (from Figma + recharts)
28. UserProfilePage (from Figma)
29. AdminProfilePage (from Figma)

### Phase 5: Additional Dashboard Pages
30. AnalyticsPage
31. BudgetPage
32. FeedbackPage

### Phase 6: Polish
33. Loading states + skeletons
34. Empty states
35. Responsive fixes
36. Final review

---

## ✅ QUALITY CHECKLIST

Before considering any page complete:
- [ ] Uses `container-1280` class for max-width
- [ ] Uses `bg-white/90 backdrop-blur-sm rounded-2xl` for cards
- [ ] Gradient buttons with `rounded-full`
- [ ] `gradient-text` class for heading highlights
- [ ] Hover effects on interactive elements
- [ ] Responsive on mobile (min-width 375px)
- [ ] TypeScript — no `any` types
- [ ] Loading state implemented
- [ ] Empty state implemented
- [ ] Navigation works correctly

---

## 🚫 STRICT RULES

1. **DO NOT** use inline styles — use Tailwind classes only
2. **DO NOT** hardcode colors — use CSS variables or Tailwind config
3. **DO NOT** create pages without TypeScript interfaces
4. **DO NOT** skip mock data — every page must render with real-looking data
5. **DO NOT** use `any` TypeScript type
6. **ALWAYS** add `hover:` transitions to interactive elements
7. **ALWAYS** use `lucide-react` for icons
8. **ALWAYS** make components reusable when used 2+ times
9. **ALWAYS** handle empty states in lists/tables
10. **KEEP** design consistent — same card/button style across ALL pages
11. **ALWAYS** use `container-1280` wrapper class on page content
12. **NEVER** remove `bg-white/90 backdrop-blur-sm` from cards

---

## 📦 DEPLOYMENT

```bash
npm run build
npm run preview

# Deploy to Vercel:
# Push to GitHub → Connect at vercel.com → Auto-deploy
```

**Live:** `https://workshop-ui-fintrace.vercel.app/`

---

## 🎯 SUCCESS CRITERIA

Project is complete when:
1. All pages implemented and navigable
2. Design consistent across all pages
3. Mock data renders correctly everywhere
4. Auth flow works (login → dashboard/admin, logout → landing)
5. Cart flow works (product → cart → checkout → success)
6. Admin panel fully functional
7. All charts render correctly (recharts)
8. Mobile responsive on all pages
9. Build runs without TypeScript errors
10. Deployed and accessible via live URL

---

*FinTrace - UAS Workshop UI*
*D4 Teknik Informatika - Universitas Airlangga*
*NIM: 434241056 | Muhammad Raka Razzani*
*Last updated: 2025*
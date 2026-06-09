# LAPORAN AKHIR
## WORKSHOP DESAIN UI

**FinTrace**

**MUHAMMAD RAKA RAZZANI**  
**434241056**

**FAKULTAS VOKASI**  
**UNIVERSITAS AIRLANGGA**

**2026**

---

## DAFTAR ISI

1. [PENDAHULUAN](#bab-1-pendahuluan)
2. [DESAIN SISTEM](#bab-2-desain-sistem)
3. [IMPLEMENTASI](#bab-3-implementasi)
4. [PENGUJIAN SISTEM](#bab-4-pengujian-sistem)
5. [KESIMPULAN](#bab-5-kesimpulan)
6. [LAMPIRAN](#lampiran)

---

## BAB 1
## PENDAHULUAN

Perkembangan teknologi digital yang pesat telah mengubah cara masyarakat Indonesia dalam bertransaksi sehari-hari. Penggunaan e-wallet dan mobile banking kini menjadi bagian yang tidak terpisahkan dari kehidupan modern, khususnya di kalangan generasi muda. Namun di balik kemudahan tersebut, muncul tantangan baru berupa rendahnya literasi keuangan digital yang menyebabkan banyak pengguna kesulitan dalam melacak dan mengelola keuangan mereka secara efektif.

Berangkat dari permasalahan tersebut, Workshop Desain UI ini berfokus pada implementasi antarmuka berbasis web untuk aplikasi **FinTrace** — sebuah platform manajemen keuangan digital yang dirancang untuk membantu pengguna melacak transaksi, merencanakan anggaran, sekaligus meningkatkan literasi finansial mereka melalui konten edukasi yang terintegrasi.

Laporan ini mendokumentasikan seluruh proses implementasi desain antarmuka FinTrace, mulai dari perencanaan, pengembangan tampilan halaman, hingga pengujian sistem secara menyeluruh.

### Deskripsi Topik

FinTrace adalah platform manajemen keuangan digital dengan prinsip *user-centered design* dan *financial empowerment* yang dirancang untuk mahasiswa, pekerja muda, UMKM, dan masyarakat umum dalam melacak, mengelola, serta meningkatkan literasi keuangan mereka.

Fitur utama FinTrace mencakup:
- Pelacakan transaksi keuangan secara manual
- Analitik keuangan visual dengan grafik interaktif
- Perencanaan budget dengan monitoring progress
- Marketplace edukasi finansial (kursus online, e-book, konsultasi)
- Konten artikel edukatif tentang keuangan
- Panel admin untuk manajemen konten dan pengguna

### Scope Project

Scope Project dari FinTrace mencakup implementasi antarmuka web untuk:

**Halaman Publik** (akses tanpa login)
- Landing page — Hero section, fitur unggulan, preview artikel & produk
- Arsip artikel — Grid artikel dengan search, filter kategori, dan pagination
- Detail artikel — Konten lengkap dengan table of contents dan artikel terkait
- Katalog produk — Grid kursus/produk dengan filter dan sorting
- Detail produk — Informasi lengkap dengan kurikulum dan tombol pembelian
- Keranjang belanja — Daftar produk yang akan dibeli

**Halaman Pengguna** (akses setelah login)
- Dashboard — Stats cards, grafik pengeluaran, transaksi terbaru
- Transaksi — History transaksi dengan filter dan search
- Analytics — Visualisasi data keuangan dengan grafik
- Budget — Monitoring budget dengan progress bar per kategori
- Kursus Saya — Daftar kursus yang telah dibeli
- Profil — Edit profil dan pengaturan akun
- Feedback — Form ulasan dan masukan

**Halaman Administrator** (akses admin)
- Dashboard Admin — Stats overview dan recent activities
- Kelola Artikel — CRUD artikel platform
- Kelola Produk — CRUD produk marketplace
- Kelola Pengguna — Manajemen akun pengguna
- Kelola Transaksi — Monitoring transaksi platform
- Kelola Feedback — Review masukan pengguna
- Profil Admin — Pengaturan akun administrator

**Halaman Autentikasi**
- Login — Form login dengan email/password dan opsi social login
- Register — Form pendaftaran akun baru

**Halaman Pembayaran**
- Checkout — Form pembayaran dengan pilihan metode
- Payment Success — Halaman konfirmasi pembayaran berhasil
- Purchase History — Daftar riwayat pembelian

### User Story

User story menggambarkan kebutuhan fungsional dari sudut pandang pengguna akhir:

1. **Sebagai financial advisor**, saya ingin membagikan pengetahuan keuangan melalui kursus dan konsultasi agar bisa membantu banyak orang mengelola keuangan dengan lebih baik.

2. **Sebagai mahasiswa**, saya ingin melacak pengeluaran uang saku agar bisa mengatur keuangan dengan lebih teratur dan tidak boros.

3. **Sebagai pekerja muda**, saya ingin memahami ke mana uang gaji saya pergi setiap bulan dan mulai merencanakan tabungan serta investasi untuk masa depan.

4. **Sebagai pemilik USKM**, saya ingin memisahkan transaksi bisnis dan pribadi agar laporan keuangan usaha saya lebih jelas dan mudah dipantau.

5. **Sebagai masyarakat umum**, saya ingin belajar tentang investasi dan manajemen keuangan melalui artikel dan kursus yang mudah dipahami.

6. **Sebagai pengguna**, saya ingin bisa menambahkan transaksi cash secara manual agar semua pengeluaran saya tercatat lengkap.

7. **Sebagai administrator**, saya ingin mengelola seluruh konten artikel dan produk di platform dengan mudah agar informasi yang tersedia selalu up-to-date.

8. **Sebagai administrator**, saya ingin memonitor semua transaksi pengguna secara real-time agar dapat mendeteksi masalah dengan cepat.

### Use Case

**Aktor yang terlibat:**
- Guest (Pengunjung tanpa login)
- User (Pengguna terdaftar)
- Administrator (Admin platform)

**Daftar Use Case Utama:**

| Kode | Nama Use Case | Aktor | Deskripsi |
|------|---------------|-------|-----------|
| UC-01 | Melihat Landing Page | Guest | Melihat halaman utama dan fitur FinTrace |
| UC-02 | Membaca Arsip Artikel | Guest/User | Mencari dan membaca artikel edukatif |
| UC-03 | Membaca Detail Artikel | Guest/User | Membaca konten lengkap artikel |
| UC-04 | Melihat Katalog Produk | Guest/User | Melihat list kursus dan produk |
| UC-05 | Melihat Detail Produk | Guest/User | Melihat informasi lengkap produk |
| UC-06 | Menambah Produk ke Keranjang | Guest/User | Menambahkan produk ke cart |
| UC-07 | Login | Guest | Masuk ke akun yang sudah terdaftar |
| UC-08 | Register | Guest | Membuat akun baru |
| UC-09 | Melakukan Pembayaran | User | Menyelesaikan proses pembelian |
| UC-10 | Melihat Dashboard | User | Melihat ringkasan keuangan |
| UC-11 | Mengelola Transaksi | User | Menambah/edit/hapus transaksi |
| UC-12 | Melihat Analytics | User | Melihat visualisasi data keuangan |
| UC-13 | Mengelola Budget | User | Set dan monitor budget |
| UC-14 | Melihat Kursus Saya | User | Melihat kursus yang dibeli |
| UC-15 | Mengubah Profil | User | Edit informasi profil |
| UC-16 | Memberikan Feedback | User | Mengirim ulasan platform |
| UC-17 | Melihat Dashboard Admin | Admin | Monitoring overview platform |
| UC-18 | Kelola Artikel | Admin | CRUD artikel platform |
| UC-19 | Kelola Produk | Admin | CRUD produk marketplace |
| UC-20 | Kelola Pengguna | Admin | Manajemen akun pengguna |
| UC-21 | Kelola Transaksi | Admin | Monitoring transaksi |
| UC-22 | Kelola Feedback | Admin | Review masukan pengguna |

---

## BAB 2
## DESAIN SISTEM

Bab ini menjelaskan implementasi desain sistem FinTrace secara menyeluruh, mulai dari teknologi yang digunakan, arsitektur sistem, hingga desain antarmuka. Seluruh desain dikembangkan dengan mengacu pada prinsip *user-centered design* dengan mengutamakan kemudahan penggunaan, konsistensi visual, dan aksesibilitas.

### Teknologi yang Digunakan

**Frontend Framework & Build Tool:**
- React 18.3 — Library JavaScript untuk membangun antarmuka pengguna
- Vite 5.2 — Build tool yang cepat untuk development dan production
- TypeScript 5.5 — Superset JavaScript untuk type safety

**Styling & UI:**
- Tailwind CSS 3.4 — Utility-first CSS framework
- Radix UI — Komponen UI headless yang dapat di-customize
- Lucide React — Library icon yang konsisten
- Recharts 3.8 — Library untuk grafik/charts

**Routing & State Management:**
- React Router DOM 6.26 — Routing dan navigasi
- React Context API — State management global (Auth, Cart, Products)
- React Hook Form 7.75 — Form management
- Zod 4.4 — Schema validation

**Notifications & Utilities:**
- React Hot Toast 2.6 — Toast notifications
- Date Fns 4.1 — Date manipulation
- Axios 1.16 — HTTP client (untuk future API integration)

### Arsitektur Sistem

**Struktur Project:**
```
src/
├── components/
│   ├── layout/        # Layout components (Header, Sidebar, Footer)
│   ├── ui/            # Reusable UI components
│   ├── features/      # Feature-specific components
│   └── icons/         # Custom icon components
├── pages/
│   ├── public/        # Public pages (Landing, Articles, Products)
│   ├── auth/          # Authentication pages
│   ├── user/          # User dashboard pages
│   ├── admin/         # Admin panel pages
│   └── payment/       # Payment & checkout pages
├── context/           # Context providers (Auth, Cart, Products)
├── data/              # Mock data (articles, products, transactions)
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── styles/            # Global styles (Tailwind config)
```

**Sistem Routing:**

Aplikasi menggunakan `react-router-dom` dengan `createBrowserRouter` untuk routing. Seluruh route dibungkus dalam `AppLayout` yang secara dinamis menampilkan header/sidebar yang sesuai.

**Public Routes** (tanpa authentication):
- `/` — Landing page
- `/articles` — Arsip artikel
- `/articles/:slug` — Detail artikel
- `/courses` — Katalog produk/kursus
- `/courses/:slug` — Detail produk
- `/cart` — Keranjang belanja

**Auth Routes** (tanpa header/footer):
- `/login` — Halaman login
- `/register` — Halaman pendaftaran

**User Routes** (dengan UserHeader):
- `/dashboard` — Dashboard utama
- `/transactions` — History transaksi
- `/analytics` — Analitik keuangan
- `/budget` — Budget planning
- `/my-courses` — Kursus yang dibeli
- `/profile` — Profil pengguna
- `/feedback` — Form feedback
- `/user/articles` — Versi user artikel (setelah login)
- `/user/articles/:slug` — Detail artikel user
- `/user/courses` — Versi user kursus (setelah login)
- `/user/courses/:slug` — Detail kursus user

**Payment Routes**:
- `/checkout` — Halaman pembayaran
- `/checkout/success` — Konfirmasi pembayaran berhasil
- `/purchases` — History pembelian

**Admin Routes** (dengan AdminHeader + AdminSidebar):
- `/admin/dashboard` — Dashboard admin
- `/admin/articles` — Kelola artikel
- `/admin/products` — Kelola produk
- `/admin/users` — Kelola pengguna
- `/admin/transactions` — Kelola transaksi
- `/admin/feedbacks` — Kelola feedback
- `/admin/profile` — Profil admin

**Sistem Layout Dinamis:**

`AppLayout` component menentukan layout berdasarkan route saat ini:

```typescript
const isAuth = pathname === '/login' || pathname === '/register';
const isAdmin = pathname.startsWith('/admin');
const isUserPrivate = pathname.startsWith('/dashboard') || 
  pathname.startsWith('/transactions') || 
  pathname.startsWith('/analytics') ||
  pathname.startsWith('/budget') ||
  pathname.startsWith('/my-courses') ||
  pathname.startsWith('/profile') ||
  pathname.startsWith('/feedback') ||
  pathname.startsWith('/checkout') ||
  pathname.startsWith('/purchases') ||
  pathname.startsWith('/user/');
```

**Sistem Authentication:**

Authentication menggunakan `AuthContext` dengan mock data yang disimpan di localStorage:
- Mock user: `user@fintrace.com` (role: user)
- Mock admin: `admin@fintrace.com` (role: admin)
- Redirect target disimpan di localStorage untuk guest checkout flow

**Sistem Keranjang (Cart):**

`CartContext` mengelola state keranjang dengan persistensi ke localStorage:
- `addItem()` — Menambah produk ke keranjang
- `removeItem()` — Menghapus produk dari keranjang
- `updateQuantity()` — Update jumlah produk
- `clearCart()` — Kosongkan keranjang setelah pembayaran

### Desain Visual

**Palet Warna:**

```css
/* Primary Colors */
--color-primary: #6366f1 (Indigo)
--color-primary-dark: #4f46e5

/* Secondary Colors */
--color-secondary: #8b5cf6 (Purple)
--color-accent: #06b6d4 (Cyan)

/* Background Gradient */
background: linear-gradient(135deg, #e0f2fe 0%, #fae8ff 50%, #fce7f3 100%)
```

**Komponen UI:**

- **Cards** — `bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm`
- **Buttons Primary** — `bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full`
- **Buttons Secondary (Cyan)** — `bg-cyan-500 hover:bg-cyan-600 text-white rounded-full`
- **Container** — `container-1280` enforce max-width 1280px

**Sistem Ikon:**

Seluruh icon menggunakan `lucide-react` untuk konsistensi visual.

**Animasi Transisi:**

- Page transition menggunakan CSS keyframes dengan `PageTransition` component
- Animasi yang tersedia: `slide`, `scale`, `fade`
- Animasi transition: `cubic-bezier(0.4, 0, 0.2, 1)` untuk ease-in-out

### Mock Data

Seluruh data menggunakan mock data yang didefinisikan di:
- `src/data/mockArticles.ts` — 6 artikel edukatif
- `src/data/mockProducts.ts` — 6 produk (kursus, konsultasi, premium)
- `src/data/mockTransactions.ts` — Transaksi untuk testing
- `src/data/mockUsers.ts` — Data pengguna untuk testing

---

## BAB 3
## IMPLEMENTASI

Bab ini menjelaskan implementasi detail setiap halaman yang telah dibangun dalam aplikasi FinTrace.

### Halaman Publik

#### 1. Landing Page (`/`)

Landing page adalah halaman pertama yang dilihat pengunjung.

**Komponen Utama:**
- Navbar dengan logo, menu navigasi (Home, Articles, Courses, About), dan tombol Login/Register
- Hero section dengan headline "Track Your Financial Journey", subheadline, dan CTA buttons
- Stats section menampilkan key metrics
- Features section dengan 6 fitur unggulan
- Marketplace preview (4 produk unggulan)
- Articles preview (3 artikel terbaru)
- CTA section dengan gradient background
- Footer dengan navigasi dan copyright

**Implementasi:**
- Menggunakan `LandingPage.tsx`
- Mock data untuk stats dan features
- Responsive grid layout untuk mobile dan desktop

#### 2. Arsip Artikel (`/articles`)

Halaman menampilkan seluruh artikel edukatif di platform.

**Komponen Utama:**
- Hero section dengan judul "Financial Tips & Insights"
- Search bar untuk mencari artikel
- Category tabs (All, Budgeting, Investment, Saving Tips, E-Wallet Guide, Debt Management)
- Grid artikel cards dengan thumbnail, badge kategori, meta info, judul, excerpt
- Pagination untuk navigasi halaman

**Implementasi:**
- Menggunakan `ArticlesPage.tsx`
- Data dari `mockArticles.ts`
- Filter berdasarkan kategori
- Responsive grid (2 kolom di desktop, 1 di mobile)

#### 3. Detail Artikel (`/articles/:slug`)

Halaman detail untuk membaca konten artikel lengkap.

**Komponen Utama:**
- Breadcrumb navigasi
- Hero image (featured image)
- Article header (badge, judul, author info, metadata)
- Article content dengan formatting lengkap
- Tags dan share buttons
- Related articles section di bagian bawah

**Implementasi:**
- Menggunakan `ArticleDetailPage.tsx`
- Route parameter `:slug` untuk mengambil artikel spesifik
- Auto-scroll to top saat mount

#### 4. Katalog Produk (`/courses`)

Halaman marketplace untuk kursus dan produk finansial.

**Komponen Utama:**
- Hero section "Financial Courses & Services"
- Search dan sort bar
- Category tabs (All, Courses, Consultation, Premium, E-Books)
- Filter sidebar (kategori, price range, rating, level)
- Grid product cards (3 kolom desktop)

**Product Card:**
- Badge (Bestseller/New/Hot)
- Product image/thumbnail
- Category badge
- Rating dengan jumlah review
- Judul dan deskripsi singkat
- Meta info (modules, duration, level)
- Harga dengan sale price jika ada diskon
- Tombol "Add to Cart"

**Implementasi:**
- Menggunakan `ProductsPage.tsx`
- Data dari `mockProducts.ts`
- Filter dan sorting aktif
- Add to Cart menggunakan `CartContext`

#### 5. Detail Produk (`/courses/:slug`)

Halaman detail produk dengan informasi lengkap untuk keputusan pembelian.

**Komponen Utama:**
- Breadcrumb navigasi
- Layout dua kolom (kiri: gambar, kanan: informasi sticky)
- Product header (badge, judul, rating, sales count)
- Price section dengan discount badge
- Tombol "Buy Now" dan "Add to Cart"
- Section "What You'll Learn" dengan checklist
- Section "Curriculum" dengan list modul (lessons dan duration)
- Instructor section dengan avatar dan bio
- Sidebar dengan ringkasan purchase info

**Implementasi:**
- Menggunakan `ProductDetailPage.tsx`
- Route parameter `:slug`
- Add to Cart dan Buy Now menggunakan `CartContext`
- Guest checkout flow dengan redirect ke login

#### 6. Keranjang (`/cart`)

Halaman keranjang belanja.

**Komponen Utama:**
- Page title "Shopping Cart"
- Cart items list dengan gambar, nama, kategori, harga
- Tombol remove item
- Quantity controls (+/- buttons)
- Order summary sidebar
- Tombol "Lanjut ke Pembayaran"
- Empty state jika cart kosong

**Implementasi:**
- Menggunakan `CartPage.tsx`
- State dari `CartContext`
- PPN 11% dihitung otomatis
- Redirect ke login jika guest

### Halaman Autentikasi

#### 7. Login (`/login`)

Halaman login untuk masuk ke akun.

**Komponen Utama:**
- Layout dua kolom (kiri: background image dengan logo, kanan: form)
- Form dengan email dan password input
- Toggle show/hide password
- Checkbox "Ingat Saya"
- Link "Lupa kata sandi?"
- Primary button "Login"
- Social login buttons (Google, Apple) dengan logo
- Link ke Register di bagian bawah

**Implementasi:**
- Menggunakan `LoginPage.tsx`
- `PageTransition` untuk animasi slide
- Authentication via `AuthContext`
- Redirect target flow dari localStorage
- Auto redirect jika sudah login

#### 8. Register (`/register`)

Halaman pendaftaran akun baru.

**Komponen Utama:**
- Layout mirip login (background image di kiri)
- Form dengan fields: Full Name, Email/Phone, Password
- Toggle show/hide password
- Checkbox "I agree to terms"
- Primary button "Register"
- Social login buttons (Google, Apple)
- Link ke Login di bagian bawah

**Implementasi:**
- Menggunakan `RegisterPage.tsx`
- `PageTransition` untuk animasi
- Auto redirect jika sudah login

### Halaman Pembayaran

#### 9. Checkout (`/checkout`)

Halaman pembayaran untuk menyelesaikan transaksi.

**Komponen Utama:**
- Page title "Payment Checkout"
- Payment method selection:
  - Kartu Kredit/Debit (Visa, Mastercard, JCB)
  - E-Wallet (GoPay, OVO, DANA, ShopeePay)
  - Transfer Bank (BCA, Mandiri, BNI, BRI)
- Payment details form berdasarkan metode
- Order summary sidebar dengan list item
- Subtotal, PPN 11%, dan total
- Tombol "Bayar Sekarang" dengan loading state
- Security indicators

**Implementasi:**
- Menggunakan `CheckoutPage.tsx`
- State dari `CartContext`
- Auto redirect jika tidak authenticated
- Auto redirect jika cart kosong
- `clearCart()` setelah pembayaran berhasil

#### 10. Payment Success (`/checkout/success`)

Halaman konfirmasi pembayaran berhasil.

**Komponen Utama:**
- Success icon dengan animasi bounce
- Headline "Pembayaran Berhasil!"
- Order summary card:
  - Order ID (fixed, tidak glitching)
  - Tanggal dan waktu
  - List produk yang dibeli
  - Total pembayaran
- Tombol "Download Invoice" dan "Lihat Riwayat Pembelian"
- Next steps section (Mulai Belajar, Belanja Lagi)
- Help section dengan links ke support

**Implementasi:**
- Menggunakan `PaymentSuccessPage.tsx`
- Order ID menggunakan `useState` agar stable (tidak re-generate)
- `clearCart()` pada mount
- Mock data untuk order details

#### 11. Purchase History (`/purchases`)

Halaman riwayat pembelian pengguna.

**Komponen Utama:**
- Page title "Purchase History"
- Filter bar (status, date range)
- Transaction list dengan cards/rows:
  - Order ID
  - Tanggal
  - Produk dengan thumbnail
  - Jumlah pembayaran
  - Metode pembayaran
  - Status badge (Success, Pending, Failed)
  - Tombol "View Details" dan "Download Invoice"

**Implementasi:**
- Menggunakan `PurchaseHistoryPage.tsx`
- Data dari `mockTransactions.ts` dan `mockProducts.ts`

### Halaman Dashboard User

#### 12. Dashboard (`/dashboard`)

Halaman utama dashboard pengguna.

**Komponen Utama:**
- Welcome message dengan user avatar
- Stats cards (4 kartu):
  - Total Balance
  - Monthly Spending
  - Monthly Income
  - Savings
- Spending chart dengan Recharts (bar/line chart)
- Recent transactions table (10 data terbaru)
- Quick action buttons

**Implementasi:**
- Menggunakan `DashboardPage.tsx`
- Chart dari `SpendingChart` component
- Data dari `mockTransactions.ts`

#### 13. Transactions (`/transactions`)

Halaman history transaksi.

**Komponen Utama:**
- Page title "Transaction History"
- Filter bar (date range, category, search)
- Transaction table dengan columns:
  - Date
  - Description
  - Category
  - Amount (income/expense dengan color)
  - Status
- Summary cards di atas (Total Income, Total Expense, Net)

**Implementasi:**
- Menggunakan `TransactionsPage.tsx`
- Data dari `mockTransactions.ts`

#### 14. Analytics (`/analytics`)

Halaman analitik keuangan visual.

**Komponen Utama:**
- Page title "Financial Analytics"
- Spending by category chart (pie chart)
- Monthly spending trend (line chart)
- Income vs Expense comparison (bar chart)
- Budget utilization (progress bars)

**Implementasi:**
- Menggunakan `AnalyticsPage.tsx`
- Charts dengan Recharts
- Data dari `mockTransactions.ts`

#### 15. Budget (`/budget`)

Halaman perencanaan dan monitoring budget.

**Komponen Utama:**
- Page title "Budget Planning"
- Summary card (Total Budget, Used, Remaining)
- Budget categories list:
  - Nama kategori
  - Budget amount
  - Used amount
  - Progress bar (color-coded: green/on track, yellow/warning, red/over)
  - Tombol edit
- Form "Add New Budget Category"

**Implementasi:**
- Menggunakan `BudgetPage.tsx`
- Data dari mock budget data
- Color-coded progress bars

#### 16. My Courses (`/my-courses`)

Halaman kursus yang telah dibeli pengguna.

**Komponen Utama:**
- Page title "My Courses"
- Grid course cards (dari purchase history)
- Progress indicator per kursus
- Tombol "Continue Learning"
- Filter (In Progress, Completed, All)

**Implementasi:**
- Menggunakan `MyCoursesPage.tsx`
- Data dari mock purchases

#### 17. Profile (`/profile`)

Halaman profil dan pengaturan akun.

**Komponen Utama (Tab-based):**
- **Profile Tab** — Avatar, nama, email, telepon, bio
- **Security Tab** — Ganti password, 2FA toggle, active sessions
- **Notifications Tab** — Toggle email dan push notifications
- **Preferences Tab** — Bahasa, mata uang, tema

**Implementasi:**
- Menggunakan `ProfilePage.tsx`
- Tabs dari Radix UI
- Data dari `AuthContext`

#### 18. Feedback (`/feedback`)

Halaman untuk mengirim masukan.

**Komponen Utama:**
- Page title "Share Your Feedback"
- Rating stars (1-5) dengan label
- Feedback form:
  - Category dropdown (Bug, Feature, General, Complaint)
  - Textarea untuk isi feedback
  - Upload screenshot (opsional)
  - Submit button
- Feedback history list dengan status

**Implementasi:**
- Menggunakan `FeedbackPage.tsx`
- Form dengan React Hook Form

### Halaman User-Only (Private Content)

#### 19. User Articles (`/user/articles`)

Versi khusus user untuk arsip artikel.

**Komponen:**
- Sama dengan public articles page
- Tambahan header UserHeader
- Navigasi khusus user di header

**Implementasi:**
- Menggunakan `UserArticlesPage.tsx`

#### 20. User Products (`/user/courses`)

Versi khusus user untuk katalog produk.

**Komponen:**
- Sama dengan public products page
- Tambahan header UserHeader

**Implementasi:**
- Menggunakan `UserProductsPage.tsx`

### Halaman Administrator

#### 21. Admin Dashboard (`/admin/dashboard`)

Dashboard utama untuk admin.

**Layout:**
- AdminSidebar di kiri (240px fixed)
- Konten utama di kanan

**Komponen Utama:**
- Header dengan admin avatar
- Stats cards (4 kartu):
  - Total Users (1,000,000)
  - Saled Product (500,000)
  - Transaction Track (1,500,000)
  - Article Posted (150,000)
- Growth Chart ("Users & Advisors Growth (%)") dengan bar chart
- Today's Sales card (list penjualan hari ini)
- Recent Activities list
- Top Performing Content list

**Implementasi:**
- Menggunakan `AdminDashboardPage.tsx`
- Chart dari `SpendingChart` component
- Stats cards dari `StatCard` component
- Layout grid responsive (Growth Chart 2/3, Today's Sales 1/3)

#### 22. Manage Articles (`/admin/articles`)

Halaman kelola artikel.

**Komponen Utama:**
- Page title "Manage Articles"
- Action bar dengan tombol "Add New Article"
- Search dan filter bar
- Articles table dengan columns:
  - Thumbnail
  - Judul
  - Penulis
  - Kategori
  - Tanggal
  - Views
  - Status badge
  - Actions (Edit/Delete/View)
- Modal "Add Article" untuk form tambah artikel

**Implementasi:**
- Menggunakan `ManageArticlesPage.tsx`
- Data dari `mockArticles.ts`
- AddArticleModal component untuk form
- CRUD operations (create, read, delete)

#### 23. Manage Products (`/admin/products`)

Halaman kelola produk.

**Komponen Utama:**
- Page title "Manage Products"
- Action bar dengan tombol "Add New Product"
- Search dan filter bar
- Products table dengan columns:
  - Image
  - Nama
  - Kategori
  - Harga
  - Sales count
  - Rating
  - Status
  - Actions (Edit/Delete)
- Modal "Add Product" untuk form tambah produk

**Implementasi:**
- Menggunakan `ManageProductsPage.tsx`
- Data dari `mockProducts.ts`
- AddProductModal component untuk form
- CRUD operations

#### 24. Manage Users (`/admin/users`)

Halaman kelola pengguna.

**Komponen Utama:**
- Page title "Manage Users"
- Search bar (nama/email/ID)
- Filter role (All/User/Admin)
- Filter status (Active/Banned)
- Users table dengan columns:
  - Avatar
  - Nama
  - Email
  - Role badge (User/Admin)
  - Tanggal bergabung
  - Status badge (Active/Banned)
  - Actions (Edit/Ban/Delete)

**Implementasi:**
- Menggunakan `ManageUsersPage.tsx`
- Data dari `mockUsers.ts`

#### 25. Manage Transactions (`/admin/transactions`)

Halaman kelola transaksi.

**Komponen Utama:**
- Page title "Transaction Management"
- Summary cards (Total Revenue, Pending, Success, Failed)
- Filter bar (date range, status, payment method)
- Transactions table dengan columns:
  - Transaction ID
  - User
  - Product
  - Amount
  - Payment Method
  - Date
  - Status badge
  - Actions (View/Approve/Refund)

**Implementasi:**
- Menggunakan `ManageTransactionsPage.tsx`
- Data dari `mockTransactions.ts`

#### 26. Manage Feedbacks (`/admin/feedbacks`)

Halaman kelola feedback pengguna.

**Komponen Utama:**
- Page title "User Feedbacks"
- Filter status (Pending, In Review, Resolved)
- Feedbacks list dengan cards:
  - Rating stars
  - User info
  - Category
  - Feedback text
  - Screenshot (jika ada)
  - Status badge
  - Actions (View/Respond/Resolve)

**Implementasi:**
- Menggunakan `FeedbacksPage.tsx`

#### 27. Admin Profile (`/admin/profile`)

Halaman profil admin.

**Komponen:**
- Sama dengan user profile
- Tambahan AdminHeader dan AdminSidebar

**Implementasi:**
- Menggunakan `AdminProfilePage.tsx`

---

## BAB 4
## PENGUJIAN SISTEM

Pengujian sistem dilakukan untuk memastikan bahwa seluruh halaman dan fitur yang telah diimplementasikan berfungsi sesuai dengan spesifikasi.

### Metode Pengujian

**Black Box Testing** dengan pendekatan **Functional Testing**:
- Pengujian berdasarkan fungsionalitas tampilan
- Tanpa melihat kode internal
- Focus pada user experience dan expected behavior

### Scope Pengujian

**1. Testing Halaman Publik:**
- [x] Landing page terdisplay dengan benar
- [x] Navigasi ke Articles, Courses berfungsi
- [x] Search dan filter pada Articles berfungsi
- [x] Detail artikel terload dengan slug yang benar
- [x] Add to Cart pada Products berfungsi
- [x] Detail product menampilkan curriculum
- [x] Cart menampilkan items yang ditambahkan
- [x] Quantity controls (+/-) pada Cart berfungsi

**2. Testing Autentikasi:**
- [x] Login dengan email/password berhasil
- [x] Login dengan role user redirect ke dashboard
- [x] Login dengan role admin redirect ke admin dashboard
- [x] Register form berfungsi
- [x] Social login buttons (Google, Apple) terdisplay dengan logo
- [x] Redirect target flow bekerja (guest → login → checkout)

**3. Testing Payment Flow:**
- [x] Checkout page memprotect route (harus login)
- [x] Payment method selection berfungsi
- [x] Order summary menampilkan items dari cart
- [x] PPN 11% dihitung dengan benar
- [x] Payment success page menampilkan order ID yang stable
- [x] Cart cleared setelah pembayaran berhasil
- [x] Purchase history menampilkan transaksi

**4. Testing User Dashboard:**
- [x] Dashboard terload dengan user data
- [x] Charts terdisplay dengan benar
- [x] Transactions table menampilkan data
- [x] Navigation antar halaman dashboard berfungsi
- [x] Profile page tabs berfungsi
- [x] Feedback form dapat di-submit

**5. Testing Admin Panel:**
- [x] Admin dashboard terload dengan stats
- [x] Growth chart dan Today's Sales sejajar (sama height)
- [x] Recent Activities dan Top Performing Content sejajar
- [x] Manage Articles: Add, Delete berfungsi
- [x] Manage Products: Add, Delete berfungsi
- [x] Manage Users table menampilkan data
- [x] Manage Transactions menampilkan data
- [x] AdminSidebar navigation berfungsi

**6. Testing Responsive Design:**
- [x] Layout mobile berfungsi dengan benar
- [x] Grid stacking pada mobile
- [x] Hidden sidebar pada mobile
- [x] Touch-friendly buttons dan inputs

**7. Testing Animasi dan Transisi:**
- [x] Page transition animations berfungsi
- [x] Login → Register transisi smooth
- [x] Hover states pada buttons dan cards
- [x] Loading states pada buttons

### Hasil Pengujian

Seluruh 21 halaman yang diimplementasikan telah diuji dan berfungsi sesuai expected behavior. Beberapa perbaikan yang dilakukan selama proses pengujian:

1. **Fix Order ID Glitch** — Order ID pada Payment Success page diubah dari `Date.now()` di component body ke `useState` untuk mencegah re-generation pada setiap render.

2. **Curriculum Data Added** — Data kurikulum ditambahkan ke seluruh produk di `mockProducts.ts` dan tipe `CurriculumModule` diperbarui.

3. **Cart Quantity Controls** — Tombol +/- ditambahkan ke Cart page dengan fungsi `updateQuantity()`.

4. **Guest Checkout Flow** — Implementasi redirect target menggunakan localStorage untuk mempertahankan cart session melalui login.

5. **Social Login Logos** — Logo Google dan Apple ditambahkan ke login dan register pages.

6. **Admin Dashboard Layout** — Diatur ulang agar Growth Chart sejajar dengan Today's Sales (sama height), dan Recent Activities sejajar dengan Top Performing Content.

### Issue yang Ditemukan dan Diselesaikan

| Issue | Solusi | Status |
|-------|---------|--------|
| Order ID glitching on payment success | Gunakan useState untuk order ID | ✅ Fixed |
| Curriculum section kosong | Add curriculum data ke mockProducts | ✅ Fixed |
| Cart quantity tidak bisa di-adjust | Add updateQuantity function | ✅ Fixed |
| Products tidak masuk cart saat "Buy Now" | Call addItem() sebelum navigate | ✅ Fixed |
| Dev server port conflict | Kill old process before restart | ✅ Fixed |
| Layout admin tidak sejajar | Add h-full class ke cards | ✅ Fixed |

---

## BAB 5
## KESIMPULAN

### Kesimpulan

Workshop Desain UI untuk aplikasi FinTrace telah berhasil diselesaikan dengan implementasi **21 halaman** yang mencakup seluruh scope yang direncanakan:

**Halaman Publik (6):** Landing, Articles, Article Detail, Products, Product Detail, Cart  
**Halaman Auth (2):** Login, Register  
**Halaman Payment (3):** Checkout, Payment Success, Purchase History  
**Halaman User (7):** Dashboard, Transactions, Analytics, Budget, My Courses, Profile, Feedback  
**Halaman User-Only (2):** User Articles, User Products  
**Halaman Admin (6):** Admin Dashboard, Manage Articles, Manage Products, Manage Users, Manage Transactions, Admin Profile, Manage Feedbacks

Seluruh halaman telah diimplementasikan dengan:
- Teknologi modern (React 18.3, Vite 5.2, Tailwind CSS 3.4, TypeScript 5.5)
- Desain konsisten dengan palet warna pastel gradient
- Komponen reusable untuk maintainability
- Responsive design untuk mobile dan desktop
- Animasi transisi yang smooth
- Mock data yang realistis untuk testing
- State management dengan Context API
- Type safety dengan TypeScript

### Saran Pengembangan

Untuk pengembangan selanjutnya, disarankan untuk:

1. **Backend Integration** — Integrasi dengan API untuk authentication dan data persistence
2. **E-Wallet Integration** — Integrasi nyata dengan e-wallet dan mobile banking
3. **Advanced Analytics** — Menambahkan lebih banyak jenis chart dan insights
4. **Dark Mode** — Implementasi tema gelap
5. **Internationalization** — Multi-language support (English/Indonesian)
6. **Testing Suite** — Unit tests dan E2E tests
7. **Performance Optimization** — Code splitting dan lazy loading
8. **Accessibility** — WCAG compliance untuk better UX

---

## LAMPIRAN

### Lampiran 1: Struktur Project

```
FinTrace-Workshop-UI/
├── public/
│   └── images/           # Asset images
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── UserHeader.tsx
│   │   │   ├── AdminHeader.tsx
│   │   │   ├── AdminSidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Tabs.tsx
│   │   │   └── StatCard.tsx
│   │   ├── features/
│   │   │   ├── SpendingChart.tsx
│   │   │   ├── AddArticleModal.tsx
│   │   │   └── AddProductModal.tsx
│   │   └── icons/
│   │       ├── GoogleLogo.tsx
│   │       └── AppleLogo.tsx
│   ├── pages/
│   │   ├── public/
│   │   ├── auth/
│   │   ├── user/
│   │   ├── admin/
│   │   └── payment/
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   ├── CartContext.tsx
│   │   └── ProductsContext.tsx
│   ├── data/
│   │   ├── mockArticles.ts
│   │   ├── mockProducts.ts
│   │   ├── mockTransactions.ts
│   │   └── mockUsers.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── formatCurrency.ts
│   ├── styles/
│   │   └── globals.css
│   ├── router.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── CLAUDE.md
```

### Lampiran 2: Komando Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Lampiran 3: Mock Accounts

**User Account:**
- Email: `user@fintrace.com`
- Password: `password`
- Role: `user`

**Admin Account:**
- Email: `admin@fintrace.com`
- Password: `admin`
- Role: `admin`

### Lampiran 4: URL Deployment

Live: **https://fintrace-workshop-ui-uas.vercel.app/**

Repository: **https://github.com/TendriZ/FinTrace-Workshop-UI**

---

**Tanggal Selesai:** 9 Januari 2026  
**Nama Mahasiswa:** Muhammad Raka Razzani  
**NIM:** 434241056  
**Fakultas:** Vokasi  
**Universitas:** Airlangga

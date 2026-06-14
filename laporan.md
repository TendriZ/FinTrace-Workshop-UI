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

1. [BAB 1 PENDAHULUAN](#bab-1-pendahuluan)
   - 1.1 Deskripsi Topik
   - 1.2 User Story
   - 1.3 Use Case
2. [BAB 2 IMPLEMENTASI DESAIN UI](#bab-2-implementasi-desain-ui)
   - 2.1 Wireframe
   - 2.2 Front End
3. [LAMPIRAN](#lampiran)

---

## BAB 1
## PENDAHULUAN

Perkembangan teknologi digital yang pesat telah mengubah cara masyarakat Indonesia dalam bertransaksi sehari-hari. Penggunaan e-wallet dan mobile banking kini menjadi bagian yang tidak terpisahkan dari kehidupan modern, khususnya di kalangan generasi muda. Namun di balik kemudahan tersebut, muncul tantangan baru berupa rendahnya literasi keuangan digital yang menyebabkan banyak pengguna kesulitan dalam melacak dan mengelola keuangan mereka secara efektif.

Berangkat dari permasalahan tersebut, Workshop Desain UI ini berfokus pada implementasi antarmuka berbasis web untuk aplikasi **FinTrace** — sebuah platform manajemen keuangan digital yang dirancang untuk membantu pengguna melacak transaksi, merencanakan anggaran, sekaligus meningkatkan literasi finansial mereka melalui konten edukasi yang terintegrasi.

Laporan ini mendokumentasikan seluruh proses implementasi desain antarmuka FinTrace, mulai dari wireframe, pengembangan tampilan halaman, hingga pengujian sistem secara menyeluruh.

### 1.1 Deskripsi Topik

FinTrace adalah platform manajemen keuangan digital dengan prinsip *user-centered design* dan *financial empowerment* yang dirancang untuk mahasiswa, pekerja muda, UMKM, dan masyarakat umum dalam melacak, mengelola, serta meningkatkan literasi keuangan mereka.

Fitur utama FinTrace mencakup:
- Pelacakan transaksi keuangan secara manual
- Analitik keuangan visual dengan grafik interaktif
- Perencanaan budget dengan monitoring progress
- Financial goal setting dan tracking
- Marketplace edukasi finansial (kursus online, e-book, konsultasi)
- Konten artikel edukatif tentang keuangan
- Panel admin untuk manajemen konten dan pengguna

**Scope Project FinTrace mencakup:**

**Halaman Publik** (akses tanpa login):
- Landing page — Hero section, fitur unggulan, preview artikel & produk
- Arsip artikel — Grid artikel dengan search, filter kategori, dan pagination
- Detail artikel — Konten lengkap dengan table of contents dan artikel terkait
- Katalog produk — Grid kursus/produk dengan filter dan sorting
- Detail produk — Informasi lengkap dengan kurikulum dan tombol pembelian
- Keranjang belanja — Daftar produk yang akan dibeli

**Halaman Pengguna** (akses setelah login):
- Dashboard — Stats cards, grafik pengeluaran, transaksi terbaru
- Transaksi — History transaksi dengan filter dan search
- Analytics — Visualisasi data keuangan dengan grafik
- Budget — Monitoring budget dengan progress bar per kategori
- Goal — Financial goal setting dan tracking dengan progress
- Kursus Saya — Daftar kursus yang telah dibeli
- Profil — Edit profil dan pengaturan akun
- Feedback — Form ulasan dan masukan

**Halaman Administrator** (akses admin):
- Dashboard Admin — Stats overview dan recent activities
- Kelola Artikel — CRUD artikel platform
- Kelola Produk — CRUD produk marketplace
- Kelola Pengguna — Manajemen akun pengguna
- Kelola Transaksi — Monitoring transaksi platform
- Kelola Feedback — Review masukan pengguna
- Profil Admin — Pengaturan akun administrator

**Halaman Autentikasi**:
- Login — Form login dengan email/password dan opsi social login
- Register — Form pendaftaran akun baru

**Halaman Pembayaran**:
- Checkout — Form pembayaran dengan pilihan metode
- Payment Success — Halaman konfirmasi pembayaran berhasil
- Purchase History — Daftar riwayat pembelian

### 1.2 User Story

User story menggambarkan kebutuhan fungsional dari sudut pandang pengguna akhir:

1. **Sebagai financial advisor**, saya ingin membagikan pengetahuan keuangan melalui kursus dan konsultasi agar bisa membantu banyak orang mengelola keuangan dengan lebih baik.

2. **Sebagai mahasiswa**, saya ingin melacak pengeluaran uang saku agar bisa mengatur keuangan dengan lebih teratur dan tidak boros.

3. **Sebagai pekerja muda**, saya ingin memahami ke mana uang gaji saya pergi setiap bulan dan mulai merencanakan tabungan serta investasi untuk masa depan.

4. **Sebagai pemilik UMKM**, saya ingin memisahkan transaksi bisnis dan pribadi agar laporan keuangan usaha saya lebih jelas dan mudah dipantau.

5. **Sebagai masyarakat umum**, saya ingin belajar tentang investasi dan manajemen keuangan melalui artikel dan kursus yang mudah dipahami.

6. **Sebagai pengguna**, saya ingin bisa menambahkan transaksi cash secara manual agar semua pengeluaran saya tercatat lengkap.

7. **Sebagai pengguna**, saya ingin bisa menetapkan target finansial (goal) seperti dana darurat, liburan, atau investasi dan melihat progres pencapaian saya.

8. **Sebagai administrator**, saya ingin mengelola seluruh konten artikel dan produk di platform dengan mudah agar informasi yang tersedia selalu up-to-date.

9. **Sebagai administrator**, saya ingin memonitor semua transaksi pengguna secara real-time agar dapat mendeteksi masalah dengan cepat.

### 1.3 Use Case

**Aktor yang terlibat:**
- Guest (Pengunjung tanpa login)
- User (Pengguna terdaftar)
- Administrator (Admin platform)

**Daftar Use Case Utama:**

| No   | Use Case                     | Aktor           | Deskripsi                              |
|------|------------------------------|-----------------|----------------------------------------|
| UC-01| Melihat Landing Page         | Guest, User     | Melihat halaman utama FinTrace         |
| UC-02| Membaca Arsip Artikel        | Guest, User     | Mencari dan membaca artikel edukatif   |
| UC-03| Membaca Detail Artikel       | Guest, User     | Membaca konten lengkap artikel         |
| UC-04| Melihat Katalog Produk       | Guest, User     | Melihat list kursus dan produk         |
| UC-05| Melihat Detail Produk        | Guest, User     | Melihat informasi lengkap produk       |
| UC-06| Menambah Produk ke Keranjang | Guest, User     | Menambahkan produk ke cart             |
| UC-07| Login                        | Guest           | Masuk ke akun yang sudah terdaftar     |
| UC-08| Register                     | Guest           | Membuat akun baru                      |
| UC-09| Melakukan Pembayaran         | User            | Menyelesaikan proses pembelian         |
| UC-10| Melihat Dashboard            | User            | Melihat ringkasan keuangan             |
| UC-11| Mengelola Transaksi          | User            | Menambah/edit/hapus transaksi          |
| UC-12| Melihat Analytics            | User            | Melihat visualisasi data keuangan      |
| UC-13| Mengelola Budget             | User            | Set dan monitor budget                  |
| UC-14| Mengelola Goal               | User            | Set dan track target finansial         |
| UC-15| Melihat Kursus Saya          | User            | Melihat kursus yang dibeli              |
| UC-16| Mengubah Profil              | User            | Edit informasi profil                   |
| UC-17| Memberikan Feedback          | User            | Mengirim ulasan platform                |
| UC-18| Melihat Dashboard Admin       | Admin           | Monitoring overview platform           |
| UC-19| Kelola Artikel               | Admin           | CRUD artikel platform                   |
| UC-20| Kelola Produk                | Admin           | CRUD produk marketplace                 |
| UC-21| Kelola Pengguna              | Admin           | Manajemen akun pengguna                 |
| UC-22| Kelola Transaksi             | Admin           | Monitoring transaksi                    |
| UC-23| Kelola Feedback              | Admin           | Review masukan pengguna                  |

### 1.4 Use Case Specification

Berikut adalah spesifikasi detail untuk use case utama dalam sistem FinTrace:

#### UC-02: Membaca Arsip Artikel

| Field         | Description                                         |
|---------------|-----------------------------------------------------|
| Nama Use Case | Membaca Arsip Artikel                              |
| Aktor         | Guest, User                                         |
| Deskripsi      | Pengguna dapat melihat daftar artikel finansial     |
| Pre-condition | Pengguna mengakses halaman artikel                 |
| Post-condition | Pengguna berhasil melihat daftar artikel           |
| Basic Flow    | 1. Pengguna membuka halaman arsip artikel<br>2. Sistem menampilkan daftar artikel dengan thumbnail, judul, dan excerpt<br>3. Pengguna dapat mencari artikel berdasarkan keyword<br>4. Pengguna dapat memfilter artikel berdasarkan kategori<br>5. Pengguna mengklik artikel untuk membaca selengkapnya |
| Alternative Flow | Jika tidak ada artikel ditemukan, sistem menampilkan pesan "No articles found" |

#### UC-06: Menambah Produk ke Keranjang

| Field         | Description                                         |
|---------------|-----------------------------------------------------|
| Nama Use Case | Menambah Produk ke Keranjang                       |
| Aktor         | User, Guest                                         |
| Deskripsi      | Pengguna menambahkan produk ke keranjang belanja    |
| Pre-condition | Pengguna berada di halaman detail produk           |
| Post-condition | Produk berhasil ditambahkan ke keranjang           |
| Basic Flow    | 1. Pengguna membuka halaman detail produk<br>2. Pengguna mengklik tombol "Add to Cart"<br>3. Sistem menambahkan produk ke session keranjang<br>4. Sistem menampilkan notifikasi "Product added to cart"<br>5. Pengguna dapat melanjutkan belanja atau langsung checkout |
| Alternative Flow | Jika pengguna belum login, sistem mengarahkan ke halaman login terlebih dahulu |

#### UC-09: Melakukan Pembayaran

| Field         | Description                                         |
|---------------|-----------------------------------------------------|
| Nama Use Case | Melakukan Pembayaran                                |
| Aktor         | User                                                |
| Deskripsi      | Pengguna menyelesaikan proses pembayaran produk     |
| Pre-condition | Pengguna sudah login dan memiliki item di keranjang  |
| Post-condition | Pembayaran berhasil dan akses produk diberikan     |
| Basic Flow    | 1. Pengguna membuka halaman keranjang<br>2. Pengguna mengklik "Lanjut ke Pembayaran"<br>3. Sistem menampilkan halaman checkout dengan ringkasan pesanan<br>4. Pengguna memilih metode pembayaran<br>5. Pengguna mengklik "Bayar Sekarang"<br>6. Sistem memproses pembayaran<br>7. Sistem menampilkan halaman konfirmasi pembayaran berhasil<br>8. Sistem memberikan akses produk kepada pengguna |
| Alternative Flow | Jika pembayaran gagal, sistem menampilkan pesan error dan mengarahkan kembali ke halaman pembayaran |

#### UC-14: Mengelola Goal

| Field         | Description                                         |
|---------------|-----------------------------------------------------|
| Nama Use Case | Mengelola Goal                                      |
| Aktor         | User                                                |
| Deskripsi      | Pengguna membuat dan memantau target finansial      |
| Pre-condition | Pengguna sudah login                                |
| Post-condition | Goal berhasil dibuat/diperbarui dan ditampilkan     |
| Basic Flow    | 1. Pengguna membuka halaman Goal<br>2. Pengguna mengklik tombol "Tambah Goal"<br>3. Pengguna mengisi form: nama goal, target amount, current amount, deadline, kategori<br>4. Pengguna mengklik "Simpan"<br>5. Sistem menyimpan goal dan menampilkan progress<br>6. Pengguna dapat mengedit atau menghapus goal yang sudah ada |
| Alternative Flow | Jika goal mencapai 100%, sistem menampilkan badge "Completed" |

#### UC-19: Kelola Artikel

| Field         | Description                                         |
|---------------|-----------------------------------------------------|
| Nama Use Case | Kelola Artikel                                      |
| Aktor         | Administrator                                       |
| Deskripsi      | Admin dapat melakukan CRUD artikel di platform        |
| Pre-condition | Admin sudah login dengan akun administrator         |
| Post-condition | Perubahan artikel tersimpan dan ditampilkan         |
| Basic Flow    | 1. Admin membuka halaman Kelola Artikel<br>2. Sistem menampilkan daftar semua artikel dengan status<br>3. Admin mengklik "Add New Article"<br>4. Admin mengisi form: judul, konten, kategori, gambar, status<br>5. Admin mengklik "Publish" atau "Save as Draft"<br>6. Sistem menyimpan artikel dan menampilkan di halaman publik (jika published) |
| Alternative Flow | Admin dapat mengedit atau menghapus artikel yang sudah ada melalui menu aksi di tabel |

#### UC-20: Kelola Produk

| Field         | Description                                         |
|---------------|-----------------------------------------------------|
| Nama Use Case | Kelola Produk                                       |
| Aktor         | Administrator                                       |
| Deskripsi      | Admin dapat melakukan CRUD produk di marketplace     |
| Pre-condition | Admin sudah login dengan akun administrator         |
| Post-condition | Perubahan produk tersimpan dan ditampilkan          |
| Basic Flow    | 1. Admin membuka halaman Kelola Produk<br>2. Sistem menampilkan daftar semua produk<br>3. Admin mengklik "Add New Product"<br>4. Admin mengisi form tab: General (nama, kategori, deskripsi), Pricing (harga, diskon), Details (durasi, level), Curriculum (modul)<br>5. Admin mengklik "Simpan"<br>6. Sistem menyimpan produk dan menampilkan di marketplace |
| Alternative Flow | Admin dapat mengedit, menghapus, atau menduplikat produk yang sudah ada |

#### UC-21: Kelola Pengguna

| Field         | Description                                         |
|---------------|-----------------------------------------------------|
| Nama Use Case | Kelola Pengguna                                      |
| Aktor         | Administrator                                       |
| Deskripsi      | Admin dapat memantau dan mengelola akun pengguna      |
| Pre-condition | Admin sudah login dengan akun administrator         |
| Post-condition | Perubahan status/role pengguna tersimpan             |
| Basic Flow    | 1. Admin membuka halaman Kelola Pengguna<br>2. Sistem menampilkan daftar semua pengguna<br>3. Admin dapat search berdasarkan nama/email/ID<br>4. Admin dapat filter role (All/User/Admin) dan status (Active/Banned)<br>5. Admin dapat melakukan aksi: View Detail, Edit, Ban-Unban, Delete |
| Alternative Flow | Jika pengguna dibanned, pengguna tidak dapat login ke sistem |

---

## BAB 2
## IMPLEMENTASI DESAIN UI

Bab ini menjelaskan implementasi desain sistem FinTrace secara menyeluruh, mulai dari tahap wireframe sebagai kerangka awal antarmuka, hingga implementasi tampilan front end yang lengkap dan fungsional. Seluruh desain dikembangkan dengan mengacu pada prinsip *user-centered design* dengan mengutamakan kemudahan penggunaan, konsistensi visual, dan aksesibilitas bagi semua segmen pengguna.

### 2.1 Teknologi yang Digunakan

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

### 2.2 Wireframe

Wireframe merupakan representasi visual tingkat rendah (low-fidelity) yang digunakan untuk memetakan struktur dan tata letak setiap halaman sebelum memasuki tahap implementasi. Wireframe berfungsi sebagai panduan awal dalam menentukan penempatan elemen UI, alur navigasi, dan hierarki informasi tanpa terbebani aspek visual seperti warna dan tipografi detail.

Wireframe FinTrace mencakup seluruh halaman yang diimplementasikan:

**Halaman Publik:**
- Landing Page — Hero section, fitur unggulan, preview artikel, preview produk, CTA
- Arsip Artikel — Grid artikel dengan search bar, filter kategori, sidebar
- Detail Artikel — Konten lengkap, breadcrumb, sidebar TOC, artikel terkait
- Katalog Produk — Grid produk dengan filter sidebar dan sorting options
- Detail Produk — Informasi produk, tabs deskripsi/kurikulum/ulasan, purchase box
- Keranjang — Daftar item, ringkasan pesanan, tombol checkout

**Halaman Autentikasi & Pembayaran:**
- Login — Form login dengan opsi social login
- Register — Form pendaftaran
- Pembayaran — Form checkout, pilihan metode pembayaran, konfirmasi
- History Transaksi — Tabel transaksi dengan filter dan search

**Halaman Dashboard User:**
- Dashboard — Stats cards, grafik pengeluaran, transaksi terbaru, progress budget
- Transaksi — Tabel history dengan filter
- Analytics — Visualisasi charts dan graphs
- Budget — Progress bar per kategori
- Goal — Goal cards dengan progress tracking
- My Courses — Grid kursus yang dibeli
- Profile — Form edit profil dan settings
- Feedback — Form ulasan dan rating

**Halaman Administrator:**
- Dashboard Admin — Stats overview, growth chart, recent activities
- Kelola Artikel — Tabel artikel dengan aksi CRUD
- Kelola Produk — Tabel produk dengan aksi CRUD
- Kelola Pengguna — Tabel pengguna dengan filter status
- Kelola Transaksi — Tabel transaksi platform
- Kelola Feedback — List feedback pengguna

### 2.3 Front End

Berikut adalah implementasi tampilan front end dari setiap halaman FinTrace yang telah dikembangkan menggunakan teknologi web modern dengan desain yang konsisten menggunakan color palette pastel gradient (ungu, pink, biru muda) dan komponen berbasis card dengan shadow lembut.

---

#### Landing Page

Landing page merupakan halaman pertama yang dilihat oleh pengunjung ketika mengakses platform FinTrace.

**Komponen Utama:**
- Navbar — Logo FinTrace, menu navigasi (Home, Articles, Courses), dan tombol "Get Started"
- Hero Section — Headline "Track Every Transaction, Master Your Finance", subheadline, dua tombol CTA (Start Tracking Free & Watch Demo), logo partner e-wallet/bank
- Stats Section — Empat kartu statistik (100K+ Active Users, 1M+ Transaction Tracked, 15+ Supported Platforms, Rating 5.0)
- Features Section — Enam kartu fitur unggulan dengan ikon gradient
- Marketplace Preview — Preview empat produk/kursus unggulan
- Articles Preview — Preview tiga artikel terbaru
- CTA Section — Banner ajakan bergabung dengan background gradient
- Footer — Link navigasi dan informasi copyright

**Implementasi:** `LandingPage.tsx`

---

#### Arsip Artikel

Halaman arsip artikel menampilkan seluruh konten artikel finansial yang tersedia di platform.

**Komponen Utama:**
- Hero Section — Judul "Financial Tips & Insights" dan deskripsi
- Search & Filter Bar — Search box dan dropdown sorting
- Category Tabs — All, Budgeting, Investment, Digital Finance, Saving, Debt Management
- Articles Grid — Grid artikel cards dengan thumbnail, badge, judul, excerpt
- Pagination — Navigasi halaman

**Implementasi:** `ArticlesPage.tsx`

---

#### Detail Artikel

Halaman detail artikel menampilkan konten artikel secara lengkap.

**Komponen Utama:**
- Breadcrumb navigasi
- Hero image dengan featured image
- Article header (badge, judul, author info, metadata)
- Article content dengan formatting lengkap
- Tags dan share buttons
- Related articles section

**Implementasi:** `ArticleDetailPage.tsx`

---

#### Katalog Produk

Halaman katalog produk menampilkan seluruh produk yang tersedia di marketplace.

**Komponen Utama:**
- Hero Section — Judul "Financial Courses & Services"
- Search & Sort Bar
- Category Tabs — All, Courses, E-Books, Consultation
- Filter Sidebar — Kategori, price range, rating
- Products Grid — Tiga kolom product cards
- Product Card — Badge, image, rating, judul, deskripsi, harga, tombol "Add to Cart"

**Implementasi:** `ProductsPage.tsx`

---

#### Detail Produk

Halaman detail produk menyajikan informasi lengkap sebelum pembelian.

**Komponen Utama:**
- Breadcrumb navigasi
- Layout dua kolom (gambar di kiri, informasi sticky di kanan)
- Product header (badge, judul, rating, sales)
- Price section dengan discount badge
- Tombol "Buy Now" dan "Add to Cart"
- Section "What You'll Learn" dengan checklist
- Section "Curriculum" dengan list modul
- Instructor section

**Implementasi:** `ProductDetailPage.tsx`

---

#### Keranjang

Halaman keranjang menampilkan daftar produk sebelum checkout.

**Komponen Utama:**
- Page title "Shopping Cart"
- Cart items list dengan gambar, nama, harga
- Tombol remove item
- Quantity controls (+/-)
- Order summary sidebar
- Tombol "Lanjut ke Pembayaran"
- Empty state jika cart kosong

**Implementasi:** `CartPage.tsx`

---

#### Login

Halaman login untuk masuk ke akun.

**Komponen Utama:**
- Layout dua kolom (kiri: background image dengan logo, kanan: form)
- Form dengan email dan password input
- Toggle show/hide password
- Checkbox "Ingat Saya"
- Link "Lupa kata sandi?"
- Tombol "Login"
- Social login buttons (Google, Apple)
- Link ke Register

**Implementasi:** `LoginPage.tsx`

---

#### Register

Halaman pendaftaran akun baru.

**Komponen Utama:**
- Layout mirip login (background image di kiri)
- Form dengan fields: Full Name, Email/Phone, Password
- Toggle show/hide password
- Checkbox "I agree to terms"
- Tombol "Register"
- Social login buttons
- Link ke Login

**Implementasi:** `RegisterPage.tsx`

---

#### Checkout

Halaman pembayaran untuk menyelesaikan transaksi.

**Komponen Utama:**
- Page title "Payment Checkout"
- Payment method selection (Kartu Kredit, E-Wallet, Transfer Bank)
- Payment details form
- Order summary sidebar
- Subtotal, PPN 11%, dan total
- Tombol "Bayar Sekarang"
- Security indicators

**Implementasi:** `CheckoutPage.tsx`

---

#### Payment Success

Halaman konfirmasi pembayaran berhasil.

**Komponen Utama:**
- Success icon dengan animasi
- Headline "Pembayaran Berhasil!"
- Order summary card (Order ID, tanggal, list produk, total)
- Tombol "Download Invoice" dan "Lihat Riwayat Pembelian"
- Next steps section
- Help section

**Implementasi:** `PaymentSuccessPage.tsx`

---

#### Purchase History

Halaman riwayat pembelian pengguna.

**Komponen Utama:**
- Page title "Purchase History"
- Filter bar (status, date range)
- Transaction list dengan cards
- Order ID, tanggal, produk, jumlah, metode, status badge
- Tombol "View Details" dan "Download Invoice"

**Implementasi:** `PurchaseHistoryPage.tsx`

---

#### Dashboard

Halaman utama dashboard pengguna.

**Komponen Utama:**
- Welcome message dengan user avatar
- Stats cards (Total Balance, Monthly Spending, Monthly Income, Savings)
- Spending chart dengan Recharts
- Recent transactions table
- Quick action buttons

**Implementasi:** `DashboardPage.tsx`

---

#### Transaksi

Halaman history transaksi.

**Komponen Utama:**
- Page title "Transaction History"
- Filter bar (date range, category, search)
- Transaction table (Date, Description, Category, Amount, Status)
- Summary cards (Total Income, Total Expense, Net)

**Implementasi:** `TransactionsPage.tsx`

---

#### Analytics

Halaman analitik keuangan visual.

**Komponen Utama:**
- Page title "Financial Analytics"
- Spending by category chart (pie chart)
- Monthly spending trend (line chart)
- Income vs Expense comparison (bar chart)
- Budget utilization (progress bars)

**Implementasi:** `AnalyticsPage.tsx`

---

#### Budget

Halaman perencanaan dan monitoring budget.

**Komponen Utama:**
- Page title "Budget Tracking"
- Summary card (Total Budget, Used, Remaining)
- Budget categories list dengan progress bar
- Progress color-coded (hijau/on track, kuning/warning, merah/over)
- Tombol tambah budget baru

**Implementasi:** `BudgetPage.tsx`

---

#### Goal

Halaman financial goal setting dan tracking.

**Komponen Utama:**
- Page title "Financial Goals"
- Stats cards (Total Target, Total Tercapai, Sisa Dibutuhkan, Active Goals)
- Goal cards dengan:
  - Nama goal dan icon kategori
  - Progress bar dengan color-coded
  - Terkumpul dan target amount
  - Deadline counter dengan indikator warna
  - Tombol edit dan delete
- 4 Kategori: Tabungan, Investasi, Pembelian, Dana Darurat
- Modal Add/Edit Goal

**Implementasi:** `GoalPage.tsx`

---

#### My Courses

Halaman kursus yang telah dibeli.

**Komponen Utama:**
- Page title "My Courses"
- Grid course cards dari purchase history
- Progress indicator per kursus
- Tombol "Continue Learning"
- Filter (In Progress, Completed, All)

**Implementasi:** `MyCoursesPage.tsx`

---

#### Profile

Halaman profil dan pengaturan akun.

**Komponen Utama (Tab-based):**
- Profile Tab — Avatar, nama, email, telepon, bio
- Security Tab — Ganti password, 2FA toggle
- Notifications Tab — Toggle notifications
- Preferences Tab — Bahasa, mata uang, tema

**Implementasi:** `ProfilePage.tsx`

---

#### Feedback

Halaman untuk mengirim masukan.

**Komponen Utama:**
- Page title "Share Your Feedback"
- Rating stars (1-5) dengan label
- Feedback form (Category dropdown, textarea, upload screenshot)
- Feedback history list dengan status

**Implementasi:** `FeedbackPage.tsx`

---

#### Admin Dashboard

Dashboard utama untuk admin.

**Layout:** AdminSidebar di kiri (240px), konten di kanan

**Komponen Utama:**
- Header dengan admin avatar
- Stats cards (Total Users, Saled Product, Transaction Track, Article Posted)
- Growth Chart dengan bar chart
- Today's Sales card
- Recent Activities list
- Top Performing Content list

**Implementasi:** `AdminDashboardPage.tsx`

---

#### Kelola Artikel

Halaman kelola artikel.

**Komponen Utama:**
- Page title "Manage Articles"
- Action bar dengan tombol "Add New Article"
- Search dan filter bar
- Articles table (Thumbnail, Judul, Penulis, Kategori, Tanggal, Views, Status, Actions)
- Modal "Add Article" untuk form tambah

**Implementasi:** `ManageArticlesPage.tsx`

---

#### Kelola Produk

Halaman kelola produk.

**Komponen Utama:**
- Page title "Manage Products"
- Action bar dengan tombol "Add New Product"
- Search dan filter bar
- Products table (Image, Nama, Kategori, Harga, Sales, Rating, Status, Actions)
- Modal "Add Product" untuk form tambah

**Implementasi:** `ManageProductsPage.tsx`

---

#### Kelola Pengguna

Halaman kelola pengguna.

**Komponen Utama:**
- Page title "Manage Users"
- Search bar (nama/email/ID)
- Filter role (All/User/Admin)
- Filter status (Active/Banned)
- Users table (Avatar, Nama, Email, Role badge, Tanggal, Status badge, Actions)

**Implementasi:** `ManageUsersPage.tsx`

---

#### Kelola Transaksi

Halaman kelola transaksi.

**Komponen Utama:**
- Page title "Transaction Management"
- Summary cards (Total Revenue, Pending, Success, Failed)
- Filter bar (date range, status, payment method)
- Transactions table (Transaction ID, User, Product, Amount, Method, Date, Status, Actions)

**Implementasi:** `ManageTransactionsPage.tsx`

---

#### Kelola Feedback

Halaman kelola feedback pengguna.

**Komponen Utama:**
- Page title "User Feedbacks"
- Filter status (Pending, In Review, Resolved)
- Feedbacks list dengan cards (Rating, User info, Category, Feedback text, Screenshot, Status, Actions)

**Implementasi:** `FeedbacksPage.tsx`

---

#### Admin Profile

Halaman profil admin.

**Komponen:**
- Sama dengan user profile
- Tambahan AdminHeader dan AdminSidebar

**Implementasi:** `AdminProfilePage.tsx`

---

### 2.4 Pengujian Sistem

Pengujian sistem dilakukan untuk memastikan bahwa seluruh halaman dan fitur yang telah diimplementasikan berfungsi sesuai dengan spesifikasi.

**Metode Pengujian:** Black Box Testing dengan pendekatan Functional Testing

**Scope Pengujian:**

✅ **Halaman Publik (6 routes):**
- Landing page terdisplay dengan benar
- Navigasi ke Articles, Courses berfungsi
- Search dan filter pada Articles berfungsi
- Detail artikel terload dengan slug yang benar
- Add to Cart pada Products berfungsi
- Detail product menampilkan curriculum
- Cart menampilkan items yang ditambahkan

✅ **Halaman Auth (2 routes):**
- Login dengan email/password berhasil
- Login dengan role user/admin redirect benar
- Register form berfungsi
- Social login buttons terdisplay dengan logo
- Redirect target flow bekerja

✅ **Halaman Payment (3 routes):**
- Checkout page memprotect route (harus login)
- Payment method selection berfungsi
- PPN 11% dihitung dengan benar
- Payment success page menampilkan order ID yang stable
- Cart cleared setelah pembayaran berhasil
- Purchase history menampilkan transaksi

✅ **Halaman User Dashboard (8 routes):**
- Dashboard terload dengan user data
- Charts terdisplay dengan benar
- Transactions table menampilkan data
- Analytics charts berfungsi
- Budget progress bars color-coded
- Goal page dengan stats dan goal cards
- Navigation antar halaman dashboard berfungsi
- Profile page tabs berfungsi
- Feedback form dapat di-submit

✅ **Halaman Admin (7 routes):**
- Admin dashboard terload dengan stats
- Growth chart dan Today's Sales sejajar
- Recent Activities dan Top Performing Content sejajar
- Manage Articles: Add, Delete berfungsi
- Manage Products: Add, Delete berfungsi
- Manage Users table menampilkan data
- Manage Transactions menampilkan data
- Manage Feedbacks menampilkan data
- AdminSidebar navigation berfungsi

✅ **Responsive Design:**
- Layout mobile berfungsi dengan benar
- Grid stacking pada mobile
- Touch-friendly buttons dan inputs

**Hasil Pengujian:** Seluruh 26 halaman yang diimplementasikan telah diuji dan berfungsi sesuai expected behavior.

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
│   │   ├── features/
│   │   └── icons/
│   ├── pages/
│   │   ├── public/
│   │   ├── auth/
│   │   ├── user/
│   │   ├── admin/
│   │   └── payment/
│   ├── context/
│   ├── data/
│   ├── types/
│   ├── utils/
│   ├── styles/
│   ├── router.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

### Lampiran 2: Komando Development

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run linter
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

### Lampiran 4: Link Project

- **Repository:** https://github.com/TendriZ/FinTrace-Workshop-UI
- **Live Demo:** https://fintrace-workshop-ui-uas.vercel.app/

---

**Tanggal Selesai:** 14 Januari 2026  
**Nama Mahasiswa:** Muhammad Raka Razzani  
**NIM:** 434241056  
**Fakultas:** Vokasi  
**Universitas:** Airlangga

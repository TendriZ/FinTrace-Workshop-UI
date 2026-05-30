import type { Article } from '../types';

export const mockArticles: Article[] = [
  {
    id: 'article-1',
    slug: 'kelola-keuangan-untuk-mahasiswa',
    title: 'Cara Mengelola Keuangan untuk Mahasiswa',
    excerpt: 'Strategi sederhana yang bisa diterapkan tanpa mengubah gaya hidup secara ekstrem.',
    content: `<p>Mengelola keuangan sebagai mahasiswa adalah keterampilan penting yang akan bermanfaat sepanjang hidup. Berikut adalah panduan lengkap untuk membantu Anda memulai perjalanan finansial yang sehat.</p>

    <p><strong>1. Buat Budget Bulanan</strong><br />
    Langkah pertama dalam mengelola keuangan adalah membuat budget bulanan. Catat semua pemasukan Anda, termasuk uang saku dari orang tua, beasiswa, atau penghasilan part-time. Kemudian, kategorikan pengeluaran Anda:<br />
    Kebutuhan pokok (makan, transportasi, kos)<br />
    Pendidikan (buku, alat tulis, kursus)<br />
    Hiburan dan sosial<br />
    Tabungan</p>

    <p><strong>2. Gunakan Aplikasi Tracking Keuangan</strong><br />
    Manfaatkan teknologi untuk memudahkan tracking pengeluaran. FinTrace dapat membantu Anda melacak transaksi e-wallet secara otomatis dan memberikan visualisasi pengeluaran yang jelas.</p>

    <p><strong>3. Terapkan Prinsip 50/30/20</strong><br />
    Alokasikan pendapatan Anda dengan formula:<br />
    50% untuk kebutuhan pokok<br />
    30% untuk keinginan dan hiburan<br />
    20% untuk tabungan dan investasi</p>

    <p><strong>4. Hindari Hutang Konsumtif</strong><br />
    Sebisa mungkin hindari berhutang untuk hal-hal konsumtif. Jika terpaksa menggunakan paylater atau kartu kredit, pastikan Anda bisa melunasinya tepat waktu untuk menghindari bunga yang membengkak.</p>

    <p><strong>5. Mulai Menabung Sejak Dini</strong><br />
    Tidak ada kata terlalu dini untuk mulai menabung. Bahkan jika hanya Rp 50.000 per bulan, kebiasaan menabung akan membentuk disiplin finansial yang kuat.</p>

    <p><strong>Kesimpulan</strong><br />
    Mengelola keuangan sebagai mahasiswa memang menantang, tetapi dengan disiplin dan tools yang tepat, Anda bisa membangun fondasi finansial yang kuat untuk masa depan. Mulai dari sekarang, dan rasakan manfaatnya di kemudian hari.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop',
    category: 'Saving Tips',
    tags: ['hemat', 'budgeting', 'saving'],
    author: {
      name: 'Nadia Putri',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      role: 'Financial Coach',
    },
    views: 12450,
    readTime: 6,
    publishedAt: '2025-05-01',
  },
  {
    id: 'article-2',
    slug: 'keamanan-ewallet',
    title: 'Panduan Keamanan E-Wallet',
    excerpt: 'Pastikan dompet digital Anda tetap aman dari pencurian dan penipuan.',
    content: `<p>Dompet digital atau e-wallet kini menjadi bagian tak terpisahkan dari gaya hidup masyarakat modern. Namun, kemudahan ini juga dibarengi dengan risiko keamanan. Berikut adalah panduan untuk menjaga akun Anda tetap aman.</p>

    <p><strong>1. Aktifkan Fitur Keamanan Ganda (2FA)</strong><br />
    Jangan hanya mengandalkan PIN atau password. Aktifkan otentikasi dua faktor (2FA) yang membutuhkan verifikasi tambahan melalui SMS atau aplikasi authenticator. Ini akan membuat peretas kesulitan masuk meskipun mereka mengetahui password Anda.</p>

    <p><strong>2. Jangan Pernah Membagikan OTP</strong><br />
    One-Time Password (OTP) adalah kunci utama keamanan Anda. Pihak aplikasi atau Bank <strong>tidak akan pernah</strong> meminta kode OTP kepada pengguna. Jika ada yang meminta kode dari SMS Anda, abaikan dan segera blokir nomor tersebut.</p>

    <p><strong>3. Hindari Penggunaan Wi-Fi Publik</strong><br />
    Saat melakukan transaksi melalui e-wallet, hindari terhubung dengan jaringan Wi-Fi publik (di kafe atau bandara). Gunakan jaringan seluler pribadi Anda karena lebih terenkripsi dan aman dari risiko peretasan.</p>

    <p><strong>4. Rutin Ganti PIN dan Password</strong><br />
    Ubah PIN transaksi dan password aplikasi e-wallet Anda secara berkala, idealnya setiap 3-6 bulan sekali. Hindari menggunakan PIN yang mudah ditebak seperti tanggal lahir atau rangkaian angka yang berurutan.</p>

    <p><strong>5. Waspadai Link Phishing</strong><br />
    Berhati-hatilah terhadap pesan SMS, email, atau pesan chat yang menyertakan link mencurigakan dan mengaku sebagai pihak penyedia layanan e-wallet. Jangan sembarang klik link yang mengarahkan Anda ke halaman login palsu.</p>

    <p><strong>Kesimpulan</strong><br />
    Kenyamanan menggunakan e-wallet harus selalu dibersamai dengan kehati-hatian. Terapkan langkah keamanan secara disiplin agar uang elektronik Anda terhindar dari potensi kejahatan siber.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
    category: 'E-Wallet Guide',
    tags: ['ewallet', 'security', 'digital money'],
    author: {
      name: 'Bayu Santoso',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      role: 'Security Analyst',
    },
    views: 20840,
    readTime: 8,
    publishedAt: '2025-05-03',
  },
  {
    id: 'article-3',
    slug: 'investasi-pemula',
    title: 'Investasi Dasar untuk Pemula',
    excerpt: 'Mulai langkah awal investasi dengan pemahaman yang mudah dan aman.',
    content: `<p>Banyak pemula yang ragu untuk memulai investasi karena menganggapnya rumit dan memiliki risiko tinggi. Kenyataannya, siapa pun bisa berinvestasi asal mengetahui dasar-dasarnya. Berikut panduan awal berinvestasi yang aman bagi pemula.</p>

  <p><strong>1. Tentukan Tujuan Investasi</strong><br />
  Sebelum menyetor dana, tanyakan pada diri sendiri apa tujuan investasi Anda. Apakah untuk dana darurat, dana pensiun, atau membeli rumah impian? Tujuan yang jelas akan membantu Anda menentukan instrumen investasi yang paling cocok.</p>

  <p><strong>2. Pahami Profil Risiko Anda</strong><br />
  Setiap investasi memiliki risiko. Apakah Anda tipe konservatif yang mengutamakan keamanan dana, tipe moderat, atau tipe agresif yang siap dengan fluktuasi nilai demi imbal hasil tinggi? Pilih produk investasi yang sesuai dengan toleransi risiko Anda.</p>

  <p><strong>3. Mulai dengan Instrumen Risiko Rendah</strong><br />
  Untuk pemula, sangat disarankan untuk mencoba investasi pada instrumen dengan risiko rendah, seperti:<br />
  Reksa Dana Pasar Uang (RDPU)<br />
  Deposito Bank<br />
  Surat Berharga Negara (SBN)</p>

  <p><strong>4. Lakukan Diversifikasi (Jangan Taruh Telur di Satu Keranjang)</strong><br />
  Jangan menginvestasikan seluruh dana Anda hanya pada satu jenis aset. Bagilah dana investasi Anda di berbagai instrumen. Jika kinerja salah satu instrumen sedang turun, instrumen lainnya bisa menutupi kerugian tersebut.</p>

  <p><strong>5. Gunakan Prinsip Dollar-Cost Averaging</strong><br />
  Ini adalah metode di mana Anda secara rutin berinvestasi dengan jumlah dana yang sama setiap bulannya, tanpa menghiraukan kondisi pasar. Sangat efektif untuk membangun disiplin dan mengurangi dampak fluktuasi harga aset.</p>

  <p><strong>Kesimpulan</strong><br />
  Investasi bukanlah skema cepat kaya, melainkan cara melindungi dan menumbuhkan aset dari laju inflasi. Mulailah dari sekarang dengan nominal yang Anda mampu, dan teruslah perbanyak literasi keuangan Anda.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop',
    category: 'Investment',
    tags: ['investasi', 'pemula', 'saham'],
    author: {
      name: 'Maya Lestari',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      role: 'Investment Writer',
    },
    views: 31452,
    readTime: 7,
    publishedAt: '2025-05-05',
  },
  {
    id: 'article-4',
    slug: 'metode-50-30-20',
    title: 'Metode 50/30/20: Aturan Budgeting yang Mudah Dipraktikkan',
    excerpt: 'Bagi gaji bulananmu menjadi 3 kategori sederhana: kebutuhan, keinginan, dan tabungan.',
    content: `<p>Mengatur keuangan tidak perlu menjadi sesuatu yang membuat stres. Salah satu metode budgeting yang paling praktis dan populer di seluruh dunia adalah aturan 50/30/20. Diciptakan oleh Senator Elizabeth Warren, metode ini sangat mudah diterapkan untuk menjaga kondisi finansial tetap sehat.</p>

    <p><strong>1. Alokasi 50%: Kebutuhan Pokok (Needs)</strong><br />
    Setengah dari pemasukan bersih Anda harus disisihkan untuk kebutuhan mutlak yang tanpanya Anda tidak bisa beraktivitas dengan baik. Ini mencakup hal-hal esensial setiap bulan:<br />
    Uang sewa rumah/kos atau cicilan KPR<br />
    Kebutuhan makan sehari-hari<br />
    Biaya transportasi<br />
    Tagihan utilitas (listrik, air, asuransi, dll)</p>

    <p><strong>2. Alokasi 30%: Keinginan Pribadi (Wants)</strong><br />
    Mengatur keuangan bukan berarti dilarang bersenang-senang. 30% dari penghasilan dialokasikan untuk memanjakan diri demi menjaga keseimbangan psikologis Anda:<br />
    Menonton bioskop, makan di restoran, atau nongkrong<br />
    Berlangganan Netflix, Spotify, gym<br />
    Membeli pakaian baru atau gawai</p>

    <p><strong>3. Alokasi 20%: Tabungan & Investasi (Savings)</strong><br />
    Sisa 20% merupakan fondasi masa depan Anda. Dana ini sama sekali tidak boleh diganggu gugat untuk keperluan lain di luar peruntukannya:<br />
    Membangun dana darurat (3-6 kali pengeluaran bulanan)<br />
    Investasi di reksadana, saham, atau emas<br />
    Melunasi hutang di luar cicilan kebutuhan (seperti pinjaman online)</p>

    <p><strong>4. Otomasi Keuangan Anda</strong><br />
    Supaya disiplin, atur agar tabungan dan transfer pembayaran tagihan dilakukan secara otomatis (autodebet) pada hari Anda gajian. Hal ini mencegah uang tersebut terpakai untuk keinginan sesaat.</p>

    <p><strong>5. Fleksibilitas Aturan</strong><br />
    Jika proporsi 50% untuk kebutuhan masih dirasa kurang (terutama karena inflasi yang tinggi), Anda bisa menyesuaikannya menjadi 60/20/20, dengan mengorbankan porsi keinginan (Wants). Prioritas utama adalah menabung tetap ada.</p>

    <p><strong>Kesimpulan</strong><br />
    Metode 50/30/20 membantu Anda melihat gambaran besar tentang arah uang Anda setiap bulan tanpa harus mencatat setiap sen secara berlebihan. Jika disiplin menjalankan prinsip ini, kesehatan finansial sangat terjamin.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=800&fit=crop',
    category: 'Budgeting',
    tags: ['budgeting', 'aturan keuangan', 'metode 50-30-20'],
    author: {
      name: 'Reza Mahendra',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      role: 'Financial Planner',
    },
    views: 18720,
    readTime: 5,
    publishedAt: '2025-05-08',
  },
  {
    id: 'article-5',
    slug: 'kelola-hutang-pinjol',
    title: 'Cara Keluar dari Hutang Pinjol dengan Bijak',
    excerpt: 'Strategi terukur untuk melunasi hutang dan membangun kembali kesehatan finansial.',
    content: `<p>Jeratan hutang Pinjaman Online (Pinjol), terutama yang berbunga tinggi atau ilegal, seringkali memicu kecemasan dan menghancurkan rencana finansial seseorang. Jika saat ini Anda sedang terjebak di dalamnya, jangan panik. Berikut adalah cara strategis untuk keluar dari hutang pinjol.</p>

    <p><strong>1. Berhenti Melakukan Gali Lubang Tutup Lubang</strong><br />
    Kesalahan terbesar yang sering dilakukan adalah mengajukan pinjaman di platform baru untuk menutup pinjaman lama. Hal ini hanya akan memperbesar tumpukan bunga dan kerugian yang Anda tanggung. Hentikan mengambil hutang baru detik ini juga.</p>

    <p><strong>2. Data Seluruh Detail Hutang Anda</strong><br />
    Ambil kertas dan pena, lalu catat secara rinci seluruh hutang pinjol Anda. Tuliskan nama platform, sisa pokok hutang, bunga yang berjalan, dan tanggal jatuh tempo. Ini memberikan gambaran yang jelas seburuk apa situasi hutang Anda.</p>

    <p><strong>3. Prioritaskan Melunasi Bunga Tertinggi (Metode Avalanche)</strong><br />
    Mulailah fokus melunasi aplikasi yang membebankan suku bunga dan denda keterlambatan yang paling tinggi terlebih dahulu. Setelah lunas, tutup dan hapus aplikasi tersebut, lalu gunakan alokasi dana tadi untuk melunasi hutang pinjol di aplikasi berikutnya.</p>

    <p><strong>4. Ajukan Restrukturisasi Keringanan</strong><br />
    Jika Anda meminjam dari Pinjol berlisensi OJK, hubungi layanan pelanggan mereka dan ajukan restrukturisasi. Anda bisa meminta potongan denda keterlambatan, meminta perpanjangan jangka waktu pinjaman, atau meminta keringanan bunga agar cicilan terasa lebih masuk akal.</p>

    <p><strong>5. Cairkan Aset dan Cari Pendapatan Tambahan</strong><br />
    Dalam keadaan darurat, juallah barang-barang yang masih memiliki nilai (gadget lama, tas, atau sepeda) untuk segera menutup hutang. Mulailah kerja paruh waktu atau freelance guna mempercepat penyelesaian pokok hutang.</p>

    <p><strong>Kesimpulan</strong><br />
    Keluar dari jeratan pinjol memang membutuhkan tekad yang sangat kuat untuk berhemat ekstrem dalam jangka waktu tertentu. Jadikan masa lalu sebagai pembelajaran pahit, dan mulai kelola keuangan yang lebih konservatif ke depannya.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop',
    category: 'Debt Management',
    tags: ['hutang', 'pinjol', 'keuangan sehat'],
    author: {
      name: 'Diana Wijaya',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
      role: 'Debt Counselor',
    },
    views: 28930,
    readTime: 9,
    publishedAt: '2025-05-10',
  },
  {
    id: 'article-6',
    slug: 'investasi-milenial-gen-z',
    title: 'Investasi Saham untuk Milenial & Gen Z: Start Small, Think Big',
    excerpt: 'Mulai berinvestasi dari modal kecil dan bangun portofolio untuk masa depan.',
    content: `<p>Kemudahan akses digital membuat banyak Milenial dan Gen Z mulai tertarik pada dunia investasi, khususnya pasar saham. Berbeda dengan generasi sebelumnya yang mengandalkan tabungan konvensional, anak muda kini bisa mulai memiliki kepemilikan aset dengan budget terbatas. Berikut adalah panduan dasarnya.</p>

    <p><strong>1. Ubah Mindset Tentang Saham</strong><br />
    Membeli saham pada dasarnya adalah "membeli bisnis" sebuah perusahaan yang berjalan, bukan sekadar bertaruh dari pergerakan grafik di layar ponsel. Temukan perusahaan yang fundamentalnya bagus dan produknya sering Anda konsumsi di dunia nyata.</p>

    <p><strong>2. Mulai dari Emiten Blue Chip</strong><br />
    Pemula sebaiknya menyasar saham-saham Blue Chip. Saham perusahaan berkapitalisasi pasar besar dan unggulan (misalnya perbankan kelas atas atau perusahaan barang konsumsi merata) cenderung lebih kebal terhadap krisis mendadak, serta rutin membagikan dividen. Risiko pun menjadi lebih kecil.</p>

    <p><strong>3. Strategi Disiplin Berkala (DCA)</strong><br />
    Alih-alih menyetor dana secara sporadis dan menebak kapan harga tengah murah, generasi muda jauh lebih disarankan menerapkan _Dollar Cost Averaging_ (DCA). Secara mekanikal, belilah saham pada tanggal yang sama di setiap bulan menggunakan sisa gaji secara pasif dan disiplin.</p>

    <p><strong>4. Modal Kecil Tidak Masalah</strong><br />
    Hanya karena harga beberapa jenis saham unggulan terlihat mahal, tidak berarti berinvestasi butuh miliaran Rupiah. Terapkan strategi untuk membeli produk saham yang sesuai budget karena di BEI 1 lot bernilai 100 lembar. Mulailah dengan Rp 100.000 secara perlahan ketimbang tidak sama sekali.</p>

    <p><strong>5. Gunakan "Uang Dingin"</strong><br />
    Hanya berinvestasilah dengan "uang dingin" yaitu dana yang tidak akan Anda perlukan untuk kehidupan sehari-hari (atau cicilan pinjaman) setidaknya hingga 3 sampai 5 tahun ke depan agar mental Anda stabil manakala pasar fluktuatif.</p>

    <p><strong>Kesimpulan</strong><br />
    Dengan investasi sejak dini dan memanfaatkan efek bunga berbunga (_compound interest_), masa depan generasi milenial dan Gen Z akan memiliki kepastian yang lebih tinggi. Kuncinya bukanlah kecepatan return harian yang eksploitatif, tapi konsistensi dalam kurun waktu hingga puluhan tahun.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    category: 'Investment',
    tags: ['saham', 'milenial', 'gen-z', 'portofolio'],
    author: {
      name: 'Kevin Pratama',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      role: 'Stock Analyst',
    },
    views: 42100,
    readTime: 10,
    publishedAt: '2025-05-12',
  },
];
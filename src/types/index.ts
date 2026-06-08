export interface User {
  id: string;
  email: string;
  password: string;
  fullName: string;
  phoneNumber?: string;
  avatar?: string;
  role: 'user' | 'admin';
  status: 'active' | 'banned';
}

export interface CurriculumModule {
  id: string;
  title: string;
  lessons: number;
  duration: string;
  isPreview?: boolean;
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
  author: {
    name: string;
    avatar: string;
    role: string;
  };
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
  category: 'course' | 'consultation' | 'premium' | 'ebook' ;
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
  user: {
    name: string;
    avatar: string;
  };
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
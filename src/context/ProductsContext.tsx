import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Product } from '../types';
import { mockProducts } from '../data/mockProducts';

interface ProductsContextValue {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'slug' | 'rating' | 'reviewCount' | 'salesCount'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => Product | undefined;
  getProductBySlug: (slug: string) => Product | undefined;
}

const ProductsContext = createContext<ProductsContextValue | undefined>(undefined);

const STORAGE_KEY = 'fintrace_products';

// Helper to generate slug from name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper to generate ID
const generateId = (): string => {
  return `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

interface ProductsProviderProps {
  children: ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedProducts = JSON.parse(stored);
        console.log('Products loaded from localStorage:', parsedProducts);
        setProducts(parsedProducts);
      } catch (error) {
        console.error('Failed to parse products from localStorage:', error);
        setProducts(mockProducts);
      }
    } else {
      console.log('No products in localStorage, using mockProducts');
      setProducts(mockProducts);
    }
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }
  }, [products]);

  const addProduct = (productData: Omit<Product, 'id' | 'slug' | 'rating' | 'reviewCount' | 'salesCount'>) => {
    const newProduct: Product = {
      id: generateId(),
      slug: generateSlug(productData.name),
      rating: 0,
      reviewCount: 0,
      salesCount: 0,
      ...productData,
    };
    setProducts((prev) => [newProduct, ...prev]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              ...updates,
              // Update slug if name changed
              ...(updates.name && { slug: generateSlug(updates.name) }),
            }
          : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const getProductById = (id: string) => {
    return products.find((product) => product.id === id);
  };

  const getProductBySlug = (slug: string) => {
    return products.find((product) => product.slug === slug);
  };

  const value: ProductsContextValue = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductBySlug,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProductsContext(): ProductsContextValue {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }
  return context;
}

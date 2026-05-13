import React, { createContext, useContext, useMemo, useState } from 'react';
import type { CartItem, Product } from '../types';
import { mockProducts } from '../data/mockProducts';

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CART_STORAGE_KEY = 'fintrace_cart';

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const storedItems = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedItems) {
      return [{ product: mockProducts[0], quantity: 1 }];
    }

    try {
      return JSON.parse(storedItems) as CartItem[];
    } catch {
      return [{ product: mockProducts[0], quantity: 1 }];
    }
  });

  const persistItems = (nextItems: CartItem[]) => {
    setItems(nextItems);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextItems));
  };

  const addItem = (product: Product, quantity = 1) => {
    const existingItem = items.find((item) => item.product.id === product.id);

    if (existingItem) {
      persistItems(
        items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
      return;
    }

    persistItems([...items, { product, quantity }]);
  };

  const removeItem = (productId: string) => {
    persistItems(items.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => persistItems([]);

  const value = useMemo<CartContextValue>(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    return {
      items,
      addItem,
      removeItem,
      clearCart,
      totalItems,
      totalPrice,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within CartProvider');
  }

  return context;
}
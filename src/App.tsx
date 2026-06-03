import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ArticlesProvider } from './context/ArticlesContext';
import { ProductsProvider } from './context/ProductsContext';


export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ArticlesProvider>
          <ProductsProvider>
            <RouterProvider router={router} />
          </ProductsProvider>
        </ArticlesProvider>
      </CartProvider>
    </AuthProvider>
  );
}
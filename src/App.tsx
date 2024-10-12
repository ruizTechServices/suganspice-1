import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import { CartProvider } from '@/contexts/CartContext';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ProductList />
              </div>
              <div className="lg:col-span-1">
                <Cart />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
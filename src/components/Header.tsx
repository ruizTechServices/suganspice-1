import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Suga N Spice</h1>
        <Button variant="secondary" className="w-full sm:w-auto">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </Button>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ScrollArea } from '@/components/ui/scroll-area';

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Shopping Cart</CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ScrollArea className="h-[50vh]">
            <ul className="space-y-2">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center p-2 bg-secondary rounded-md">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm text-muted-foreground ml-2">x {item.quantity}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">${(item.price * item.quantity).toFixed(2)}</span>
                    <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        )}
        <div className="mt-4 font-bold text-lg">Total: ${total.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
        <Button>Checkout</Button>
      </CardFooter>
    </Card>
  );
};

export default Cart;
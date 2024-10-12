import { Product } from '@/types';

export const products: Product[] = [
  // Empanadas
  { id: 'emp1', name: 'Spicy Fiesta Empanada', description: 'A spicy and flavorful empanada', price: 4, category: 'Empanadas' },
  { id: 'emp2', name: 'Southwestern Empanada', description: 'Empanada with a southwestern twist', price: 3, category: 'Empanadas' },
  { id: 'emp3', name: 'Mucho Queso Empanada', description: 'Cheese-filled empanada', price: 3, category: 'Empanadas' },

  // Drinks
  { id: 'drk1', name: 'Iced Tea', description: 'Refreshing iced tea', price: 4, category: 'Drinks' },
  { id: 'drk2', name: 'Lemonade', description: 'Fresh squeezed lemonade', price: 4, category: 'Drinks' },
  { id: 'drk3', name: 'Arnold Palmer', description: 'Half iced tea, half lemonade', price: 4, category: 'Drinks' },
  { id: 'drk4', name: 'Passion Fruit', description: 'Tropical passion fruit drink', price: 4, category: 'Drinks' },

  // Churros
  { id: 'chr1', name: 'Plain Churros (3 pieces)', description: 'Classic churros', price: 5, category: 'Churros' },
  { id: 'chr2', name: 'Plain Churros (5 pieces)', description: 'Classic churros', price: 7, category: 'Churros' },
  { id: 'chr3', name: 'Stuffed Churros (3 pieces)', description: 'Churros with filling', price: 7, category: 'Churros' },
  { id: 'chr4', name: 'Stuffed Churros (5 pieces)', description: 'Churros with filling', price: 9, category: 'Churros' },
  { id: 'chr5', name: 'Dipped Churros (3 pieces)', description: 'Churros dipped in chocolate', price: 10, category: 'Churros' },
  { id: 'chr6', name: 'Dipped Churros (5 pieces)', description: 'Churros dipped in chocolate', price: 12, category: 'Churros' },
  { id: 'chr7', name: 'Chocolate Chip Stuffed Churros (3 pieces)', description: 'Churros stuffed with chocolate chips', price: 5, category: 'Churros' },
  { id: 'chr8', name: 'Chocolate Chip Stuffed Churros (5 pieces)', description: 'Churros stuffed with chocolate chips', price: 7, category: 'Churros' },
  { id: 'chr9', name: 'Chocolate Chip Dipped Churros (3 pieces)', description: 'Churros with chocolate chips, dipped in chocolate', price: 5, category: 'Churros' },
  { id: 'chr10', name: 'Chocolate Chip Dipped Churros (5 pieces)', description: 'Churros with chocolate chips, dipped in chocolate', price: 7, category: 'Churros' },
  { id: 'chr11', name: 'Dulce De Leche Stuffed Churros (3 pieces)', description: 'Churros stuffed with dulce de leche', price: 7, category: 'Churros' },
  { id: 'chr12', name: 'Dulce De Leche Stuffed Churros (5 pieces)', description: 'Churros stuffed with dulce de leche', price: 9, category: 'Churros' },
  { id: 'chr13', name: 'Dulce De Leche Dipped Churros (3 pieces)', description: 'Churros dipped in dulce de leche', price: 10, category: 'Churros' },
  { id: 'chr14', name: 'Dulce De Leche Dipped Churros (5 pieces)', description: 'Churros dipped in dulce de leche', price: 12, category: 'Churros' },

  // Sauces
  { id: 'sau1', name: 'Cookie Butter Sauce', description: 'Creamy cookie butter sauce', price: 0.5, category: 'Sauces' },
  { id: 'sau2', name: 'White Chocolate Sauce', description: 'Sweet white chocolate sauce', price: 0.5, category: 'Sauces' },
  { id: 'sau3', name: 'Dark Chocolate Sauce', description: 'Rich dark chocolate sauce', price: 0.5, category: 'Sauces' },

  // Toppings
  { id: 'top1', name: 'Walnuts', description: 'Crunchy walnut topping', price: 0.5, category: 'Toppings' },
  { id: 'top2', name: 'M&M', description: 'Colorful M&M topping', price: 0.5, category: 'Toppings' },
  { id: 'top3', name: 'Powder Sugar', description: 'Sweet powdered sugar topping', price: 0.5, category: 'Toppings' },
  { id: 'top4', name: 'Pretzel', description: 'Salty pretzel topping', price: 0.5, category: 'Toppings' },
];
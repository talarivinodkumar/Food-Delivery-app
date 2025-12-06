// src/App.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CartModal from './components/CartModal';
import Footer from './components/Footer';

import { menuItems } from './data/menuItems';

const theme = {
  primary: '#f20b0bff',
  secondary: '#004E89',
  accent: '#fffcf6ff',
  success: '#06D6A0',
  danger: '#baa8adff',
  light: '#F7F9FB',
  dark: '#8d9eedff',
  white: '#FFFFFF'
};

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentTheme] = useState(theme);

  const addToCart = (item) => {
    const existing = cart.find(ci => ci.id === item.id);
    if (existing) {
      setCart(cart.map(ci => ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(ci => ci.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCart(cart.map(ci => ci.id === id ? { ...ci, quantity } : ci));
    }
  };

  const cartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <div style={{ backgroundColor: currentTheme.light, minHeight: '100vh' }}>
      <Navbar cartCount={cartCount} setShowCart={setShowCart} currentTheme={currentTheme} />
      <Hero currentTheme={currentTheme} />
      <MenuSection
        items={menuItems}
        addToCart={addToCart}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        currentTheme={currentTheme}
      />
      <CartModal
        show={showCart}
        setShow={setShowCart}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        currentTheme={currentTheme}
      />
      <Footer currentTheme={currentTheme} />
    </div>
  );
}

export default App;

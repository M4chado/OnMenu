// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import OrderSuccess from './pages/OrderSuccess';
import NotFound from './pages/NotFound';
import Checkout from './pages/Checkout';

function AppContent() {
  // 1. Inicializa o carrinho buscando do LocalStorage (se existir)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('onmenu_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  // 2. Sempre que o carrinho mudar, salva no LocalStorage
  useEffect(() => {
    localStorage.setItem('onmenu_cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing 
        ? prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.reduce((acc, item) => {
      if (item.id === id) {
        return item.quantity === 1 ? acc : [...acc, { ...item, quantity: item.quantity - 1 }];
      }
      return [...acc, item];
    }, []));
  };

  const handleFinalizeOrder = (orderType) => {
    setCart([]); // Limpa o estado
    localStorage.removeItem('onmenu_cart'); // Limpa a memória
    navigate('/sucesso', { state: { orderType } });
  };

  return (
    <Routes>
      <Route path="/" element={
          <MainLayout 
            cart={cart} 
            isCartOpen={isCartOpen} 
            setIsCartOpen={setIsCartOpen} 
            onAdd={handleAddToCart}
            onRemove={handleRemoveFromCart}
          />
      }>
        <Route index element={<Home onAdd={handleAddToCart} />} />
        <Route path="produto/:id" element={<ProductDetails onAdd={handleAddToCart} />} />
        
        {/* ROTA DE CHECKOUT */}
        <Route path="checkout" element={
            <Checkout cart={cart} onFinalizeOrder={handleFinalizeOrder} />
        } />
        
        <Route path="sucesso" element={<OrderSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
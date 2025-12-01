// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // Adicionei useLocation
import CartModal from '../components/CartModal';

const MainLayout = ({ cart, isCartOpen, setIsCartOpen, onAdd, onRemove }) => {
  const location = useLocation();

  // Lista de páginas onde o carrinho NÃO deve aparecer
  const hideCartOnPages = ['/checkout', '/sucesso'];
  
  // Verifica se a página atual está na lista acima
  const showCart = cart.length > 0 && !hideCartOnPages.includes(location.pathname);

  return (
    <div className="app-container">
      {/* Renderiza a página atual (Home, Checkout, etc) */}
      <Outlet />

      {/* Só mostra o carrinho se tiver itens E não estiver no checkout/sucesso */}
      {showCart && (
        <CartModal 
          cart={cart} 
          isOpen={isCartOpen} 
          setIsOpen={setIsCartOpen}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      )}
    </div>
  );
};

export default MainLayout;
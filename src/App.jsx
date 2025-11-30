// src/App.jsx
import React, { useState } from 'react';
// Removida a importação de Menu e Search
import { products, categories } from './data/products';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import CartModal from './components/CartModal';

function App() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- LÓGICA DO CARRINHO ---
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        }
        return [...acc, item];
      }, []);
    });
  };

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="app-container">
      
      {/* --- CABEÇALHO LIMPO --- */}
      <header className="header-container">
        
        {/* REMOVIDA A BARRA SUPERIOR COM OS ÍCONES */}

        {/* Área do Banner e Logo */}
        <div style={headerStyles.bannerArea}>
            <img 
                src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80" 
                alt="Interior do restaurante" 
                style={headerStyles.bannerImage}
            />
            
            <div style={headerStyles.logoContainer}>
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/2252/2252075.png" 
                    alt="Logo OnMenu" 
                    style={headerStyles.logoImage}
                />
            </div>
        </div>

        {/* Informações do Restaurante */}
        <div style={headerStyles.infoArea}>
            <h1 style={headerStyles.restaurantName}>OnMenu Sushi Bar</h1>
            
            <div style={{ marginBottom: '10px' }}>
                <span style={headerStyles.statusBadge}>Aberto</span>
            </div>

            <p style={headerStyles.detailsText}>
                 🕐 40-50 min • Mínimo R$ 30,00
            </p>
        </div>

      </header>

      {/* Filtros */}
      <div className="filter-container" style={{ position: 'sticky', top: 0, backgroundColor: '#ffffff', zIndex: 10, borderBottom: '1px solid #f0f0f0' }}>
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />
      </div>

      {/* Lista de Produtos */}
      <main style={{ paddingBottom: '100px' }}>
        <h2 style={{ fontSize: '18px', margin: '16px', paddingLeft: '4px' }}>
          {activeCategory === 'todos' ? 'Destaques' : categories.find(c => c.id === activeCategory)?.name}
        </h2>
        
        <div className="product-grid">
          {filteredProducts.map((produto) => (
            <ProductCard 
              key={produto.id} 
              product={produto} 
              onAdd={() => handleAddToCart(produto)}
            />
          ))}
        </div>
      </main>

      {/* Modal do Carrinho */}
      {cart.length > 0 && (
        <CartModal 
          cart={cart} 
          isOpen={isCartOpen} 
          setIsOpen={setIsCartOpen}
          onAdd={handleAddToCart}
          onRemove={handleRemoveFromCart}
        />
      )}
    </div>
  );
}

// --- ESTILOS ---
const headerStyles = {
    // topBar removido
    bannerArea: {
        position: 'relative',
        marginBottom: '40px',
    },
    bannerImage: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        // Removi o border-radius para ficar totalmente integrado as bordas se necessário
        borderTopLeftRadius: '0px', 
        borderTopRightRadius: '0px',
    },
    logoContainer: {
        position: 'absolute',
        bottom: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '4px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    logoImage: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'contain',
        display: 'block',
    },
    infoArea: {
        textAlign: 'center',
        padding: '0 16px',
    },
    restaurantName: {
        fontSize: '22px',
        fontWeight: '700',
        color: 'var(--text-dark)',
        marginBottom: '8px',
    },
    statusBadge: {
        display: 'inline-block',
        backgroundColor: 'var(--status-green)',
        color: '#fff',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: '600',
    },
    detailsText: {
        color: '#666',
        fontSize: '13px',
    }
};

export default App;
// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Conceito: Link para navegação
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

const Home = ({ onAdd }) => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div>
      {/* Banner e Cabeçalho */}
      <header className="header-container">
        <div style={{ position: 'relative', marginBottom: '40px' }}>
            <img 
                src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80" 
                alt="Banner" 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '-30px', left: '50%', transform: 'translateX(-50%)', padding: '4px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/2252/2252075.png" alt="Logo" style={{ width: '80px', height: '80px', borderRadius: '50%', display: 'block' }} />
            </div>
        </div>
        <div style={{ textAlign: 'center', padding: '0 16px' }}>
            <h1 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>OnMenu Sushi Bar</h1>
            <span style={{ backgroundColor: 'var(--status-green)', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>Aberto</span>
            <p style={{ color: '#666', fontSize: '13px', marginTop: '8px' }}>🕐 40-50 min • Mínimo R$ 30,00</p>
        </div>
      </header>

      {/* Filtros */}
      <div className="filter-container" style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 10 }}>
        <CategoryFilter categories={categories} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      </div>

      {/* Lista de Produtos */}
      <main style={{ paddingBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', margin: '16px', paddingLeft: '16px' }}>
          {activeCategory === 'todos' ? 'Destaques' : categories.find(c => c.id === activeCategory)?.name}
        </h2>
        
        <div className="product-grid">
          {filteredProducts.map((produto) => (
            // Envolvemos o card num Link para ir para os detalhes
            <div key={produto.id} style={{ position: 'relative' }}>
                <Link to={`/produto/${produto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ProductCard product={produto} onAdd={(e) => {
                        e.preventDefault(); // Evita abrir a página de detalhes ao clicar no botão +
                        onAdd(produto);
                    }} />
                </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
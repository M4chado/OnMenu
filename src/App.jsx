// src/App.jsx
import React from 'react';
import { products } from './data/products';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Cabeçalho Simples */}
      <header style={{ padding: '20px', borderBottom: '1px solid #eee' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '24px' }}>OnMenu 🍣</h1>
        <p style={{ color: '#666' }}>O melhor da culinária japonesa</p>
      </header>

      {/* Lista de Produtos */}
      <main style={{ padding: '16px' }}>
        <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Destaques</h2>
        
        {products.map((produto) => (
          <ProductCard key={produto.id} product={produto} />
        ))}
      </main>
    </div>
  );
}

export default App;
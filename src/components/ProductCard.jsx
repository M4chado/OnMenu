// src/components/ProductCard.jsx
import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
      />
      
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px', color: '#1a1a1a' }}>
            {product.name}
        </h3>
        
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px', lineHeight: '1.4', flex: 1 }}>
            {product.description}
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary-color)' }}>
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          
          <button className="add-btn" onClick={onAdd} title="Adicionar ao carrinho">
            <Plus size={20} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
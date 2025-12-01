// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Hooks do Router
import { products } from '../data/products';
import { ArrowLeft, Plus } from 'lucide-react';

const ProductDetails = ({ onAdd }) => {
  const { id } = useParams(); // Conceito: Captura o ID da URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Produto não encontrado</div>;

  return (
    <div style={{ paddingBottom: '100px', backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Botão Voltar */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
        <Link to="/" style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '50%', display: 'flex', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', color: '#333' }}>
            <ArrowLeft size={24} />
        </Link>
      </div>

      <img src={product.image} alt={product.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      
      <div style={{ padding: '24px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>{product.name}</h1>
        <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '16px' }}>
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <p style={{ color: '#666', lineHeight: '1.6' }}>{product.description}</p>
        
        <div style={{ marginTop: '40px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Ingredientes</h3>
            <p style={{ color: '#666' }}>Arroz japonês, alga nori, gergelim torrado e recheio selecionado.</p>
        </div>
      </div>

      {/* Botão Fixo de Adicionar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '20px', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <button 
            onClick={() => onAdd(product)}
            style={{ width: '100%', padding: '16px', backgroundColor: 'var(--primary-color)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
            Adicionar à Sacola
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      
      <div style={styles.content}>
        <h3 style={styles.title}>{product.name}</h3>
        <p style={styles.description}>{product.description}</p>
        
        <div style={styles.footer}>
          <span style={styles.price}>
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          
          <button style={styles.button}>
            <Plus size={20} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Estilos CSS-in-JS (simples para este momento)
const styles = {
  card: {
    backgroundColor: 'var(--card-bg)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
  },
  content: {
    padding: '12px',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '4px',
    color: 'var(--text-dark)',
  },
  description: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '12px',
    lineHeight: '1.4',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'var(--primary-color)',
  },
  button: {
    backgroundColor: 'var(--primary-color)',
    border: 'none',
    borderRadius: '8px',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }
};

export default ProductCard;
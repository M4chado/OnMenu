// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', marginTop: '100px' }}>
      <h1>404</h1>
      <p>Ops! Parece que esse prato não está no cardápio.</p>
      <Link to="/" style={{ color: 'var(--primary-color)', marginTop: '20px', display: 'inline-block' }}>Voltar ao início</Link>
    </div>
  );
};

export default NotFound;
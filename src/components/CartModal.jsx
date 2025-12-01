// src/components/CartModal.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, X, Minus, Plus, Trash2 } from 'lucide-react';

const CartModal = ({ cart, isOpen, setIsOpen, onAdd, onRemove }) => {
  const navigate = useNavigate();
  
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // MODO FECHADO (Barra inferior)
  if (!isOpen) {
    return (
      <div style={styles.bottomBar} onClick={() => setIsOpen(true)}>
        <div style={styles.bagIcon}>
          <ShoppingBag size={20} color="#fff" />
          <span style={styles.badge}>{totalItems}</span>
        </div>
        <div style={{ flex: 1, color: '#fff' }}>
          <p style={{ fontSize: '12px' }}>Total do pedido</p>
          <p style={{ fontWeight: 'bold' }}>
            {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Ver sacola</span>
      </div>
    );
  }

  // MODO ABERTO
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        
        <div style={styles.modalHeader}>
          <h2>Sua Sacola</h2>
          <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
            <X size={24} />
          </button>
        </div>

        <div style={styles.modalContent}>
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#999', marginTop: '40px' }}>Sua sacola está vazia.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '16px' }}>{item.name}</h4>
                  <p style={{ color: '#666', fontSize: '14px', margin: '4px 0' }}>
                    {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>
                
                <div style={styles.qtyControl}>
                  <button onClick={() => onRemove(item.id)} style={styles.qtyBtn}>
                    {item.quantity === 1 ? <Trash2 size={16} color="red" /> : <Minus size={16} />}
                  </button>
                  
                  {/* AQUI ESTAVA O PROBLEMA: Certifique-se de que só tem {item.quantity} aqui dentro */}
                  <span style={{ fontWeight: '600', minWidth: '24px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  
                  <button onClick={() => onAdd(item)} style={styles.qtyBtn}>
                    <Plus size={16} color="var(--primary-color)" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={styles.modalFooter}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Total</span>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
            </div>
            
            <button 
                type="button" 
                style={styles.checkoutBtn} 
                onClick={() => {
                    setIsOpen(false);
                    navigate('/checkout');
                }}
            >
                Ir para Pagamento
            </button>
        </div>

      </div>
    </div>
  );
};

const styles = {
  bottomBar: {
    position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
    width: '90%', maxWidth: '450px', backgroundColor: 'var(--primary-color)',
    borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center',
    gap: '16px', boxShadow: '0 4px 20px rgba(211, 47, 47, 0.4)', cursor: 'pointer', zIndex: 100,
  },
  bagIcon: { position: 'relative', display: 'flex', alignItems: 'center' },
  badge: {
    position: 'absolute', top: '-8px', right: '-8px', backgroundColor: '#fff',
    color: 'var(--primary-color)', borderRadius: '50%', width: '18px', height: '18px',
    fontSize: '11px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 200, display: 'flex',
    justifyContent: 'center', alignItems: 'flex-end',
  },
  modal: {
    backgroundColor: '#fff', width: '100%', maxWidth: '500px', height: '85vh',
    borderTopLeftRadius: '20px', borderTopRightRadius: '20px', display: 'flex',
    flexDirection: 'column',
  },
  modalHeader: {
    padding: '20px', borderBottom: '1px solid #eee', display: 'flex',
    justifyContent: 'space-between', alignItems: 'center',
  },
  closeBtn: { background: 'none', border: 'none', cursor: 'pointer', color: '#333' },
  modalContent: { flex: 1, overflowY: 'auto', padding: '20px' },
  cartItem: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: '20px', borderBottom: '1px solid #f9f9f9', paddingBottom: '16px',
  },
  qtyControl: {
    display: 'flex', alignItems: 'center', gap: '8px',
    backgroundColor: '#f5f5f5', padding: '6px', borderRadius: '8px',
  },
  qtyBtn: {
    background: '#fff', border: 'none', width: '32px', height: '32px',
    borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  modalFooter: { padding: '20px', borderTop: '1px solid #eee', backgroundColor: '#fff' },
  checkoutBtn: {
    width: '100%', padding: '16px', backgroundColor: 'var(--primary-color)', color: '#fff',
    border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer',
  }
};

export default CartModal;
// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Store, Bike, CreditCard, DollarSign } from 'lucide-react';

const Checkout = ({ cart, onFinalizeOrder }) => {
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState('retirada');
  
  const totalItems = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = orderType === 'entrega' ? 5.00 : 0;
  const finalTotal = totalItems + deliveryFee;

  const handleFinish = (e) => {
    e.preventDefault();
    onFinalizeOrder(orderType); 
  };

  // Se o carrinho estiver vazio (ex: F5 na página), volta pra home
  if (cart.length === 0) {
     /* DICA: Se quiser ativar a proteção contra F5, descomente a linha abaixo.
       Por enquanto deixei comentado para você testar sem ser expulso.
     */
     // setTimeout(() => navigate('/'), 100); 
     // return null; 
  }

  return (
    <div style={{ paddingBottom: '100px', backgroundColor: '#fff', minHeight: '100vh' }}>
      
      {/* Header */}
      <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link to="/" style={{ color: '#333' }}><ArrowLeft /></Link>
        <h2 style={{ fontSize: '18px', margin: 0 }}>Finalizar Pedido</h2>
      </div>

      <div style={{ padding: '20px' }}>
        
        {/* Abas */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '30px' }}>
            <button type="button" onClick={() => setOrderType('retirada')} style={orderType === 'retirada' ? styles.activeTab : styles.tab}>
                <Store size={20} /> Retirada
            </button>
            <button type="button" onClick={() => setOrderType('entrega')} style={orderType === 'entrega' ? styles.activeTab : styles.tab}>
                <Bike size={20} /> Entrega
            </button>
        </div>

        <form onSubmit={handleFinish}>
            
            {orderType === 'retirada' && (
                <div style={styles.card}>
                    <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Retirar na Loja</h3>
                    <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                        Seu pedido estará pronto em aproximadamente <strong>40 minutos</strong>.<br/>
                        Você será notificado pelo painel quando estiver pronto.
                    </p>
                    <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f9f9f9', borderRadius: '8px', fontSize: '13px' }}>
                        📍 <strong>Endereço:</strong> Rua dos Sushis, 123 - Centro
                    </div>
                </div>
            )}

            {orderType === 'entrega' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h3 style={{ fontSize: '16px' }}>Endereço de Entrega</h3>
                    <input type="text" placeholder="Rua / Avenida" style={styles.input} required />
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input type="text" placeholder="Número" style={{ ...styles.input, width: '30%' }} required />
                        <input type="text" placeholder="Bairro" style={{ ...styles.input, flex: 1 }} required />
                    </div>
                    <input type="text" placeholder="Complemento (Opcional)" style={styles.input} />

                    <h3 style={{ fontSize: '16px', marginTop: '10px' }}>Pagamento</h3>
                    <div style={styles.card}>
                        <label style={styles.radioLabel}>
                            <input type="radio" name="payment" defaultChecked /> 
                            <CreditCard size={18} /> Cartão (Maquininha)
                        </label>
                        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '10px 0'}} />
                        <label style={styles.radioLabel}>
                            <input type="radio" name="payment" /> 
                            <DollarSign size={18} /> Dinheiro / Pix
                        </label>
                    </div>
                </div>
            )}

            {/* Resumo */}
            <div style={{ marginTop: '30px', marginBottom: '40px' }}>
                <div style={styles.row}>
                    <span>Subtotal</span>
                    <span>{totalItems.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
                {orderType === 'entrega' && (
                    <div style={styles.row}>
                        <span>Taxa de Entrega</span>
                        <span>{deliveryFee.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                )}
                <div style={{ ...styles.row, marginTop: '16px', fontSize: '18px', fontWeight: 'bold' }}>
                    <span>Total</span>
                    <span style={{ color: 'var(--primary-color)' }}>
                        {finalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                </div>
            </div>

            {/* --- BOTÃO FLUTUANTE ESTILO SACOLA --- */}
            {/* Mudei o estilo aqui para ficar idêntico ao da Home */}
            <div style={styles.floatingButtonContainer}>
                <button type="submit" style={styles.confirmBtn}>
                    Confirmar Pedido • {finalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </button>
            </div>

        </form>
      </div>
    </div>
  );
};

const styles = {
    tab: {
        flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #eee',
        backgroundColor: '#fff', color: '#666', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600'
    },
    activeTab: {
        flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid var(--primary-color)',
        backgroundColor: '#FFF0F0', color: 'var(--primary-color)', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 'bold'
    },
    input: {
        width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', outline: 'none'
    },
    card: {
        padding: '16px', borderRadius: '12px', border: '1px solid #eee', backgroundColor: '#fff'
    },
    radioLabel: {
        display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px'
    },
    row: {
        display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#555'
    },
    // Estilos do container flutuante (Cópia da lógica do CartModal)
    floatingButtonContainer: {
        position: 'fixed', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '90%', 
        maxWidth: '450px',
        zIndex: 100,
    },
    // Estilo do Botão Vermelho
    confirmBtn: {
        width: '100%', 
        padding: '16px', 
        backgroundColor: 'var(--primary-color)', // Vermelho
        color: '#fff',
        border: 'none', 
        borderRadius: '12px', 
        fontSize: '16px', 
        fontWeight: 'bold', 
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(211, 47, 47, 0.4)' // Sombra vermelha
    }
};

export default Checkout;
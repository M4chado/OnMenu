// src/pages/OrderSuccess.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation recupera dados passados na navegação
import { CheckCircle, MapPin, Bike } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  // Pega o tipo do pedido (padrão é 'entrega' se não vier nada)
  const orderType = location.state?.orderType || 'entrega';

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }}>
      
      <div style={{ marginBottom: '24px' }}>
         <CheckCircle size={80} color="var(--status-green)" />
      </div>

      <h1 style={{ marginBottom: '12px' }}>Pedido Confirmado!</h1>
      
      {/* Mensagem Dinâmica */}
      {orderType === 'retirada' ? (
        <div style={{ backgroundColor: '#f0f9ff', padding: '16px', borderRadius: '12px', marginBottom: '30px' }}>
            <p style={{ fontWeight: 'bold', color: '#005f99', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <MapPin size={20} /> Retirada na Loja
            </p>
            <p style={{ color: '#555', marginTop: '8px', fontSize: '14px' }}>
                Aguarde! Avisaremos quando estiver pronto no balcão.
            </p>
        </div>
      ) : (
        <div style={{ backgroundColor: '#f0fff4', padding: '16px', borderRadius: '12px', marginBottom: '30px' }}>
            <p style={{ fontWeight: 'bold', color: 'var(--status-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Bike size={20} /> Entrega em Andamento
            </p>
            <p style={{ color: '#555', marginTop: '8px', fontSize: '14px' }}>
                O motoboy logo sairá com seu pedido. Prepare o pagamento.
            </p>
        </div>
      )}
      
      <Link to="/" style={{ padding: '16px 32px', backgroundColor: 'var(--primary-color)', color: '#fff', textDecoration: 'none', borderRadius: '12px', fontWeight: 'bold' }}>
        Voltar ao início
      </Link>
    </div>
  );
};

export default OrderSuccess;
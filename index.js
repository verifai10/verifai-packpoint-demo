
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const transactions = [
  {
    id: 1,
    platform: "Wallapop",
    status: "Validado",
    date: "2025-04-16",
    sellerImages: ["/img/seller1.jpg", "/img/seller2.jpg"],
    lockerImages: ["/img/locker1.jpg", "/img/locker2.jpg"]
  },
  {
    id: 2,
    platform: "Vinted",
    status: "Rechazado",
    date: "2025-04-15",
    sellerImages: ["/img/seller3.jpg", "/img/seller4.jpg"],
    lockerImages: ["/img/locker3.jpg", "/img/locker4.jpg"]
  }
];

function App() {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Mis transacciones VerifAI</h1>
      {transactions.map(tx => (
        <div key={tx.id} style={{ marginBottom: 30 }}>
          <h2>{tx.platform} — {tx.status}</h2>
          <p>Fecha: {tx.date}</p>
          <strong>Imágenes del vendedor:</strong>
          <div style={{ display: "flex", gap: 10 }}>
            {tx.sellerImages.map((src, i) => (
              <img key={i} src={src} width="150" alt={`seller-${i}`} />
            ))}
          </div>
          <strong>Imágenes del PackPoint:</strong>
          <div style={{ display: "flex", gap: 10 }}>
            {tx.lockerImages.map((src, i) => (
              <img key={i} src={src} width="150" alt={`locker-${i}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

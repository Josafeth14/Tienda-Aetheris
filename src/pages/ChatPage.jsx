// src/pages/ChatPage.jsx

import React from 'react'; // <-- Importación fundamental
import './ChatPage.css';   // <-- Estilos

const ChatPage = () => {
  // Datos de ejemplo para que no esté vacío. Puedes borrarlo después.
  const exampleConversations = [
    { id: 1, name: 'VendedorDeZapatillas', lastMessage: 'Hola, ¿siguen disponibles?' },
    { id: 2, name: 'CompradorInteresado', lastMessage: 'Te ofrezco $60.' },
  ];

  return (
    <div className="chat-page-layout">
      <aside className="conversations-list">
        <div className="chat-header"><h2>Chats</h2></div>
        {exampleConversations.length > 0 ? (
          <ul className="conversations-ul">
            {exampleConversations.map(convo => (
              <li key={convo.id} className="conversation-item">
                <div className="convo-avatar"></div>
                <div className="convo-details">
                  <p className="convo-name">{convo.name}</p>
                  <p className="convo-last-message">{convo.lastMessage}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-conversations">No tienes conversaciones activas.</p>
        )}
      </aside>
      <main className="chat-window">
        <div className="no-chat-selected">
          <h2>Bienvenido a tu mensajería</h2>
          <p>Selecciona una conversación para empezar a chatear.</p>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
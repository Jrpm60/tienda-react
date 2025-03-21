import React, { useState } from "react";
import "./Chat.css";

const Chat = ({ placeholder = "Escribe un mensaje...", initialMessages = [] }) => {
  const [messages, setMessages] = useState(initialMessages); // Mensajes actuales
  const [inputMessage, setInputMessage] = useState(""); // Entrada del usuario
  const [isChatOpen, setIsChatOpen] = useState(false); // Controla la visibilidad del chat

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      // Añadir el mensaje del usuario
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: inputMessage },
      ]);
      setInputMessage("");

      // Simular respuesta automática
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Gracias por tu consulta. Estamos aquí para ayudarte." },
        ]);
      }, 1000);
    }
  };

  const toggleChat = () => {
    if (isChatOpen) {
      // Si el chat estaba abierto y ahora se cierra, borrar los mensajes
      setMessages([]);
    }
    setIsChatOpen(!isChatOpen); // Alternar la visibilidad del chat
  };

  return (
    <>
      <div className={`chat-floating-button ${isChatOpen ? "open" : ""}`} onClick={toggleChat}>
        💬 
      </div>
      <div>
        <h6>Powered by Copilot </h6>
      </div>

      {isChatOpen && (
        <div className="chat-container">
          <div className="chat-header">
            Chat de Consultas
            <span className="close-chat" onClick={toggleChat}>
              ✖
            </span>
            
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.sender === "user" ? "user" : "bot"}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder={placeholder}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button className="chat-send-button" onClick={handleSendMessage}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;


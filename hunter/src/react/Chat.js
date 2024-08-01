import React, { useEffect, useState } from 'react';
const { GoogleGenerativeAI } = require('@google/generative-ai');

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [disablebtn , setdisablebtn] = useState(false)

  const genAI = new GoogleGenerativeAI('AIzaSyA2yE3nNNUtIDct0tpjXrgTkKMHkMe0WcA');
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, user: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      setdisablebtn(true)
      const result = await model.generateContent(input);
      const res = await result?.response.text();

      const botMessage = { text: res, user: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error generating content:', error);
    }

    setInput('');
    setdisablebtn(false)
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <h1>Your AI Assistant</h1>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              <strong>{message.user === 'user' ? 'You' : 'Bot'}: </strong>{message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message"
          />
          <button onClick={handleSend} disabled={disablebtn}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

import React, { useState } from 'react';
import axios from 'axios';

const ChatWindow = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (message.trim() === '') return;
    const userMessage = { role: 'user', content: message };
    setChat([...chat, userMessage]);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/chat', { message });
      const botMessage = { role: 'bot', content: response.data.response };
      setChat([...chat, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="fixed bottom-20 right-5 bg-white border border-gray-300 rounded-lg shadow-lg w-[33rem] h-[33rem] flex flex-col z-10">
      <div className="flex justify-between items-center bg-blue-500 text-white p-3 rounded-t-lg">
        <h3>Chatbot</h3>
        <button onClick={onClose} className="text-white">X</button>
      </div>
      <div className="flex-1 p-3 overflow-y-scroll">
        {/* {chat.map((msg, index) => (
          <div key={index} className={`my-2 p-2 ${msg.role === 'user' ? 'text-right' : 'text-left'} ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'} rounded`}>
            {msg.content}
          </div>
        ))} */}

        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user" />
            </div>
          </div>
          <div className="chat-header">
            Ai
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">How can i help you..?</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            Priya
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">What is Pradhan Mantri Suraksha Bima Yojana..</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user" />
            </div>
          </div>
          <div className="chat-header">
            Ai
            <time className="text-xs opacity-50">12:47</time>
          </div>
          <div className="chat-bubble">Pradhan Mantri Suraksha Bima Yojana (PMSBY) is an accident insurance scheme offering coverage for accidental death and disability. The annual premium is Rs. 20, auto-debited from the account holder’s bank or post office account. Coverage lasts one year from June 1st to May 31st and ends when the member turns 70 or the account is closed.</div>
        </div>
      </div>
      <div className="flex p-2 border-t border-gray-300">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded ml-2">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;

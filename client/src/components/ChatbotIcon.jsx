import React from 'react';

const ChatbotIcon = ({ onClick }) => (
  <div
    className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer z-10"
    onClick={onClick}
  >
   Ask me Anything 💬
  </div>
);

export default ChatbotIcon;

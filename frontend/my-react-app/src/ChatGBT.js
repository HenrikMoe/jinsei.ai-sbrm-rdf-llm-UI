import React, { useState } from 'react';
import './ChatGBT.css'; // Import the CSS file
import { sendChatRequest } from './frontendApi'; // Import the frontend API

const ChatGBT = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  const chatResponse = await sendChatRequest(input);
    setResponse(chatResponse);
  };

  return (
    <div className="chat-container">
      <form className="chat-form" onSubmit={handleSubmit}>
        <label htmlFor="input">Jinsei Chat:</label>
        <input
          type="text"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="chat-response">
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatGBT;

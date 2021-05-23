import React, { useState } from 'react';

import ChatWindow from '../components/ChatWindow';
import Message from '../components/Message';
import UserInput from '../components/UserInput';

function Homepage() {
  const [messages, setMessages] = useState([]);

  function handleSubmit(message) {
    setMessages([...messages, message]);
  }

  return (
    <>
      <UserInput onSubmit={handleSubmit} />
      <ChatWindow>
        {messages.map(({
          timestamp, name, body, received,
        }) => (
          <Message key={timestamp} name={name} body={body} received={received} />
        ))}
      </ChatWindow>
    </>
  );
}

export default Homepage;

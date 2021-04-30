import React, { useState } from 'react';

import Layout from '../components/Layout';
import ChatWindow from '../components/ChatWindow';
import Message from '../components/Message';
import UserInput from '../components/UserInput';

function Homepage() {
  const [messages, setMessages] = useState([]);

  function handleSubmit(message) {
    setMessages([...messages, message]);
  }

  return (
    <Layout>
      <UserInput onSubmit={handleSubmit} />
      <ChatWindow>
        {messages.map(({
          timestamp, name, body, received,
        }) => (
          <Message key={timestamp} name={name} body={body} received={received} />
        ))}
      </ChatWindow>
    </Layout>
  );
}

export default Homepage;

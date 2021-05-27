import React, { useState } from 'react';
import Head from 'next/head';

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
      <Head>
        <title>MS Teams Chat Generator</title>
        <meta name="description" content="It's a Microsoft Teams chat generator." />
      </Head>
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

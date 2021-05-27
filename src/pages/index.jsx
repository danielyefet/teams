import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { toJpeg } from 'html-to-image';

import ChatWindow from '../components/ChatWindow';
import Message from '../components/Message';
import UserInput from '../components/UserInput';

function Homepage() {
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null);

  function handleSubmit(message) {
    setMessages([...messages, message]);
  }

  async function handleCameraClick() {
    const dataUrl = await toJpeg(chatWindowRef.current, { quality: 100 });

    const link = document.createElement('a');
    link.download = 'teams-chat.jpg';
    link.href = dataUrl;
    link.click();
  }

  return (
    <>
      <Head>
        <title>MS Teams Chat Generator</title>
        <meta name="description" content="It's a Microsoft Teams chat generator." />
      </Head>
      <UserInput onSubmit={handleSubmit} onCameraClick={handleCameraClick} />
      <ChatWindow ref={chatWindowRef}>
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

import { useState, useRef } from 'react';
import Head from 'next/head';
import { toJpeg } from 'html-to-image';

import ChatWindow from '../components/ChatWindow';
import Message from '../components/Message';
import Header from '../components/Header';

function Homepage() {
  const [messages, setMessages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  function handleRemoveMessage(timestamp) {
    setMessages(messages.filter((message) => message.timestamp !== timestamp));
  }

  return (
    <>
      <Head>
        <title>MS Teams Chat Generator</title>
        <meta name="description" content="It's a Microsoft Teams chat generator." />
      </Head>
      <Header
        toggleIsOn={isDarkMode}
        onSubmit={handleSubmit}
        onCameraClick={handleCameraClick}
        onDarkModeToggle={setIsDarkMode}
      />
      <ChatWindow darkMode={isDarkMode} ref={chatWindowRef}>
        {messages.map(({
          timestamp, name, body, received,
        }) => (
          <Message key={timestamp} timestamp={timestamp} onRemove={handleRemoveMessage} darkMode={isDarkMode} name={name} body={body} received={received} />
        ))}
      </ChatWindow>
    </>
  );
}

export default Homepage;

import { useState, useRef } from 'react';
import Head from 'next/head';
import { toJpeg } from 'html-to-image';

import ChatWindow from '../components/ChatWindow';
import Message from '../components/Message';
import Header from '../components/Header';
import Controls from '../components/Controls';

function Homepage() {
  const [messages, setMessages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const chatWindowRef = useRef(null);

  function handleSubmit(message) {
    const previousMessage = messages[messages.length - 1] || {};

    setMessages([...messages, {
      ...message,
      isContinuation: previousMessage.name === message.name,
    }]);
  }

  async function handleDownload() {
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
        <title>TeamsMemes | Microsoft Teams Chat Meme Creator</title>
        <meta name="description" content="Fake Microsoft Teams chat generator." />
      </Head>
      <Header onSubmit={handleSubmit} />
      <Controls toggleIsOn={isDarkMode} onDarkModeToggle={setIsDarkMode} onDownload={handleDownload} />
      <ChatWindow darkMode={isDarkMode} ref={chatWindowRef}>
        {messages.map(({
          avatar, body, isContinuation, name, received, timestamp,
        }) => (
          <Message
            avatar={avatar}
            body={body}
            darkMode={isDarkMode}
            isContinuation={isContinuation}
            key={timestamp}
            name={name}
            onRemove={handleRemoveMessage}
            received={received}
            timestamp={timestamp}
          />
        ))}
      </ChatWindow>
    </>
  );
}

export default Homepage;

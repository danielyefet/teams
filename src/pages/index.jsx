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
        <title>Microsoft Teams Chat Generator</title>
        <meta name="description" content="It's a Microsoft Teams chat generator." />
      </Head>
      <Header
        toggleIsOn={isDarkMode}
        onSubmit={handleSubmit}
        onDownload={handleDownload}
        onDarkModeToggle={setIsDarkMode}
      />
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

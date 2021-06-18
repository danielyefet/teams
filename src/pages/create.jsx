import { useState, useRef } from 'react';
import Head from 'next/head';
import { toJpeg } from 'html-to-image';

import ChatWindow from '../components/ChatWindow';
import Message from '../components/Message';
import Header from '../components/Header';
import Controls from '../components/Controls';
import Button from '../components/Button';

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
        <title>TeamsMemes | Microsoft Teams conversation generator</title>
        <meta name="description" content="Create your own Microsoft Teams conversation." />
      </Head>
      <div className="max-w-md mx-auto">
        <h1 className="mb-8 text-center text-gray-800 text-xl font-semibold">Ready, steady, chat!</h1>
        <Header onSubmit={handleSubmit} />
        <Controls
          toggleIsOn={isDarkMode}
          onDarkModeToggle={setIsDarkMode}
          onDownload={handleDownload}
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
        <div className="flex justify-center">
          <Button
            className="mt-4"
            icon={(
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
              </svg>
          )}
            onClick={handleDownload}
            text="Download"
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;

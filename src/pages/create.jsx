import { useState, useRef } from 'react';
import Head from 'next/head';
import { toJpeg } from 'html-to-image';
import { useRouter } from 'next/router';

import { MEME_WIDTH } from '../constants';

import ChatWindow from '../components/ChatWindow';
import Message from '../components/Message';
import Header from '../components/Header';
import Controls from '../components/Controls';
import Button from '../components/Button';

import { uploadImage } from '../utils/cloudinary';

function Homepage() {
  const [messages, setMessages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const chatWindowRef = useRef(null);
  const router = useRouter();

  async function createImage() {
    setIsCreating(true);
    chatWindowRef.current.style.width = MEME_WIDTH;
    const image = await toJpeg(chatWindowRef.current, { quality: 100 });
    chatWindowRef.current.style.width = 'auto';
    setIsCreating(false);
    return image;
  }

  function handleSubmit(message) {
    const previousMessage = messages[messages.length - 1] || {};

    setMessages([...messages, {
      ...message,
      isContinuation: previousMessage.name === message.name,
    }]);
  }

  async function handleDownloadClick() {
    gtag('event', 'download');
    const image = await createImage();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'teamsmemes-chat';
    link.click();
  }

  async function handlePublishClick() {
    gtag('event', 'publish');
    setIsPublishing(true);

    const image = await createImage();
    const { public_id: publicId } = await uploadImage(image);

    router.push(`/memes/${publicId}`);
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
        <div className="max-w-meme mx-auto">
          <Controls
            toggleIsOn={isDarkMode}
            onDarkModeToggle={setIsDarkMode}
          />
          <div className="relative overflow-hidden">
            <div
              className={`${isCreating ? 'opacity-100 z-10' : 'transition-all duration-700 opacity-0 z-0'} ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} border-gray-400 border-2 border-dashed flex items-center justify-center absolute w-full h-full top-0 left-0`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <ChatWindow photomode={isCreating} darkMode={isDarkMode} ref={chatWindowRef}>
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
          </div>
        </div>
        <div className="flex justify-center py-4">
          <Button
            disabled={!messages.length}
            className="mr-2"
            icon={(
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
          )}
            onClick={handleDownloadClick}
            text="Download"
          />
          <Button
            disabled={!messages.length}
            icon={(
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
              </svg>
          )}
            loading={isPublishing}
            onClick={handlePublishClick}
            text="Publish"
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;

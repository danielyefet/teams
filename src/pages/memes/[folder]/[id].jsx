import { useRef, useState } from 'react';
import Head from 'next/head';
import Input from '../../../components/Input';

function Meme({ query }) {
  const inputRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const { id, folder } = query;
  const image = `https://res.cloudinary.com/teamsmemes/image/upload/${folder}/${id}.jpg`;
  const url = `https://www.teamsmemes.com/memes/${folder}/${id}`;

  function selectInputText() {
    const input = inputRef.current;
    input.select();
    input.setSelectionRange(0, 99999);
  }

  function handleCopyClick() {
    selectInputText();
    document.execCommand('copy');
    inputRef.current.blur();
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@teams_memes" />
        <meta name="twitter:title" content="TeamsMemes" />
        <meta name="twitter:description" content="Microsoft Teams chat generator" />
        <meta name="twitter:image" content={image} />
      </Head>
      <img
        className="mx-auto w-full max-w-meme block"
        src={image}
        alt={`TeamsMemes - ${id}`}
      />
      <div className="flex justify-center mt-4">
        <div className="w-72 h-11 flex relative mr-2">
          <Input
            ref={inputRef}
            className="rounded-r-none"
            onClick={selectInputText}
            value={url}
          />
          <div
            className={`${isCopied ? 'opacity-100 -top-12' : 'opacity-0 -top-10'} transition-all duration-300 ease-out absolute -right-3 bg-gray-900 text-white text-xs p-2 rounded`}
          >
            Copied!
            <div className="absolute bg-gray-900 w-2 h-2 -bottom-0.5 left-1/2 transform rotate-45 -translate-x-1/2" />
          </div>
          <button
            className="bg-gray-300 rounded-r px-2"
            type="button"
            onClick={handleCopyClick}
          >
            {isCopied ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teams-status-available" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            )}
          </button>
        </div>
        <a
          aria-label="Twitter"
          className="bg-twitter p-3 h-11 text-white rounded"
          href={`https://twitter.com/intent/tweet?url=${url}&text=I did a funny!&via=teams_memes&hashtags=teamsmemes`}
          rel="noreferrer"
          target="_blank"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Meme;

export function getServerSideProps({ query }) {
  return {
    props: {
      query,
    },
  };
}

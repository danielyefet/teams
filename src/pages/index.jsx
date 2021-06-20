import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';
import lightChat from '../../public/chats/alan-partridge-light.jpg';
import darkChat from '../../public/chats/teams-slack-dark.jpg';

function Homepage() {
  return (
    <>
      <Head>
        <title>TeamsMemes | Microsoft Teams chat meme creator</title>
        <meta name="description" content="Fake Microsoft Teams chat generator" />
      </Head>
      <div className="px-4 pt-4 sm:pt-8 flex flex-col items-center text-center">
        <h1 className="text-gray-800 font-bold text-3xl sm:text-5xl mb-2 sm:mb-4">The Internet&apos;s #1 Microsoft Teams chat generator</h1>
        <h2 className="text-gray-600 text-lg sm:text-2xl mb-4 sm:mb-8">Showcase your wit through the medium of memes</h2>
        <Button className="mb-12 px-4 py-3" href="/create" text="GET STARTED" />
        <div className="flex flex-col sm:flex-row items-center max-w-xs sm:max-w-lg m-auto">
          <div className="transform rotate-3 sm:-rotate-3"><Image src={lightChat} alt="Light mode chat" /></div>
          <div className="transform -rotate-3 sm:rotate-3 -mt-4 sm:mt-4"><Image src={darkChat} alt="Dark mode chat" /></div>
        </div>
        <div className="transform rotate-3 shadow inline-block" />
      </div>
    </>
  );
}

export default Homepage;

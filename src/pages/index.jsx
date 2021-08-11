import Head from 'next/head';
import Hero from '../components/Hero';
import MemesGrid from '../components/MemesGrid';
import prisma from '../utils/prisma';

function Homepage({ memes }) {
  return (
    <>
      <Head>
        <title>TeamsMemes - Microsoft Teams chat meme creator</title>
        <meta name="description" content="Fake Microsoft Teams chat generator" />
      </Head>
      <Hero
        title="The Internet&apos;s #1 Microsoft Teams chat generator"
        subtitle="Create something funny, share it and bask in the instant gratification"
      />
      <section className="mt-12 sm:mt-16 p-8 text-center md:max-w-3/4 mx-auto">
        <h1 className="text-gray-800 font-semibold text-2xl mb-3">What&apos;s TeamsMemes?</h1>
        <p className="text-gray-500 text-sm">Great question! With TeamsMemes, you can create fake Microsoft Teams conversations that never happened in real life - think of the possibilities! Check out the showcase below for some inspiration.</p>
      </section>
      <MemesGrid
        title="Showcase"
        subtitle="Oh, the hilarity of it all!"
        memes={memes}
      />
    </>
  );
}

export async function getStaticProps() {
  const memes = (
    await prisma.meme.findMany({
      take: 8,
      where: {
        isShowcased: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  ).map((meme) => ({
    ...meme,
    createdAt: meme.createdAt.toString(),
  }));

  return {
    props: {
      memes,
    },
    revalidate: 1,
  };
}

export default Homepage;

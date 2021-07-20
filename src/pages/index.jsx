import Head from 'next/head';
import Hero from '../components/Hero';
import MemesGrid from '../components/MemesGrid';
import prisma from '../utils/prisma';

function Homepage({ memes }) {
  return (
    <>
      <Head>
        <title>TeamsMemes | Microsoft Teams chat meme creator</title>
        <meta name="description" content="Fake Microsoft Teams chat generator" />
      </Head>
      <Hero
        title="The Internet&apos;s #1 Microsoft Teams chat generator"
        subtitle="Create something funny, share it and bask in the instant gratification"
      />
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

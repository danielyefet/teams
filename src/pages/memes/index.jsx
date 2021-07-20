import prisma from '../../utils/prisma';
import MemesGrid from '../../components/MemesGrid';
import { isAdmin } from '../../utils/request';

function MemesPage({ memes }) {
  return (
    <MemesGrid
      title="Memes... everywhere!"
      subtitle="Oh, the hilarity of it all!"
      memes={memes}
    />
  );
}

export async function getServerSideProps({ req }) {
  const memes = (
    await prisma.meme.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  ).map((meme) => ({
    ...meme,
    createdAt: meme.createdAt.toString(),
  }));

  if (!isAdmin(req)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      memes,
    },
  };
}

export default MemesPage;

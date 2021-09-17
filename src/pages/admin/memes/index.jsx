import prisma from '../../../utils/prisma';
import MemesGrid from '../../../components/MemesGrid';
import { isAdmin } from '../../../utils/request';

function AdminMemesPage({ memes }) {
  return (
    <MemesGrid
      title="Admin all the memes!"
      subtitle="You have the powerrrrrrrrrr!"
      memes={memes}
      useAdmin
    />
  );
}

export async function getServerSideProps({ req }) {
  if (!isAdmin(req)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

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

  return {
    props: {
      memes,
    },
  };
}

export default AdminMemesPage;

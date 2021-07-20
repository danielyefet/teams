import { isAdmin } from '../../../utils/request';
import prisma from '../../../utils/prisma';

async function memesHandler(req, res) {
  if (req.method === 'POST') {
    if (!isAdmin(req)) return res.status(401).send('');

    const { body: data } = req;

    const meme = { ...data, createdAt: new Date(data.createdAt) };

    await prisma.meme.update({ where: { id: meme.id }, data: meme });

    return res.status(200).json(data);
  }

  return res.setHeader('Allow', 'POST').status(405).send('');
}

export default memesHandler;

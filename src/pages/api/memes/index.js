import prisma from '../../../utils/prisma';

async function memesHandler(req, res) {
  if (req.method === 'POST') {
    const { body: data } = req;

    await prisma.meme.create({ data });

    return res.status(200).json(data);
  }

  return res.setHeader('Allow', 'POST').status(405).send('');
}

export default memesHandler;

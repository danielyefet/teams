import slugify from 'slugify';
import { customAlphabet } from 'nanoid';

import { uploadImage } from './cloudinary';

const nanoId = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 12);

export async function saveMeme({ image, title }) {
  const { public_id: publicId } = await uploadImage(image);

  const meme = {
    title,
    image: `https://res.cloudinary.com/teamsmemes/image/upload/${publicId}.jpg`,
    slug: slugify(`${title}-${nanoId()}`, { lower: true, remove: /[!#]/g }),
  };

  await fetch('/api/memes', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify(meme),
  });

  return meme;
}

export default { saveMeme };

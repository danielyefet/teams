const URL = 'https://api.cloudinary.com/v1_1/teamsmemes/upload';
const URL_PRESET = 'ow7n4ioo';

export async function uploadImage(image) {
  const formData = new FormData();
  const { hostname } = window.location;

  formData.append('upload_preset', URL_PRESET);
  formData.append('folder', hostname === 'localhost' || hostname.includes('vercel') ? 'dev' : 'public');
  formData.append('file', image);

  let response = {};

  try {
    response = await fetch(URL, { method: 'POST', body: formData });
  } catch (error) {
    response.ok = false;
  }

  return response.ok ? response.json() : {};
}

export default { uploadImage };

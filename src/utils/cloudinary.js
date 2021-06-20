const URL = 'https://api.cloudinary.com/v1_1/teamsmemes/upload';
const URL_PRESET = 'ow7n4ioo';

export async function uploadImage(image) {
  const formData = new FormData();

  formData.append('upload_preset', URL_PRESET);
  formData.append('folder', window.location.hostname === 'localhost' ? 'dev' : 'public');
  formData.append('file', image);

  const response = await fetch(URL, { method: 'POST', body: formData });

  return response.ok ? response.json() : {};
}

export default { uploadImage };

import { useState } from 'react';

function AvatarUploader({ className, id, onUpload = () => {} }) {
  const [image, setImage] = useState();

  function handleImageUpload({ target }) {
    const src = URL.createObjectURL(target.files[0]);

    setImage(src);
    onUpload(src);
  }

  return (
    <div className={`${className ? `${className} ` : ''}w-11 h-11 relative flex-none`}>
      <label className="absolute cursor-pointer opacity-70 w-full h-full block z-10" htmlFor={id}>
        <input
          accept="image/*"
          className="hidden"
          id={id}
          name={id}
          onChange={handleImageUpload}
          type="file"
        />
      </label>
      {image ? <img className="absolute rounded-full w-full h-full object-cover" src={image} alt="Avatar" /> : (
        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default AvatarUploader;

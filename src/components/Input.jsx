import React from 'react';

function Input({
  id = '', placeholder = '', value = '', onChange = () => {},
}) {
  return (
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-2 md:mb-0 md:mr-2"
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

export default Input;

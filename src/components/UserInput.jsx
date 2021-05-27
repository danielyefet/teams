import React, { useState } from 'react';

import Input from './Input';

function UserInput({ onSubmit = () => {}, onCameraClick = () => {} }) {
  const [inputValues, setInputValues] = useState({
    name: '',
    body: '',
    received: false,
  });

  function handleChange({ target }) {
    const id = target.getAttribute('id');

    setInputValues({
      ...inputValues,
      [id]: id === 'received' ? !inputValues.received : target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      ...inputValues,
      timestamp: new Date().getTime(),
    });

    setInputValues({
      ...inputValues,
      body: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} className="pb-2 md:flex md:items-center p-2">
      <Input className="mb-2 md:mb-0 md:mr-2" id="name" value={inputValues.name} onChange={handleChange} placeholder="Name..." />
      <Input className="mb-2 md:mb-0 md:mr-2" id="body" value={inputValues.body} onChange={handleChange} placeholder="Message..." />
      <div className="flex items-center justify-end">
        <div className="flex items-center mr-2">
          <button
            className="mr-1 w-20 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded"
            type="submit"
          >
            {inputValues.received ? 'Receive' : 'Send'}
          </button>
          <svg id="received" onClick={handleChange} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer fill-current text-purple-500 hover:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </div>
        <svg onClick={onCameraClick} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </form>
  );
}

export default UserInput;

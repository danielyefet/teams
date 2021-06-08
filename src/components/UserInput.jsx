import { useState } from 'react';

import Input from './Input';

function UserInput({ onSubmit = () => {} }) {
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
    <form onSubmit={handleSubmit} className="sm:flex sm:items-center">
      <Input className="mb-2 w-full sm:mr-2 sm:w-52" id="name" value={inputValues.name} onChange={handleChange} placeholder="Name..." />
      <div className="flex items-center mb-2 flex-grow">
        <Input className="mr-2 w-full" id="body" value={inputValues.body} onChange={handleChange} placeholder="Message..." />
        <div className="flex items-center justify-end">
          <div className="flex items-center">
            <button
              className="mr-1 w-20 shadow bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded"
              type="submit"
            >
              {inputValues.received ? 'Receive' : 'Send'}
            </button>
            <svg id="received" onClick={handleChange} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer fill-current text-purple-600 hover:text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserInput;

import React, { useState } from 'react';

const styles = {
  input: 'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500',
};

function UserInput({ onSubmit }) {
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
    <form onSubmit={handleSubmit} className="pb-2 md:flex md:items-center">
      <input
        className={`${styles.input} mb-2 md:mb-0 md:mr-2`}
        id="name"
        onChange={handleChange}
        placeholder="Name..."
        type="text"
        value={inputValues.name}
      />
      <input
        className={`${styles.input} mb-2 md:mb-0 md:mr-2`}
        id="body"
        onChange={handleChange}
        placeholder="Message..."
        type="text"
        value={inputValues.body}
      />
      <div className="flex items-center justify-end">
        <button
          className="mr-2 w-20 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded"
          type="submit"
        >
          {inputValues.received ? 'Recieve' : 'Send'}

        </button>
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          id="received"
          onClick={handleChange}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      </div>
    </form>
  );
}

export default UserInput;

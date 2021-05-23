import React, { useState } from 'react';

import styles from './styles.module.scss';

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
    <form className={styles.UserInput} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        id="name"
        onChange={handleChange}
        placeholder="Name..."
        type="text"
        value={inputValues.name}
      />
      <input
        className={styles.input}
        id="body"
        onChange={handleChange}
        placeholder="Message..."
        type="text"
        value={inputValues.body}
      />
      <button className={styles.button} type="submit">{inputValues.received ? 'Recieve' : 'Send'}</button>
      <svg
        className={styles.sendRecieveIcon}
        fill="none"
        id="received"
        onClick={handleChange}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    </form>
  );
}

export default UserInput;

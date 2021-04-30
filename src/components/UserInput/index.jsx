import React, { useState } from 'react';

import styles from './styles.module.scss';

function UserInput({ onSubmit }) {
  const [inputValues, setInputValues] = useState({
    name: '',
    body: '',
    received: false,
  });

  function handleChange({ target }) {
    setInputValues({
      ...inputValues,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      ...inputValues,
      timestamp: new Date().getTime(),
    });
  }

  return (
    <form className={styles.UserInput} onSubmit={handleSubmit}>
      <input className={styles.input} name="name" type="text" value={inputValues.name} onChange={handleChange} />
      <input className={styles.input} name="body" type="text" value={inputValues.body} onChange={handleChange} />
      <input className={styles.input} name="received" type="checkbox" checked={inputValues.received} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
}

export default UserInput;

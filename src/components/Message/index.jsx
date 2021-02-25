import React from 'react';

import styles from './styles.module.scss';

function Message({ body, name, received }) {
  return (
    <div className={[styles.Message, (received ? styles.received : '')].join(' ')}>
      <p className={styles.name}>{name}</p>
      <p className={styles.body}>{body}</p>
    </div>
  );
}

export default Message;

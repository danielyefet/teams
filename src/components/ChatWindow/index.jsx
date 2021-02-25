import React from 'react';

import styles from './styles.module.scss';

function ChatWindow({ children }) {
  return (
    <section className={styles.ChatWindow}>
      {children}
    </section>
  );
}

export default ChatWindow;

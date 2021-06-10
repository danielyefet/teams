import React from 'react';

import styles from './styles.module.scss';

const ChatWindow = React.forwardRef(({ children, darkMode = false }, ref) => (
  <section ref={ref} className={`${styles.ChatWindow}${darkMode ? ` ${styles.darkMode}` : ''}`}>
    {children}
  </section>
));

export default ChatWindow;

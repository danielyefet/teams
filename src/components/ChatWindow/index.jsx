import React from 'react';

import styles from './styles.module.scss';

const ChatWindow = React.forwardRef(({ children }, ref) => (
  <section ref={ref} className={styles.ChatWindow}>
    {children}
  </section>
));

export default ChatWindow;

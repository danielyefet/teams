import React from 'react';

import styles from './styles.module.scss';

function Layout({ children }) {
  return (
    <section className={styles.Layout}>
      {children}
    </section>
  );
}

export default Layout;

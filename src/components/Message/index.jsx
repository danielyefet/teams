import styles from './styles.module.scss';

function Message({
  body = '', darkMode = false, name = '', received = false,
}) {
  return (
    <div className={`${styles.Message}${received ? ` ${styles.received}` : ''}${darkMode ? ` ${styles.darkMode}` : ''}`}>
      <p className={styles.name}>{name}</p>
      <p className={styles.body}>{body}</p>
    </div>
  );
}

export default Message;

import styles from './styles.module.scss';

function Message({
  body = '', timestamp = '', darkMode = false, name = '', received = false, onRemove = () => {},
}) {
  function handleButtonClick() {
    onRemove(timestamp);
  }

  return (
    <>
      <div className={`${styles.Message}${received ? ` ${styles.received}` : ''}${darkMode ? ` ${styles.darkMode}` : ''}`}>
        <div className={styles.options}>
          <button type="button" onClick={handleButtonClick} className={styles.removeButton}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="white">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.body}>{body}</p>
      </div>
    </>
  );
}

export default Message;

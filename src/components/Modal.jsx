import classNames from 'classnames';
import { useEffect, useState } from 'react';

function stopPropagation(event) {
  event.stopPropagation();
}

function Modal({
  children, onClose = () => {}, onOpen = () => {}, open = false,
}) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);

    if (open) onOpen();
  }, [onOpen, open]);

  function close() {
    setIsOpen(false);
    onClose();
  }

  function handleBackgroundClick() {
    close();
  }

  function handleBackgroundKeyDown({ key }) {
    if (key === 'Enter') close();
  }

  return (
    <div
      className={classNames(
        'bg-gray-900 bg-opacity-80 flex justify-center items-center cursor-default fixed top-0 left-0 w-full h-full z-50',
        { 'opacity-100 visible': isOpen },
        { 'opacity-0 invisible': !isOpen },
      )}
      role="button"
      tabIndex={0}
      onClick={handleBackgroundClick}
      onKeyDown={handleBackgroundKeyDown}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="bg-gray-50 p-8 rounded shadow"
        onClick={stopPropagation}
        onKeyDown={stopPropagation}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;

import React from 'react';

const ChatWindow = React.forwardRef(
  ({ children, className, darkMode = false }, ref) => (
    <section
      ref={ref}
      style={{ backgroundColor: darkMode ? '#201F1F' : '#F5F5F5' }}
      className={`${
        className ? `${className}` : ''
      } flex flex-col pt-0 pr-4 pb-4 pl-4`}
    >
      {children}
    </section>
  )
);

ChatWindow.displayName = 'ChatWindow';

export default ChatWindow;

import React from 'react';

const ChatWindow = React.forwardRef(({ children, darkMode = false }, ref) => (
  <section
    ref={ref}
    style={{ backgroundColor: darkMode ? '#201F1F' : '#F5F5F5' }}
    className="flex flex-col pt-0 pr-4 pb-4 pl-4"
  >
    {children}
  </section>
));

export default ChatWindow;

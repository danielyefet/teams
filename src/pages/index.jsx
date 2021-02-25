import React from 'react';

import ChatWindow from '../components/ChatWindow';
import Message from '../components/Message';

function Homepage() {
  return (
    <ChatWindow>
      <Message name="Dan" body="Hello there, how are you?!" />
      <Message name="Another Person" body="Not too baaaad!" received />
      <Message name="Dan" body="Great!" />
    </ChatWindow>
  );
}

export default Homepage;

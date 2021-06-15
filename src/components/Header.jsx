import { useState } from 'react';
import Person from './Person';

function Header({ onSubmit = () => {} }) {
  const [sendAvatar, setSendAvatar] = useState();
  const [receiveAvatar, setReceiveAvatar] = useState();

  function handleSend(message) {
    onSubmit({
      ...message,
      avatar: sendAvatar,
      received: false,
    });
  }

  function handleReceive(message) {
    onSubmit({
      ...message,
      avatar: receiveAvatar,
      received: true,
    });
  }

  return (
    <section>
      <div className="divide-y divide-dashed divide-gray-200">
        <Person id="person-1" onAvatarUpload={setSendAvatar} messagePlaceholder="Outgoing message" onMessage={handleSend} className="mb-2" />
        <Person id="person-2" onAvatarUpload={setReceiveAvatar} messagePlaceholder="Incoming message" onMessage={handleReceive} className="mb-4 pt-2" cta="Receive" />
      </div>
    </section>
  );
}

export default Header;

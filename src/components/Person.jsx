import AvatarUploader from './AvatarUploader';
import UserInput from './UserInput';

function Person({
  className, cta = 'Send', id, messagePlaceholder = 'Message', onAvatarUpload = () => {}, onMessage = () => {},
}) {
  return (
    <div className={`${className ? `${className} ` : ''}flex items-center`}>
      <AvatarUploader onUpload={onAvatarUpload} id={id} className="mr-2" />
      <UserInput className="w-full" onSubmit={onMessage} cta={cta} messagePlaceholder={messagePlaceholder} />
    </div>
  );
}

export default Person;

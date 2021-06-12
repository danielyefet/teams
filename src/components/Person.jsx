import AvatarUploader from './AvatarUploader';
import UserInput from './UserInput';

function Person({
  className, id, onMessage = () => {}, onAvatarUpload = () => {}, cta = 'Send',
}) {
  return (
    <div className={`${className ? `${className} ` : ''}flex items-center`}>
      <AvatarUploader onUpload={onAvatarUpload} id={id} className="mr-2" />
      <UserInput className="w-full" onSubmit={onMessage} cta={cta} />
    </div>
  );
}

export default Person;

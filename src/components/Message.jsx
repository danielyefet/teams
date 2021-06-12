function useLeadingZero(value) {
  return /^\d$/.test(value) ? `0${value}` : `${value}`;
}

function getColours(backgroundColor, color) {
  return { backgroundColor, color };
}

function getMessageStyle(received, darkMode) {
  if (received) return darkMode ? getColours('#2D2C2C', '#f7f7f7') : getColours('#FFFFFF', '#68686f');

  return darkMode ? getColours('#3A3B55', '#f7f7f7') : getColours('#EAEAF6', '#68686f');
}

function Options({ onRemove = () => {} }) {
  return (
    <div className="rounded-sm border-red-500 border-solid border absolute h-full w-full top-0 left-0 opacity-0 group-hover:opacity-100 transition-all">
      <button type="button" onClick={onRemove} className="absolute right-0 top-0 w-5 h-5 bg-red-500 flex justify-center items-center rounded-bl-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="white">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

function Message({
  avatar = '',
  body = '',
  darkMode = false,
  isContinuation = false,
  name = '',
  onRemove = () => {},
  received = false,
  timestamp = '',
}) {
  const date = new Date(timestamp);
  const hours = useLeadingZero(date.getHours());
  const minutes = useLeadingZero(date.getMinutes());
  const formatedTimestamp = `${hours}:${minutes}`;

  function handleRemove() {
    onRemove(timestamp);
  }

  return (
    <div className={`${received ? 'self-start flex-row-reverse' : 'self-end'} ${isContinuation ? 'mt-1.5' : 'mt-4'} ${isContinuation && avatar ? 'mr-10' : 'mr-0'} ${isContinuation && avatar && received ? 'ml-10' : 'ml-0'} max-w-3/4 flex items-center`}>
      <div
        style={getMessageStyle(received, darkMode)}
        className={`py-2 px-4 rounded-sm relative font-teams group ${received ? 'ml-2' : 'mr-2'}`}
      >
        <Options onRemove={handleRemove} />
        {!isContinuation && (
        <p className="text-xs font-bold mb-0.5">
          {name && <span className="mr-2.5">{name}</span>}
          {' '}
          <span className="font-normal">{formatedTimestamp}</span>
        </p>
        )}
        <p className="text-sm break-words">{body}</p>
      </div>
      {avatar && !isContinuation && <img className="w-10 h-10 rounded-full object-cover" src={avatar} alt={name} />}
    </div>
  );
}

export default Message;

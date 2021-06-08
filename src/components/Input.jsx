function Input({
  className = '', id = '', placeholder = '', value = '', onChange = () => {},
}) {
  return (
    <input
      className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500${className && ` ${className}`}`}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

export default Input;

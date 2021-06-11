function Input({
  className = '', name = '', placeholder = '', value = '', onChange = () => {},
}) {
  return (
    <input
      className={`${className ? `${className} ` : ''}bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

export default Input;

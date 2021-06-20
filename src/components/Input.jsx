import React from 'react';

const Input = React.forwardRef(({
  className = '', name = '', placeholder = '', value = '', onChange = () => {}, onClick = () => {}, onFocus = () => {},
}, ref) => (
  <input
    className={`${className ? `${className} ` : ''}bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teams-purple`}
    name={name}
    onClick={onClick}
    onChange={onChange}
    onFocus={onFocus}
    placeholder={placeholder}
    ref={ref}
    type="text"
    value={value}
  />
));

export default Input;

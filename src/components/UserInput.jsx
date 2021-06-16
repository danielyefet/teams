import { useState } from 'react';

import Input from './Input';

function UserInput({
  className = '', cta = 'Submit', messagePlaceholder = 'Message', onSubmit = () => {},
}) {
  const [inputValues, setInputValues] = useState({
    name: '',
    body: '',
  });

  function handleChange({ target }) {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      ...inputValues,
      timestamp: new Date().getTime(),
    });

    setInputValues({
      ...inputValues,
      body: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} className={`${className ? `${className} ` : ''}sm:flex sm:items-center`}>
      <Input className="mb-2 sm:mr-2 sm:w-52 sm:mb-0" name="name" value={inputValues.name} onChange={handleChange} placeholder="Username" />
      <div className="flex items-center flex-grow">
        <Input className="mr-2" name="body" value={inputValues.body} onChange={handleChange} placeholder={messagePlaceholder} />
        <div className="flex items-center justify-end">
          <button
            className="w-20 shadow bg-teams-purple hover:bg-teams-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded"
            type="submit"
          >
            {cta}
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserInput;

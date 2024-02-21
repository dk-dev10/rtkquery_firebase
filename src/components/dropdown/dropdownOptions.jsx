import { useState } from 'react';

const DropdownOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownItems = ['Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
        onClick={toggleDropdown}
      >
        Dropdown Button
        <svg
          className='fill-current h-4 w-4 ml-2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          {/* Dropdown icon */}
        </svg>
      </button>
      <ul
        className={`absolute ${
          isOpen ? 'block' : 'hidden'
        } bg-white text-gray-800 pt-1`}
      >
        {dropdownItems.map((item, index) => (
          <li key={index} className='hover:bg-gray-200 py-2 px-4'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownOptions;

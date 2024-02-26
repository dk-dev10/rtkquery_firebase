/* eslint-disable react/prop-types */
import useDropdown from 'hook/useDropdown';

const DropdownOptions = ({
  categorie,
  setCategoria,
  activeCategoria,
  disabled = false,
}) => {
  const { isDrop, setIsDrop, catMenu } = useDropdown();

  const handleChange = (item) => {
    setCategoria(item);
    setIsDrop(false);
  };

  return (
    <div
      ref={catMenu}
      className='flex items-center justify-center bg-white border border-slate-400  min-w-36 max-w-48 '
    >
      <div className='relative w-full px-4 py-2 '>
        <button
          className='flex items-center capitalize text-start  w-full h-full text-gray-600 rounded-full'
          onClick={() => setIsDrop((prev) => !prev)}
          type='button'
          disabled={disabled}
        >
          Categorie{activeCategoria ? `: ${activeCategoria}` : ''}
        </button>
        <div
          className={`absolute left-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${
            isDrop ? 'block' : 'hidden'
          }`}
        >
          <div className='p-2'>
            {categorie &&
              categorie.map((ctg, index) => (
                <button
                  type='button'
                  key={index + ctg}
                  onClick={() => handleChange(ctg)}
                  className='text-start block px-4 py-2 text-base capitalize text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 w-full'
                >
                  {ctg}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownOptions;

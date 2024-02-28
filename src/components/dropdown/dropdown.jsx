import { useAuth } from 'hook/useAuth';
import useDropdown from 'hook/useDropdown';
import { LogIn, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dropdown = ({ drops }) => {
  const { currentUser, logoutUser } = useAuth();
  const { catMenu, setIsDrop, isDrop } = useDropdown();

  return (
    <div
      ref={catMenu}
      className='flex items-center justify-center bg-white border border-gray-600 rounded-full w-9 h-9'
    >
      <div className='relative'>
        <button
          className='flex items-center justify-center w-full h-full text-gray-600 rounded-full'
          onClick={() => setIsDrop((prev) => !prev)}
        >
          <User />
        </button>
        <div
          className={`absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${
            isDrop ? 'block' : 'hidden'
          }`}
        >
          <ul className='p-2'>
            {drops.map((item) => (
              <li
                key={item.link + item.nav?.title}
                className='block px-4 py-2 text-base text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
              >
                <Link
                  to={item.link}
                  onClick={() => setIsDrop(false)}
                  className='block'
                >
                  {item.nav.title}
                </Link>
              </li>
            ))}
            <hr className='divide-x my-2' />
            {currentUser.id ? (
              <button
                className='flex items-center gap-3 w-full px-4 py-2 text-base text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                onClick={() => {
                  setIsDrop(false);
                  logoutUser();
                }}
              >
                Logout <LogOut className='text-base h-5' />
              </button>
            ) : (
              <Link
                className='flex items-center gap-2 w-full px-4 py-2 text-base text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'
                onClick={() => setIsDrop(false)}
                to='/login'
              >
                Login <LogIn className='text-base h-5 mt-[2px]' />
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

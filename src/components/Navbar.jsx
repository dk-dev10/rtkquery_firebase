import { logoutUser } from 'config/firebase';
import { AuthContext } from 'context/AuthContext';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const navs = [
    {
      to: '/create',
      title: 'Create',
    },
    {
      to: '/magazine',
      title: 'Magazine',
    },
    {
      to: '/author',
      title: 'Author',
    },
    {
      to: '/podcast',
      title: 'Podcast',
    },
  ];

  return (
    <div className='border-b border-black py-2 pt-5 mb-2 flex justify-between'>
      <Link to={'/'} className='text-xl font-semibold'>
        MAP Home
      </Link>
      {currentUser ? <button onClick={logoutUser}>logged</button> : 'logout'}

      <nav>
        <ul className='flex gap-5 items'>
          {navs.map((item) => (
            <li key={item.to + item.title}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-red-900 text-lg  ${
                    isActive ? 'text-red-900' : ''
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

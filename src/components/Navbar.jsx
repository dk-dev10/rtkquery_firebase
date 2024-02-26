// import { logoutUser } from 'config/firebase';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './dropdown/dropdown';

const Navbar = () => {
  const navs = [
    {
      to: '/',
      title: 'Home',
    },
    {
      to: '/magazine',
      title: 'Magazine',
    },
    {
      to: '/podcast',
      title: 'Podcast',
    },
    {
      to: '/author',
      title: 'Author',
    },
  ];

  return (
    <div className='border-b border-black py-2 pt-5 mb-2 flex justify-between'>
      <Link to={'/'} className='text-xl font-semibold'>
        MAP Home
      </Link>
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
      <Dropdown />
    </div>
  );
};

export default Navbar;

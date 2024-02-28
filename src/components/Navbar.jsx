// import { logoutUser } from 'config/firebase';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from './dropdown/dropdown';
import { routes } from 'utils/routes';

const Navbar = () => {
  const navs = routes.filter((nav) => nav.nav && nav.nav.type === 'nav');
  const drops = routes.filter((nav) => nav.nav && nav.nav.type === 'dropdown');

  return (
    <div className='border-b border-black py-2 pt-5 mb-2 flex justify-between w-[1400px] max-w-[90%] mx-auto'>
      <Link to={'/'} className='text-xl font-semibold'>
        MAP Home
      </Link>
      <nav>
        <ul className='flex gap-5 items'>
          {navs.map((item) => (
            <li key={item.link + item.nav?.title}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `hover:text-red-900 text-lg  ${
                    isActive ? 'text-red-900' : ''
                  }`
                }
              >
                {item.nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Dropdown drops={drops} />
    </div>
  );
};

export default Navbar;

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='border-b py-2 mb-2 flex justify-between'>
      <span>logo</span>
      <nav>
        <ul className='flex gap-5 items'>
          <li>
            <NavLink to='/' >Home</NavLink>
          </li>
          <li>
            <NavLink to='/create'>Create</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

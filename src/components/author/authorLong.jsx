import { Link } from 'react-router-dom';
import arrow from '../../assets/svg/min_arrow.svg';

const AuthorLong = () => {
  return (
    <div className='group/author w-full flex items-center gap-12'>
      <img
        className='inline-block h-150 w-150 rounded-full ring-2 ring-white grayscale group-hover/author:grayscale-0 transition-all'
        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        alt=''
      />
      <h3 className='text-3xl'>Jakob Grønberg</h3>
      <div className='flex gap-24 ml-auto '>
        <div className='font-light font-nutino text-base inline-flex'>
          <span className='font-semibold mr-2'>Job</span>
          <span className='ml-auto'>Artist</span>
        </div>
        <div className='font-light font-nutino text-base inline-flex'>
          <span className='font-semibold mr-2'>City</span>
          <span className='ml-auto'>New York</span>
        </div>
        <Link
          to='/author/21312412'
          className='group bg-none border-none uppercase text-lg flex items-center gap-2 pr-3 font-semibold'
        >
          About
          <img
            src={arrow}
            alt=''
            className='group-hover:translate-x-2 transition-all rotate-180'
          />
        </Link>
      </div>
    </div>
  );
};

export default AuthorLong;

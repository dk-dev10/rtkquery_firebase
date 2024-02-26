import { Link } from 'react-router-dom';
import arrow from '../../assets/svg/min_arrow.svg';

const AuthorLong = ({ data }) => {
  const { id, avatar, name } = data;

  return (
    <div className='group/author w-full flex items-center gap-12'>
      <div className='h-[150px] w-[150px] overflow-hidden'>
        <img
          className='inline-block w-full h-full rounded-full ring-2 ring-white grayscale group-hover/author:grayscale-0 transition-all'
          src={avatar}
          alt=''
        />
      </div>
      <h3 className='text-3xl'>{name}</h3>
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
          to={`/author/${id}`}
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

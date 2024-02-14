import { useNavigate } from 'react-router-dom';

import arrow from '../assets/svg/min_arrow.svg';

const GoBack = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className='w-full flex items-center py-8'>
      <button
        onClick={() => navigate(-1)}
        className='group bg-none border-none uppercase text-lg flex items-center gap-2 pl-3'
      >
        <img
          src={arrow}
          alt=''
          className='group-hover:-translate-x-1 transition-all'
        />
        Go back
      </button>
      <p className='uppercase text-3xl ml-auto'>{children}</p>
    </div>
  );
};

export default GoBack;

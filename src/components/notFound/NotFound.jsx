import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='w-full text-center h-[50vh] flex flex-col items-center justify-center'>
      <h1 className='text-9xl font-bold font-nutino '>404</h1>
      <p className='my-6 text-xl font-semibold text-slate-500'>
        Page Not Found !
      </p>
      <Link
        to='/'
        className='border border-slate-500 bg-white px-6 py-3 hover:border-[#c22322] hover:bg-[#c22322] hover:text-white transition-all text-slate-500'
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;

import { Link } from 'react-router-dom';

import arrow from '../../assets/svg/arrow.svg';
import minArrow from '../../assets/svg/min_arrow.svg';

const PodcastLong = () => {
  const img =
    'https://firebasestorage.googleapis.com/v0/b/kubablog.appspot.com/o/9dc03d822c4eee5a342aef1124a1633f.jpeg?alt=media&token=5bbc2127-9d2f-40cc-af3e-e746a00cc03a';

  return (
    <div className='group  w-full flex items-center justify-between'>
      <h4 className='text-2xl font-bold'>05</h4>
      <div
        style={{ '--image-url': `url(${img})` }}
        className={`w-[240px] flex flex-col aspect-square bg-slate-400 relative bg-[image:var(--image-url)] group-hover:bg-110  transition-all bg-100 bg-center p-4 bg-blend-multiply`}
      >
        <h3 className='uppercase text-3xl font-bold font-nutino text-white'>
          Fyrre
        </h3>
        <h5 className='uppercase text-base font-bold font-nutino text-white'>
          podcast
        </h5>
        <p className='text-white text-base font-semibold mt-auto'>EP 05</p>
        <img src={arrow} alt='' className='absolute bottom-4 right-4' />
      </div>
      <h3 className='uppercase text-3xl font-bold font-nutino w-[35%]'>
        The Problem of today’s cultural development
      </h3>
      <div className='flex items-center gap-6'>
        <p className='font-thin font-nutino text-sm'>
          <span className='font-semibold mr-2'>Date</span>
          16. March 2022
        </p>
        <p className='font-thin font-nutino text-sm'>
          <span className='font-semibold mr-2'>Duration</span>1 Min
        </p>
        <Link
          to={`/podcast/${23142}`}
          className='group/btn bg-none border-none uppercase text-lg flex items-center gap-2 pl-3 my-24 font-semibold hover:text-red-800'
        >
          Listen
          <img
            src={minArrow}
            alt='arrow icon'
            className='group-hover/btn:translate-x-1 transition-all rotate-180'
          />
        </Link>
      </div>
    </div>
  );
};

export default PodcastLong;

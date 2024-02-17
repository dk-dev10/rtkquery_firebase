import { Link } from 'react-router-dom';

const PodcastMedium = () => {
  return (
    <div className='max-w-[500px] h-full flex flex-col'>
      <div className='w-full h-1/1 aspect-square'>
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/kubablog.appspot.com/o/04b2ca955a39dd8c16d386753f8812f9.jpg?alt=media&token=52951250-abca-4066-8b92-c8d6f6fc3ab7'
          }
          className='w-full h-full object-cover aspect-square'
          alt='article photo'
          loading='lazy'
        />
      </div>
      <h1 className='text-xl font-bold uppercase leading-[120%] mt-8 mb-12'>
        <Link to={`/podcast/1243534f`} className='hover:text-red-800'>
          The Problem of today’s cultural development
        </Link>
      </h1>
      <div className='mt-auto flex items-center gap-6'>
        <p className='font-thin font-nutino text-xs'>
          <span className='font-semibold mr-2'>Date:</span>
          16.06.2022
        </p>
        <p className='font-thin font-nutino text-xs'>
          <span className='font-semibold mr-2'>Duration:</span>1 Min
        </p>
      </div>
    </div>
  );
};

export default PodcastMedium;

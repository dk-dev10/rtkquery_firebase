/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogVertical = ({
  title,
  description,
  date,
  categories,
  img,
  author,
  duration,
  id,
}) => {
  return (
    <div className='w-full h-full flex flex-col gap-4 max-w-[750px]'>
      <div className='flex items-center'>
        <p className='font-thin font-nutino text-sm'>
          {date ? date : '16. March 2022'}
        </p>
        <button className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase'>
          {categories ? categories : 'label'}
        </button>
      </div>
      <div className='w-full h-1/1 aspect-square'>
        <img
          src={img}
          className='w-full h-full object-cover aspect-square'
          alt='article photo'
          loading='lazy'
        />
      </div>
      <h3 className='text-xl font-bold uppercase leading-[120%] min-h-[50px] border-b'>
        <Link to={`/magazine/${id}`} className='hover:text-red-800'>
          {title}
        </Link>
      </h3>
      <p className='text-sm leading-[180%] font-light mb-4 text-slate-900'>
        {description}
      </p>
      <div className='mt-auto flex items-center gap-6'>
        <p className='font-thin font-nutino text-xs'>
          <span className='font-semibold mr-2'>Text:</span>
          <Link
            to={`/author/${id}`}
            className='hover:text-red-800 font-thin font-nutino text-xs'
          >
            {author ? author : 'Jakob Gronberg'}
          </Link>
        </p>
        <p className='font-thin font-nutino text-xs'>
          <span className='font-semibold mr-2'>Duration:</span>
          {duration ? duration : '1 Min'}
        </p>
      </div>
    </div>
  );
};

export default BlogVertical;

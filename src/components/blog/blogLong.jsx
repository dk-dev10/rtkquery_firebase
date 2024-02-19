/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogLong = ({
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
    <div className='w-full flex gap-12'>
      <div className='w-[240px] h-[240px] aspect-square'>
        <img src={img} className='w-full h-full object-cover' alt='' />
      </div>
      <div className='flex gap-[10%] w-full flex-col'>
        <h1 className='text-3xl font-bold font-nutino uppercase leading-[120%]'>
          <Link className='hover:text-[#c22322]' to={`/magazine/${id}`}>
            {title}
          </Link>
        </h1>
        <p className='text-base leading-[180%] font-light mb-10'>
          {description}
        </p>
        <div className='mt-auto flex items-center gap-6'>
          <p className='font-thin font-nutino text-sm'>
            <span className='font-semibold mr-2'>Text</span>
            {author ? author : 'Jakob Gronberg'}
          </p>
          <p className='font-thin font-nutino text-sm'>
            <span className='font-semibold mr-2'>Date</span>
            {date ? date : '16. March 2022'}
          </p>
          <p className='font-thin font-nutino text-sm'>
            <span className='font-semibold mr-2'>Duration</span>
            {duration ? duration : '1 Min'}
          </p>
          <button className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase'>
            {categories ? categories : 'label'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogLong;

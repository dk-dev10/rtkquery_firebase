/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { isValidDate } from 'services/isValidateDate';
import { sliceStr } from 'services/substring';

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
        <p className='font-thin font-nutino text-sm'>{isValidDate(date)}</p>
        <span className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase cursor-default'>
          {categories}
        </span>
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
      <p className='text-sm leading-[140%] min-h-20 font-light mb-4 text-slate-900'>
        {sliceStr(description, 72)}
      </p>
      <div className='mt-auto flex items-center gap-6'>
        <p className='font-thin font-nutino text-xs'>
          <span className='font-semibold mr-2'>Text:</span>
          <Link
            to={`/author/${author.id}`}
            className='hover:text-red-800 font-thin font-nutino text-xs'
          >
            {author.name}
          </Link>
        </p>
        <p className='font-thin font-nutino text-xs'>
          <span className='font-semibold mr-2'>Duration:</span>
          {duration} min
        </p>
      </div>
    </div>
  );
};

export default BlogVertical;

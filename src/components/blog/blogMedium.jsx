import { Link } from 'react-router-dom';
import { isValidDate } from 'services/isValidateDate';

/* eslint-disable react/prop-types */
const BlogMedium = ({ data, link }) => {
  const obj = {
    title: 'D',
    author: {
      id: '',
      name: '',
    },
    date: '16. March 2022',
    duration: 0,
    categories: 'label',
    img: '',
  };
  const { title, description, categories, img, date, duration, author, id } =
    data || obj;

  return (
    <div className='w-full'>
      <div className='flex gap-[10%] '>
        <div className='w-[40%]'>
          <h1 className='text-7xl font-bold font-nutino uppercase leading-[130%]'>
            {link ? (
              <Link className='hover:text-[#c22322]' to={`/magazine/${id}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h1>
        </div>
        <div className='w-[50%] pt-2 flex flex-col'>
          <p className='text-lg leading-[180%] font-light mb-10'>
            {description}
          </p>

          <div className='mt-auto flex items-center gap-6'>
            <p className='font-thin font-nutino text-sm'>
              <span className='font-semibold mr-2'>Text</span>
              {author?.name}
            </p>
            <p className='font-thin font-nutino text-sm'>
              <span className='font-semibold mr-2'>Date</span>
              {isValidDate(date)}
            </p>
            <p className='font-thin font-nutino text-sm'>
              <span className='font-semibold mr-2'>Duration</span>
              {duration} Min
            </p>

            <span className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase cursor-default'>
              {categories}
            </span>
          </div>
        </div>
      </div>
      <div className='w-full aspect-video mt-4'>
        <img
          src={img}
          className='w-full h-full object-cover'
          alt='blog picture'
        />
      </div>
    </div>
  );
};

export default BlogMedium;

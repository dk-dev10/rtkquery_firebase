import { useParams } from 'react-router-dom';
import { useGetBlogQuery } from '../redux/blogsapi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';

const Detail = () => {
  const { id } = useParams();
  const { data, isSuccess, isError } = useGetBlogQuery(id ? id : skipToken);

  useEffect(() => {
    isError && console.log(isError);
  }, [isError]);

  return (
    <div>
      {isSuccess && data && (
        <div className='w-full h-[750px] flex gap-3 flex-col  border p-5'>
          <h2 className='border-b text-3xl pb-2'>{data.title}</h2>
          <p className='text-slate-500'>{data.description}</p>
          <div className=' overflow-hidden w-full h-3/4 mt-auto'>
            <img
              src={data.img}
              alt='article image'
              className='w-full h-full object-cover'
              loading='lazy'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;

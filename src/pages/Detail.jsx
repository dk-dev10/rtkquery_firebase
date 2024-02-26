import { useNavigate, useParams } from 'react-router-dom';
import {
  useDeleteBlogMutation,
  useGetBlogQuery,
} from '../redux/service/mainApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isSuccess, isError } = useGetBlogQuery(id ? id : skipToken);
  const [deleteBlog] = useDeleteBlogMutation();

  useEffect(() => {
    isError && console.log(isError);
  }, [isError]);

  const removeBlog = async (id) => {
    const res = await deleteBlog(id);

    if (res.data === 'ok') {
      navigate('/');
    }
  };

  if (!data) {
    console.log(data)
    return <h1>Sorry!</h1>;
  }

  return (
    <div>
      {isSuccess && data && (
        <div className='w-full h-auto flex gap-3 flex-col  border p-5'>
          <div className='border-b pb-2 flex'>
            <h2 className='text-3xl'>{data.title}</h2>
            <button
              onClick={() => removeBlog(id)}
              className='ml-auto border px-5 rounded-3xl'
            >
              del
            </button>
          </div>
          <p className='text-slate-500  whitespace-pre-line'>
            {data.description}
          </p>
          <div className=' overflow-hidden w-full aspect-video mt-auto'>
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

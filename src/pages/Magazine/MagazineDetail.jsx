import BlogMedium from 'components/blog/blogMedium';

import GoBack from 'components/goback';
import NotFound from 'components/notFound/NotFound';

import { Link, useParams } from 'react-router-dom';
import { useGetBlogQuery } from 'redux/service/blog/blogApi';
import { useGetUserQuery } from 'redux/service/user/userApi';
import { isValidDate } from 'services/isValidateDate';

const MagazineDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetBlogQuery({ id });
  const { data: userData } = useGetUserQuery(data?.author?.id);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!isFetching && data === undefined) {
    return <NotFound />;
  }

  return (
    <div className='pb-36'>
      <GoBack>Magazine</GoBack>
      <BlogMedium data={data} />
      <div className='w-full max-w-[1200px]  flex gap-[5%] mt-16 mx-auto'>
        <div className='w-[25%] h-max sticky top-12 '>
          <div className='flex items-center gap-4 pb-6 border-b border-black'>
            <img
              className='inline-block h-20 w-20 rounded-full ring-2 ring-white'
              src={userData?.avatar || ''}
              alt='avatar author'
            />
            <p className='text-3xl'>
              <Link to={`/author/${data?.author?.id}`}>
                {data?.author?.name}
              </Link>
            </p>
          </div>
          <div className='flex flex-col gap-4 pt-6'>
            <div className='font-light font-nutino text-base inline-flex'>
              <span className='font-semibold'>Date</span>
              <span className='ml-auto'>{isValidDate(data?.date)}</span>
            </div>
            <div className='font-light font-nutino text-base inline-flex'>
              <span className='font-semibold mr-2'>Duration</span>
              <span className='ml-auto'>{data.duration} min</span>
            </div>
          </div>
        </div>
        <div className='w-[70%] flex flex-col gap-y-6'>
          {data?.content.map((element, i) =>
            element.type === 'text' ? (
              <p
                key={element.type + i}
                className='text-base font-nutino font-light whitespace-pre-wrap'
              >
                {element.text}
              </p>
            ) : (
              <div
                key={element.type + i}
                className='flex py-12 border-y border-black'
              >
                <span className='text-5xl  font-bold mr-6'>“</span>
                <figure className='relative'>
                  <blockquote className='text-5xl font-bold leading-tight'>
                    {element.text}
                  </blockquote>
                  <figcaption className='text-xl mt-6'>
                    {element.author}
                  </figcaption>
                </figure>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MagazineDetail;

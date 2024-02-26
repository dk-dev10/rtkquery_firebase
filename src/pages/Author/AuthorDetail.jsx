import GoBack from 'components/goback';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from 'redux/service/user/userApi';

const AuthorDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetUserQuery(id);
  const { avatar, name, about } = data || {};

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoBack>Author</GoBack>
      <div className='w-full max-w-[1200px]  flex gap-[5%] mt-16 mx-auto'>
        <div className='w-[35%] h-max sticky top-12 '>
          <div className='flex items-center gap-4 pb-6 border-b border-black'>
            <img
              className='inline-block h-150 w-full rounded-full ring-2 ring-white grayscale group-hover/author:grayscale-0 transition-all'
              src={avatar}
              alt=''
            />
          </div>
          <div className='flex flex-col gap-4 pt-6'>
            <div className='font-light font-nutino text-base inline-flex'>
              <span className='font-semibold'>Date</span>
              <span className='ml-auto'>16. March 2022</span>
            </div>
            <div className='font-light font-nutino text-base inline-flex'>
              <span className='font-semibold mr-2'>Duration</span>
              <span className='ml-auto'>1 Min</span>
            </div>
          </div>
        </div>
        <div className='w-[60%] h-max flex flex-col gap-10'>
          <h2 className='uppercase text-8xl font-bold font-nutino'>{name}</h2>
          {/* <p className='text-xl font-josefin'></p> */}
          <p className='text-base font-nutino font-light leading-snug'>
            {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetail;

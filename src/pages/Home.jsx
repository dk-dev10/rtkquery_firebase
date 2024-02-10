import { Link } from 'react-router-dom';
import { useGetBlogsQuery } from '../redux/blogsapi';

const Home = () => {
  const { data, isSuccess, isLoading } = useGetBlogsQuery();

  const sliceStr = (str) => {
    if (str.length > 20) {
      return `${str.substring(0, 20)}...`;
    }
    return str;
  };

  return (
    <div className='flex flex-wrap gap-x-[2%] gap-y-4 mt-4'>
      {isLoading && <p>Loading...</p>}
      {isSuccess ? (
        data.length < 1 ? (
          <p className='w-full text-center text-red-600 text-4xl'>
            Blogs Empty!
          </p>
        ) : (
          data.map((blog) => (
            <div
              key={blog.id}
              className='w-[32%] h-[400px] flex gap-3 flex-col  border px-2 py-3'
            >
              <Link to={`/detail/${blog.id}`}>
                <h2 className='border-b text-xl pb-2'>{blog.title}</h2>
              </Link>
              <p className='text-slate-500'>{sliceStr(blog.description)}</p>
              <div className=' overflow-hidden w-full h-2/3 mt-auto'>
                <img
                  src={blog.img}
                  alt=''
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </div>
            </div>
          ))
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default Home;

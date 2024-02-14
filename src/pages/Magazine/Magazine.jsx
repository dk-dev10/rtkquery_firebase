import BlogVertical from 'components/blog/blogVertical';
import { useGetBlogsQuery } from 'redux/blogsapi';

const Magazine = () => {
  const { data, isSuccess, isLoading } = useGetBlogsQuery();

  const sliceStr = (str, num = 20) => {
    if (str.length > 20) {
      return `${str.substring(0, num)}...`;
    }
    return str;
  };

  return (
    <div className='pb-12'>
      <h1 className='uppercase text-9xl font-bold font-ysabeau text-center p-6'>
        Magazine
      </h1>
      <div className='w-full flex py-4'>
        <p className='uppercase text-base text-bold text-josefin'>Categories</p>
        <div className='ml-auto flex gap-3'>
          <button className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase'>
            All
          </button>
          <button className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase'>
            Art
          </button>
          <button className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase'>
            label
          </button>
          <button className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase'>
            Street Art
          </button>
        </div>
      </div>
      {isLoading && <p className='text-center'>Loading...</p>}
      {isSuccess ? (
        data.length < 1 ? (
          <p className='w-full text-center text-red-600 text-4xl'>
            Blogs Empty!
          </p>
        ) : (
          <div className='flex flex-wrap mt-4  border-t border-l border-black'>
            <>
              {data.map((blog) => (
                <div
                  key={blog.id}
                  className='w-[25%] border-b border-r p-12 border-black'
                >
                  <BlogVertical
                    title={blog.title}
                    img={blog.img}
                    description={sliceStr(blog.description, 72)}
                    id={blog.id}
                  />
                </div>
              ))}
            </>
          </div>
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default Magazine;

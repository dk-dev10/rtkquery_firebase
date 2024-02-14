import BlogLong from 'components/blog/blogLong';
import BlogMedium from 'components/blog/blogMedium';

import { useGetBlogsQuery } from 'redux/blogsapi';
import { sliceStr } from 'services/substring';

const Home = () => {
  const { data, isSuccess, isLoading } = useGetBlogsQuery();

  return (
    <div className='mb-10'>
      <h1 className='uppercase text-9xl font-bold font-ysabeau text-center p-6'>
        art & life
      </h1>
      <div className='w-full h-[35px] bg-black flex items-center justify-between px-3 gap-3 overflow-hidden uppercase'>
        <span className='text-white font-semibold text-xl'>News Ticker</span>
        <span className='text-white font-semibold text-xl'>News Ticker</span>
        <span className='text-white font-semibold text-xl'>News Ticker</span>
        <span className='text-white font-semibold text-xl'>News Ticker</span>
        <span className='text-white font-semibold text-xl'>News Ticker</span>
        <span className='text-white font-semibold text-xl'>News Ticker</span>
        <span className='text-white font-semibold text-xl'>News Ticker</span>
        <span className='text-white font-semibold text-xl'>News Ticker</span>
      </div>
      <div className='w-full my-12'>
        <BlogMedium />
      </div>
      <div className='w-full flex gap-[5%]'>
        {isLoading && <p className='text-center'>Loading...</p>}
        {isSuccess ? (
          data.length < 1 ? (
            <p className='w-full text-center text-red-600 text-4xl'>
              Blogs Empty!
            </p>
          ) : (
            <div className='w-[68%]'>
              {data.map((blog) => (
                <div
                  key={blog.id}
                  className='w-full  border-b border-black py-12 first:pt-0'
                >
                  <BlogLong
                    title={blog.title}
                    img={blog.img}
                    description={sliceStr(blog.description, 250)}
                    id={blog.id}
                  />
                </div>
              ))}
            </div>
          )
        ) : (
          ''
        )}
        <div className='w-[27%] h-max sticky top-12'>
          <h6 className='text-base uppercase font-bold mb-2 '>Printmagazine</h6>
          <h2 className='text-5xl font-bold'>03/2022</h2>

          <div className='mt-12'>
            <h6 className='uppercase text-base font-bold mb-6'>Most popular</h6>
            <div className='pop'>
              <div className='w-full  border-b border-black py-6 first:pt-0 flex'>
                <h4 className='font-bold text-2xl mr-10 '>01</h4>
                <div className=''>
                  <h4 className='font-bold text-2xl mb-3'>
                    Street art festival
                  </h4>
                  <p className='text-sm'>
                    <span className='font-semibold '>Text:</span> Cristofer
                    Vaccaro
                  </p>
                </div>
              </div>
              <div className='w-full  border-b border-black py-6 first:pt-0 flex'>
                <h4 className='font-bold text-2xl mr-10 '>02</h4>
                <div className=''>
                  <h4 className='font-bold text-2xl mb-3'>Hope dies last</h4>
                  <p className='text-sm'>
                    <span className='font-semibold '>Text:</span> Anne Henry
                  </p>
                </div>
              </div>
              <div className='w-full  border-b border-black py-6 first:pt-0 flex'>
                <h4 className='font-bold text-2xl mr-10 '>03</h4>
                <div className=''>
                  <h4 className='font-bold text-2xl mb-3'>
                    Artists who want to rise above
                  </h4>
                  <p className='text-sm'>
                    <span className='font-semibold '>Text:</span> Anna Nielsen
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full p-7 bg-slate-100 mt-16 flex flex-col'>
              <p className='uppercase text-base font-bold'>NewsLetter</p>
              <p className='text-3xl font-bold'>Design News to your inbox</p>
              <input
                type='text'
                placeholder='Email'
                className='border-none w-full my-3 p-3'
              />
              <button className='uppercase bg-black py-2 px-6 text-white ml-auto'>
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

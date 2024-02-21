import BlogVertical from 'components/blog/blogVertical';
import PageTitle from 'components/pageTitle';
import Pagination from 'components/pagination/pagination';
import { useState } from 'react';
import {
  useGetBlogsPaginationQuery,
  useGetCountBlogsQuery,
} from 'redux/service/blog/blogApi';
import { sliceStr } from 'services/substring';

const Magazine = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const { data: count } = useGetCountBlogsQuery();
  const { data, isLoading, isSuccess } = useGetBlogsPaginationQuery({
    lim: postsPerPage,
    next: nextPage,
    prev: prevPage,
  });
  const { blogs, prev, next } = data || {};

  const paginateFront = () => {
    setCurrentPage(currentPage + 1);
    setPrevPage(null);
    setNextPage(next);
  };
  const paginateBack = () => {
    setCurrentPage(currentPage - 1);
    setPrevPage(prev);
    setNextPage(null);
  };

  return (
    <div className='pb-12'>
      <PageTitle>Magazine</PageTitle>
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
        blogs.length < 1 ? (
          <p className='w-full text-center text-red-600 text-4xl'>
            Blogs Empty!
          </p>
        ) : (
          <div className='flex flex-wrap mt-4  border-t border-l border-black'>

              {blogs.map((blog) => (
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

          </div>
        )
      ) : (
        <div className='flex flex-wrap mt-4  border-t border-l border-black'>
          {Array(postsPerPage)
            .fill('')
            .map((_, i) => (
              <div
                key={i}
                className='w-[25%] h-[598px] border-b border-r p-12 border-black flex justify-center items-center'
              >
                <button className='size-8'>
                  <div className='size-8 border animate-spin border-l-cyan-400 rounded-full border-cyan-600'></div>
                </button>
              </div>
            ))}
        </div>
      )}

      {count ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={count}
          setCurrentPage
          paginateBack={paginateBack}
          paginateFront={paginateFront}
          currentPage={currentPage}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Magazine;

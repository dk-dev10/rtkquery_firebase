import BlogVertical from 'components/blog/blogVertical';
import PageTitle from 'components/pageTitle';
import Pagination from 'components/pagination/pagination';
import { useState } from 'react';
import {
  useGetBlogsPaginationQuery,
  useGetCountBlogsQuery,
} from 'redux/service/blog/blogApi';

import { categorie } from 'services/categories';

const Magazine = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [categoria, setCategoria] = useState(categorie);
  const [activeTab, setActiveTab] = useState('all');

  const { data: count } = useGetCountBlogsQuery(categoria);
  const { data, isSuccess } = useGetBlogsPaginationQuery({
    lim: postsPerPage,
    next: nextPage,
    prev: prevPage,
    categorie: [...categoria],
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

  const onActiveTab = (item) => {
    if (item === 'all') {
      setCategoria(categorie);
      setActiveTab(item);
    } else {
      setCategoria([item]);
      setActiveTab(item);
    }
    setCurrentPage(1);
    setNextPage(null);
    setPrevPage(null);
  };

  return (
    <div className='pb-12'>
      <PageTitle>Magazine</PageTitle>
      <div className='w-full flex py-4'>
        <p className='uppercase text-base text-bold text-josefin'>Categories</p>
        <div className='ml-auto flex gap-3'>
          <button
            onClick={() => onActiveTab('all')}
            className={`border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase ${
              'all' === activeTab ? 'bg-black text-white' : ''
            }`}
          >
            All
          </button>
          {categorie.map((ctg, i) => (
            <button
              key={ctg + i}
              onClick={() => onActiveTab(ctg)}
              className={`border border-black  px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase ${
                ctg === activeTab ? 'bg-black text-white' : ''
              }`}
            >
              {ctg}
            </button>
          ))}
        </div>
      </div>
      {/* {isLoading && <p className='text-center'>Loading...</p>} */}
      {isSuccess ? (
        blogs.length < 1 ? (
          <p className='w-full text-center text-red-600 text-4xl'>
            Blogs Empty!
          </p>
        ) : (
          <div className='flex flex-wrap mt-4  border-t border-l border-black '>
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className='w-[25%] border-b border-r p-12 border-black'
              >
                <BlogVertical {...blog} />
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
                <div className='w-8 h-8'>
                  <span className='w-8 h-8 border-4 animate-spin block  border-l-[#c22322] rounded-full border-slate-700'></span>
                </div>
              </div>
            ))}
        </div>
      )}

      {count > postsPerPage ? (
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

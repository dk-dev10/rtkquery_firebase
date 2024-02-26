import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';

/* eslint-disable react/prop-types */
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
  setPage = () => {},
}) => {
  const listPages = new Array(Math.ceil(totalPosts / postsPerPage)).fill('');

  return (
    <div className='py-2 w-full'>
      <div className='flex justify-center'>
        <nav
          className='isolate inline-flex -space-x-px rounded-md shadow-sm'
          aria-label='Pagination'
        >
          <button
            onClick={() => paginateBack()}
            className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:bg-slate-100 hover:cursor-pointer disabled:cursor-not-allowed'
            disabled={
              Math.ceil((currentPage * postsPerPage) / postsPerPage) <= 1
            }
          >
            <span className='sr-only'>Previous</span>
            <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
          </button>
          {listPages.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              aria-current='page'
              className={`relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold ${
                Math.ceil((currentPage * postsPerPage) / postsPerPage) ===
                index + 1
                  ? 'z-10 bg-[#c22322]  text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
              } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:bg-slate-100 hover:cursor-pointer disabled:cursor-not-allowed'
            onClick={() => paginateFront()}
            disabled={currentPage >= Math.ceil(totalPosts / postsPerPage)}
          >
            <span className='sr-only'>Next</span>
            <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;

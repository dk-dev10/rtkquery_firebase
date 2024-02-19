import AuthorLong from 'components/author/authorLong';
import PageTitle from 'components/pageTitle';
import { useGetBlogsQuery } from 'redux/service/blog/blogApi';

const Author = () => {
  const { data, isSuccess, isLoading } = useGetBlogsQuery();
  return (
    <div className='w-full'>
      <PageTitle>Authors</PageTitle>
      {isLoading && <p className='text-center'>Loading...</p>}
      {isSuccess ? (
        data.length < 1 ? (
          <p className='w-full text-center text-red-600 text-4xl'>
            Blogs Empty!
          </p>
        ) : (
          <div className='w-full flex flex-wrap'>
            {data.map((blog) => (
              <div
                key={blog.id}
                className='w-full border-b border-slate-500 py-12'
              >
                <AuthorLong />
              </div>
            ))}
          </div>
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default Author;

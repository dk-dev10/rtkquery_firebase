import AuthorLong from 'components/author/authorLong';
import PageTitle from 'components/pageTitle';
import { useGetAuthorsQuery } from 'redux/service/user/userApi';

const Author = () => {
  const { data, isSuccess, isLoading } = useGetAuthorsQuery();


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
            {data.map((author) => (
              <div
                key={author.id}
                className='w-full border-b border-slate-500 py-12'
              >
                <AuthorLong data={author} />
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

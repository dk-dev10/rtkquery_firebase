import { useGetBlogsQuery } from 'redux/blogsapi';

import PodcastLong from 'components/podcast/podcastLong';
import PageTitle from 'components/pageTitle';

const Podcast = () => {
  const { data, isSuccess, isLoading } = useGetBlogsQuery();

  return (
    <div className='w-full'>
      <PageTitle>Podcasts</PageTitle>
      {isLoading && <p className='text-center'>Loading...</p>}

      {isSuccess ? (
        data.length < 1 ? (
          <p className='w-full text-center text-red-600 text-4xl'>
            Blogs Empty!
          </p>
        ) : (
          <div className='w-full flex flex-col  mt-20'>
            {data.map((blog) => (
              <div key={blog.id} className='w-full border-b border-black py-12'>
                <PodcastLong />
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

export default Podcast;

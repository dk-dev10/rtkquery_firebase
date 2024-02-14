const BlogMedium = () => {
  return (
    <div className='w-full'>
      <div className='flex gap-[10%] '>
        <div className='w-[40%]'>
          <h1 className='text-7xl font-bold font-nutino uppercase leading-[130%]'>
            Don’t close your eyes
          </h1>
        </div>
        <div className='w-[50%] pt-2 '>
          <p className='text-lg leading-[180%] font-light mb-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>

          <div className='mt-auto flex items-center gap-6'>
            <p className='font-thin font-nutino text-sm'>
              <span className='font-semibold mr-2'>Text</span>
              Jakob Gronberg
            </p>
            <p className='font-thin font-nutino text-sm'>
              <span className='font-semibold mr-2'>Date</span>
              16. March 2022
            </p>
            <p className='font-thin font-nutino text-sm'>
              <span className='font-semibold mr-2'>Duration</span>1 Min
            </p>

            <button className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase'>
              label
            </button>
          </div>
        </div>
      </div>
      <div className='w-full aspect-video mt-4'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/kubablog.appspot.com/o/wlap.jpeg?alt=media&token=7c8676e0-f793-4454-bee8-e09db1bdc11b'
          className='w-full h-full object-cover'
          alt=''
        />
      </div>
    </div>
  );
};

export default BlogMedium;

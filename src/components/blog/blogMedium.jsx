/* eslint-disable react/prop-types */
const BlogMedium = ({ data }) => {
  const obj = {
    title: 'Don’t close your eyes',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
    dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
    felis bibendum ut. Porttitor leo a diam.`,
    author: {
      id: '',
      name: 'Jakob Gronberg',
    },
    date: '16. March 2022',
    categories: 'label',
    img: 'https://firebasestorage.googleapis.com/v0/b/kubablog.appspot.com/o/wlap.jpeg?alt=media&token=7c8676e0-f793-4454-bee8-e09db1bdc11b',
  };
  const {
    title,
    description,
    categories,
    img,
    date,
    author: { name },
  } = data || obj;

  return (
    <div className='w-full'>
      <div className='flex gap-[10%] '>
        <div className='w-[40%]'>
          <h1 className='text-7xl font-bold font-nutino uppercase leading-[130%]'>
            {title}
          </h1>
        </div>
        <div className='w-[50%] pt-2 flex flex-col'>
          <p className='text-lg leading-[180%] font-light mb-10'>
            {description}
          </p>

          <div className='mt-auto flex items-center gap-6'>
            <p className='font-thin font-nutino text-sm'>
              <span className='font-semibold mr-2'>Text</span>
              {name}
            </p>
            <p className='font-thin font-nutino text-sm'>
              <span className='font-semibold mr-2'>Date</span>
              {date ? date : ''}
            </p>
            <p className='font-thin font-nutino text-sm'>
              <span className='font-semibold mr-2'>Duration</span>1 Min
            </p>

            <button className='border border-black px-[12px] py-[4px] rounded-[100px] ml-auto font-nutino font-normal text-xs uppercase'>
              {categories}
            </button>
          </div>
        </div>
      </div>
      <div className='w-full aspect-video mt-4'>
        <img src={img} className='w-full h-full object-cover' alt='' />
      </div>
    </div>
  );
};

export default BlogMedium;

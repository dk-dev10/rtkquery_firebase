import GoBack from 'components/goback';

const AuthorDetail = () => {
  return (
    <div>
      <GoBack>Author</GoBack>
      <div className='w-full max-w-[1200px]  flex gap-[5%] mt-16 mx-auto'>
        <div className='w-[35%] h-max sticky top-12 '>
          <div className='flex items-center gap-4 pb-6 border-b border-black'>
            <img
              className='inline-block h-150 w-full rounded-full ring-2 ring-white grayscale group-hover/author:grayscale-0 transition-all'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
          </div>
          <div className='flex flex-col gap-4 pt-6'>
            <div className='font-light font-nutino text-base inline-flex'>
              <span className='font-semibold'>Date</span>
              <span className='ml-auto'>16. March 2022</span>
            </div>
            <div className='font-light font-nutino text-base inline-flex'>
              <span className='font-semibold mr-2'>Duration</span>
              <span className='ml-auto'>1 Min</span>
            </div>
          </div>
        </div>
        <div className='w-[60%] h-max flex flex-col gap-10'>
          <h2 className='uppercase text-8xl font-bold font-nutino'>
            Louise Jensen
          </h2>
          <p className='text-xl font-josefin'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>
          <p className='text-base font-nutino font-light leading-snug'>
            Porttitor rhoncus dolor purus non enim praesent elementum. Eget
            dolor morbi non arcu risus quis varius. Posuere ac ut consequat
            semper viverra nam libero. In ornare quam viverra orci sagittis eu.
            Tristique risus nec feugiat in fermentum posuere urna nec. Tempus
            quam pellentesque nec nam aliquam sem et. Convallis a cras semper
            auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci
            phasellus egestas tellus rutrum tellus pellentesque. Sed egestas
            egestas fringilla phasellus faucibus scelerisque eleifend donec
            pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo
            eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus
            venenatis lectus magna fringilla. Neque vitae tempus quam
            pellentesque nec nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetail;

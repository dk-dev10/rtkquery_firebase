import BlogMedium from 'components/blog/blogMedium';

import GoBack from 'components/goback';

const MagazineDetail = () => {
  return (
    <div className='pb-36'>
      <GoBack>Magazine</GoBack>
      <BlogMedium />
      <div className='w-full max-w-[1200px]  flex gap-[5%] mt-16 mx-auto'>
        <div className='w-[25%] h-max sticky top-12 '>
          <div className='flex items-center gap-4 pb-6 border-b border-black'>
            <img
              className='inline-block h-20 w-20 rounded-full ring-2 ring-white'
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
            <p className='text-3xl'>Jakob Gronberg</p>
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
        <div className='w-[70%] flex flex-col gap-y-6'>
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

          <p className='text-base font-nutino font-light leading-snug'>
            Tellus orci ac auctor augue mauris augue neque gravida. Tempus
            imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
            Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis
            convallis tellus id interdum velit laoreet id. Vulputate mi sit amet
            mauris commodo quis. Semper viverra nam libero justo laoreet sit
            amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc
            sed blandit libero. Ac felis donec et odio pellentesque diam
            volutpat. Quis varius quam quisque id diam vel quam elementum. Felis
            bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id
            diam vel quam elementum pulvinar etiam non. Non consectetur a erat
            nam at lectus urna duis convallis.
          </p>

          <div className='flex py-12 border-y border-black'>
            <span className='text-5xl  font-bold mr-6'>“</span>
            <figure className='relative'>
              <blockquote className='text-5xl font-bold leading-tight'>
                The greatest glory in living lies not in never falling, but in
                rising every time we fall.
              </blockquote>
              <figcaption className='text-sm mt-6'>Nelson Mandela</figcaption>
            </figure>
          </div>

          <p className='text-xl font-josefin'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>
          <p className='text-base font-nutino font-light'>
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

          <p className='text-base font-nutino font-light'>
            Tellus orci ac auctor augue mauris augue neque gravida. Tempus
            imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
            Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis
            convallis tellus id interdum velit laoreet id. Vulputate mi sit amet
            mauris commodo quis. Semper viverra nam libero justo laoreet sit
            amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc
            sed blandit libero. Ac felis donec et odio pellentesque diam
            volutpat. Quis varius quam quisque id diam vel quam elementum. Felis
            bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id
            diam vel quam elementum pulvinar etiam non. Non consectetur a erat
            nam at lectus urna duis convallis.
          </p>

          <p className='text-xl font-josefin'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>
          <p className='text-base font-nutino font-light'>
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

          <p className='text-base font-nutino font-light'>
            Tellus orci ac auctor augue mauris augue neque gravida. Tempus
            imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
            Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis
            convallis tellus id interdum velit laoreet id. Vulputate mi sit amet
            mauris commodo quis. Semper viverra nam libero justo laoreet sit
            amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc
            sed blandit libero. Ac felis donec et odio pellentesque diam
            volutpat. Quis varius quam quisque id diam vel quam elementum. Felis
            bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id
            diam vel quam elementum pulvinar etiam non. Non consectetur a erat
            nam at lectus urna duis convallis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MagazineDetail;

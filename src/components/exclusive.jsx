import { Link } from 'react-router-dom';
import arrow from '../assets/svg/arrow.svg';

const Exclusive = () => {
  const img =
    'https://firebasestorage.googleapis.com/v0/b/kubablog.appspot.com/o/9dc03d822c4eee5a342aef1124a1633f.jpeg?alt=media&token=5bbc2127-9d2f-40cc-af3e-e746a00cc03a';

  return (
    <Link className='cursor-pointer group/link'>
      <div
        style={{ '--image-url': `url(${img})` }}
        className={`w-full flex flex-col mt-8 aspect-5/6 bg-red-600 relative bg-[image:var(--image-url)] hover:bg-110 transition-all bg-100 bg-center p-4 bg-blend-multiply`}
      >
        <h3 className='uppercase text-8xl font-bold font-nutino text-white'>
          Fyrre
        </h3>
        <h5 className='uppercase text-3xl font-bold font-nutino text-white'>
          magazine
        </h5>
        <p className='text-white text-3xl font-semibold mt-auto'>03/2022</p>
        <img
          src={arrow}
          alt=''
          className='absolute bottom-4 right-4 group-hover/link:translate-x-2  group-hover/link:translate-y-2 transition-transform'
        />
      </div>
    </Link>
  );
};

export default Exclusive;

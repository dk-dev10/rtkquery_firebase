import Navbar from 'components/Navbar';
import Footer from 'components/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='w-[1400px] max-w-[90%] mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

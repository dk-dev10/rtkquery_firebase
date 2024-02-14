import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Edit from './pages/Edit';
import BlogVertical from 'components/blog/blogVertical';
import MagazineDetail from 'pages/Magazine/MagazineDetail';
import Magazine from 'pages/Magazine/Magazine';
import Footer from 'components/footer/Footer';
import { Podcast } from 'lucide-react';
import PodcastDetail from 'pages/Podcast/PodcastDetail';
import Author from 'pages/Author/Author';
import AuthorDetail from 'pages/Author/AuthorDetail';

const App = () => {
  return (
    <>
      <div className='w-[1400px] max-w-[90%] mx-auto'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Edit />} />
            <Route path='/medium' element={<BlogVertical />} />
            <Route path='/update/:id' element={<Edit />} />
            <Route path='/magazine' element={<Outlet />}>
              <Route index element={<Magazine />} />
              <Route path=':id' element={<MagazineDetail />} />
            </Route>
            <Route path='/author' element={<Outlet />}>
              <Route index element={<Author />} />
              <Route path=':id' element={<AuthorDetail />} />
            </Route>
            <Route path='/podcast' element={<Outlet />}>
              <Route index element={<Podcast />} />
              <Route path=':id' element={<PodcastDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
};

export default App;

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Edit from './pages/Admin/Edit';
import BlogVertical from 'components/blog/blogVertical';
import MagazineDetail from 'pages/Magazine/MagazineDetail';
import Magazine from 'pages/Magazine/Magazine';
import Footer from 'components/footer/Footer';
import PodcastDetail from 'pages/Podcast/PodcastDetail';
import Author from 'pages/Author/Author';
import AuthorDetail from 'pages/Author/AuthorDetail';
import Podcast from 'pages/Podcast/Podcast';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import { AuthProvider } from 'context/AuthContext';
import User from 'pages/User/User';

const App = () => {
  return (
    <>
      <div className='w-[1400px] max-w-[90%] mx-auto'>
        <AuthProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<Edit />} />
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
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<User />} />
              <Route path='/*' element={<Navigate to='/main' />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
      <Footer />
    </>
  );
};

export default App;

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
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
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/rtkquery_firebase' element={<Home />} />
              <Route path='/rtkquery_firebase/edit' element={<Edit />} />
              <Route path='/rtkquery_firebase/medium' element={<BlogVertical />} />
              <Route path='/rtkquery_firebase/update/:id' element={<Edit />} />
              <Route path='/rtkquery_firebase/magazine' element={<Outlet />}>
                <Route index element={<Magazine />} />
                <Route path=':id' element={<MagazineDetail />} />
              </Route>
              <Route path='/rtkquery_firebase/author' element={<Outlet />}>
                <Route index element={<Author />} />
                <Route path=':id' element={<AuthorDetail />} />
              </Route>
              <Route path='/rtkquery_firebase/podcast' element={<Outlet />}>
                <Route index element={<Podcast />} />
                <Route path=':id' element={<PodcastDetail />} />
              </Route>
              <Route path='/rtkquery_firebase/login' element={<Login />} />
              <Route path='/rtkquery_firebase/register' element={<Register />} />
              <Route path='/rtkquery_firebase/profile' element={<User />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
      <Footer />
    </>
  );
};

export default App;
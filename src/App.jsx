import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import Create from './pages/Create';
import Edit from './pages/Edit';
import Detail from './pages/Detail';

const App = () => {
  return (
    <div className='w-[900px] max-w-[90%] mx-auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Edit />} />
          <Route path='/update/:id' element={<Edit />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

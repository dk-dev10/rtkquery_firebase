import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import Create from './pages/Create';
import Edit from './pages/Edit';

const App = () => {
  return (
    <div className='w-[90vw] mx-auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Edit />} />
          <Route path='/update/:id' />
          <Route path='/detail/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/features' element={<Home/>} />
        <Route path='/pricing' element={<Home/>} />
        <Route path='/resources' element={<Home/>} />
        <Route path='/login' element={<Home/>} />
        <Route path='/signup' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

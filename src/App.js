import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';


function App() {
  return (
    
    <div >
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path ='/About' element={<About />} />
        <Route path ='/Contact' element={<Contact />} />
        <Route path ='/LoginSignup' element={<LoginSignup />} />
        <Route path ='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>

    </div>
    
  );
}

export default App;

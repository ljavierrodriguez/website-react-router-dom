import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import Services from './pages/Services';
import DetailService from './pages/DetailService';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {/* <Route path='/documents/:year/office/:office/user/:user' element={<Services />} />
        <Route path='/documents/:year/office/:office' element={<Services />} /> */}
        <Route path='/services/:service_id' element={<DetailService />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
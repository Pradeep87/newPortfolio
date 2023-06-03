import React, { useEffect } from 'react'
import WebFont from 'webfontloader';
import { HomePage, Portfolio,ContactMe } from './pages';
import {pageRoutes} from './data/constant'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './layout';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
    WebFont.load({
      google: { families: ['Inter', 'Roboto', "El Messiri",'sans-serif'] }
    });
  }, [])

  useEffect(() => {
     AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
      delay: 500,
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={pageRoutes.homePage} element={<HomePage />} />
        <Route path={pageRoutes.portfolio} element={<Portfolio />} />
        <Route path={pageRoutes.contact} element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  )
} 

export default App
import React, { useEffect } from 'react'
import WebFont from 'webfontloader';
import { HomePage, Portfolio,ContactMe } from './pages';
import {pageRoutes} from './data/constant'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './layout';



const App = () => {

  useEffect(() => {
    WebFont.load({
      google: { families: ['Inter', 'Roboto'] }
    });
  }, [])



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
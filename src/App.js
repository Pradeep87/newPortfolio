import React, { useEffect } from 'react'
import WebFont from 'webfontloader';
import { HomePage, Portfolio } from './pages';
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
      </Routes>
    </BrowserRouter>
  )
} 

export default App
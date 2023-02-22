import React, { useEffect } from 'react'
import WebFont from 'webfontloader';
import { HomePage } from './pages';
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
        <Route path={'/'} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
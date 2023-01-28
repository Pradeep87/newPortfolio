import React, { useEffect } from 'react'
import WebFont from 'webfontloader';
import { HomePage } from './pages';

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter', 'Roboto']
      }
    });

  }, [])



  return (
    <div>
      <HomePage />
    </div>

  )
}

export default App
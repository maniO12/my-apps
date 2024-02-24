import React from 'react';
import Uppercase from './components/Uppercase'
import Navbar from './components/Navbar'
import Dropbox from './components/Dropbox'
import End from './components/End';

const App = () => {
  return (
    <div>
      <Navbar />
       <Uppercase />
      <Dropbox/>
      <End/>
    </div>
  )
}

export default App

import React from 'react'
//m inporter plugin poum jere route yo nn project an 
import { Routes, Route } from 'react-router-dom';
//la m importer fonksyon page yo
import Home from './pages/Home';
import About from './pages/About';
import Carlist from './pages/Car-list';

function App() {

  return (
    <div className='overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Car-list' element={<Carlist />} />
      </Routes>
    </div>
  )
}

export default App

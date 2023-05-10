import './App.css'
//m inporter plugin poum jere route yo nn project an 
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
//la m importer fonksyon page yo 
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Carlist } from './pages/Car-list'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/Car-list' element={<Carlist/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App

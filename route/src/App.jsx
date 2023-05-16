import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

function App() {
  return (
    <BrowserRouter>
      <div className='flex justify-center'>
      <Link to='/' className='bg-teal-800 text-teal-100 p-3 m-3 rounded-2xl'>Home</Link>
      <Link to='/about' className='bg-teal-800 text-teal-100 p-3 m-3 rounded-2xl '>About</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} className='m-3 p-3 '/>
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
      )
}

export default App

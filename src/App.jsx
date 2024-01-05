
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Series from './Components/Series'
import Bookmark from './Components/Bookmark'


function App() {
  

  return (
    <>
      <h1 className='text-3xl text-red-400'>hola mundo</h1>
      
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/bookmark' element={<Bookmark/>}/>
      </Routes>
    </>
  )
}

export default App

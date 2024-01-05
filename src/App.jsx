
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Series from './Components/Series'
import Bookmark from './Components/Bookmark'
import Search from './Components/Search'


function App() {
  

  return (
    <>
       
      
      <Navbar/>
      <Search/>
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

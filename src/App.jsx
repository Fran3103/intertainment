
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Series from './Components/Series'
import Bookmark from './Components/Bookmark'
import Search from './Components/Search'
import { useEffect, useState } from 'react'


function App() {
    const [favoritos, setFavoritos] = useState([])


    useEffect(() => {
        const favoritosArray = localStorage.getItem('secFavoritos')
        const arrayFav = JSON.parse(favoritosArray)
        setFavoritos(arrayFav)
    }, [])
    const añadirOEliminar = e =>{
     
        const favoritos = localStorage.getItem('secFavoritos')
        
        let secFavs 
        // funcion para añadir la seleccion al localstorage
        if( favoritos === null ){
          secFavs = []
        } else{
          secFavs = JSON.parse(favoritos)
        }

        const btn = e.currentTarget
        const parent = btn.parentElement
        const lista = parent.querySelector('div.contenedorLista')
        const año = lista.querySelector('p.año').innerText

        const categoria = lista.querySelector('p.categoria').innerText
        const rating = lista.querySelector('p.rating').innerText
  
        const titulo = parent.querySelector('h3.titulo').innerText;
        const img = parent.querySelector('img').getAttribute('src');
      
        const pelicula = {
            categoria, año, rating, titulo,  img
        }
        
        
        
        
        let favArray = secFavs.find(peli => {
            return peli.titulo === pelicula.titulo 
        })

        if (!favArray){
            secFavs.push(pelicula)
            localStorage.setItem('secFavoritos', JSON.stringify(secFavs))
            setFavoritos(secFavs)
        } 

        else{
            let peliculasSelec = secFavs.filter(peli => {
                return peli.titulo !== favArray.titulo

            })

            localStorage.setItem('secFavoritos', JSON.stringify(peliculasSelec))
            setFavoritos(peliculasSelec)
        }

    }

    const añadirOEliminarAll = e => {
        const favoritos = localStorage.getItem('secFavoritos')
        
        let secFavs 
        // funcion para añadir la seleccion al localstorage
        if( favoritos === null ){
          secFavs = []
        } else{
          secFavs = JSON.parse(favoritos)
        }

        const btn = e.currentTarget
        const parent = btn.parentElement

        
        const lista = parent.querySelector('div.lista')
        const año = lista.querySelector('p.año').innerText
    
        const categoria = lista.querySelector('p.categoria').innerText
        const rating = lista.querySelector('p.rating').innerText
  
        const titulo = lista.querySelector('h4.titulo').innerText;
    
        const img = parent.querySelector('img').getAttribute('src');
      
        const pelicula = {
            categoria, año, rating, titulo,  img
        }
        
        console.log(pelicula)
        
        
        let favArray = secFavs.find(peli => {
            return peli.titulo === pelicula.titulo 
        })

        if (!favArray){
            secFavs.push(pelicula)
            localStorage.setItem('secFavoritos', JSON.stringify(secFavs))
            setFavoritos(secFavs)
        } 

        else{
            let peliculasSelec = secFavs.filter(peli => {
                return peli.titulo !== favArray.titulo

            })

            localStorage.setItem('secFavoritos', JSON.stringify(peliculasSelec))
            setFavoritos(peliculasSelec)
        }

    }

  return (
    <>
       
      
      <Navbar/>
      <Search/>
      <Routes >
            <Route path='/' element={ <Home añadirOEliminar={añadirOEliminar} />}/>
            <Route path='/movies' element={<Movies añadirOEliminarAll={añadirOEliminarAll}/>}/>
            <Route path='/series' element={<Series añadirOEliminarAll={añadirOEliminarAll} />}/>
            <Route path='/bookmark' element={<Bookmark favoritos={favoritos}/>}/>
      </Routes>
    </>
  )
}

export default App

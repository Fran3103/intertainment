import { useEffect, useState } from 'react'

const Verificar = () => {

    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        const favoritosArray = localStorage.getItem('secFavoritos')
        const arrayFav = JSON.parse(favoritosArray)
        setFavoritos(arrayFav)
    }, [])

    console.log(favoritos)

  return (
    <div>Verificar</div>
  )
}

export default Verificar
import datos from '../data.json';
import PropTypes from 'prop-types'
import guardar from '../assets/icon-bookmark-empty.svg';
import guardado from '../assets/icon-bookmark-full.svg';
import logoMovie from '../assets/icon-category-movie.svg'
import { useEffect, useState } from 'react';

const Movies = ({ añadirOEliminarAll, busqueda = ''}) => {

    const dataTrending = datos.filter((trend) => trend.thumbnail.regular);
    const [activeList, setActiveList] = useState(new Array(dataTrending.length).fill(true));
    const data = datos.filter((dato) => dato.category === 'Movie')
    const [resultado, setResultado] = useState([])

    const handleToggleActive = (index) => {
        const newActiveList = [...activeList];
        newActiveList[index] = !newActiveList[index];
        setActiveList(newActiveList);
    };

    useEffect(() => {
        const favoritosArray = localStorage.getItem('secFavoritos')
        const arrayFav = JSON.parse(favoritosArray) || []
        const newActiveList = data.map(dato => {
            return arrayFav.some(fav => fav.titulo === dato.title);
        })
        setActiveList(newActiveList)
    }, [])

    useEffect(() => {
        if (!busqueda) {
          setResultado(data);
        } else {
            const filteredData = data.filter((dato) => dato.title && dato.title.toLowerCase().includes(busqueda.toLowerCase()));
    
          setResultado(filteredData);
        }
      }, [busqueda]);

    Movies.propTypes = {
        añadirOEliminarAll: PropTypes.func.isRequired,
        busqueda: PropTypes.string.isRequired
    };
  return (

    
    <div className="md:ml-36 md:m-8 p-4 mt-32 md:mt-24   ">
        <h1 className="text-white text-2xl font-light md:text-4xl mb-2">Movies</h1>

        <div className='grid grid-cols-2   md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 mt-5 w-full '>
        {
            resultado.map((dato, index) => {
                return (
                    <div key={dato.title} className='flex flex-col w-full mb-12 relative  '>
                        <div className='w-full rounded-lg relative  flex '>
                            <img src={dato.thumbnail.regular.small} alt={dato.title}  className='md:hidden rounded-lg  img'/>
                            <img src={dato.thumbnail.regular.medium} alt={dato.title} className='hidden md:block xl:hidden rounded-lg ' />
                            <img src={dato.thumbnail.regular.large} alt={dato.title}  className='hidden xl:block  rounded-lg '/>
                            
                        </div>
                        <div className='lista'>
                            <div className='flex items-center gap-2 text-xs text-gray md:text-base  xl:text-lg  '>
                                <p className='año'>{dato.year} </p>
                                <hr className='w-1 h-1 rounded-full bg-gray'/>
                                <img src={ logoMovie } alt={dato.category} className='w-3 h-3 -mr-1 ' />
                                <p className='categoria'> {dato.category} </p>
                                <hr className='w-1 h-1 rounded-full bg-gray'/>
                                <p className='rating'>{dato.rating} </p>
                            </div>
                            <h4 className='md:text-lg xl:text-xl text-white titulo'>{dato.title}</h4>
                        </div>
                        <button className='absolute top-2 right-[3%]  p-2 w-7 2xl:w-10  2xl:h-10 rounded-full bg-gray flex justify-center cursor-pointer' onClick={(e) => {
                                     handleToggleActive(index)
                                    añadirOEliminarAll(e)
                                }}>
                                <img src={ activeList[index] === false ? guardar : guardado} alt="save" className='w-4  m-auto'/>
                            </button>

                    </div>
                )
            }) 
        }
    </div>


    </div>
  )
}



export default Movies
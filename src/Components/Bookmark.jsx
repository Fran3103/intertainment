import PropTypes from 'prop-types'
import guardado from '../assets/icon-bookmark-full.svg';
import logoMovie from '../assets/icon-category-movie.svg'
import logoSerie from '../assets/icon-category-tv.svg'

const Bookmark = ({favoritos, añadirOEliminarAll}) => {

    const peliculas = favoritos.filter(pelis => pelis.categoria === 'Movie')
    const series = favoritos.filter(pelis => pelis.categoria === 'TV Series')
  


    Bookmark.propTypes = {
        añadirOEliminarAll: PropTypes.func.isRequired,

    };

  
  return (
    <div className="md:ml-36 md:m-8 p-4 mt-32 md:mt-24  ">
        <h2 className="text-white text-2xl font-light md:text-4xl mb-2">Bookmarked Movies</h2>
        <div className='grid grid-cols-2   md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 mt-5 w-full '>
            {
            peliculas.length > 0 ? ( peliculas.map((peli) => {
                    return (
                        < div key={peli.titulo} className='flex flex-col w-full mb-12 relative'>
                            <div className='w-full rounded-lg relative  flex '>
                                <img src={peli.img} alt={peli.title}  className='rounded-lg img'/>
                                
                                
                            </div>
                            <div className='lista'>
                                <div className='flex items-center gap-2 text-xs text-gray md:text-base  xl:text-lg '>
                                    <p className='año'>{peli.año} </p>
                                    <hr className='w-1 h-1 rounded-full bg-gray'/>
                                    <img src={peli.categoria === 'Movie' ? logoMovie : logoSerie} alt={peli.categoria} className='w-3 h-3 -mr-1 ' />
                                    <p className='categoria'> {peli.categoria} </p>
                                    <hr className='w-1 h-1 rounded-full bg-gray'/>
                                    <p className='rating'>{peli.rating} </p>
                                </div>
                                <h4 className='md:text-lg xl:text-xl text-white titulo'>{peli.titulo}</h4>
                            </div>
                            <button className='absolute top-2 right-[3%]  p-2 w-7 2xl:w-10  2xl:h-10 rounded-full bg-gray flex justify-center cursor-pointer'onClick={(e) => {
                                     
                                    añadirOEliminarAll(e)
                                }} >
                                <img src={  guardado } alt="save" className='w-4  m-auto'/>
                            </button>

                        </div>
                    )
                })) : (
                    <h2 className="text-white md:w-[600px]  text-2xl font-light md:text-3xl mb-2"> No hay Peliculas seleccionadas</h2>
                )
            }
        </div>
        
        <h2 className="text-white text-2xl font-light md:text-4xl mb-2">Bookmarked TV Series</h2>
        <div className='grid grid-cols-2   md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 mt-5 w-full '>
            {
            series.length > 0 ? ( series.map((peli) => {
                    return (
                        < div key={peli.titulo} className='flex flex-col w-full mb-12 relative'>
                            <div className='w-full rounded-lg relative  flex '>
                                <img src={peli.img} alt={peli.title} className='rounded-lg img' />
                                
                                <div className='absolute top-2 right-[3%]  p-2 w-7 2xl:w-10  2xl:h-10 rounded-full bg-gray flex justify-center cursor-pointer'>
                                    <img src={  guardado } alt="save" className='w-4  m-auto' />
                                </div>
                            </div>
                            <div className='lista'>
                                <div className='flex items-center gap-2 text-xs text-gray md:text-base  xl:text-lg '>
                                    <p className='año'>{peli.año} </p>
                                    <hr className='w-1 h-1 rounded-full bg-gray'/>
                                    <img src={peli.categoria === 'Movie' ? logoMovie : logoSerie} alt={peli.categoria} className='w-3 h-3 -mr-1' />
                                    <p className='categoria'>  {peli.categoria} </p>
                                    <hr className='w-1 h-1 rounded-full bg-gray'/>
                                    <p className='rating'>{peli.rating} </p>
                                </div>
                                <h4 className='md:text-lg xl:text-xl text-white titulo '>{peli.titulo}</h4>
                            </div>
                            <button className='absolute top-2 right-[3%]  p-2 w-7 2xl:w-10  2xl:h-10 rounded-full bg-gray flex justify-center cursor-pointer'onClick={(e) => {
                                     
                                     añadirOEliminarAll(e)
                                 }} >
                                 <img src={  guardado } alt="save" className='w-4  m-auto'/>
                             </button>

                        </div>
                    )
                }) ) :
                 (
                    <h2 className="text-white w-[300px] text-2xl font-light md:text-3xl mb-2">
                        No hay TV Series 
                    </h2>
                 )
            }
        </div>
    </div>
  )
}

Bookmark.propTypes = {
    favoritos: PropTypes.array.isRequired, // Puedes ajustar el tipo según sea necesario
};

export default Bookmark
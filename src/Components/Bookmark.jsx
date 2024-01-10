import PropTypes from 'prop-types'
import guardado from '../assets/icon-bookmark-full.svg';
import logoMovie from '../assets/icon-category-movie.svg'
import logoSerie from '../assets/icon-category-tv.svg'

const Bookmark = ({favoritos}) => {

    const peliculas = favoritos.filter(pelis => pelis.categoria === 'Movie')
    const series = favoritos.filter(pelis => pelis.categoria === 'TV Series')
  
    
  return (
    <div className="md:ml-36 md:m-8 p-4 mt-32 md:mt-24  ">
        <h1>Bookmarked Movies</h1>
        <div className='grid grid-cols-2   md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 mt-5 w-full '>
            {
            peliculas && peliculas.map((peli) => {
                    return (
                        < div key={peli.titulo} className='flex flex-col w-full mb-12'>
                            <div className='w-full rounded-lg relative  flex '>
                                <img src={peli.img} alt={peli.title} />
                                
                                <div className='absolute top-2 right-[3%]  p-2 w-7 2xl:w-10  2xl:h-10 rounded-full bg-gray flex justify-center cursor-pointer'>
                                    <img src={  guardado } alt="save" className='w-4  m-auto' />
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 text-xs text-gray md:text-base  xl:text-lg '>
                                    <p>{peli.año} </p>
                                    <hr className='w-1 h-1 rounded-full bg-gray'/>
                                    <img src={peli.categoria === 'Movie' ? logoMovie : logoSerie} alt={peli.categoria} className='w-3 h-3 -mr-1' />
                                    <p> {peli.categoria} </p>
                                    <hr className='w-1 h-1 rounded-full bg-gray'/>
                                    <p>{peli.rating} </p>
                                </div>
                                <h4 className='md:text-lg xl:text-xl text-white '>{peli.titulo}</h4>
                            </div>


                        </div>
                    )
                })
            }
        </div>
        
        <h2>Bookmarked TV Series</h2>
        <div className='grid grid-cols-2   md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 mt-5 w-full '>
            {
            series && series.map((peli) => {
                    return (
                        < div key={peli.titulo} className='flex flex-col w-full mb-12'>
                            <div className='w-full rounded-lg relative  flex '>
                                <img src={peli.img} alt={peli.title} />
                                
                                <div className='absolute top-2 right-[3%]  p-2 w-7 2xl:w-10  2xl:h-10 rounded-full bg-gray flex justify-center cursor-pointer'>
                                    <img src={  guardado } alt="save" className='w-4  m-auto' />
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-2 text-xs text-gray md:text-base  xl:text-lg '>
                                    <p>{peli.año} </p>
                                    <hr className='w-1 h-1 rounded-full bg-gray'/>
                                    <img src={peli.categoria === 'Movie' ? logoMovie : logoSerie} alt={peli.categoria} className='w-3 h-3 -mr-1' />
                                    <p> {peli.categoria} </p>
                                    <hr className='w-1 h-1 rounded-full bg-gray'/>
                                    <p>{peli.rating} </p>
                                </div>
                                <h4 className='md:text-lg xl:text-xl text-white '>{peli.titulo}</h4>
                            </div>


                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

Bookmark.propTypes = {
    favoritos: PropTypes.array.isRequired, // Puedes ajustar el tipo según sea necesario
};

export default Bookmark
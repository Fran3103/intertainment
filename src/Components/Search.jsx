
import PropTypes from 'prop-types'
import search from '../assets/icon-search.svg'


const Search = ({resultadoBusqueda}) => {

    

    
    const onChange = (e) => {
        const valor = e;
        
        resultadoBusqueda(valor);
      }

    const onSubmit = (e) => {
        e.preventDefault()
       
        e.target[0].value = ''
        
    } 

    Search.propTypes = {
        resultadoBusqueda: PropTypes.func.isRequired,
 

    };

  return (
    <div className='flex  fixed top-20 md:h-22 md:pt-[55px] md:top-0 z-50 items-center gap-3 p-3 md:ml-36 bg-darkBlue w-full'>
        <img src={search} alt="search" className='w-9' />
        <form action="" onChange={onChange} onSubmit={onSubmit}  className='w-full'>
            
            <input type="search" name='search' placeholder='Search for movies or TV series' className='p-2 bg-transparent text-sm w-72 font-light text-gray border-none'/>

        </form>
    </div>
  )
}

export default Search
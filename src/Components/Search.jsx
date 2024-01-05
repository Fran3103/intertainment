import search from '../assets/icon-search.svg'

const Search = () => {
  return (
    <div className='flex items-center mt-20 w-full gap-3 p-3 '>
        <img src={search} alt="search" className='w-9' />
        <form action="" className='w-full'>
            
            <input type="search" name='search' placeholder='Search for movies or TV series' className='p-2 bg-transparent text-sm w-72 font-light text-gray'/>

        </form>
    </div>
  )
}

export default Search
import { useState } from 'react'
import search from '../assets/icon-search.svg'

const Search = () => {

    const [busqueda, setBusqueda] = useState("")

    const onChange = (e) =>{
        const valor = e.target.value
        setBusqueda(valor)
    }
    const onSubmit = (e) =>{
        e.preventDefault()
    }

    
  return (
    <div className='flex  fixed top-20 md:h-22 md:pt-[55px] md:top-0 z-50 items-center gap-3 p-3 md:ml-36 bg-darkBlue w-full'>
        <img src={search} alt="search" className='w-9' />
        <form action="" onChange={onChange} onSubmit={onSubmit} className='w-full'>
            
            <input type="search" name='search' placeholder='Search for movies or TV series' className='p-2 bg-transparent text-sm w-72 font-light text-gray border-none'/>

        </form>
    </div>
  )
}

export default Search
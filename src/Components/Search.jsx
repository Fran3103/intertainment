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
    <div className='flex items-center mt-20 w-full gap-3 p-3 md:ml-32 md:m-8 '>
        <img src={search} alt="search" className='w-9' />
        <form action="" onChange={onChange} onSubmit={onSubmit} className='w-full'>
            
            <input type="search" name='search' placeholder='Search for movies or TV series' className='p-2 bg-transparent text-sm w-72 font-light text-gray border-none'/>

        </form>
    </div>
  )
}

export default Search
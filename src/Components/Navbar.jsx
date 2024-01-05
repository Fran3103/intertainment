import logo from '../assets/logo.svg'
import home from '../assets/icon-nav-home.svg'
import movies from '../assets/icon-nav-movies.svg'
import series from '../assets/icon-nav-tv-series.svg'
import bookmark from '../assets/icon-nav-bookmark.svg'
import avatar from '../assets/image-avatar.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0   start-0 border-b md:w-28 md:h-[98%] md:m-2  md:rounded-xl">
            <div className="max-w-screen-xl flex  items-center justify-between  p-6 md:flex-col  h-full  px-4">
                
                    <Link to="/"><img src={logo}className="md:mt-4 md:size-8" alt=" Logo"/></Link>
                    <ul className=" hidden justify-between items-center     md:flex md:justify-start md:gap-8 md:mt-12 h-full  md:flex-col">
                        <li>
                            <Link to="/"><img src={home} alt="home" className='size-7' /></Link>
                        </li>
                        <li>
                            <Link to="/movies">
                                <img src={movies} alt="movies"  className='size-7' />
                            </Link >
                        </li>
                        <li>
                            <Link to="/series"><img src={series} alt="series"  className='size-7' /></Link>
                        </li>
                        <li>
                            <Link to="/bookmark"><img src={bookmark} alt="bookmark"   className='size-7'/></Link>
                        </li>
                    </ul>
                
                
                <div className=" items-center justify-between w-2/4 md:flex md:w-auto md:order-0" >
                    <ul className="flex  justify-between items-center md:p-0    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                           <Link to="/"> <img src={home} alt="home"/></Link>
                        </li>
                        <li>
                            <Link to="/movies"><img src={movies} alt="movies" /></Link>
                        </li>
                        <li>
                            <Link to="/series"><img src={series} alt="series" /></Link>
                        </li>
                        <li>
                        <Link to="/bookmark"><img src={bookmark} alt="bookmark" /></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="/"><img src={avatar} alt="avatar" className='w-8 boder border-white border-[1px] rounded-full md:mb-5 md:w-12' /></Link>
                </div>
            </div>
        </nav>

    
  )
}

export default Navbar
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import home from '../assets/icon-nav-home.svg';
import homeActive from '../assets/icon-nav-home-active.svg';
import movies from '../assets/icon-nav-movies.svg';
import moviesActive from '../assets/icon-category-movie.svg';
import series from '../assets/icon-nav-tv-series.svg';
import seriesActive from '../assets/icon-category-tv.svg';
import bookmark from '../assets/icon-nav-bookmark.svg';
import bookmarkActive from '../assets/icon-bookmark-full.svg';
import avatar from '../assets/image-avatar.png';

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState('home');

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <nav className="bg-[#161d2f] fixed w-full top-0 md:w-28 md:h-[98%] md:m-2 md:rounded-xl">
      <div className="max-w-screen-xl flex items-center justify-between p-6 md:flex-col h-full px-4">
        <Link to="/">
          <img src={logo} className="md:mt-4 md:size-8" alt=" Logo" />
        </Link>
        <ul className="hidden justify-between items-center md:flex md:justify-start md:gap-8 md:mt-12 h-full md:flex-col">
          <li>
            <Link to="/">
              <img
                src={activeIcon === 'home' ? homeActive : home}
                alt="home"
                className="size-7 hover:fill-white"
                onClick={() => handleIconClick('home')}
              />
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <img
                src={activeIcon === 'movies' ? moviesActive : movies}
                alt="movies"
                className="size-7 hover:fill-red"
                onClick={() => handleIconClick('movies')}
              />
            </Link>
          </li>
          <li>
            <Link to="/series">
              <img
                src={activeIcon === 'series' ? seriesActive : series}
                alt="series"
                className="size-7"
                onClick={() => handleIconClick('series')}
              />
            </Link>
          </li>
          <li>
            <Link to="/bookmark">
              <img
                src={activeIcon === 'bookmark' ? bookmarkActive : bookmark}
                alt="bookmark"
                className="size-7"
                onClick={() => handleIconClick('bookmark')}
              />
            </Link>
          </li>
        </ul>
        <div className="items-center justify-between w-2/4 md:flex md:w-auto md:order-0">
          <ul className="flex justify-between items-center md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link to="/">
                <img 
                src={activeIcon === 'home' ? homeActive : home} 
                className='size-5'
                onClick={() => handleIconClick('home')}
                />
              </Link>
            </li>
            <li>
              <Link to="/movies">
                <img 
                src={activeIcon === 'movies' ? moviesActive : movies}
                className='size-5'
                onClick={() => handleIconClick('movies')}
                />
              </Link>
            </li>
            <li>
              <Link to="/series">
                <img 
                src={activeIcon === 'series' ? seriesActive : series} 
                className='size-5'
                onClick={() => handleIconClick('series')}
                />
              </Link>
            </li>
            <li>
              <Link to="/bookmark">
                <img 
                src={activeIcon === 'bookmark' ? bookmarkActive : bookmark}  
                className='size-5'
                onClick={() => handleIconClick('bookmark')}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/">
            <img
              src={avatar}
              alt="avatar"
              className="w-8 boder border-white border-[1px] rounded-full md:mb-5 md:w-12"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

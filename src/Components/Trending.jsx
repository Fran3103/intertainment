import { Link } from 'react-router-dom';
import data from '../data.json';

import guardar from '../assets/icon-bookmark-empty.svg';
import guardado from '../assets/icon-bookmark-full.svg';
import { useRef, useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"

const Trending = () => {
    const dataTrending = data.filter((trend) => trend.thumbnail.trending);
    const [activeList, setActiveList] = useState(new Array(dataTrending.length).fill(true));
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);



    const handleToggleActive = (index) => {
        const newActiveList = [...activeList];
        newActiveList[index] = !newActiveList[index];
        setActiveList(newActiveList);
    };
    const handleScroll = (scrollOffset) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += scrollOffset;
        }
    };

    const derecha = () => {
        const nextSlide = (currentSlide + 1) % dataTrending.length;
        setCurrentSlide(nextSlide);
        handleScroll(containerRef.current.clientWidth); // Mueve el scroll al ancho del contenedor
        console.log(containerRef.current.clientWidth)
    };

    const izquierda = () => {
        const prevSlide = (currentSlide - 1 + dataTrending.length) % dataTrending.length;
        setCurrentSlide(prevSlide);
        handleScroll(-containerRef.current.clientWidth); // Mueve el scroll al ancho negativo del contenedor
    };







    
    return (
        <div className='flex relative items-center gap-4 p-4 pl-0  w-full mb-5 h-full ' id='slider'
       
        >
            <button className='absolute top-0 my-4 left-0 z-50 text-[rgba(0,0,0,0)] hover:text-[rgba(0,0,0,0.4)] text-3xl w-8 h-[89%] rounded-tl-xl rounded-bl-xl bg-transparent hover:bg-[rgba(0,0,0,0.3)] transition ease-in-out duration-300' onClick={izquierda}><MdKeyboardArrowLeft /></button>

            <div className='h-[140px] md:h-[230px] flex gap-2 overflow-hidden overflow-x-hidden' ref={containerRef}>
                {dataTrending.map((trend, index) => (
                    <div key={trend.title} className='  h-[140px] md:h-[230px]'  >
                        <div className='w-[240px] h-[140px]  md:w-[470px] md:h-[230px] rounded-xl relative'>
                            <img src={trend.thumbnail.trending?.small} alt={trend.title} className='rounded-xl w-full h-full' />
                            <div className='flex flex-col absolute bottom-3 left-4  text-white font-light'>
                                <div className='flex gap-3 text-sm '>
                                    <p>{trend.year}</p>
                                    <p>{trend.category}</p>
                                    <p>{trend.rating}</p>
                                </div>
                                <Link to={`/detalle/${trend.title}`}>    
                                    <h3>{trend.title}</h3>
                                </Link>
                            </div>
                            <div
                                className='absolute top-2 right-2 xl:top-3 xl:right-3 xl:w-9 cursor-pointer  p-2 w-7 rounded-full bg-gray flex justify-center'
                                onClick={() => handleToggleActive(index)}
                            >
                                <img src={activeList[index] === false ? guardado : guardar} alt='save' className='w-4' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className='absolute top-0 text-[rgba(0,0,0,0)] hover:text-[rgba(0,0,0,0.4)] my-4 right-4 z-50 text-3xl w-8 h-[89%] rounded-tr-xl rounded-br-xl bg-transparent hover:bg-[rgba(0,0,0,0.3)] transition ease-in-out duration-300' onClick={derecha}><MdKeyboardArrowRight  /></button>
        </div>
    );
};

export default Trending;

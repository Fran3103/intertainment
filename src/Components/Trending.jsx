import { Link } from 'react-router-dom';
import data from '../data.json';
import guardar from '../assets/icon-bookmark-empty.svg';
import guardado from '../assets/icon-bookmark-full.svg';
import { useState } from 'react';

const Trending = () => {
    const dataTrending = data.filter((trend) => trend.thumbnail.trending);
    const [activeList, setActiveList] = useState(new Array(dataTrending.length).fill(true));

    const handleToggleActive = (index) => {
        const newActiveList = [...activeList];
        newActiveList[index] = !newActiveList[index];
        setActiveList(newActiveList);
    };

    return (
        <div className='flex  items-center gap-4 p-4 pl-0 overflow-hidden w-full mb-5 '>
            {dataTrending.map((trend, index) => (
                <div key={trend.title} className='w-full h-[140px] md:h-[230px]'>
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
                            className='absolute top-2 right-2 xl:top-3 xl:right-3 xl:w-9  p-2 w-7 rounded-full bg-gray flex justify-center'
                            onClick={() => handleToggleActive(index)}
                        >
                            <img src={activeList[index] === false ? guardado : guardar} alt='save' className='w-4' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Trending;

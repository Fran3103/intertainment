
import datos from '../data.json';

import guardar from '../assets/icon-bookmark-empty.svg';
import guardado from '../assets/icon-bookmark-full.svg';
import logoTv from '../assets/icon-category-tv.svg'
import { useState } from 'react';

const Series = () => {

    const dataTrending = datos.filter((trend) => trend.thumbnail.regular);
    const [activeList, setActiveList] = useState(new Array(dataTrending.length).fill(true));
    const data = datos.filter((dato) => dato.category === 'TV Series')
    const handleToggleActive = (index) => {
        const newActiveList = [...activeList];
        newActiveList[index] = !newActiveList[index];
        setActiveList(newActiveList);
    };
  return (

    
    <div className="md:ml-36 md:m-8 p-4 mt-32 md:mt-24   ">
        <h1 className="text-white text-2xl font-light md:text-4xl mb-2">Tv Series</h1>

        <div className='grid grid-cols-2   md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-5 mt-5 w-full '>
        {
            data.map((dato, index) => {
                return (
                    <div key={dato.title} className='flex flex-col w-full mb-12'>
                        <div className='w-full rounded-lg relative  flex '>
                            <img src={dato.thumbnail.regular.small} alt={dato.title}  className='md:hidden rounded-lg '/>
                            <img src={dato.thumbnail.regular.medium} alt={dato.title} className='hidden md:block xl:hidden rounded-lg ' />
                            <img src={dato.thumbnail.regular.large} alt={dato.title}  className='hidden xl:block  rounded-lg'/>
                            <div className='absolute top-2 right-[3%]  p-2 w-7 2xl:w-10  2xl:h-10 rounded-full bg-gray flex justify-center cursor-pointer' onClick={() => handleToggleActive(index)}>
                                <img src={ activeList[index] === false ? guardado : guardar} alt="save" className='w-4  m-auto' onClick={() => handleToggleActive(index)}/>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-2 text-xs text-gray md:text-base  xl:text-lg '>
                                <p>{dato.year} </p>
                                <hr className='w-1 h-1 rounded-full bg-gray'/>
                                <img src={ logoTv } alt={dato.category} className='w-3 h-3 -mr-1' />
                                <p> {dato.category} </p>
                                <hr className='w-1 h-1 rounded-full bg-gray'/>
                                <p>{dato.rating} </p>
                            </div>
                            <h4 className='md:text-lg xl:text-xl text-white '>{dato.title}</h4>
                        </div>


                    </div>
                )
            }) 
        }
    </div>


    </div>
  )
}

export default Series
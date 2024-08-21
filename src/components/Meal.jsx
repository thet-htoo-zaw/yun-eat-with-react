import { useState } from 'react'

import { topPicks } from '../data/data.jsx'
import {} from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6';


export const Meal = () => {
    const[foods, setFoods] = useState(topPicks);
    const filterCat = (category) => {
        setFoods(
            topPicks.filter(item => item.category === category)
        )
    }
  return (
    <>
        <div className='max-w-[1520px] m-auto px-4 py-12 '>
            <h1 className='text-orange-500 font-bold text-center text-2xl capitalize py-2'>our meal</h1>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center md:justify-center my-2'>
                    <button onClick={() => setFoods(topPicks)} className='m-1 px-3 rounded-full border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>

                    <button onClick={() => filterCat('veg')} className='m-1 px-3 rounded-full border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Veg</button>

                    <button onClick={()=> filterCat('chicken')} className='m-1 px-3 rounded-full border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>

                    <button onClick={()=> filterCat('fish')} className='m-1 px-3 rounded-full border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Fish</button>

                    <button onClick={()=> filterCat('seafood')} className='m-1 px-3 rounded-full border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Seafood</button>
                </div>

            </div>
        </div>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                foods.map(item => (
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img src={item.img} alt="{img.title}" className='w-full h-[200px] object-cover rounded-lg'/>
                        <div className='flex justify-between py-2 px-4'>
                            <p className='bg-orange-700 h-18 w-18 rounded-full text-white py-4 px-2 border-8 -mt-10 border-white hover:shadow-xl'>{item.price}</p>
                        </div>
                        <div className='pl-2 py-4'>
                            <span className='text-blue-500 capitalize font-bold'>view more</span>
                            <FaArrowRightLong size={25} className='w-5 ml-2 inline'></FaArrowRightLong>
                        </div>
                    </div>
                ))
            }

        </div>
    </>
  )
}

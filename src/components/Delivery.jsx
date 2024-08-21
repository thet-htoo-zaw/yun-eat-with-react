import React from 'react'

export const Delivery = () => {
  return (
    <>
    <div className='w-full bg-white py-16 px-4 '>
        <h3 className='text-orange-500 font-bold text-2xl text-center capitalize'>
            Quick Deliver app
        </h3>
        <div className='w-full mx-auto grid md:grid-cols-2'>
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" 
            className='w-[550px] mx-auto my-4'
            />
            <div className='flex flex-col justify-center'>
                <p className='text-[#000f9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl fond-bold py-2'>Limitless Convenience on-demand</h1>
                <p>
                    <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias id ad corrupti aliquam nostrum reprehenderit deserunt voluptatem velit eos, porro sapiente error quam, ducimus, impedit mollitia obcaecati enim totam.
                    Necessitatibus adipisci officia error, accusantium architecto assumenda facilis, nesciunt dolorem quis, vitae ea labore placeat corrupti quos officiis dolor. Sequi quasi excepturi eos quia nemo odio, distinctio natus maiores dolores.
                    </span>
                </p>
                <button className='bg-black text-white rounded-md w-[200px] font-medium my-6 mx-auto md:mx-0 py-3 capitalize hover:bg-gray-400 hover:text-black'>Get Started</button>
            </div>
        </div>
    </div>
    </>
    
  )
}

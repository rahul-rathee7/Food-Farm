import React from 'react'
import Image from 'next/image'
import s from '../../../public/assets/images/s.png'
import avacado from '../../../public/assets/images/avacado.png'
// import capsican from '../../../public/assets/images/capsican.png'

const Cards = () => {
  return (
    <div className='grid grid-cols-5 gap-3 bg-white h-full w-full p-2'>

        <div className='bg-white rounded-xl px-2 py-4  w-full'>
            <Image className='bg-gray-300 p-4 rounded-xl' src={s} alt="strawberry" />
            <div className='px-3 mt-2' >
                <p className='text-black font-semibold text-2xl  '>Fresh Strawberry</p>
                    <div className='flex justify-evenly text-2xl'>
                        <span className='flex'><p className='text-gray-500 line-through'>₹120</p><p className='text-black px-3'><b>₹90</b></p></span>
                        <span className='border border-gray-500 text-gray-500 px-4'>10% off</span>
                    </div>
                <button  className='bg-red-500 w-full mt-3 p-2 rounded-xl' type='button'>Add to Cart</button>
            </div>
        </div>

        <div className='bg-white rounded-xl px-2 py-4  w-full'>
            <Image className='bg-gray-300 p-4 rounded-xl h-[70%]' src={avacado} alt="strawberry" />
            <div className='px-3 mt-2' >
                <p className='text-black font-semibold text-2xl '>Fresh Avacado</p>
                    <div className='flex justify-evenly text-2xl'>
                        <span className='flex'><p className='text-gray-500 line-through'>₹120</p><p className='text-black px-3'><b>₹90</b></p></span>
                        <span className='border border-gray-500 text-gray-500 px-4'>10% off</span>
                    </div>
                <button  className='bg-red-500 w-full mt-3 p-2 rounded-xl' type='button'>Add to Cart</button>
            </div>
        </div>

    </div> 
  )
}

export default Cards
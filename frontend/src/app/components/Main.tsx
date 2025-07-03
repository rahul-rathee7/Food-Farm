import React from 'react'

const Main = () => {
  return (
    <div className='w-full'>
      <div id="bg-image" className={`flex justify-center text-white items-center flex-col gap-10 w-full text-center h-[80vh] md:h-[60vh] lg:h-[70vh]`}>
          <p className='text-xl'>Fuel Your Body, Feed Your Soul with Organic Goodness</p>
          <h1 className='text-6xl font-[1000] flex flex-col -gap-5 leading-none'><span>ALWAYS</span><span>ORGANIC</span></h1>
          <button className='font-bold bg-red-500 px-10 py-3 rounded-lg' type='button'>START SHOPPING</button>
      </div>
    </div>
  )
}
export default Main

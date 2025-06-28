import React from 'react'

const Main = () => {
  return (
    <div>
      <div id="bg-image" className={`flex justify-center items-center flex-col w-full h-[60vh]`}>
          <p className='text-4xl'>Fuel Your Body, Feed Your Soul with Organic Goodness</p>
          <h1 className='text-9xl font-[1000] flex flex-col -gap-5 leading-none'><span>ALWAYS</span><span>ORGANIC</span></h1>
          <button className='font-bold bg-red-500 px-10 py-3 rounded-lg' type='button'>START SHOPPING</button>
      </div>
    </div>
  )
}
export default Main

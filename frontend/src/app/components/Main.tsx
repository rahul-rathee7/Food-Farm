import React from 'react'
import Image from 'next/image'
import HomeImage from '../../../public/assets/images/584072-1920x1080-desktop-full-hd-tomato-wallpaper-photo.webp'

const Main = () => {
  return (
    <div>
      <div className='relative w-full h-[60vh]'>
      <Image className='absolute w-full h-full' src={HomeImage} alt='home'/>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
      <p className='text-4xl'>Fuel Your Body, Feed Your Soul with Organic Goodness</p>
      <h1 className='text-[10rem] font-[1000] flex flex-col -gap-5 leading-none'><span>ALWAYS</span><span>ORGANIC</span></h1>
      <button className='font-bold bg-red-500 px-10 py-3 rounded-lg' type='button'>START SHOPPING</button>
      </div>
      </div>
    </div>
  )
}
export default Main

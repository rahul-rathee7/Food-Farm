import React from 'react'
import Image from 'next/image'
import WomanImage from '../../../public/assets/images/medium-shot-woman-living-healthy-life_23-2151201970.webp'

const SubscribeSection = () => {
  return (
    <div className='relative w-full h-[55vh] mt-10'>
      <div className='absolute w-full h-full'>
        <Image className='w-full h-full' src={WomanImage} alt='woman with vegitables'/>
      </div>
      <div className='w-2/6 flex flex-col gap-5 transform translate top-1/2 left-1/2 translate-x-1/3 translate-y-1/3'>
      <h1 className='text-6xl'>Get 20% Discount On Your First Purchase</h1>
      <p>Just Sign Up & Register it now to become member</p>
      <input className='text-xl p-2 focus:outline-none text-black w-full bg-white rounded-md' type="email" placeholder='Email address'/>
      <button className='self-start bg-white text-black rounded-lg w-full p-3' type='button'>SUBSCRIBE NOW</button>
      </div>
    </div>
  )
}

export default SubscribeSection

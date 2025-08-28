'use client'

import React from 'react'

const SubscribeSection = () => {
  return (
    <div id='sub-bg-image' className='flex items-center w-full text-white h-[55vh] mt-10'>
      <div className='sm:ml-50 sm:w-2/6 flex flex-col gap-5'>
      <h1 className='text-2xl'>Get 20% Discount On Your First Purchase</h1>
      <p>Just Sign Up & Register it now to become member</p>
      <input className='text-xl p-2 focus:outline-none text-black w-full bg-white rounded-md' type="email" placeholder='Email address'/>
      <button className='self-start bg-white text-black rounded-lg w-full p-3' type='button'>SUBSCRIBE NOW</button>
      </div>
    </div>
  )
}

export default SubscribeSection

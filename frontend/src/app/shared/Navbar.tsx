'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import cart from '../../../public/assets/shopping_cart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import save from '../../../public/assets/bookmark_star_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import profile from '../../../public/assets/account_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import Login from '../UserAuth/Login'

const Navbar = () => {
  const [isLoginSection, setisLoginSection] = useState(false);

  return (
    <>
    <div className='flex flex-col w-[80%] mx-auto'>
      <div className='flex justify-between p-3 mx-auto w-full border-b-2 p-8 items-center'>
        <div className='text-2xl'>FoodFarm</div>
        <div className='w-7/12 border-2 rounded-2xl'>
          <form className='flex w-full'>
            <select className='focus:outline-none w-1/6 m-5'>
              <option className='text-white bg-black'>Home</option>
              <option className='text-white bg-black'>Organic</option>
              <option className='text-white bg-black'>Herbs</option>
              <option className='text-white bg-black'>Snacks</option>
              <option className='text-white bg-black'>Beverages</option>
              <option className='text-white bg-black'>Bakery</option>
              <option className='text-white bg-black'>Canned Foods</option>
              <option className='text-white bg-black'>Dairy</option>
            </select>
            <input className='bg-white text-black text-2xl w-full p-5 focus:outline-none' type="text" />
            <button className='hover:bg-red-500 rounded-r-xl w-1/3 p-5' type='submit'>SEARCH</button>
          </form>
        </div>
        <div className='flex gap-10'>
          <div>
            <Image src={cart} alt='cart' width={24} height={24}/>
          </div>
          <div>
            <Image src={save} alt='save' width={24} height={24}/>
          </div>
          <div>
            <Image src={profile} onClick={() => setisLoginSection(true)} alt='profile' width={24} height={24}/>
          </div>
        </div>
      </div>
      <div className='flex justify-between w-11/12 mx-auto '>
        <div className='py-5 px-10 hover:bg-red-500 rounded-sm'>HOME</div>
        <div className='py-5 px-10 hover:bg-red-500 rounded-sm'>ORGANIC</div>
        <div className='py-5 px-10 hover:bg-red-500 rounded-sm'>HERBS</div>
        <div className='py-5 px-10 hover:bg-red-500 rounded-sm'>SNACKS</div>
        <div className='py-5 px-10 hover:bg-red-500 rounded-sm'>BEVERAGES</div>
        <div className='py-5 px-10 hover:bg-red-500 rounded-sm'>BAKERY</div>
        <div className='py-5 px-10 hover:bg-red-500 rounded-sm'>CANNED FOODS</div>
        <div className='py-5 px-10 hover:bg-red-500 rounded-sm'>DAIRY</div>
      </div>
    </div>
      {isLoginSection && 
      <div className='fixed top-0 left-0 z-index-10 w-[100vw] h-[100vh] bg-black/70'>
        <Login setisLoginSection={setisLoginSection}/>  
      </div>
      }
      </>
  )
}

export default Navbar

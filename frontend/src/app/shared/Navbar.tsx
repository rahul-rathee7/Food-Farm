'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import cart from '../../../public/assets/shopping_cart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import save from '../../../public/assets/bookmark_star_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import profile from '../../../public/assets/account_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import MenuIcon from '../../../public/assets/icons/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'
import Login from '../UserAuth/Login'
import Signup from '../UserAuth/Signup'
import CartSection from '../components/CartSection';

const Navbar = () => {
  const [isLoginSection, setisLoginSection] = useState(false);
  const [isSignupSection, setisSignupSection] = useState(false);
  const [isCartSection, setisCartSection] = useState(false);

  return (
    <>
      <div className='flex flex-col w-full xl:w-[80%] mx-auto '>
        <div className='flex px-2 justify-between mx-auto w-full border-b-2 items-center md:p-3'>
          <div id='logo' className='text-2xl font-extrabold'>Food Farm</div>
          <div className='w-7/12 border-2 rounded-2xl hidden lg:block'>
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
          <div className='w-fit h-fit md:hidden'>
              <Image 
                className='w-20 h-20 cursor-pointer lg:hidden md:hidden'
                src={MenuIcon}
                alt='menu-icon'
                width={100}
                height={100}
                onClick={() => setisLoginSection(true)}
              />
          </div>
          <div className='flex gap-10 hidden lg:flex md:flex'>
            <div>
              <Image className='bg-black border-2 rounded-full p-1' src={cart} onClick={() => setisCartSection(true)} alt='cart' width={35} height={35} />
            </div>
            <div>
              <Image className='bg-black border-2 rounded-full p-1' src={save} alt='save' width={35} height={35} />
            </div>
            <div>
              <Image className='bg-black border-2 rounded-full p-1' src={profile} onClick={() => setisLoginSection(true)} alt='profile' width={35} height={35} />
            </div>
          </div>
        </div>
        <div className='justify-between 2xl:text-[13px] xl:text-[11px] lg:text-[10px] md:text-[10px] hidden lg:w-11/12 xl:flex '>
          <div className='py-5 px-10 hover:bg-red-500 hover:text-white rounded-sm'>HOME</div>
          <div className='py-5 px-10 hover:bg-red-500 hover:text-white rounded-sm'>ORGANIC</div>
          <div className='py-5 px-10 hover:bg-red-500 hover:text-white rounded-sm'>HERBS</div>
          <div className='py-5 px-10 hover:bg-red-500 hover:text-white rounded-sm'>SNACKS</div>
          <div className='py-5 px-10 hover:bg-red-500 hover:text-white rounded-sm'>BEVERAGES</div>
          <div className='py-5 px-10 hover:bg-red-500 hover:text-white rounded-sm'>BAKERY</div>
          <div className='py-5 px-10 hover:bg-red-500 hover:text-white rounded-sm'>CANNED FOODS</div>
          <div className='py-5 px-10 hover:bg-red-500 hover:text-white rounded-sm'>DAIRY</div>
        </div>
      </div>
      {
        isLoginSection &&
        <Login
          closeLogin={() => setisLoginSection(false)}
          openSignup={() => setisSignupSection(true)}
        />
      }
      {isSignupSection && (
        <Signup
          closeSignup={() => setisSignupSection(false)}
          openLogin={() => setisLoginSection(true)}
        />
      )}
      {isCartSection && (
        <CartSection 
          closeCart={() => setisCartSection(false)}
        />
      )}
    </>
  )
}

export default Navbar

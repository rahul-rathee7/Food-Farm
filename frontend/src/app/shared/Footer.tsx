import React from 'react'
import Image from 'next/image';
import image1 from '../../../public/assets/images/image1.png'
import i from '../../../public/assets/images/i.webp'
import x from '../../../public/assets/images/x.png'
import p from '../../../public/assets/images/p.png'
import y from '../../../public/assets/images/y.png'
import f from '../../../public/assets/images/f.webp'


const Footer = () => {
  return (
    <div className='py-8'>
    <div className='sm:w-[80%] flex flex-col gap-10 sm:gap-0 sm:flex-row mx-auto sm:justify-evenly items-center sm:items-start pb-18 border-b-3 border-gray-400'>
      <div className='flex flex-col'>
      <div>
        <Image src={image1} alt='logo' width={200} height={200} />
        </div>
      <div className="flex ">
        <a target="_blank" href="https://www.youtube.com" rel="noopener noreferrer">
          <Image src={y} alt="YouTube" width={40} height={40} />
        </a>
        <a target="_blank" href="https://www.pinterest.com" rel="noopener noreferrer">
          <Image src={p} alt="Pinterest" width={40} height={40} />
        </a>
        <a target="_blank" href="https://www.instagram.com" rel="noopener noreferrer">
          <Image src={i} alt="Instagram" width={40} height={40} />
        </a>
        <a target="_blank" href="https://www.facebook.com" rel="noopener noreferrer">
          <Image src={f} alt="Facebook" width={40} height={40} />
        </a>
        <a target="_blank" href="https://www.x.com" rel="noopener noreferrer">
          <Image src={x} alt="X" width={40} height={40} />
        </a>
      </div>
      </div>
      <div className='text-center sm:text-left gap-2 flex flex-col' ><p className='font-bold text-lg pb-4'>Quick Links</p><a href="#">Home</a><a href="#">About Us</a><a href="#">Offers</a><a href="#">Services</a><a href="#">Contect Us</a></div>
      <div className='text-center sm:text-left gap-2 flex flex-col'><p className='font-bold text-lg pb-4'>About</p> <a href="#">How It Work</a><a href="#">Our Packages</a><a href="#">Promotions</a><a href="#">Refer A Friend</a></div>
      <div className='text-center sm:text-left gap-2 flex flex-col'><p className='font-bold text-lg pb-4'>Help Center</p><a href="#">Payments</a><a href="#">Shipping</a><a href="#">Product</a><a href="#">Returns</a><a href="#">FAQs</a><a href="#">Checkout</a><a href="#">Other Issues</a></div>
    </div>
    
    <div className='w-[80%] flex sm:flex-row flex-col-reverse sm:gap-0 gap-3 justify-between mx-auto py-5'>
      <p>© 2025 FoodFarm. All rights reserved.</p>
      <p>Designed by Rahul & Ajay</p>
    </div>
  </div>
  )
}

export default Footer
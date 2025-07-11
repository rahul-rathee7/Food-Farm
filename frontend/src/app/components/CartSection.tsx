import React from 'react'

const CartSection = ({closeCart}) => {
  return (
    <div className='fixed h-full w-1/3 right-0 top-0 z-1 bg-white shadow-lg flex flex-col items-center justify-center'>
      <div className='w-full h-full p-5 bg-[rgba(255,255,255,0.9)] shadow-lg rounded-lg'>
        <div className='grid grid-cols-3 items-center mb-5'>
            <button className='w-fit bg-red-500 text-white px-5 py-2 rounded-lg' type='button' onClick={closeCart}>X</button>
            <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>
        </div>
        <div className='flex justify-center items-center w-full h-full'>
            <p className='text-gray-500'>No items in the cart yet.</p>
        </div>
      </div>
    </div>
  )
}

export default CartSection

'use client'

import React, { useEffect, useState } from 'react'
import { useCart } from '../components/useCart'
import Image from 'next/image'

const CartTable = () => {
  const { cartItems, updateQuantity, removeFromCart, ClearCart } = useCart();
  const [coupenApplied, setcoupenApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const increaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    if (item) updateQuantity(id, item.quantity + 1)
  }

  const decreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    if (item) updateQuantity(id, item.quantity - 1)
  }

  const handleDiscount = () => {
    if (coupenApplied) {
      setcoupenApplied(false);
    } else {
      setcoupenApplied(true);
      updateTotalAmount();
    }
  }

  const updateTotalAmount = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);

    if (coupenApplied) {
      const discount = total * 0.1;
      setDiscountAmount(discount);
    } else {
      setDiscountAmount(0);
    }
  };


  useEffect(() => {
    updateTotalAmount();
  }, [cartItems, coupenApplied]);

  return (
    <div className="w-full h-[1/2screen] px-10">
      <h1 className="text-6xl text-center py-3 w-full">Shopping Cart</h1>
      <div>
        <div className="grid grid-cols-6 p-3 pb-6 border-b-2 border-gray-300">
          <p className="col-span-2 pl-10">Items</p>
          <p className='text-center'>Price</p>
          <p className="text-center">Quantity</p>
          <p className='text-center'>Total</p>
          <p className='text-center'>Delete Items</p>
        </div>
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="h-[150px] grid grid-cols-6 items-center px-3 py-6 border-b-2 border-gray-300"
          >
            <div className="flex gap-5 col-span-2 h-[80px]">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
              />
              <div className="flex flex-col gap-2 self-center">
                <p className="font-bold">{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
            <p className='text-center'>₹{item.price}</p>
            <div className="flex items-center justify-center gap-1">
              <button
                className="bg-gray-300 px-3 py-1 rounded-md"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <p className="px-1">{item.quantity}</p>
              <button
                className="bg-gray-300 px-3 py-1 rounded-md"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>
            <p className='text-center'>₹{(item.price * item.quantity).toFixed(2)}</p>
            <p className='text-center hover:text-red-500 cursor-pointer' onClick={() => removeFromCart(item.id)}>X</p>
          </div>
        ))}
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-10 border-b-2 border-gray-300">
            Your cart is empty!
          </div>
        ) : (
        <div className="p-3 py-10 grid grid-cols-6">
          <div className='flex flex-col gap-2'>
            <input className='border-2 border-gray-300 p-2 rounded-md p-2 focus:outline-none' type="text" placeholder='Enter coupon code' />
            <button type='button' onClick={handleDiscount} className='bg-gray-300 p-2 rounded-md'>{coupenApplied ? 'Applied' : 'Apply Coupon'}</button>
          </div>
          <div className='col-start-4 col-end-6 flex flex-col justify-center border-2 p-5'>
            <div className='flex items-center justify-between'>
              <p>Sub-Total Amount</p>
              <p className='font-bold text-xl'>₹{totalAmount.toFixed(2)}</p>
            </div>

            <div className='flex items-center justify-between'>
              <p>Discount</p>
              <p>- ₹{discountAmount.toFixed(2)}</p>
            </div>
            
            <div className='flex items-center justify-between'>
              <p>Coupon Applied:</p>
              <p>{coupenApplied ? 'Yes' : 'No'}</p>
            </div>

            <div className='flex items-center justify-between'>
              <p>Final Total</p>
              <p className='font-bold text-xl'>
                ₹{(totalAmount - discountAmount).toFixed(2)}
              </p>
            </div>
          </div>
          <div className='col-start-6 col-end-6 flex justify-center items-start'>
            <button className='bg-red-500 p-2 rounded-md text-white' onClick={() => ClearCart()}>Clear Cart</button>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default CartTable
'use client'

import React from 'react'
import { useCart } from '../components/useCart'
import Image from 'next/image'

const CartTable = () => {
  const { cartItems, updateQuantity } = useCart()

  const increaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    if (item) updateQuantity(id, item.quantity + 1)
  }

  const decreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id)
    if (item) updateQuantity(id, item.quantity - 1)
  }

  return (
    <div className="w-full h-screen px-10">
      <h1 className="text-6xl text-center py-3 w-full">Shopping Cart</h1>
      <div>
        <div className="grid grid-cols-5 p-3 pb-6 border-b-2 border-gray-300">
          <p className="col-span-2">Items</p>
          <p>Price</p>
          <p className="pl-7">Quantity</p>
          <p>Total</p>
        </div>
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="grid grid-cols-5 items-center px-3 py-6 border-b-2 border-gray-300"
          >
            <div className="flex gap-5 col-span-2">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="flex flex-col gap-2">
                <p className="font-bold">{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
            <p>₹{item.price}</p>
            <div className="flex items-center justify-start">
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
            <p>₹{(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="border-t-2 border-gray-300 p-3 grid grid-cols-5">
          <p className="col-span-3">Total</p>
          <p>
            ₹
            {cartItems
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartTable
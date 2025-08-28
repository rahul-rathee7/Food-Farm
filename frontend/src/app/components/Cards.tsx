'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCart } from '../components/useCart'
import Image from 'next/image'

const Cards = () => {
  const [arr, setArr] = useState<any[]>([])
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/data')
        setArr(res.data)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div id='cards' className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-3 h-full w-full pt-5 rounded-3xl">
      {arr.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 bg-white rounded-xl px-2 py-4 h-full w-full"
        >
          <div className="relative h-[280px] w-full">
            <Image
              src={item.image || '/placeholder.png'}
              alt={item.name}
              className="object-cover rounded-xl h-full w-full"
              width={300}
              height={300}
            />
          </div>
          <div className="px-3 mt-2">
            <p className="text-black font-semibold text-2xl">{item.name}</p>
            <div className="flex justify-evenly text-lg">
              <span className="flex">
                <p className="text-gray-500 line-through">₹{item.originalPrice}</p>
                <p className="text-black px-3"><b>₹{item.currentPrice}</b></p>
              </span>
              <span className="border border-gray-500 text-gray-500 px-2 pt-1 sm:text-sm">
                {item.discount}% off
              </span>
            </div>
            <button
              className="bg-red-500 w-full mt-3 p-2 rounded-xl text-white"
              type="button"
              onClick={() =>
                addToCart({
                  id: item.id,
                  name: item.name,
                  description: item.description || 'No description available',
                  price: item.currentPrice,
                  quantity: 1,
                  image: item.image,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
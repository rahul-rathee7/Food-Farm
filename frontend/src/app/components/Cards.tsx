import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

const Cards = () => {
    const [arr, setarr] = useState([]);

    useEffect(() => {
        async function myFunc() {
            try {
                await axios.get('http://localhost:5000/data').then((res) => {
                    setarr(res.data);
                });
            } catch (err) {
                console.log("Error is this: ", err);
            }
        }

        myFunc();
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-3 h-full w-full pt-5 rounded-3xl'>
            {arr.map((items, index) => (
                <div key={index} className='flex flex-col gap-5 bg-white rounded-xl px-2 py-4 h-full w-full'>
                    <div className='relative h-[280px] w-full'>
                        <Image
                            className='bg-gray-300 rounded-xl object-cover'
                            src={items.url}
                            alt={items.alt}
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>
                    <div className='px-3 mt-2'>
                        <p className='text-black font-semibold text-2xl'>walpaper</p>
                        <div className='flex justify-evenly text-2xl'>
                            <span className='flex'>
                                {/* <p className='text-gray-500 line-through'>₹120</p> */}
                                <p className='text-black px-3'><b>price</b></p>
                            </span>
                            <span className='border border-gray-500 text-gray-500 px-2'>10% off</span>
                        </div>
                        <button className='bg-red-500 w-full mt-3 p-2 rounded-xl text-white' type='button'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;
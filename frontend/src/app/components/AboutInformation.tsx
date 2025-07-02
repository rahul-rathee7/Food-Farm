import React from 'react'

const AboutInformation = () => {
    return (
        <div id="about-bg-image" className='flex items-center w-full h-full'>
            <div className='w-full h-full bg-black/30 text-white'>
            <div className='sm:ml-50 py-20 sm:w-1/5 w-fit ml-5'>
                <div className='p-5 border-b-1'>
                    <div></div>
                    <div className='flex flex-col gap-2'><h2 className='font-bold text-xl'>Free Delivery</h2><p>Lorem ipsum dolor sit amet.</p></div>
                </div>
                <div className='p-5 border-b-1'>
                    <div></div>
                    <div className='flex flex-col gap-2'><h2 className='font-bold text-xl'>Secure Payment</h2><p>Lorem ipsum dolor sit amet.</p></div>
                </div>
                <div className='p-5 border-b-1'>
                    <div></div>
                    <div className='flex flex-col gap-2'><h2 className='font-bold text-xl'>Quality Guarantee</h2><p>Lorem ipsum dolor sit amet.</p></div>
                </div>
                <div className='p-5 border-b-1'>
                    <div></div>
                    <div className='flex flex-col gap-2'><h2 className='font-bold text-xl'>Guranteed Savings</h2><p>Lorem ipsum dolor sit amet.</p></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutInformation

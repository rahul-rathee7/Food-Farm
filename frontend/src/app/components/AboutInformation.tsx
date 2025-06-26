import React from 'react'
import Image from 'next/image'
import bgImage from '../../../public/assets/images/hand-drawn-pattern-background_23-2150829943.webp'

const AboutInformation = () => {
    return (
        <div>
            <div className='relative w-full '>
                <div className='absolute w-full relative'>
                    <Image className='w-full h-[60vh]' src={bgImage} alt='bgImage' />
                </div>
                <div className='absolute top-0 left-0 w-full text-black h-full bg-black/30 backdrop-blur-sm'>
                    <div className='translate-y-1/6 translate-x-4/5 w-1/5 text-white'>
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
        </div>
    )
}

export default AboutInformation

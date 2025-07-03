import React from 'react'
import Image from 'next/image'
import articleImage1 from '../../../public/assets/images/strawberry-water-splashes-splash-drop-of-water-407040.webp'
import articleImage2 from '../../../public/assets/images/side-view-women-shopping-groceries_23-2149461750.webp'
import articleImage3 from '../../../public/assets/images/sabji mandi.webp'



const Articles = () => {
    return (
        <div className='w-full lg:w-9/12 mx-auto mt-20 py-10'>
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-4xl font-bold w-full'>Our Latest Articles</h1>
                <button className='' type="button"></button>
            </div>
            <div className='pt-10 flex flex-col sm:flex-row gap-10'>
                <div className='article-box flex flex-col gap-3'>
                    <Image className='h-3/4 w-full' src={articleImage1} alt='article-image'/>
                    <div className='flex flex-col gap-3 p-7'>
                        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, libero?</p>
                        <button type='button' className='self-start underline'>Read more</button>
                    </div>
                </div>
                <div className='article-box flex flex-col gap-3'>
                    <Image className='h-3/4 w-full' src={articleImage2} alt='article-image'/>
                    <div className='flex flex-col gap-3 p-7'>
                        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, libero?</p>
                        <button type='button' className='self-start underline'>Read more</button>
                    </div>
                </div>
                <div className='article-box flex flex-col gap-3'>
                    <Image className='h-3/4 w-full' src={articleImage3} alt='article-image'/>
                    <div className='flex flex-col gap-3 p-7'>
                        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, libero?</p>
                        <button type='button' className='self-start underline'>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles

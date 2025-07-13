import React from 'react'
import bannerimg from '../assets/BannerPhoto.png'
const Banner = () => {
  return (
    <>
    <div className = "max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className='space-y-10'>
            <h1 className='text-4xl font-bold'>
            <span className='text-yellow-400'>Change Your Life</span> By faQirChand's Exclusive Book Collection !
            </h1>
            <p className='text-xl'>
                Welcome to our timeless bookstore, <span className='text-orange-500'>established in 1930 in the heart of Varanasi by Pt. Kishor Bihari Lal.</span>
                <br />
                We offer a rich and diverse collection—from soul-stirring motivational reads and thrilling suspense stories to heartfelt love tales and vintage classics.
                <br />
                <span className='text-yellow-400'>We've Got Everything you Need!</span>
            </p>

       
        </div>
        </div>
        <div className="w-full order-1 md:w-1/2">
        <img src={bannerimg} className='w-92 h-50  md:w-160 h-180 ' alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner;

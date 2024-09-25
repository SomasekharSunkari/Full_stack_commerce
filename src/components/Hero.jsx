import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Left side of hero section */}
            <div className='w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 h-[2px] md:w-11 bg-[#414141]'></p>
                    <p className='font-medium text-sm md:font-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='leading-relaxed text-3xl lg:text-5xl sm:py-3 prata-regular'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                   
                    <p className='font-medium text-sm md:font-base'>SHOP NOW</p>
                    <p className='w-8 h-[2px] md:w-11 bg-[#414141]'></p>
                </div>
            </div>

            </div>
            {/* Right side of hero */}
           <img src={assets.hero_img} alt="Hero Image" className='w-full sm:w-1/2' />
        </div>
    )
}

export default Hero

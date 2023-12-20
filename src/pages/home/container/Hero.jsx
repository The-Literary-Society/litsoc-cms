import React from 'react'
import images from '../../../constants/images'
import { FiSearch } from "react-icons/fi";

const Hero = () => {
    return (
        <section className='container justify-between mx-auto flex flex-col px-5 py-5 lg:flex-row'>
            <div className='mt-10 lg:w-1/2'>
                <h1 className='font-roboto text-3xl text-center font-bold text-amber-800 md:text-5xl lg:mt-7 lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]'>The Literary Society</h1>
                <p className='text-amber-700 mt-4 lg:mt-7 text-center md:text-xl lg:text-left lg:text-base xl:text-xl'>The creative summit and media body of VSSUT community and you, our dear readers.</p>
                <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
                    <div className='relative'>
                        <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#ada295]' />
                        <input className=' font-semibold text-amber-600 placeholder:text-[#ada295] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4' type="text" placeholder='Search' />
                    </div>
                    <button className='w-full text-white bg-amber-700 font-semibold rounded-lg px-5 py-3 mt-8 md:mt-0 md:absolute md:right-2 md:top-1/2 md
                    -translate-y-1/2 md:w-fit md:py-2'>Search</button>
                </div>
                <div className='flex flex-col lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7 '>
                    <span className='text-amber-700 font-semibold mt-4 italic lg:text-sm xl:text-base'>Popular Searches:</span>
                    <ul className='flex flex-wrap gap-x-2.5 gay-y-2.5 mt-3'>
                        <li className='rounded-lg bg-amber-600 bg-opacity-10 px-3 py-1.5 text-amber-700 font-semibold lg:text-sm xl:text-base'>Tag 1</li>
                        <li className='rounded-lg bg-amber-600 bg-opacity-10 px-3 py-1.5 text-amber-700 font-semibold lg:text-sm xl:text-base'>Tag 2</li>
                        <li className='rounded-lg bg-amber-600 bg-opacity-10 px-3 py-1.5 text-amber-700 font-semibold lg:text-sm xl:text-base'>Tag 3</li>
                    </ul>
                </div>
            </div>
            <div className='hidden lg:block lg:1/2'>
                <img className='w-full' src={images.Hero} alt="poetry writing" />
            </div>
        </section>
    )
}

export default Hero
import React from 'react'
import images from '../constants/images'
import { FaCheck } from "react-icons/fa6";

const ArticlesCard = ({ className }) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
            <img src={images.Post1} alt='post1' className='w-full object-cover object-center md:h-52' />
            <div className='p-5'>
                <h2 className='font-roboto font-bold text-xl text-amber-700 md:text-2xl'>Future of Work</h2>
                <p className='text-amber-700 mt-3 text-sm md:text-lg'>Majority of people work in jobs that do not exist today</p>
                <div className='flex justify-between flex-nowrap items-center mt-6'>
                    <div className='flex items-center gap-x-2'>
                        <img src={images.Man} alt='profile1' className='object-cover w-10 h-10 rounded-3xl' />
                        <div className='flex flex-col'>
                            <h4 className='font-bold italic text-amber-700 text-sm'>John Marques</h4>
                            <div className='flex items-center gap-x-2'>
                                <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full' >
                                    <FaCheck className='w-1.5 h-1.5 text-[#36B37E]' />
                                </span>
                                <span className='italic text-amber-700 text-xs'>
                                    Verified Writer
                                </span>
                            </div>
                        </div>
                    </div>
                    <span className='font-bold italic text-sm text-amber-700'>12 June</span>
                </div>
            </div>
        </div>
    )
}

export default ArticlesCard
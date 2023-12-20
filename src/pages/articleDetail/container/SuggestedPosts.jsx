import React from 'react'
import { Link } from 'react-router-dom'

const SuggestedPosts = ({ className, header, posts = [], tags = [] }) => {
    return (
        <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}>
            <h2 className='font-roboto font-medium text-amber-800 md:text-xl'>{header}</h2>
            <div className='grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1'>
                {posts.map((item) => (
                    <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
                        <img src={item.image} alt="post 1" className='aspect-square object-cover rounded-lg w-1/5' />
                        <div className='text-sm font-roboto text-amber-900 font-medium'>
                            <h3 className='text-sm font-roboto font-medium text-amber-800 md:text-base lg:text-lg'>{item.title}</h3>
                            <span className='text-xs opacity-60'>
                                {new Date(item.createdAt).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric"
                                })}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className='font-roboto font-medium text-amber-800 mt-8 md:text-xl'>Tags</h2>
            <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
                {tags.map((item,index) => (
                    <Link key={index} className='inline-block px-3 py-1.5 rounded-md bg-amber-700 font-roboto text-xs text-white md:text-sm' to="/">
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SuggestedPosts
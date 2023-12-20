import React from 'react'
import ArticlesCard from '../../../components/ArticlesCard'
import { FaArrowRight } from "react-icons/fa";

const Articles = () => {
    return (
        <section className='flex flex-col container mx-auto  px-5 py-10 '>
            <div className='flex flex-wrap md:gap-x-5 gap-y-5 justify-evenly pb-10'>
                <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]" />
                <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]" />
                <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]" />
                <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]" />
                <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]" />
                <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]" />
                <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]" />
                <ArticlesCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]" />
            </div>
            <button className='mx-auto flex items-center gap-x-2 font-bold text-amber-700 border-2 border-amber-700 px-6 py-3 rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-300'>
                <span>More Articles</span>
                <FaArrowRight className='w-3 h-3' />
            </button>
        </section>
    )
}

export default Articles
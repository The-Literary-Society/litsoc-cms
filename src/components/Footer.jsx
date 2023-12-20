import React, { useEffect, useState } from 'react';
import images from '../constants/images'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className='bg-amber-800'>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10'>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-[#ffffff] font-bold text-lg md:text-lg'>About Us</h3>
          <ul className='text-[#fff2e4] md:text-base'>
            <li>
              <a href='#'>The VerSSe</a>
            </li>
            <li>
              <a href='#'>The ViSSionary</a>
            </li>
            <li>
              <a href='#'>Collaborations</a>
            </li>
          </ul>
        </div>

        <div className='col-span-5 md:col-span-4 lg:col-span-2 lg:col-start-auto'>
          <h3 className='text-[#ffffff] font-bold text-lg md:text-lg'>Blogs and Articles</h3>
          <ul className='text-[#fff2e4] md:text-base'>
            <li>
              <a href='#'>Recent Issues</a>
            </li>
            <li>
              <a href='#'>Club Series</a>
            </li>
            <li>
              <a href='#'>Popular</a>
            </li>
          </ul>
        </div>

        <div className='col-span-5 md:col-span-4 lg:col-span-2 md:col-start-5'>
          <h3 className='text-[#ffffff] font-bold text-lg md:text-lg'>News</h3>
          <ul className='text-[#fff2e4] md:text-base'>
            <li>
              <a href='#'>Events</a>
            </li>
            <li>
              <a href='#'>Official</a>
            </li>
            <li>
              <a href='#'>Trending</a>
            </li>
          </ul>
        </div>

        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-[#ffffff] font-bold text-lg md:text-lg'>Our Team</h3>
          <ul className='text-[#fff2e4] md:text-base'>
            <li>
              <a href='#'>Current</a>
            </li>
            <li>
              <a href='#'>Alumini</a>
            </li>
          </ul>
        </div>
        <div className='col-span-10 md:order-first md:col-span-4'>
          <img src={images.Logo} alt='logo' className='w-[300px] md:w-[100px] mx-auto md:mx-0' />
          <p className='text-sm text-[#fff2e4] text-center mt-4 md:text-left md:text-base lg:w-[300px]'>The creative summit and media body of VSSUT</p>
          <ul className='flex justify-center items-center mt-5 space-x-4 text-[#fff2e4] md:justify-start'>
            <li>
              <a href='#'>
                <FaInstagram className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaTwitter className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaLinkedin className='w-6 h-auto' />
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12'>
          <div className='bg-amber-500 text-white p-2 rounded-full'>
            <FaHeart className='w-4 h-auto' />
          </div>
          <p className='font-semibold text-[#e3b482] italic'>Copyright © {currentYear}. Crafted with love.</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
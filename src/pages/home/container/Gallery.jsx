import React from 'react';
import Marquee from "react-fast-marquee";
import images from '../../../constants/images';

const Gallery = () => {
  const imagePaths = [images.Post1, images.Post2, images.Post3, images.Post1, images.Post2, images.Post3];

  return (
    <section className='bg-amber-600 bg-opacity-20 py-10'>
      <h1 className='text-center font-roboto font-bold text-4xl text-amber-800 mb-10'>Gallery</h1>
      <Marquee speed={80} gradient gradientColor='#F8E4CD' className='mb-10'>
        {imagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`gallery ${index + 1}`}
            className='w-[200px] h-[200px] object-cover mr-20'
          />
        ))}
      </Marquee>
      <Marquee speed={80} direction='right' gradient gradientColor='#F8E4CD' className='mt-5'>
        {imagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`gallery ${index + 1}`}
            className='w-[200px] h-[200px] object-cover mr-20'
          />
        ))}
      </Marquee>
    </section>
  );
};

export default Gallery;

import React from 'react';
import MainLayout from '../../components/MainLayout';
import { images } from '../../constants';

const sectionsData = [
  {
    title: 'About Us',
    content:
      'Lorem ipsum dolor sit amen consectetur adipisicing elit. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam.',
    image: images.About1,
  },
  {
    title: 'Our Culture',
    content:
      'Lorem ipsum dolor sit amen consectetur adipisicing elit. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam.',
    image: images.About2,
  },
  {
    title: 'The VerSSe',
    content:
      'Lorem ipsum dolor sit amen consectetur adipisicing elit. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam.',
    image: images.About3,
  },
  {
    title: 'The ViSSionary',
    content:
      'Lorem ipsum dolor sit amen consectetur adipisicing elit. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam.',
    image: images.About4,
  },
  {
    title: 'Collaborations',
    content:
      'Lorem ipsum dolor sit amen consectetur adipisicing elit. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam. Quisquam voluptatem, quae voluptatum, quia, tenetur voluptas dolorum tempora voluptates nesciunt quod quibusdam.',
    image: images.About5,
  },
];

const AboutPage = () => {
  return (
    <MainLayout>
      <div className='px-10 py-9 bg-amber-600 bg-opacity-5'>
        {sectionsData.map((section, index) => (
          <div
            key={index}
            className={`mb-10 lg:mb-20 flex flex-col justify-between lg:justify-around items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <img
              src={section.image}
              alt={`about-${index}`}
              className='w-50 h-50 md:h-40 lg:w-80 lg:h-56 object-cover rounded-[7px] mr-6 mb-5 md:mb-0 md:mr-0 md:ml-6'
            />
            <div>
              <h1 className='text-2xl lg:text-3xl font-bold text-center text-amber-700 italic font-roboto'>
                {section.title}
              </h1>
              <p className='mt-4 text-sm max-w-md md:max-w-sm lg:max-w-2xl md:text-center lg:text-lg text-amber-900 font-roboto'>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default AboutPage;

import React from 'react'
import { LuCircleCheckBig } from "react-icons/lu";
import aboutImg1 from '../assets/oasis-image5.jpg'
import aboutImg2 from '../assets/oasis-image6.jpg'

const About = () => {
  return (
    <section className='mt-14'  id='about'>
      <div className='text-center mb-4'>
        <h2 className='font-bold text-2xl md:text-4xl tracking-wider mb-2'>About Oasis Event Hall</h2>
        <p className='text-neutral-800 tracking-wider'>Creating extraordinary experience for you</p>
      </div>
      <div className='px-4 '>
        <h3 className='text-xl md:text-2xl font-bold mb-2'>
          Your Dreams, Our Expertise
        </h3>
        <p className='text-neutral-800 text-lg md:text-xl mb-3 max-w-6xl leading-5.5 md:leading-normal'>At Oasis Event Hall, we believe every celebration deserves to be extraordinary. With our elegance venues, exceptional services, and attention to detail, we transform your vision into reality.</p>
        <ul className='ml-2'>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <span>
              <LuCircleCheckBig size={25} className='text-blue-800 w-[24px] font-bold' />
            </span>
            
            Climate-controlled environment</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <span>
              <LuCircleCheckBig size={25} className='text-blue-800 w-[24px] font-bold' />
            </span>
            Professional lightning and sound system</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <span>
              <LuCircleCheckBig size={25} className='text-blue-800 w-[24px] font-bold' />
            </span>
            Customizable decor options</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
              <span>
              <LuCircleCheckBig size={25} className='text-blue-800 w-[24px] font-bold' />
            </span>
            Dedicated Event Coordinator</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <span>
              <LuCircleCheckBig size={25} className='text-blue-800 w-[24px] font-bold' />
            </span>
            Catering Kitchen facilities</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <span>
              <LuCircleCheckBig size={25} className='text-blue-800 w-[24px] font-bold' />
            </span> 
            Ample Parking space</li>
        </ul>
      </div>
      <div className='flex gap-6 justify-around mt-10 px-6'>
        <div className='w-full md:w-1/2 lg:w-1/3'>
          <img src={aboutImg1} className='w-full h-auto rounded-lg shadow-md' alt="" />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3'>
          <img src={aboutImg2} className='w-full h-auto rounded-lg shadow-md' alt="" />
        </div>
        
      </div>
    </section>
  )
}

export default About

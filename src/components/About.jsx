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
        <p className='text-neutral-800 text-xl mb-3 max-w-6xl'>At Oasis Event Hall, we believe every celebration deserves to be extraordinary. With our elegance venues, exceptional services, and attention to detail, we transform your vision into reality.</p>
        <ul className='ml-2'>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <LuCircleCheckBig className='text-blue-800 text-[22px] font-bold' />
            Climate-controlled environment</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <LuCircleCheckBig className='text-blue-800 text-[22px] font-bold' />
            Professional lightning and sound system</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <LuCircleCheckBig className='text-blue-800 text-[22px] font-bold' />
            Customizable decor options</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <LuCircleCheckBig className='text-blue-800 text-[22px] font-bold' />
            Dedicated Event Coordinator</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <LuCircleCheckBig className='text-blue-800 text-[22px] font-bold' />
            Catering Kitchen facilities</li>
          <li className='flex items-center gap-2 text-xl mb-2'>
            <LuCircleCheckBig className='text-blue-800 text-[22px] font-bold' /> 
            Ample Parking space</li>
        </ul>
      </div>
      <div className='flex gap-6 justify-around mt-10 px-6'>
        <img src={aboutImg1} className='h-[200px] w-[400px] rounded-3xl' alt="" />
        <img src={aboutImg2} className='h-[200px] w-[400px] rounded-3xl' alt="" />
      </div>
    </section>
  )
}

export default About

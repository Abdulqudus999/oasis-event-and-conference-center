import React from 'react'
import HeroImg from '../assets/oasis-image1.webp' 

const Hero = () => {
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center" style={{
      backgroundImage: `url(${HeroImg})`,
  
    }}>
      <div className='flex w-full h-screen justify-center items-center'>
       <div className='py-5 px-8 mx-4 my-5 bg-neutral-300 flex flex-col items-center'>
        <h1 className='text-2xl md:text-4xl my-5 font-extrabold'>Welcome to <span>Oasis</span></h1>
        <p>Your Perfect Venue For unforgettable Event</p>
        <p className='text-center'>From intimate gatherings to grand celebrations, Oasis Event Hall provides the perfect backdrop for your special moments.</p>
        <div>
          <button>
            Book Your Event Now
          </button>
          <button>
            View Gallery
          </button>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Hero

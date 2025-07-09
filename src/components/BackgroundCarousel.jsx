import React, { useState, useEffect } from 'react';
import { FaCalendarDay } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import image1 from '../assets/oasis-image1.webp'
import image2 from '../assets/oasis-image2.webp'
import image3 from '../assets/oasis-image3.jpg'
import image4 from '../assets/oasis-image4.jpg'
import image5 from '../assets/oasis-image5.jpg'

const BackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div id='home' className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative top-5 z-10 flex items-center justify-center h-full">
        <div className="bg-white/50 backdrop-blur-md py-5 mx-4 my-5 text-center rounded-md px-8 max-w-4xl border border-white/55">
          <h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-700">
            Welcome to <span className='text-blue-800 font-black animate-spin'>Oasis</span> 
          </h1>
          <p className="text-xl md:text-2xl mb-5 opacity-90">
            Your Perfect Venue For unforgettable Event
          </p>
          <p className='text-xl md:text-2xl mb-5 opacity-90'>From intimate gatherings to grand celebrations, Oasis Event Hall provides the perfect backdrop for your special moments.</p>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 mt-10'>
            <a href="#" className='py-2 px-3 bg-blue-800 text-white hover:bg-blue-600 flex font-bold items-center rounded-md gap-1 transition-all'>
              <FaCalendarDay />
              Book your Event now
            </a>
            <a href="#" className='py-2 px-10 text-blue-800 bg-white border border-blue-700 rounded-md hover:text-white hover:bg-blue-600 transition-all font-bold'>
              Veiw Gallery
            </a>
          </div>
          <div className='flex justify-around gap-1.5 mt-10'>
            <span className='flex items-center tracking-tight'>
              <GoPeople className='text-blue-700' />
              500+ Capacity</span>
            <span className='flex items-center'>
              <FaRegStar className='text-blue-700' />
              5-Service</span>
            <span className='flex items-center'>
              <IoLocationOutline className='text-blue-700' />
              Prime Location</span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 md:p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 md:p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24}/>
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-20 right-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundCarousel;
import React from 'react'
import cateringServices from '../assets/catering.jpg'
import audioVisuals from '../assets/audio.jpg'
import decoration from '../assets/decoration.jpg'
import photography from '../assets/photography.jpg'
import eventPlanning from '../assets/eventplaning.jpg'
import specialEffects from '../assets/specialeffects.jpg'
import { GoDot } from "react-icons/go";
import { FaRegCircleDot } from "react-icons/fa6";




const SevicesSection = () => {

  const serviceImages = [
    {
      id: 1,
      src: cateringServices,
      alt: "services image 1",
      info1: "Custom menu planning",
      heading: "Catering Services",
      info2: "Dietary accommodation",
      info3: "Professional service staff"
    },
    {
      id: 2,
      src: audioVisuals,
      alt: "services image 2",
      heading: "Audio/Visual",
      info1: "Professional sound system",
      info2: "LED lighting",
      info3: "Microphones and DJ setup"
    },
    {
      id: 3,
      src: decoration,
      alt: "services image 3",
      heading: "Decoration",
      info1: "Floral arrangements",
      info2: "Centerpieces",
      info3: "Custom colour schemes"
    },
    {
      id: 4,
      src: photography,
      alt: "services image 4",
      heading: "Photography",
      info1: "Professional photographers",
      info2: "Event coverage",
      info3: "Photo/Video Editing"
    },
    {
      id: 5,
      src: eventPlanning,
      alt: "services image 5",
      heading: "Event Planning",
      info1: "Timeline management",
      info2: "Vendor coordination",
      info3: "Day-of coordination"
    },
    {
      id: 6,
      src: specialEffects,
      alt: "services image 6",
      heading: "Speial Effects",
      info1: "Fog machines",
      info2: "Confetti cannons",
      info3: "Sparkler displays"
    },
  ]
  return (
    <section className='mt-14' id='services'>
      <div className='mb-6'>
        <h2  className='font-bold text-2xl md:text-4xl tracking-wider mb-2 text-center relative'>Our Services
          <span className='h-0.5 w-1/4 left-[50%] -bottom-0.5 absolute transform -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-blue-800 via-green-500 to-orange-500'></span>
        </h2>
        <p className='text-neutral-800 tracking-wider text-center'>Every thing you need for a perfect event all under one roof</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {serviceImages.map((serviceImage) => (
          <div
            key={serviceImage.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className='text-center font-bold text-xl md:text-2xl mb-2'>{serviceImage.heading}</h3>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={serviceImage.src}
                alt={serviceImage.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute grid place-items-center inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent">
              <ol className="bg-white/80 backdrop-blur-md absolute flex flex-col gap-2 bottom-9 px-3 text-slate-800 font-semibold text-lg md:text-xl rounded-md border border-white/55">
                <li className='flex items-center'>
                  <GoDot className='mr-1' />
                  {serviceImage.info1}</li>
                <li className='flex items-center'>
                  <GoDot  className='mr-1' />
                  {serviceImage.info2}</li>
                <li className='flex items-center'>
                  <GoDot  className='mr-1'/>
                  {serviceImage.info3}</li>
              </ol>
            </div>

            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-white/20 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SevicesSection

import React, { useState, useEffect } from 'react';
import { FaCalendarDay } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


const ContactUs = () => {
  const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(`Select Event Type  >`);

    const events = ["Wedding Ceremony", "Graduation", "Naming Ceremony", "Meeting", "Summit"];

    const handleSelect = (event) => {
        setSelected(event);
        setIsOpen(false);
    };

  return (
    <section id='contact' className='mb-64 mt-14'>
      <div className='mb-12 mx-2'>
        <h2  className='font-bold text-2xl md:text-4xl tracking-wider mb-2 text-center relative'>Contact Us & Book Your Event
          <span className='h-0.5 w-1/4 left-[50%] -bottom-0.5 absolute transform -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-blue-800 via-green-500 to-orange-500'></span>
        </h2>
        <p className='text-neutral-800 tracking-wider text-center'>Ready to plan your perfect event? Get in touch with us or book directly</p>
      </div>
      <div className='mx-auto px-4'>
        <div className='flex items-center justify-center gap-4 mb-10'>
            <button className='flex items-center gap-2 text-white bg-blue-800 hover:bg-blue-600 transition-colors font-semibold border border-blue-500 px-3 py-2 rounded-md'>
              <FaCalendarDay />
              Book Now
              </button>
            <button className='flex items-center gap-2 bg-slate-100/30 hover:bg-blue-600 hover:text-white transition-colors border border-blue-500 font-semibold text-blue-500 py-2 px-3 rounded-md'>
                <IoMailOutline />
                Contact Us
            </button>
        </div>
        <p className='font-bold text-xl mb-1'>Get in Touch</p>
        <p className='font-bold flex items-center gap-1 text-lg'><IoLocationOutline className='text-blue-700' /> Address </p>
        <p className='text-neutral-900'>No 2, Ezekiel Oyemoni street , off Agunbelewo road, behind Jamb office, Osogbo 230103, Osun state.</p>
      </div>
      
      <div className='max-w-[250px] mx-auto bg-gradient-to-t from-blue-300 via-white to-white backdrop-blur-xl border border-white/50 flex flex-col items-center mt-20 rounded-xl pb-6'>
        <p className='font-bold mt-5 mb-2'>Hours</p>
        <div className='flex gap-4 font-semibold'>
        <div>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>
        </div>
          <div className='flex flex-col'>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
          <div>
            <p>8am-4pm</p>
            <p>8am-4pm</p>
            <p>8am-4pm</p>
            <p>8am-4pm</p>
            <p>Open 24hrs</p>
            <p>6am-11pm</p>
            <p>Closed</p>                                    
          </div>
        </div>
      </div>
      <form action="" className='max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg py-8 px-4 mt-20 overflow-hidden'>
        <div className=''>
          <h3 className='text-xl md:text-2xl font-semibold text-slate-950'>Request Information</h3>
          <p className=''>Please fill out the form below to get in touch with us</p>
        </div>
        <div className='p-4 md:p-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
          <div className='space-y-2'>
            <label htmlFor="" className='block text-sm font-medium text-gray-900'>
              Full Name*
            </label>
            <input type="text" placeholder='Full Name' className='w-full px-3 bg-slate-100 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200' />
          </div>
          <div className='space-y-2'>
            <label htmlFor="" className='block text-sm font-medium text-gray-900'>
              Email*
            </label>
            <input type="email" placeholder='example@gmail.com' className='w-full px-3 bg-slate-100 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200' />
          </div>
          <div className='space-y-2'>
            <label htmlFor="" className='block text-sm font-medium text-gray-900'>
              Phone Number*
            </label>
            <input type="tel" placeholder='09162646605' className='w-full px-3 bg-slate-100 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200' />
          </div>
          <div className='space-y-2'>
            <label htmlFor="" className='block text-sm font-medium text-gray-900'>
              Event Date
            </label>
            <input type="date" className='w-full px-3 bg-slate-100 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200' />
          </div>
          <div className='space-y-2 relative'>
            <label htmlFor="" className='block text-sm font-medium text-gray-900'>
              Event type
            </label>
            <input type="text" value={selected} onClick={() => setIsOpen(!isOpen)} className='w-full px-3 bg-slate-100 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200' />
            {
              isOpen && (
                <ul className="absolute w-full top-full z-50 bg-white border border-blue-800 rounded shadow-md py-2">
                    {events.map((event) => (
                        <li key={event} className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer" onClick={() => handleSelect(event)} >
                            {event}
                        </li>
                    ))}
                </ul>
            )
            }
          </div>
          <div className='space-y-2'>
            <label htmlFor="" className='block text-sm font-medium text-gray-900'>
              Guest Count
            </label>
            <input type="number" placeholder='0' className='w-full px-3 bg-slate-100 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200' />
          </div>
          </div>
          <div className='mt-5 space-y-2'>
            <label htmlFor="" className='block text-sm font-medium text-gray-900'>Additional Details</label>
            <textarea name="" placeholder='Tell us more about your event...' className='w-full px-3 bg-slate-100 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none' rows={6} id=""></textarea>
          </div>
          <div className='flex justify-center mt-3'>
            <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95'>
              Send Inquiry
            </button>
          </div>
      </div>
        

      </form>      


    
           
      
    </section>
  )
}

export default ContactUs

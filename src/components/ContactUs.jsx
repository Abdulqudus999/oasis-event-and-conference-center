import React, { useState, useEffect } from 'react';
import { FaCalendarDay } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


const ContactUs = () => {
  const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState("Select  >");

    const events = ["Wedding Ceremony", "Graduation", "Naming Ceremony", "Meeting", "Summit"];

    const handleSelect = (event) => {
        setSelected(event);
        setIsOpen(false);
    };

  return (
    <section id='contact' className='mb-64 mt-14'>
      <div className='mb-12'>
        <h2  className='font-bold text-2xl md:text-4xl tracking-wider mb-2 text-center'>Contact Us & Book Your Event</h2>
        <p className='text-neutral-800 tracking-wider text-center'>Ready to plan your perfect event? Get in touch with us or book directly</p>
      </div>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-center gap-4 mb-10'>
            <button className='flex items-center gap-2 text-white bg-blue-800 hover:bg-blue-600 transition-colors font-semibold px-3 py-2 rounded-md'>
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
      
  <form className="flex flex-col items-center mt-20 py-10 max-w-7xl mx-auto bg-slate-200 rounded-br-lg rounded-tl-lg">
    <h2 class=" text-xl md:text-2xl font-semibold text-slate-950 pb-4">Request 
      Information
    </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 w-[500px] md:w-[700px]">
            <div className="w-full">
                <label className="text-black font-semibold block" for="name">Full Name*</label>
                <input className="bg-slate-100 h-12 p-2 mt-1 w-full max-w-sm border border-gray-500/30 rounded-xl outline-none focus:border-indigo-300" type="text" placeholder='Your full name' required />
            </div>
            <div className="w-full">
                <label className="block text-black font-semibold" for="name">Email*</label>
                <input className="bg-slate-100 h-12 p-2 mt-1 w-full max-w-sm border border-gray-500/30 rounded-xl outline-none focus:border-indigo-300" type="email" placeholder='Your.email@example.com' required />
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-[500px] md:w-[700px]">
            <div className="w-full">
                <label className="text-black font-semibold block" for="name">Phone Number</label>
                <input className="h-12 p-2 mt-1 w-full max-w-sm border border-gray-500/30 bg-slate-100 rounded-xl outline-none focus:border-indigo-300" type="tel" placeholder='08148047998' required />
            </div>
            <div className="w-full">
                <label className="text-black font-semibold block" for="name">Event Date</label>
                <input className="h-12 p-2 mt-1 w-full max-w-sm border border-gray-500/30 bg-slate-100 rounded-xl outline-none focus:border-indigo-300" type="date" placeholder='' required />
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-[500px] md:w-[700px]">
            <div className="w-full relative">
                <label className="text-black font-semibold block" for="name">Event Type</label>
                <input className="h-12 p-2 mt-1 w-full max-w-sm border border-gray-500/30 bg-slate-100 rounded-xl outline-none focus:border-indigo-300" type="text" value={selected} onClick={() => setIsOpen(!isOpen)} required
       
                />
                {isOpen && (
                <ul className="absolute z-50 w-full top-full bg-white border border-blue-800 rounded shadow-md mt-1 py-2">
                    {events.map((event) => (
                        <li key={event} className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer" onClick={() => handleSelect(event)} >
                            {event}
                        </li>
                    ))}
                </ul>
            )}
            </div>
            <div className="w-full">
                <label className="text-black font-semibold block" for="name">Guest Count</label>
                <input className="h-12 p-2 mt-1 w-full max-w-sm border border-gray-500/30 bg-gray-100 rounded-xl outline-none focus:border-indigo-300" type="number" required />
            </div>
        </div>
    
        <div className="mt-6 w-[500px] md:w-[700px]">
            <label className="text-black font-semibold block" for="name">Additional Details</label>
            <textarea  className="w-full max-w-sm row mt-2 p-2 h-40 border border-gray-500/30 bg-slate-100 rounded-xl resize-none outline-none focus:border-indigo-300" placeholder='Tell us more about your event...' rows={20} required></textarea>
        </div>

    <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-[500px] md:w-[700px] px-4 rounded active:scale-95 transition">Send 
      inquiry
    </button>
</form>
      
    </section>
  )
}

export default ContactUs

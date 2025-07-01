import React, { useState } from 'react'
import {HiX, HiMenu} from 'react-icons/hi'
import { FaCalendarDay } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { LuTreePalm } from "react-icons/lu";
import { TreePalm } from 'lucide-react';
import palmlogo1 from '../assets/palm-tree1.png'
import palmlogo2 from '../assets/palm-tree2.png'




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <nav class="h-[70px] fixed w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        
    <a href="#" className='flex items-center justify-center'>
      <img src={palmlogo1} alt="" className='w-10' />
      <div>
        <span className='text-3xl bg-gradient-to-r from-blue-950 to-blue-300 block bg-clip-text bg-transparent font-bold tracking-wider'>Oasis</span>
        <span className='block text-sm text-blue-700 tracking-tight -mt-2 font-bold'>Event Center</span>
      </div>
      <img src={palmlogo2} alt=""  className='w-10 -ml-1'/>
    </a>

    <ul class="md:flex hidden items-center gap-10">
        <li><a class="hover:text-blue-500/80 transition" href="#home">Home</a></li>
        <li><a class="hover:text-blue-500/80 transition" href="#about">About</a></li>
        <li><a class="hover:text-blue-500/80 transition" href="#gallery">Gallery</a></li>
        <li><a class="hover:text-blue-500/80 transition" href="#services">Services</a></li>
        <li><a class="hover:text-blue-500/80 transition" href="#contact">Pricing</a></li>
        <li><a class="hover:text-blue-500/80 transition" href="#gallery">Venues</a></li>
        <li><a class="hover:text-blue-500/80 transition" href="#contact">Contact</a></li>
    </ul>

    <button type="button" className="bg-blue-800 text-white md:flex md:justify-between md:gap-2 md:items-center hidden text-lg hover:bg-blue-700 active:scale-95 transition-all py-3 px-4 rounded-md">
      <FaCalendarDay />
        Book Now
    </button>

      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
         className='md:hidden p-2'>
            {
              isMenuOpen ? <HiX className='size-8'/> : <HiMenu className='size-8'/>
            }
          </button>

          {
            isMenuOpen && (
              <div className='md:hidden bg-blue-800 text-neutral-200 border-t border-gray-100 py-4 w-full fixed top-[70px] right-0 z-20  p-12 flex flex-col gap-5 justify-center items-center'>
                <ul className='container mx-auto px-4 space-y-3'>
                  <li><a 
                  onClick={() => {setIsMenuOpen(false)}} class="hover:text-blue-500/80 transition block text-sm font-medium py-2 text-center" href="#">Home</a></li>
                  <li><a 
                  onClick={() => {setIsMenuOpen(false)}} class="hover:text-blue-500/80 transition block text-sm font-medium py-2 text-center" href="#">About</a></li>
                  <li><a 
                  onClick={() => {setIsMenuOpen(false)}} class="hover:text-blue-500/80 transition block text-sm font-medium py-2 text-center" href="#">Gallery</a></li>
                  <li><a 
                  onClick={() => {setIsMenuOpen(false)}} class="hover:text-blue-500/80 transition block text-sm font-medium py-2 text-center" href="#">Services</a></li>
                  <li><a 
                  onClick={() => {setIsMenuOpen(false)}} class="hover:text-blue-500/80 transition block text-sm font-medium py-2 text-center" href="#">Pricing</a></li>
                  <li><a 
                  onClick={() => {setIsMenuOpen(false)}} class="hover:text-blue-500/80 transition block text-sm font-medium py-2 text-center" href="#">Venues</a></li>
                  <li><a 
                  onClick={() => {setIsMenuOpen(false)}} class="hover:text-blue-500/80 transition block text-sm font-medium py-2 text-center" href="#">Contact</a></li>
              </ul>
                <button 
                onClick={() => {setIsMenuOpen(false)}} type="button" className="bg-blue-400 text-white flex justify-between gap-2 items-center text-lg hover:bg-blue-700 active:scale-95 transition-all py-2 px-3 rounded-md">
                 <FaCalendarDay />
                 Book Now
                </button>
              </div>
            )
          }
            
              
          
</nav>
  )
}

export default Navbar

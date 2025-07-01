import React from 'react'
import facebookIcon from '../assets/facebook.png'
import instagramIcon from '../assets/instagram.png'
import twitterIcon from '../assets/twitter.png'
import { FaPhone } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5"; 

const FooterSection = () => {
  return (
<footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300 bg-blue-800">
    <div className="flex justify-around w-full gap-10 border-b border-gray-500 pb-10">
        <div className='flex flex-col items-center'>
            <h2 className='text-white text-lg md:text-xl font-bold mb-5'>Follow Us</h2>
            <div className="flex flex-col gap-6">
                <a href="#">
                    <img className="h-10" src={facebookIcon} alt="facebook" />
                </a>
                <a href="#">
                    <img src={instagramIcon} alt="instagram" className="h-10" />
                </a>
                <a href="#">
                    <img src={twitterIcon} alt="twitter" className="h-10" />
                </a>
            </div>
        </div>
        <div className="hidden md:flex">
            <div className='flex flex-col items-center'>
                <h2 className="font-bold text-white text-lg md:text-xl mb-5">Quick links</h2>
                <ul className="text-sm space-y-2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Our Gallery</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>
            
        </div>
        <div>
            <div className='flex flex-col items-center'>
                <h2 className="font-bold text-white text-lg md:text-xl mb-5">Get in touch</h2>
                <div className="">
                    <div className='flex gap-1'>
                        <FaPhone className='font-bold' />
                        <p>Phone</p>
                    </div>
                    <a href="#">09162646605</a>
                </div>
                <div className="">
                    <div className='flex gap-1'>
                        <IoMailOutline className='font-bold' />
                        <p>Email</p>
                    </div>
                    
                    <a href="#" mailto='oasiseventhallagmail.com'>Oasis</a>
                </div>
                
            </div>
            
        </div>
    </div>
    <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © Oasis Event and Conference center. All Right Reserved.
    </p>
    </footer>
  )
}

export default FooterSection

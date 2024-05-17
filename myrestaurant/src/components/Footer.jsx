import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'


function Footer() {
  return (
    <>
    <div className="text-white mt-20 ">
     <div data-aos="fade-down" className='container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl'>

     
        <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
           <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <IoLocationSharp className='text-5xl '/>
            </div>
            <div>
            <p>
              #92 , 3rd   Main ,Virgo Nagar ,Post, 
              <br /> Seegahaali,Bengaluru ,Karnataka 
              560049
            </p>
            </div>
            
           </div>

           <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <MdEmail className='text-5xl '/>
            </div>
            <div>
            <p>
             sawarn.sandarbh2309@gmail.com</p>
             <p>hr@goodfood.com</p>
            </div>
           </div>

           <div className='text-center space-y-4'>
            <div className='flex justify-center'>
              <FaPhone className='text-5xl '/>
            </div>
            
           <div>
           <p>8340303906 - Sales and Service</p>
             <p>8434631550 - Hiring Queries </p>
             <p>9308408697 - Whatsapp</p>
           </div>
           
           </div>
        </div>
        

        <div className='flex justify-between p-4 items-center' >
          <p> © 2024 MyFood. All rights reserved </p>
          <div className='flex items-center gap-6 '>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default Footer
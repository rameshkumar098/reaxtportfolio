import React from 'react'
import me from "../../src/assets/rk.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";



function Home() {
  return (
    <>
     <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
     <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 orer-2 md:order-1'>
      <span className='text-x1'>Welcome In My Feed</span>
      <div className='flex space-x-1 text-2xl md:text-4x;'>
        <h1>hello, I'am a</h1>
      <span className='text-red-700 font-bold'>Developer</span>
      </div>
      <br />
      <p className='text-sm md:text-md text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellat excepturi beatae fugit minus, voluptates ullam accusamus quos nihil at, sed, necessitatibus voluptatem ab veniam.</p>
      <br />
      {/* social media icon  */}
      <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
      <div className='space-y-1'>
        <h1 className='font-bold '>Available on</h1>
       <ul className='flex space-x-5'>
        <li>
          <a href="https://www.facebook.com/" target='_blank'>
          <FaFacebook className='text-2xl cursor-pointer' />
          </a>
          </li>
       <li>
        <a href="https://in.linkedin.com/" target='_blank'>
         <FaLinkedin className='text-2xl cursor-pointer' />
         </a>
         </li> 
        <li>
          <a href="https://in.youtube.com" target='_blank'>
          <FaYoutube  className='text-2xl cursor-pointer' />
          </a>
          </li>
       <li>
        <a href="https://in.telegram.com" target='_blank'>
         <FaTelegram className='text-2xl cursor-pointer' />
         </a>
         </li>
       </ul>
       </div>
       <div className='space-y-2 '>
       <h1 className='font-bold'>Currently Working On</h1>
       <div className='flex space-x-5'>
       <DiMongodb className='text-xl md: text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <SiExpress className='text-xl md: text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <FaReact className='text-xl md: text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       <FaNodeJs className='text-xl md: text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
       </div>
       </div>
      </div>
      </div>
      <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
      <img src={me} className='rounded-full md:w-[450px] h-[450px]' alt="me" />
      </div>
      </div> 
      </div>
      <hr />
    </>
  )
}

export default Home

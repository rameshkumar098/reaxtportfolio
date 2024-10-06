
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-scroll"



function navbar() {
    const [menu,setMenu]=useState(false)
    const navItems=[
        {
        id:1,
        text:"Home"
        },
        {
        id:2,
        text:"About"
        },
        {
        id:3,
        text:"Portfolio"
        },
        {
        id:4,
        text:"Experiance"
        },
        {
        id:5,
        text:"Contact"
        }
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-black text-white cursor-pointer	'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src="https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/427496291_932919818382791_4538550743961635624_n.jpg?ccb=11-4&oh=01_Q5AaIECYkOpUdXU9XWgnhDKGFvDcIWZV87fxbG3fQERAOPgd&oe=6687AFAD&_nc_sid=e6ed6c&_nc_cat=110" className='h-14 w-15 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Rames<span className='text-red-500 text-2xl'>h</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>

            {/* desktop navbar  */}

            <div>
                <ul className='hidden md:flex space-x-6'>
                  {
                    navItems.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-200 cursor-pointe' key={id}>
                     <Link to={text}
                     smooth={true}
                     duration={500}
                     offset={-70}
                     activeClass='active'
                     >{text}</Link>     
                          </li>
                    ))
                  }
                </ul>
              <div onClick={() => setMenu(!menu)} className='md:hidden'>  
                { menu ? <IoMdClose size={24}/> :<IoMenu size={24}/>
              } </div>
            </div>
        </div>

    {/* mobile navbar  */}
    {
        menu && (

            <div className='bg-white text-black cursor-pointer'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center cursor-pointer space-y-4 text-xl'>
            {
                    navItems.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                            <Link
                            onClick={() => setMenu(!menu)}
                             to={text}
                     smooth={true}
                     duration={500}
                     offset={-70}
                     activeClass='active'
                     >{text}</Link> 
                        </li>
                    ))
                  }
       </ul>
   </div>
        )
    }

       
      
    </div>
  )
}

export default navbar

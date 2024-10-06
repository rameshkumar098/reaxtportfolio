import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.png"
import js from "../../public/js.png"
import react from "../../public/react.jpg"
import nodejs from "../../public/nodejs.png"

function Experience() {
    const cardItem =[
        
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:js,
            // name:"JS"
        },
        {
            id:4,
            logo:react,
            name:"React"
        },
        {
            id:5,
            logo:nodejs,
            name:"Nodejs"
        },
    ]
  return (
    <div name="Experiance" max-w-screen-2xl container mx-auto px-4 md:px-20 my-16>
    <h1 className='text-2xl font-bold mb-5 my-10 text-center'>Experience</h1>
    <p className='  ml-4'>I've more than 2 year of experience in below technologies</p>
    <div className='grid grid-cols-2 md:grid-cols-5 gap-3 my-3 ml-3'>
        {cardItem.map(({id,logo,name}) =>(
               <div className='flex flex-col items-center justify-center border-[2px] md:w-[200px] md:h-[200px] rounded-lg shadow-md p-1 cursor-pointer hover:scale-110 duretion-300' key={id}>
                <img src={logo} className='w-[150px]  rounded-full  m-auto' alt="" />
                <div>
                <div className=''>{name}</div>
                
               </div>
               </div>
            ))
        }
    </div>
    </div>
  )
}

export default Experience;

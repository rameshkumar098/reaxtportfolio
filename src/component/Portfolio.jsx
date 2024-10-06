import React from 'react'
import express from "../../public/ex.png"
import mongodb from "../../public/mongodb.png"
import nodejs from "../../public/nodejs.png"
import react from "../../public/react.jpg"

function Portfolio() {
    const cardItem =[
        
        {
            id:1,
            logo:express,
            name:"Express"
        },
        {
            id:2,
            logo:mongodb,
            name:"MongoDB"
        },
        {
            id:3,
            logo:nodejs,
            name:"Nodejs"
        },
        {
            id:4,
            logo:react,
            name:"React"
        },
    ]
  return (
    <div name="Portfolio" max-w-screen-2xl container mx-auto px-4 md:px-20 my-16>
    <h1 className='text-2xl font-bold mb-5 text-center'>Portfolio</h1>
    <span className='underline font-semibold ml-4'>Featured Project</span>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5 ml-4'>
        {cardItem.map(({id,logo,name}) =>(
               <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duretion-300' key={id}>
                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px] m-auto' alt="" />
                <div>
                <div className=' px-2 font-bold text-xl mb-2'>{name}</div>
                <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               </div> 
               <div className='px-2 py-4 space-x-3 justify-around'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
               </div>
               </div>
            ))
        }
    </div>
    </div>
  )
}

export default Portfolio

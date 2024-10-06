import React from 'react'
import { useForm } from "react-hook-form"


function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
     <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Contact</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5 '>
            <form  onSubmit={handleSubmit(onSubmit)} action="https://getform.io/f/paoxxldb" method='POST' className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-799'>Full Name</label>
                    <input 
                     {...register("name", { required: true })}
                     className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='name' type="text" placeholder='Enter your fullname' />
                     {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-799'>Email Address</label>
                    <input 
                    {...register("email", { required: true })} className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='email' type="text" placeholder='Enter your email address' />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-799'>Massage</label>
                    <input {...register("massage", { required: true })} className='shadow rounded-lg appearance-none border rounded py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='massage' name='massage' type="text" placeholder='Enter your Query' />
                    {errors.massage && <span>This field is required</span>}
                </div>
                <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duretion-300'>Send</button>
            </form>
        </div>
        </div> 
    </>
  )
}

export default Contact

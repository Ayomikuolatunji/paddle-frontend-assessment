import React from 'react'


const Waitlist = () => {
  return (
    <div className='flex text-center w-2/4 m-auto justify-center items-center flex-col'>
        <div className="details-input sm:w-4/5  mt-10 flex flex-col lg:flex-row  justify-between">

        <input className='text-[#707070] p-4 wait-input outline-none border-t-0 border-r-0 border-l-0 bg-transparent border-b-2'  placeholder='First Name..' />

        <input className='text-[#707070] p-4 wait-input outline-none border-t-0 border-r-0 border-l-0 border-b-2 bg-transparent'  placeholder='Last Name...' />

        </div>

        <div className='email-input mt-8 lg:relative flex-col lg:flex-row flex'>
            <input className='p-4 md:w-[30rem] lg:w-[45rem] rounded-full outline-none' placeholder='Enter your email address' type="text" />
            <button className='uppercase m-4 lg:m-0 lg:w-[20rem] text-white  lg:-right-20 rounded-full text-center p-2 md:pr-4 md:py-4 bg-blue-700 font-[16px] lg:absolute'>Join our waiting list</button>
        </div>
    </div>
  )
}

export default Waitlist
import React from 'react'

const Hero = () => {
  return (
    <div className='sm:h-[691px] h-[591px] hero w-full flex relative'>
    {/* layout */}
     <div className="lefts w-[50%] h-[inherent] flex items-center justify-center relative">
         
       <div className='bg-pink-400 h-[330px] w-[260px] rounded-md shadow-2xl sm:opacity-[1] z-20 opacity-0 absolute top-[20%] right-[12%]'>
       </div>

       <div className="bg-gradient-to-r from-[#213F72] z-10 to-[#19073B]  w-full h-[inherent] absolute top-0 left-0 right-0 bottom-0 backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-16">
       </div>

     </div>

     
     {/* right bar */}
     <div className="right w-[50%] bg-[#1F0042] h-[inherent]">
     </div>

      <div className="readmore flex absolute top-[30%] left-[15%] sm:left-[32%] items-center">
        <span className='bg-[#FFFFFF] h-[2px] w-[87px] block'></span>
        <p className='text-[#FFFFFF] ml-3 cursor-pointer uppercase'>About us</p>
      </div>

      <div className="content absolute top-[35%] sm:left-[37%] left-[0] sm:px-0 px-1">
          <h1 className='text-[#FFFFFF] text-[54px] sm:w-[408px]'>Built for Saas and E-commerce</h1>
      </div>

      {/* circle */}
      <div className="circle  sm:h-[246px] w-[123px] h-[123px] sm:w-[246px] absolute sm:top-[20%] top-[10%] right-0 rounded-full bg-gradient-to-b from-[#213F72] to-[#1D0040] ">      
      </div>

      <div className="content absolute  text-justify bottom-0 right-[30px] w-[370px] sm:text-[25px] text-[22px]">
           <h1 className='text-[#FFFFFF]'>Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.</h1>
       </div>
  </div>
  )
}

export default Hero
import React from 'react'

const Hero:React.FC=()=>{


  // hero page after the header


  return (
    <div className='h-[390px] hero w-full flex mb-24 mt-12'>
      {/* layout */}
      {/* left side */}
       <div className="lefts w-[30%] h-[inherent] flex items-center justify-center transparent">
           <div className='bg-[#19073B] h-[230px] w-[100px] rounded-md shadow-2xl opacity-[0.2] block ml-12 -z-10'>
           </div>
       </div>

       {/* right side */}
       <div className="right w-[70%] bg-gradient-to-b from-[#210045]  to-[#0C0123] h-[inherent]">
       </div>
       <div className="readmore flex absolute top-[30%] left-[15%] items-center">
          <span className='bg-[#FFFFFF] h-[2px] w-[87px] block'></span>
          <p className='text-[#FFFFFF] ml-3 cursor-pointer'>Blog</p>
        </div>
        <div className="content absolute top-[35%] sm:left-[20%] left-[0] sm:px-0 px-1">
            <h1 className='text-[#FFFFFF] text-[54px]'>Articles and News</h1>
        </div>
    </div>
  )
}

export default Hero
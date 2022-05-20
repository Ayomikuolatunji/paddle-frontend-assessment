import React from 'react'

const Hero:React.FC=()=>{
  return (
    <div className='h-[390px] hero width-full flex mb-24 mt-12'>
       <div className="lefts w-[30%] h-[inherent] flex items-center justify-center transparent">
           <div className='bg-[#19073B] h-[230px] w-[100px] rounded-md shadow-2xl opacity-[0.2] block ml-12 -z-10'>
           </div>
       </div>
       <div className="right w-[70%] bg-gradient-to-b from-[#210045]  to-[#0C0123] h-[inherent]">
          
       </div>
    </div>
  )
}

export default Hero